'use client';

import ProtectedRoute from "@/src/components/ProtectedRoute";
import { IconChevronLeft, IconChevronRight, IconCheck, IconSchool, IconLayoutDashboard, IconFile, IconCalendarDue, IconMessage, IconUserFilled } from "@tabler/icons-react";
import { Button, Text, XStack, YStack, Dialog, Adapt, Sheet, ScrollView, Separator, Spinner } from "tamagui";
import { useAuth } from "@/src/services/auth";
import { useLazyLoadQuery, useMutation } from "react-relay";
import { STUDENT_DASHBOARD_QUERY } from '@/src/relay/queries/StudentDashboardQuery'
import { UPDATE_FILIERE_MUTATION } from '@/src/relay/mutations/StudentDashboardUpdateFiliereMutation'
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function StudentLayout({ children }: { children: React.ReactNode }) {
    const { user, logout } = useAuth();
    const router = useRouter();
    const pathname = usePathname();
    
    // Relay Hooks
    const data = useLazyLoadQuery<any>(STUDENT_DASHBOARD_QUERY, {});
    const [commitUpdate, isUpdating] = useMutation(UPDATE_FILIERE_MUTATION);

    // Configuration des menu items
    const menuItems = [
        { label: 'Tableau de bord', icon: <IconLayoutDashboard color="#003366" size={25}/>, route: '/students/dashboard' },
        { label: 'Mes documents', icon: <IconFile color="#003366" size={25}/>, route: '/students/uploaddoc' },
        // { label: 'Plannings', icon: <IconCalendarDue color="#003366" size={25}/>, route: '/students/plannings' },
        // { label: 'Messages', icon: <IconMessage color="#003366" size={25}/>, route: '/students/messages' },
    ];

    // State pour le Dialog et la sélection
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [step, setStep] = useState<'FACULTY' | 'DEPT' | 'FILIERE'>('FACULTY');
    
    const [selectedFaculty, setSelectedFaculty] = useState<any>(null);
    const [selectedDept, setSelectedDept] = useState<any>(null);
    const [selectedFiliere, setSelectedFiliere] = useState<any>(null);

    // Vérifier si l'étudiant a une filière au chargement
    useEffect(() => {
        const etudiantFiliere = data.me?.profilEtudiant?.filiere;
        if (!etudiantFiliere) {
            setIsDialogOpen(true);
        }
    }, [data.me]);

    // Gestion de la navigation dans la hiérarchie
    const handleSelectFaculty = (faculty: any) => {
        setSelectedFaculty(faculty);
        setStep('DEPT');
    };

    const handleSelectDept = (dept: any) => {
        setSelectedDept(dept);
        setStep('FILIERE');
    };

    const handleSelectFiliere = (filiere: any) => {
        setSelectedFiliere(filiere);
    };

    const handleBack = () => {
        if (step === 'FILIERE') {
            setStep('DEPT');
            setSelectedFiliere(null);
        } else if (step === 'DEPT') {
            setStep('FACULTY');
            setSelectedDept(null);
        }
    };

    const handleValidate = () => {
        if (!selectedFiliere) return;

        commitUpdate({
            variables: {
                filiereId: selectedFiliere.id
            },
            onCompleted: (response: any) => {
                if (response.updateProfile?.success) {
                    setIsDialogOpen(false);
                } else {
                    alert("Erreur lors de la mise à jour.");
                }
            },
            onError: (err) => {
                console.error(err);
                alert("Une erreur est survenue.");
            }
        });
    };

    return (
        <ProtectedRoute requiredRole="ETUDIANT">
            <XStack flex={1} h={'100vh'}>
                
                {/* Dialog de sélection de filière */}
                <Dialog
                    modal
                    open={isDialogOpen}
                    onOpenChange={(open) => {
                        // Empêcher la fermeture si pas de filière (sauf si on a réussi la mutation)
                        if (data.me?.profilEtudiant?.filiere) setIsDialogOpen(open);
                    }}
                >
                    <Adapt when="sm" platform="touch">
                        <Sheet animation="medium" zIndex={200000} modal dismissOnSnapToBottom>
                            <Sheet.Frame padding="$4" gap="$5">
                                <Adapt.Contents />
                            </Sheet.Frame>
                            <Sheet.Overlay animation="lazy" enterStyle={{ opacity: 0 }} exitStyle={{ opacity: 0 }} />
                        </Sheet>
                    </Adapt>

                    <Dialog.Portal>
                        <Dialog.Overlay
                            key="overlay"
                            animation="quick"
                            opacity={0.5}
                            enterStyle={{ opacity: 0 }}
                            exitStyle={{ opacity: 0 }}
                        />

                        <Dialog.Content
                            bordered
                            elevate
                            key="content"
                            animateOnly={['transform', 'opacity']}
                            animation={[
                                'quick',
                                {
                                    opacity: {
                                        overshootClamping: true,
                                    },
                                },
                            ]}
                            enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
                            exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
                            gap="$4"
                            width={500}
                            maxWidth={'95%'}
                        >
                            <Dialog.Title fontSize={22} fontWeight={'700'} color={'$primary'}>
                                Complétez votre profil académique
                            </Dialog.Title>
                            <Dialog.Description fontSize={14} color={'gray'}>
                                {data.premiereUniversite?.nom}
                            </Dialog.Description>

                            <Separator />

                            <YStack height={300}>
                                <ScrollView showsVerticalScrollIndicator={false}>
                                    <YStack gap="$3">
                                        {/* Étape 1: Facultés */}
                                        {step === 'FACULTY' && (
                                            <>
                                                <Text fontWeight={'600'} fontSize={16} mb="$2">Choisissez votre Faculté / École :</Text>
                                                {data.premiereUniversite?.enfants?.map((fac: any) => (
                                                    <Button 
                                                        key={fac.id} 
                                                        onPress={() => handleSelectFaculty(fac)}
                                                        justifyContent="space-between"
                                                        iconAfter={<IconChevronRight size={18} />}
                                                    >
                                                        {fac.nom}
                                                    </Button>
                                                ))}
                                            </>
                                        )}

                                        {/* Étape 2: Départements */}
                                        {step === 'DEPT' && (
                                            <>
                                                <XStack alignItems="center" gap="$2" mb="$2">
                                                    <Button size="$2" circular icon={<IconChevronLeft size={16}/>} onPress={handleBack} chromeless />
                                                    <Text fontWeight={'600'} fontSize={16}>{selectedFaculty?.nom}</Text>
                                                </XStack>
                                                <Text fontSize={14} color="gray" mb="$2">Sélectionnez votre département :</Text>
                                                {selectedFaculty?.enfants?.map((dept: any) => (
                                                    <Button 
                                                        key={dept.id} 
                                                        onPress={() => handleSelectDept(dept)}
                                                        justifyContent="space-between"
                                                        iconAfter={<IconChevronRight size={18} />}
                                                    >
                                                        {dept.nom}
                                                    </Button>
                                                ))}
                                            </>
                                        )}

                                        {/* Étape 3: Filières */}
                                        {step === 'FILIERE' && (
                                            <>
                                                <XStack alignItems="center" gap="$2" mb="$2">
                                                    <Button size="$2" circular icon={<IconChevronLeft size={16}/>} onPress={handleBack} chromeless />
                                                    <Text fontWeight={'600'} fontSize={16}>{selectedDept?.nom}</Text>
                                                </XStack>
                                                <Text fontSize={14} color="gray" mb="$2">Sélectionnez votre filière :</Text>
                                                {selectedDept?.enfants?.map((filiere: any) => (
                                                    <Button 
                                                        key={filiere.id} 
                                                        onPress={() => handleSelectFiliere(filiere)}
                                                        justifyContent="space-between"
                                                        bg={selectedFiliere?.id === filiere.id ? '$blue4' : '$background'}
                                                        borderColor={selectedFiliere?.id === filiere.id ? '$primary' : 'transparent'}
                                                        borderWidth={1}
                                                        iconAfter={selectedFiliere?.id === filiere.id ? <IconCheck size={18} color="#003366" /> : null}
                                                    >
                                                        {filiere.nom}
                                                    </Button>
                                                ))}
                                            </>
                                        )}
                                    </YStack>
                                </ScrollView>
                            </YStack>

                            <XStack justifyContent="flex-end" gap="$3" mt="$4">
                                {step === 'FILIERE' && (
                                    <Button 
                                        theme="active" 
                                        bg="$primary" 
                                        color="white" 
                                        disabled={!selectedFiliere || isUpdating}
                                        opacity={!selectedFiliere ? 0.5 : 1}
                                        onPress={handleValidate}
                                        icon={isUpdating ? <Spinner color="white" /> : undefined}
                                    >
                                        {isUpdating ? 'Validation...' : 'Valider ma filière'}
                                    </Button>
                                )}
                            </XStack>
                        </Dialog.Content>
                    </Dialog.Portal>
                </Dialog>

                {/* Sidebar */}
                <YStack width={250} p={16}>
                    <XStack alignItems="center" gap={10} mb={32}>
                        <Button
                            size={80}
                            bg="#0e3cb3"
                            w={40}
                            h={40}
                            br={10}
                            icon={<IconSchool size={40} color="#ffffff" stroke={2}/>}
                            p={5}
                        />
                        <Text fontWeight={'$8'} fontSize={'$7'} color="#0e3cb3">UnivLomé</Text>
                    </XStack>
                    <YStack gap={10}>
                        {menuItems.map((item) => {
                            const isActive = pathname === item.route;
                            return (
                                <Button 
                                    key={item.route}
                                    jc="flex-start" 
                                    color={'#003366'} 
                                    fontSize={'$4'} 
                                    fontWeight={'$6'} 
                                    bg={isActive ? '#0033661a' : '#fff'} 
                                    icon={item.icon}
                                    onPress={() => router.push(item.route)}
                                >
                                    {item.label}
                                </Button>
                            );
                        })}
                    </YStack>
                    <YStack marginTop="auto" gap={10} pt={10}>
                        <XStack alignItems="center">
                            <IconUserFilled size={50} color="#808080"/>
                            <YStack>
                                <Text fontWeight={'$6'}>{user?.firstName} {user?.lastName}</Text>
                                <Text fontWeight={'$5'} color={'gray'} fontSize={14}>Etudiant en {data.me?.profilEtudiant?.filiere?.nom}</Text>
                            </YStack>
                        </XStack>
                        <Button fontWeight={'$7'} color={'#808080'} onPress={logout}>
                            Déconnexion
                        </Button>
                    </YStack>
                </YStack>

                {/* Content Area */}
                {children}
            </XStack>
        </ProtectedRoute>
    );
}
