'use client';

import { IconFileUpload, IconCalendarDue, IconHourglassLow, IconInfoCircleFilled, IconFilePencil, IconPhone, IconCircleCheckFilled, IconCircleDotFilled, IconCircle, IconAlertCircle, IconClock,  IconXCircle ,IconX } from "@tabler/icons-react";
import { Button, Paragraph, Stack, Text, XStack, YStack, Progress, AlertDialog, ScrollView } from "tamagui";
import { useState } from "react";
import { useLazyLoadQuery } from "react-relay";
import SubmitTravailDialog from "@/src/components/SubmitTravailDialog";
import { STUDENT_DASHBOARD_QUERY } from "@/src/relay/queries/StudentDashboardQuery";
import { formatDate, formatTime, getProgressColor, statusColor, statusBgColor } from "@/src/utils/formatters";

export default function StudentDashboardPage() {
    const [isSubmitDialogOpen, setIsSubmitDialogOpen] = useState(false);

    // Récupérer les vraies données
    let travailActuel: any = null;
    let error: string | null = null;

    try {
        const data = useLazyLoadQuery<any>(STUDENT_DASHBOARD_QUERY, {});
        travailActuel = data.mesTravaux?.[0] || null;
    } catch (err: any) {
        error = err.message;
    }

    // Si pas de travail soumis, afficher un état vide
    if (!travailActuel && !error) {
        return (
            <>
                <Stack flex={1} p={32} bg={'#F4F7FA'}>
                    <XStack justifyContent="space-between" alignItems="center">
                        <YStack>
                            <Text fontSize={36} fontWeight={'$7'} color={'$primary'}>Mon Tableau de Bord</Text>
                            <Text fontWeight={'$5'}>Aucun travail soumis pour le moment.</Text>
                        </YStack>
                        <Button 
                            icon={<IconFileUpload size={20} stroke={3}/>} 
                            bg={'$primary'} 
                            fontWeight={'$6'} 
                            color={'#ffffff'}
                            onPress={() => setIsSubmitDialogOpen(true)}
                        >
                            Déposer mon mémoire
                        </Button>
                    </XStack>

                    <YStack flex={1} justifyContent="center" alignItems="center" gap={20}>
                        <IconFileUpload size={80} color="#ccc" stroke={1.5} />
                        <YStack alignItems="center" gap={10}>
                            <Text fontSize={24} fontWeight={'$7'} color={'$primary'}>Commencez votre parcours</Text>
                            <Text fontSize={14} color="gray" textAlign="center" maxWidth={400}>
                                Soumettez votre premier mémoire ou travail académique pour commencer à suivre votre progression.
                            </Text>
                        </YStack>
                        <Button 
                            icon={<IconFileUpload size={20} stroke={3}/>} 
                            bg={'$primary'} 
                            fontWeight={'$6'} 
                            color={'#ffffff'}
                            size={'$5'}
                            onPress={() => setIsSubmitDialogOpen(true)}
                        >
                            Soumettre un travail
                        </Button>
                    </YStack>
                </Stack>

                <SubmitTravailDialog 
                    isOpen={isSubmitDialogOpen}
                    onOpenChange={setIsSubmitDialogOpen}
                    onSuccess={() => {
                        alert('Travail soumis avec succès!');
                    }}
                />
            </>
        );
    }
    return (
        <>
            <Stack flex={1} p={32} bg={'#F4F7FA'}>
                <ScrollView showsVerticalScrollIndicator={false}>
                <XStack justifyContent="space-between" alignItems="center">
                    <YStack>
                        <Text fontSize={36} fontWeight={'$7'} color={'$primary'}>Mon Tableau de Bord</Text>
                        <Text fontWeight={'$5'}>Titre: {travailActuel?.titre || 'N/A'}</Text>
                    </YStack>
                    
                    <XStack gap={10}>
                        <Button 
                            icon={<IconFileUpload size={20} stroke={3}/>} 
                            bg={'$primary'} 
                            fontWeight={'$6'} 
                            color={'#ffffff'}
                            onPress={() => setIsSubmitDialogOpen(true)}
                        >
                            Déposer mon mémoire
                        </Button>
                        <Button bg={'#ffffff'} icon={<IconCalendarDue size={20} stroke={3} color='#003366' />} color={'$primary'} fontWeight={'$6'}>Consulter le planning</Button>
                    </XStack>
                </XStack>

                <XStack mt={32} gap={20}>
                    <YStack flex={1} gap={30}>
                        {/* Afficher alerte si rejeté */}
                        {travailActuel?.statut === 'REJETE' && travailActuel?.motifRejet && (
                            <YStack bg="#dc35451a" p={16} br={8} gap={8} borderColor="#dc3545" borderWidth={1}>
                                <XStack alignItems="center" gap={8}>
                                    <IconAlertCircle size={24} color="#dc3545" />
                                    <Text fontWeight={'600'} color="#dc3545" fontSize={14}>
                                        Travail rejeté
                                    </Text>
                                </XStack>
                                <Text color="#dc3545" fontSize={12}>
                                    {travailActuel.motifRejet}
                                </Text>
                            </YStack>
                        )}

                        {/* Statut Actuel - DYNAMIQUE */}
                        <YStack gap={10}>
                            <Text fontSize={22} fontWeight={'$7'} color={'$primary'}>Statut Actuel</Text>  
                            <XStack bg={'#ffffff'} p={20} br={10} alignItems="center" gap={20}>
                                <Button
                                    circular
                                    size={100}
                                    bg={statusBgColor(travailActuel?.statut)}
                                    icon={getStatusIcon(travailActuel?.statut)}
                                />
                                <YStack gap={10}>
                                    <Text fontWeight={'$7'} fontSize={18} color={statusColor(travailActuel?.statut)}>
                                        {travailActuel?.statutDisplay || 'Statut inconnu'}
                                    </Text>
                                    <Paragraph maxWidth={500} fontWeight={'$5'} color={'gray'}>
                                        {travailActuel?.progression?.message || 'Aucune information disponible'}
                                    </Paragraph>
                                </YStack>
                            </XStack>
                        </YStack>

                        {/* Soutenance - DYNAMIQUE */}
                        <YStack gap={10}>
                            <Text fontSize={22} fontWeight={'$7'} color={'$primary'}>Informations sur votre soutenance</Text> 
                            {travailActuel?.soutenance ? (
                                <XStack bg={'#ffffff'} p={20} br={10} alignItems="flex-start" gap={20}>
                                    <YStack gap={12} flex={1}>
                                        <XStack alignItems="center" gap={8}>
                                            <IconCalendarDue color='#003366' size={20}/>
                                            <Text fontWeight={'$7'} fontSize={16}>{formatDate(travailActuel.soutenance.dateSoutenance)}</Text>
                                        </XStack>
                                        <XStack alignItems="center" gap={8}>
                                            <IconHourglassLow color='#003366' size={20}/>
                                            <Text fontWeight={'$7'} fontSize={16}>{formatTime(travailActuel.soutenance.heureDebut)}</Text>
                                        </XStack>
                                        <XStack alignItems="center" gap={8}>
                                            <IconInfoCircleFilled color='#003366' size={20}/>
                                            <Text fontWeight={'$7'} fontSize={16}>{travailActuel.soutenance.salle}</Text>
                                        </XStack>
                                        <XStack alignItems="center" gap={8}>
                                            <IconInfoCircleFilled color='#003366' size={20}/>
                                            <Text fontWeight={'$7'} fontSize={16}>{travailActuel.soutenance.modeDisplay}</Text>
                                        </XStack>
                                        {travailActuel.soutenance.jurys && travailActuel.soutenance.jurys.length > 0 && (
                                            <YStack mt={10} gap={6}>
                                                <Text fontWeight={'$6'} fontSize={14} color="#666">Jury:</Text>
                                                {travailActuel.soutenance.jurys.map((jury: any, idx: number) => (
                                                    <Text key={idx} fontWeight={'$5'} fontSize={13} color="gray">
                                                        • {jury.enseignantNom} ({jury.roleDisplay})
                                                    </Text>
                                                ))}
                                            </YStack>
                                        )}
                                    </YStack>
                                </XStack>
                            ) : (
                                <XStack bg={'#ffffff'} p={20} br={10} alignItems="center" gap={20}>
                                    <IconInfoCircleFilled color='#808080'/>
                                    <Paragraph maxWidth={500} fontWeight={'$5'} color={'gray'}>
                                        Aucune date de soutenance n&apos;a été fixée pour le moment.
                                    </Paragraph>
                                </XStack>
                            )}
                        </YStack>

                        {/* Actions Rapides */}
                        <YStack gap={10}>
                            <Text fontSize={22} fontWeight={'$7'} color={'$primary'}>Actions Rapides</Text> 
                            <XStack gap={20}>
                                {(travailActuel?.statut === 'REJETE' || travailActuel?.statut === 'ACCEPTE') && (
                                    <XStack 
                                        bg={'#fff'} 
                                        gap={20} 
                                        p={20} 
                                        flex={0.5} 
                                        borderRadius={20} 
                                        alignItems="center"
                                        opacity={travailActuel?.statut === 'ACCEPTE' ? 0.5 : 1}
                                    >
                                        <Button
                                            width={60}
                                            height={70}
                                            borderRadius={'30%'}
                                            bg={'#F4F7FA'}
                                            color={'$primary'}
                                            size={50}
                                            icon={<IconFilePencil color={'#003366'} size={50}/>}
                                        />
                                        <YStack>
                                            <Text fontWeight={'$7'}>Mettre à jour le mémoire</Text>
                                            <Text fontSize={12} color={'gray'} fontWeight={'$6'}>Soumettre une nouvelle version</Text>
                                        </YStack>
                                    </XStack>
                                )}

                                <XStack bg={'#fff'} gap={20} p={20} flex={0.5} borderRadius={20} alignItems="center">
                                    <Button
                                        width={60}
                                        height={70}
                                        borderRadius={'30%'}
                                        bg={'#F4F7FA'}
                                        color={'$primary'}
                                        size={50}
                                        icon={<IconPhone color={'#003366'} size={50}/>}
                                    />
                                    <YStack>
                                        <Text fontWeight={'$7'}>Contacter mon directeur</Text>
                                        <Text fontSize={12} color={'gray'} fontWeight={'$6'}>Envoyer un message</Text>
                                    </YStack>
                                </XStack>
                            </XStack>
                        </YStack>
                    </YStack>

                    {/* Progression Timeline - DYNAMIQUE */}
                    <YStack width={350} gap={10}>
                        <Text fontSize={22} fontWeight={'$7'} color={'$primary'}>Progression</Text>
                        
                        {/* Progress Bar */}
                        <YStack bg={'#ffffff'} p={16} br={10} gap={10}>
                            <XStack justifyContent="space-between" alignItems="center">
                                <Text fontWeight={'$6'}>Avancement global</Text>
                                <Text fontWeight={'$7'} color={statusColor(travailActuel?.statut)}>
                                    {travailActuel?.progression?.pourcentage || 0}%
                                </Text>
                            </XStack>
                            <Progress
                                value={travailActuel?.progression?.pourcentage || 0}
                                height={8}
                                backgroundColor="$gray4"
                                borderRadius={4}
                            >
                                <Progress.Indicator 
                                    backgroundColor={getProgressColor(travailActuel?.progression?.pourcentage)}
                                />
                            </Progress>
                        </YStack>

                        {/* Timeline */}
                        <YStack width={350} bg={'#ffffff'} gap={20} br={10} p={10}>
                            {/* Étape 1: Sujet validé */}
                            <XStack p={10} gap={5} alignItems="center">
                                <IconCircleCheckFilled color="#28a745" size={30}/>
                                <YStack>
                                    <Text fontWeight={'$7'}>Travail enregistré</Text>
                                    <Text fontWeight={'$5'} fontSize={13} color={'gray'}>{formatDate(travailActuel?.dateSoumission)}</Text>
                                </YStack>
                            </XStack>

                            {/* Étape 2: En cours de relecture */}
                            <XStack p={10} gap={5} alignItems="center">
                                {travailActuel?.progression?.pourcentage >= 30 ? (
                                    <IconCircleCheckFilled color="#28a745" size={30}/>
                                ) : travailActuel?.progression?.pourcentage > 0 ? (
                                    <IconCircleDotFilled color="#FFB74D" size={30}/>
                                ) : (
                                    <IconCircle color="#808080" size={30}/>
                                )}
                                <YStack>
                                    <Text fontWeight={'$7'}>En cours de relecture</Text>
                                    <Text fontWeight={'$5'} fontSize={13} color={'gray'}>
                                        {travailActuel?.progression?.pourcentage > 0 ? 'En progression' : 'À venir'}
                                    </Text>
                                </YStack>
                            </XStack>

                            {/* Étape 3: Relecture complétée */}
                            <XStack p={10} gap={5} alignItems="center">
                                {travailActuel?.progression?.pourcentage >= 60 ? (
                                    <IconCircleCheckFilled color="#28a745" size={30}/>
                                ) : travailActuel?.progression?.pourcentage >= 30 ? (
                                    <IconCircleDotFilled color="#FFB74D" size={30}/>
                                ) : (
                                    <IconCircle color="#808080" size={30}/>
                                )}
                                <YStack>
                                    <Text fontWeight={'$7'}>Relecture complétée</Text>
                                    <Text fontWeight={'$5'} fontSize={13} color={'gray'}>
                                        {travailActuel?.progression?.pourcentage >= 60 ? 'Validé' : 'À venir'}
                                    </Text>
                                </YStack>
                            </XStack>

                            {/* Étape 4: Date de soutenance fixée */}
                            <XStack p={10} gap={5} alignItems="center">
                                {travailActuel?.soutenance ? (
                                    <IconCircleCheckFilled color="#28a745" size={30}/>
                                ) : (
                                    <IconCircle color="#808080" size={30}/>
                                )}
                                <YStack>
                                    <Text fontWeight={'$7'} color={travailActuel?.soutenance ? '$color' : '#808080'}>
                                        Date de soutenance fixée
                                    </Text>
                                    <Text fontWeight={'$5'} fontSize={13} color={'gray'}>
                                        {travailActuel?.soutenance ? formatDate(travailActuel.soutenance.dateSoutenance) : 'À venir'}
                                    </Text>
                                </YStack>
                            </XStack>
                        </YStack>
                    </YStack>
                </XStack>
                </ScrollView>
            </Stack>

            {/* Dialog pour soumettre un travail */}
            <SubmitTravailDialog 
                isOpen={isSubmitDialogOpen}
                onOpenChange={setIsSubmitDialogOpen}
                onSuccess={() => {
                    alert('Travail soumis avec succès!');
                }}
            />
        </>
    );
}

// Helper function to get status icon
function getStatusIcon(statut: string | null | undefined) {
    const icons: Record<string, JSX.Element> = {
        'SOUMIS': <IconClock color={'#17a2b8'} size={50}/>,
        'EN_ATTENTE_VALIDATION': <IconAlertCircle color={'#FFB74D'} size={50}/>,
        'ACCEPTE': <IconCircle color={'#28a745'} size={50}/>,
        'REJETE': <IconX color={'#dc3545'} size={50}/>
    };
    return icons[statut || ''] || <IconAlertCircle color={'#808080'} size={50}/>;
}
