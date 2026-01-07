'use client';

import { IconCalendarDue, IconCircle, IconCircleCheckFilled, IconCircleDotFilled, IconCopyright, IconCopyrightFilled, IconFile, IconFilePencil, IconFileUpload, IconHourglassLow, IconInfoCircle, IconInfoCircleFilled, IconLayoutDashboard, IconLayoutDashboardFilled, IconMessage, IconPhone, IconSchool, IconUpload, IconUserFilled } from "@tabler/icons-react";
import { Button, Input, Paragraph, Stack, Text, XStack, YStack ,} from "tamagui";

export default function LoginPage(){
    return(
        <XStack flex={1}    h={'100vh'} >
         <YStack width={250}  p={16}>
            <XStack alignItems="center"  gap={10}mb={32}
>
                <Button
                 size={80}
                //  circular
                bg="#0e3cb3"
                w={40}
                h={40}
                br={10}
                 icon={<IconSchool size={40} color="#ffffff"  stroke={2}/>}
                 p={5}


                />
                <Text fontWeight={'$8'} fontSize={'$7'} color="#0e3cb3">UnivLomé</Text>
            </XStack>
            <YStack gap={10}>
              <Button jc="flex-start"  color={'#003366'} fontSize={'$4'} fontWeight={'$6'}  bg={'#0033661a'} icon={<IconLayoutDashboard color="#003366" size={25}/>}>
                Tableau de bord
                    

              </Button>
               <Button jc="flex-start"   color={'#003366'} fontSize={'$4'} fontWeight={'$6'}  bg={'#fff'} icon={<IconFile color="#003366" size={25}/>}>
                Mes documents
                    

              </Button>
               <Button jc="flex-start"  color={'#003366'} fontSize={'$4'} fontWeight={'$6'}  bg={'#fff'} icon={<IconCalendarDue color="#003366" size={25}/>}>
                Plannings
                    

              </Button>
              <Button jc="flex-start"  color={'#003366'} fontSize={'$4'} fontWeight={'$6'}  bg={'#fff'} icon={<IconMessage color="#003366" size={25}/>}>
                Messages
                    

              </Button>

            </YStack>
            <YStack marginTop="auto" gap={10} pt={10} >
                <XStack alignItems="center">
                    <IconUserFilled size={50} color="#808080"/>
                    <YStack>
                        <Text fontWeight={'$6'}>Jean Dupont</Text>
                        <Text fontWeight={'$5'} color={'gray'} fontSize={14}>Etudiant en Master</Text>
                    </YStack>
                </XStack>
                <Button fontWeight={'$7'} color={'#808080'}>
                    Déconnexion
                </Button>
            </YStack>

         </YStack>
         <Stack flex={1} p={32} bg={'#F4F7FA'}>
            <XStack justifyContent="space-between" alignItems="center">
            <YStack>
               <Text fontSize={36} fontWeight={'$7'} color={'$primary'} >Mon Tableau de Bord</Text>
               <Text fontWeight={'$5'}>Suivez en temps réel la progression de votre mémoire.</Text>
 
            </YStack>
            
            <XStack gap={10} >
                
                <Button icon={<IconFileUpload size={20} stroke={3}/>} bg={'$primary'} fontWeight={'$6'} color={'#ffffff'}>Déposer mon mémoire</Button>

                <Button bg={'#ffffff'} icon={<IconCalendarDue size={20} stroke={3} color='#003366' />} color={'$primary'} fontWeight={'$6'}>Consulter le planning</Button>
            </XStack>
          
            </XStack>

            <XStack mt={32} gap={20} >
                <YStack flex={1} gap={30}>
                    <YStack gap={10}>
                      <Text fontSize={22} fontWeight={'$7'} color={'$primary'}>Statut Actuel</Text>  
                      <XStack bg={'#ffffff'} p={20} br={10} alignItems="center" gap={20}>
                        <Button
                         circular
                         size={100}
                         bg={'#ffb74d1a'}
                         icon={<IconHourglassLow color={'#FFB74D'} size={50}/>}
                         
                         
                        />
                        <YStack gap={10}>
                            <Text fontWeight={'$7'} fontSize={18} color={'#FFB74D'}>En cours de validation</Text>
                            <Paragraph maxWidth={500} fontWeight={'$5'} color={'gray'}>Votre mémoire a été déposé et est actuellement en cours de relecture par les membres du jury. Vous serez notifié dès que le statut changera.</Paragraph>
                        </YStack>
                        

                      </XStack>
                    </YStack>
                    <YStack gap={10}>
                        <Text fontSize={22} fontWeight={'$7'} color={'$primary'}>Informations sur votre soutenance</Text> 
                        <XStack bg={'#ffffff'} p={20} br={10} alignItems="center" gap={20}>
                            <IconInfoCircleFilled color='#808080'/>
                            <Paragraph maxWidth={500} fontWeight={'$5'} color={'gray'}>
                                Aucune date de soutenance n'a été fixée pour le moment.
                            </Paragraph>
                            
                        </XStack>
                    </YStack>

                    <YStack gap={10}>
                        <Text fontSize={22} fontWeight={'$7'} color={'$primary'}>Actions Rapides</Text> 
                        <XStack gap={20}>

                        
                        <XStack bg={'#fff'} gap={20} p={20} flex={0.5} borderRadius={20} alignItems="center">
                          <Button
                            width={60}
                            height={70}
                            borderRadius={'30%'}
                            bg={'#F4F7FA'}
                            color={'$primary'}
                            size={50}
                            // bg={'#ffb74d1a'}
                            icon={<IconFilePencil color={'#003366'} size={50}/>}
                            
                            
                            />
                            <YStack>
                                <Text fontWeight={'$7'}>Mettre à jour le mémoire</Text>
                                <Text fontSize={12} color={'gray'} fontWeight={'$6'}>Soumettre une nouvelle version</Text>

                            </YStack>
                        </XStack>

                        <XStack bg={'#fff'} gap={20} p={20} flex={0.5} borderRadius={20} alignItems="center">
                          <Button
                            width={60}
                            height={70}
                            borderRadius={'30%'}
                            bg={'#F4F7FA'}
                            color={'$primary'}
                            size={50}
                            // bg={'#ffb74d1a'}
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
                <YStack width={350} gap={10} >
                    <Text fontSize={22} fontWeight={'$7'} color={'$primary'}>Actions Rapides</Text> 
                    <YStack width={350} bg={'#ffffff'} gap={20} br={10}>
                        <XStack  p={10} gap={5} alignItems="center">
                            <IconCircleCheckFilled color="#28a745" size={30}/>
                            <YStack>
                                <Text fontWeight={'$7'}>Sujet validé</Text>
                                <Text fontWeight={'$5'} fontSize={15} color={'gray'}>20 Aout 2027</Text>
                            </YStack>
                        </XStack>

                        <XStack  p={10} gap={5} alignItems="center">
                            <IconCircleCheckFilled color="#28a745" size={30}/>
                            <YStack>
                                <Text fontWeight={'$7'}>Mémoire déposé</Text>
                                <Text fontWeight={'$5'} fontSize={15} color={'gray'}>10 Juin 2024</Text>
                            </YStack>
                        </XStack>

                         <XStack  p={10} gap={5} alignItems="center">
                            <IconCircleDotFilled color="#FFB74D" size={30}/>
                            <YStack>
                                <Text fontWeight={'$7'}>Mémoire déposé</Text>
                                <Text fontWeight={'$5'} fontSize={15} color={'gray'}>10 Juin 2024</Text>
                            </YStack>
                        </XStack>

                        <XStack  p={10} gap={5} alignItems="center">
                            <IconCircle color="#808080" size={30}/>
                            <YStack>
                                <Text fontWeight={'$7'} color="#808080">Date de soutenance fixée</Text>
                                <Text fontWeight={'$5'} fontSize={15} color={'gray'}>À venir</Text>
                            </YStack>
                        </XStack>

                    </YStack>
                </YStack>
            </XStack>



         </Stack>
   
        </XStack>
    )
}