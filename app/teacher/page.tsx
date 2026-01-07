// 'use client'

// import {
//   Stack,
//   XStack,
//   YStack,
//   Text,
//   Button,
//   Card,
//   Avatar,
//   Separator,
//   ScrollView,
// } from 'tamagui'

// import {
//   IconSchool,
//   IconLayoutDashboard,
//   IconCalendar,
//   IconArchive,
//   IconUser,
//   IconSettings,
//   IconLogout,
//   IconChecklist,
//   IconChevronLeft,
//   IconChevronRight,
//   IconAlertTriangle,
//   IconEdit,
// } from '@tabler/icons-react'

// export default function DashboardPage() {
//   return (
//     <XStack minHeight="100vh" backgroundColor="$bgLight">
//       <Sidebar />
//       <MainContent />
//     </XStack>
//   )
// }

// function Sidebar() {
//   return (
//     <YStack
//       width={260}
//       padding="$4"
//       justifyContent="space-between"
//       backgroundColor="$cardLight"
//       borderRightWidth={1}
//       borderColor="$borderLight"
//     >
//       <YStack gap="$5">
//         <XStack alignItems="center" gap="$3">
//           <Stack
//             width={40}
//             height={40}
//             backgroundColor="$primary"
//             borderRadius="$md"
//             alignItems="center"
//             justifyContent="center"
//           >
//             <IconSchool size={22} color="white" />
//           </Stack>
//           <Text fontSize={18} fontWeight="700">
//             Univ-Lomé
//           </Text>
//         </XStack>

//         <XStack gap="$3" alignItems="center">
//           <Avatar circular size="$4">
//             <Avatar.Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjPwiFiYtPJ9HsLU5iL-dSMUG1mfkrUWlgKUYToc_2XO2HxsAGYQU-0r1O71A-tYs-BMB9YTeWC_s_LXacquYLpYb_GJVg9oZIXOqPU9vlpjbivQ_QUiyS2ZerWBsgNI-FX1pFB8wQdV9BOtgveVOwesq6OOGUibzehNORPuTQuSCunSRaHzG84d9dYDywIA6FnmDmUsGeIf1jflUSofRKyQK6G8BWrPCi4lUGUv65rR2XxU_LyqWqD_2em9G_QXZzQspH_Gd_Ph8" />
//           </Avatar>
//           <YStack>
//             <Text fontWeight="600">Professeur Durand</Text>
//             <Text fontSize={13} opacity={0.7}>
//               Enseignant-Chercheur
//             </Text>
//           </YStack>
//         </XStack>

//         <NavItem icon={<IconLayoutDashboard />} label="Tableau de bord" active />
//         <NavItem icon={<IconChecklist />} label="Mes Évaluations" />
//         <NavItem icon={<IconCalendar />} label="Calendrier" />
//         <NavItem icon={<IconArchive />} label="Archives" />
//         <NavItem icon={<IconUser />} label="Profil" />
//       </YStack>

//       <YStack gap="$2">
//         <Separator />
//         <NavItem icon={<IconSettings />} label="Paramètres" />
//         <NavItem icon={<IconLogout />} label="Déconnexion" />
//       </YStack>
//     </YStack>
//   )
// }

// function NavItem({ icon, label, active = false }) {
//   return (
//     <XStack
//       gap="$3"
//       padding="$3"
//       borderRadius="$md"
//       alignItems="center"
//       backgroundColor={active ? '$primary' : 'transparent'}
//     >
//       {icon}
//       <Text color={active ? 'white' : '$textLight'} fontSize={14}>
//         {label}
//       </Text>
//     </XStack>
//   )
// }

// function MainContent() {
//   return (
//     <ScrollView flex={1} padding="$6">
//       <YStack maxWidth={1200} alignSelf="center" gap="$6">
//         <Header />
//         <Stats />
//         <XStack gap="$6">
//           {/* <CalendarCard /> */}
//           <RightColumn />
//         </XStack>
//       </YStack>
//     </ScrollView>
//   )
// }

// function Header() {
//   return (
//     <XStack justifyContent="space-between" alignItems="center">
//       <YStack>
//         <Text fontSize={28} fontWeight="800">
//           Tableau de bord
//         </Text>
//         <Text opacity={0.7}>Bonjour, Professeur Durand</Text>
//       </YStack>

//       <XStack gap="$3">
//         <Button bordered icon={<IconCalendar size={18} />}>
//           Proposer une date
//         </Button>
//         <Button backgroundColor="$primary" color="white" icon={<IconChecklist size={18} />}>
//           Mes évaluations
//         </Button>
//       </XStack>
//     </XStack>
//   )
// }

// function Stats() {
//   return (
//     <XStack gap="$4">
//       <StatCard label="Soutenances ce mois-ci" value="8" />
//       <StatCard label="Évaluations en attente" value="4" />
//       <StatCard label="Mémoires supervisés" value="12" />
//     </XStack>
//   )
// }

// function StatCard({ label, value }) {
//   return (
//     <Card flex={1} padding="$4">
//       <Text opacity={0.7}>{label}</Text>
//       <Text fontSize={36} fontWeight="800">
//         {value}
//       </Text>
//     </Card>
//   )
// }

// function RightColumn() {
//   return (
//     <YStack flex={2} gap="$6">
//       <Card padding="$5">
//         <Text fontSize={18} fontWeight="700" marginBottom="$3">
//           Mes évaluations en attente
//         </Text>
//         <EvaluationRow name="Amina Diallo" title="IA et agriculture durable" date="15 Nov 2024" />
//         <EvaluationRow name="Jean-Paul Kossi" title="Impact des microcrédits…" date="22 Nov 2024" />
//       </Card>

//       <Card padding="$5">
//         <Text fontSize={18} fontWeight="700" marginBottom="$3">
//           Notifications
//         </Text>

//         <Alert
//           icon={<IconAlertTriangle />}
//           title="Invitation à un jury"
//           text="Jury de soutenance – 18 Nov 2024"
//         />

//         <Alert
//           icon={<IconEdit />}
//           title="Modification de calendrier"
//           text="Soutenance déplacée au 11 Nov 2024"
//         />
//       </Card>
//     </YStack>
//   )
// }

// function EvaluationRow({ name, title, date }) {
//   return (
//     <XStack justifyContent="space-between" paddingVertical="$2">
//       <Text>{name}</Text>
//       <Text opacity={0.7}>{title}</Text>
//       <Text>{date}</Text>
//       <Button size="$2">Évaluer</Button>
//     </XStack>
//   )
// }

// function Alert({ icon, title, text }) {
//   return (
//     <XStack gap="$3" padding="$3" backgroundColor="$secondary" borderRadius="$md">
//       {icon}
//       <YStack>
//         <Text fontWeight="600">{title}</Text>
//         <Text fontSize={13}>{text}</Text>
//       </YStack>
//     </XStack>
//   )
// }


'use client';
/** @jsxImportSource react */

// pages/dashboard.tsx ou app/dashboard/page.tsx
import { 
  YStack, 
  XStack, 
  Text, 
  Button, 
  Card, 
  Avatar, 
  ScrollView,
  Separator,
  H1,
  H2,
  H3,
} from 'tamagui'
import { 
  IconSchool,
  IconLayoutDashboard,
  IconStars,
  IconCalendarMonth,
  IconArchive,
  IconUser,
  IconSettings,
  IconLogout,
  IconCalendarEvent,
  IconWriting,
  IconChevronLeft,
  IconChevronRight,
  IconAlertTriangle,
  IconCalendar,
  IconCalendarPlus
} from '@tabler/icons-react'

import { Sheet } from 'tamagui'
import { IconMenu2 } from '@tabler/icons-react'

import CalendarWidget from './calendarItem';

export default function Dashboard() {
  return (
    <XStack f={1} h="100vh">
      {/* Sidebar */}
      <YStack 
        w={256} 
        bg="$background" 
        p="$4" 
        borderRightWidth={1} 
        borderColor="$borderColor"
        jc="space-between"
      >
        <YStack gap="$6">
          {/* Logo */}
          <XStack ai="center" gap="$3" px="$2">
            <YStack 
              bg="$blue10" 
              w={40} 
              h={40} 
              ai="center" 
              jc="center" 
              br="$4"
            >
              <IconSchool size={24} color="white" />
            </YStack>
            <H3 fontWeight="700">Univ-Lomé</H3>
          </XStack>

          {/* Profile */}
          <YStack gap="$4">
            <XStack ai="center" gap="$3">
              <Avatar circular size="$4">
                <Avatar.Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjPwiFiYtPJ9HsLU5iL-dSMUG1mfkrUWlgKUYToc_2XO2HxsAGYQU-0r1O71A-tYs-BMB9YTeWC_s_LXacquYLpYb_GJVg9oZIXOqPU9vlpjbivQ_QUiyS2ZerWBsgNI-FX1pFB8wQdV9BOtgveVOwesq6OOGUibzehNORPuTQuSCunSRaHzG84d9dYDywIA6FnmDmUsGeIf1jflUSofRKyQK6G8BWrPCi4lUGUv65rR2XxU_LyqWqD_2em9G_QXZzQspH_Gd_Ph8" />
                <Avatar.Fallback bc="$blue10" />
              </Avatar>
              <YStack f={1}>
                <Text fontWeight="600" fontSize="$4">Professeur Durand</Text>
                <Text fontSize="$3" color="$gray11">Enseignant-Chercheur</Text>
              </YStack>
            </XStack>

            {/* Navigation */}
            <YStack gap="$2">
              <Button 
                bg="$blue3" 
                // color="$blue11" 
                color={'#003366'}
                jc="flex-start" 
                fontSize={'$4'} fontWeight={'$6'}
                icon={<IconLayoutDashboard size={20} color={'#003366'}/>}
              >
                Tableau de bord
              </Button>
              <Button 
                bg="transparent" 
                color={'#003366'}
                jc="flex-start" 
                fontSize={'$4'} fontWeight={'$6'}
                icon={<IconStars size={20} color={'#003366'} />}
                hoverStyle={{ bg: "$gray3" }}
              >
                Mes Évaluations
              </Button>
              <Button 
                bg="transparent" 
                color={'#003366'}
                jc="flex-start" 
                fontSize={'$4'} fontWeight={'$6'}
                icon={<IconCalendarMonth size={20} color={'#003366'} />}
                hoverStyle={{ bg: "$gray3" }}
              >
                Calendrier Complet
              </Button>
              <Button 
                bg="transparent" 
                color={'#003366'}
                jc="flex-start" 
                fontSize={'$4'} fontWeight={'$6'}
                icon={<IconArchive size={20} color={'#003366'} />}
                hoverStyle={{ bg: "$gray3" }}
              >
                Archives
              </Button>
              <Button 
                bg="transparent" 
                color={'#003366'}
                jc="flex-start" 
                fontSize={'$4'} fontWeight={'$6'}
                icon={<IconUser size={20} color={'#003366'} />}
                hoverStyle={{ bg: "$gray3" }}
              >
                Profil
              </Button>
            </YStack>
          </YStack>
        </YStack>

        {/* Bottom Navigation */}
        <YStack gap="$1" pt="$4" borderTopWidth={1} borderColor="$borderColor">
          <Button 
            bg="transparent" 
            color="$color" 
            jc="flex-start" 
            fontSize={'$4'} fontWeight={'$6'}
            icon={<IconSettings size={20} color='#171717' />}
            hoverStyle={{ bg: "$gray3" }}
          >
            Paramètres
          </Button>
          <Button 
            bg="transparent" 
            color="$color" 
            jc="flex-start" 
            fontSize={'$4'} fontWeight={'$6'}
            icon={<IconLogout size={20} color='#171717' />}
            hoverStyle={{ bg: "$gray3" }}
          >
            Déconnexion
          </Button>
        </YStack>
      </YStack>

      {/* Main Content */}
      <ScrollView f={1} bg={'#F4F7FA'}>
        <YStack p="$8" maw={1400} mx="auto" >
          {/* Header */}
          <XStack jc="space-between" ai="center" mb="$8" flexWrap="wrap" gap="$4">
            <YStack gap="$1">
              <H1 fontWeight="700" fontSize="$9">Tableau de Bord</H1>
              <Text fontSize="$5" color="$gray11">Bonjour, Professeur Durand</Text>
            </YStack>
            <XStack gap="$4">
              <Button 
                variant="outlined" 
                borderColor={'#003366'}
                borderWidth={1}
                color={'#003366'}
                fontWeight={'$6'}
                icon={<IconCalendarEvent size={18} color={'#003366'} />}
              >
                Proposer une date
              </Button>
              <Button 
                bg={'#003366'}
                color="white"
                fontWeight={'$6'}
                icon={<IconWriting size={18}  />}
              >
                Accéder à mes évaluations
              </Button>
            </XStack>
          </XStack>

          {/* Stats */}
          <XStack gap="$6" mb="$8" flexWrap="wrap">
            <Card f={1} minWidth={230} maxWidth={250} maxHeight={130} p={22} bg='#ffffff' br={15} bordered>
              <YStack gap="$1">
                <Text fontSize="$4"  fontWeight="500">
                  Soutenances ce mois-ci
                </Text>
                <Text fontSize="$10" fontWeight="700">8</Text>
              </YStack>
            </Card>
            <Card f={1} minWidth={230} maxWidth={250} maxHeight={130} p={22} bg='#ffffff' br={15} bordered>
              <YStack gap="$1">
                <Text fontSize="$4"  fontWeight="500">
                  Évaluations en attente
                </Text>
                <Text fontSize="$10" fontWeight="700">4</Text>
              </YStack>
            </Card>
            <Card f={1} minWidth={230} maxWidth={250} maxHeight={130} p={22} bg='#ffffff' br={15} bordered>
              <YStack gap="$1">
                <Text fontSize="$4"  fontWeight="500">
                  Mémoires supervisés
                </Text>
                <Text fontSize="$10" fontWeight="700">12</Text>
              </YStack>
            </Card>
          </XStack>

          {/* Content Grid */}
          <XStack gap="$8" flexWrap="wrap" ai="flex-start">
            <YStack f={1} maxWidth={320} gap="$8">
              <CalendarWidget />
              {/* <Card p="$6" bg='#ffffff' bordered>
                <YStack gap="$4">
                  <H2 fontSize="$6" fontWeight="700" textAlign='center'>Soutenances à Venir</H2>
                  
                  <XStack ai="center" jc="space-between" pb="$2" >
                    <Button size="$3" circular chromeless>
                      <IconChevronLeft size={20} />
                    </Button>
                    <Text fontWeight="700" fontSize="$5">Novembre 2024</Text>
                    <Button size="$3" circular chromeless>
                      <IconChevronRight size={20} />
                    </Button>
                  </XStack>

                  <YStack gap="$0.5">
                    <XStack>
                      {['L', 'M', 'M', 'J', 'V', 'S', 'D'].map((day, i) => (
                        <Text 
                          key={i} 
                          f={1} 
                          ta="center" 
                          fontSize="$2" 
                          fontWeight="700"
                          color="$gray11"
                          py="$2"
                        >
                          {day}
                        </Text>
                      ))}
                    </XStack>

                    <XStack flexWrap="wrap">
                      {[...Array(4)].map((_, i) => (
                        <YStack key={i} w="14.28%" h={40} />
                      ))}
                      {[...Array(30)].map((_, i) => {
                        const day = i + 1
                        const isSelected = day === 5
                        const hasDot = [11, 18].includes(day)
                        
                        return (
                          <Button
                            key={i}
                            size="$3"
                            w="14.28%"
                            h={40}
                            circular
                            bg={isSelected ? '$blue10' : 'transparent'}
                            color={isSelected ? 'white' : '$color'}
                            hoverStyle={{ bg: '$blue3' }}
                          >
                            <YStack ai="center" gap="$1">
                              <Text fontSize="$3" fontWeight="500">{day}</Text>
                              {hasDot && (
                                <YStack 
                                  w={4} 
                                  h={4} 
                                  br="$10" 
                                  bg={isSelected ? 'white' : '$blue10'} 
                                />
                              )}
                            </YStack>
                          </Button>
                        )
                      })}
                    </XStack>
                  </YStack>

                  <Separator />

                  <YStack gap="$3">
                    <XStack ai="center" gap="$3">
                      <YStack 
                        w={48} 
                        h={48} 
                        ai="center" 
                        jc="center" 
                        bg="$blue3" 
                        br="$3"
                      >
                        <Text fontWeight="700" fontSize="$3" color="$blue11">05</Text>
                        <Text fontSize="$1" color="$blue11">NOV</Text>
                      </YStack>
                      <YStack f={1}>
                        <Text fontWeight="600" fontSize="$3">Soutenance de M. Koffi</Text>
                        <Text fontSize="$2" color="$gray11">10:00 - Salle B12</Text>
                      </YStack>
                    </XStack>
                    
                    <XStack ai="center" gap="$3">
                      <YStack 
                        w={48} 
                        h={48} 
                        ai="center" 
                        jc="center" 
                        bg="$blue3" 
                        br="$3"
                      >
                        <Text fontWeight="700" fontSize="$3" color="$blue11">11</Text>
                        <Text fontSize="$1" color="$blue11">NOV</Text>
                      </YStack>
                      <YStack f={1}>
                        <Text fontWeight="600" fontSize="$3">Soutenance de Mme. Akou</Text>
                        <Text fontSize="$2" color="$gray11">14:30 - Salle C01</Text>
                      </YStack>
                    </XStack>
                  </YStack>
                </YStack>
              </Card> */}
            </YStack>

            {/* Right Column */}
            <YStack f={2} maxWidth={600} gap="$8" flex={1}>
              {/* Evaluations Table */}
              <Card p="$4" bordered borderWidth={2} bg='#ffffff' br={15}>
                <YStack gap="$4">
                  <H2 fontSize="$6" fontWeight="700">Mes Évaluations en Attente</H2>
                  
                  <YStack gap="$3">
                    {[
                      { student: 'Amina Diallo', title: 'IA et agriculture durable au Togo', date: '15 Nov 2024' },
                      { student: 'Jean-Paul Kossi', title: 'Impact des microcrédits sur...', date: '22 Nov 2024' },
                      { student: 'Fatou Sow', title: 'Énergies renouvelables et...', date: '30 Nov 2024' },
                    ].map((item, i) => (
                      <YStack 
                        key={i} 
                        gap="$2" 
                        p="$3" 
                        br="$3" 
                        hoverStyle={{ bg: '$gray2' }}
                        borderBottomWidth={i < 2 ? 1 : 0}
                        borderColor="$borderColor"
                      >
                        <XStack jc="space-between" ai="center" flexWrap="wrap" gap="$2">
                          <YStack f={1} minWidth={200}>
                            <Text fontWeight="600" fontSize="$4">{item.student}</Text>
                            <Text fontSize="$3" fontWeight="500" color="$gray11" numberOfLines={1}>
                              {item.title}
                            </Text>
                            <Text fontSize="$3" fontWeight="500" color="$gray10" mt="$1">{item.date}</Text>
                          </YStack>
                          <Button size="$3" fontWeight={"$6"} bg="$primary" color="white" br={8}>
                            Évaluer
                          </Button>
                        </XStack>
                      </YStack>
                    ))}
                  </YStack>
                </YStack>
              </Card>

              {/* Notifications */}
              <Card p="$6" bg='#ffffff' bordered borderWidth={2} br={15}>
                <YStack gap="$4">
                  <H2 fontSize="$6" fontWeight="700">Notifications et Actions Requises</H2>
                  
                  <YStack gap="$4">
                    {/* Alert 1 */}
                    <Card 
                      bg="$orange2" 
                      p="$4" 
                      borderLeftWidth={4} 
                      borderColor="#fd7e14"
                    >
                      <XStack gap="$3" ai="flex-start">
                        <IconAlertTriangle size={20} color="#fd7e14" />
                        <YStack f={1} gap="$2">
                          <Text fontWeight="600" fontSize="$4">Invitation à un jury</Text>
                          <Text fontSize="$3" fontWeight="500">
                            Vous êtes invité à participer au jury de soutenance de Yao Mensah le 18 Nov. 2024.
                          </Text>
                          <XStack gap="$2" mt="$2">
                            <Button size="$3" fontWeight={"$6"} bg="$primary" color="white" br={8}>
                              Accepter
                            </Button>
                            <Button size="$3" fontWeight={"$6"}  color="$primary" br={8}>
                              Refuser
                            </Button>
                          </XStack>
                        </YStack>
                      </XStack>
                    </Card>

                    {/* Alert 2 */}
                    <Card 
                      bg="$blue2" 
                      p="$4" 
                      borderLeftWidth={4} 
                      borderColor="$blue10"
                    >
                      <XStack gap="$3" ai="flex-start">
                        <IconCalendarPlus size={20} color="#003366" />
                        <YStack f={1}>
                          <Text fontWeight="600" fontSize="$4">Modification de calendrier</Text>
                          <Text fontSize="$3" fontWeight="500" mt="$1">
                            La soutenance de Mme. Akou a été déplacée au 11 Nov. 2024 à 14:30.
                          </Text>
                        </YStack>
                      </XStack>
                    </Card>
                  </YStack>
                </YStack>
              </Card>
            </YStack>
          </XStack>
        </YStack>
      </ScrollView>
    </XStack>
  )
}