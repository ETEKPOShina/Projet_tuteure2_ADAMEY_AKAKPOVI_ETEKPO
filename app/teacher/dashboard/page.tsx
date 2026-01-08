// app/(dashboard)/dashboard/page.tsx
'use client'

import { 
  YStack, 
  XStack, 
  Text, 
  Button, 
  Card, 
  H1,
  H2,
} from 'tamagui'
import { 
  IconCalendarEvent,
  IconWriting,
  IconAlertTriangle,
  IconCalendarPlus,
} from '@tabler/icons-react'
import CalendarWidget from '../calendarItem' 

export default function DashboardPage() {
  return (
    <>
      {/* Header */}
      <XStack jc="space-between" ai="center" mb="$8" flexWrap="wrap" gap="$4">
        <YStack gap="$1">
          <H1 fontWeight="700" fontSize="$9">Tableau de Bord</H1>
          <Text fontSize="$5" color="$gray11">Bonjour, Professeur Durand</Text>
        </YStack>
        <XStack gap="$4" flexWrap='nowrap' $sm={{ flexWrap: 'wrap', gap: '$2', flexDirection :'column' }}>
          <Button 
            variant="outlined" 
            borderColor='#003366'
            borderWidth={1}
            color='#003366'
            fontWeight='$6'
            icon={<IconCalendarEvent size={18} color='#003366' />}
            $sm={{w:'100%'}}
          >
            Proposer une date
          </Button>
          <Button 
            bg='#003366'
            color="white"
            fontWeight='$6'
            icon={<IconWriting size={18} />}
          >
            Accéder à mes évaluations
          </Button>
        </XStack>
      </XStack>

      {/* Stats */}
      <XStack gap="$6" mb="$8" flexWrap="wrap">
        <Card f={1} minWidth={230} maxWidth={250} maxHeight={130} p={22} bg='#ffffff' br={15} bordered>
          <YStack gap="$1">
            <Text fontSize="$4" fontWeight="500">
              Soutenances ce mois-ci
            </Text>
            <Text fontSize="$10" fontWeight="700">8</Text>
          </YStack>
        </Card>
        <Card f={1} minWidth={230} maxWidth={250} maxHeight={130} p={22} bg='#ffffff' br={15} bordered>
          <YStack gap="$1">
            <Text fontSize="$4" fontWeight="500">
              Évaluations en attente
            </Text>
            <Text fontSize="$10" fontWeight="700">4</Text>
          </YStack>
        </Card>
        <Card f={1} minWidth={230} maxWidth={250} maxHeight={130} p={22} bg='#ffffff' br={15} bordered>
          <YStack gap="$1">
            <Text fontSize="$4" fontWeight="500">
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
                      <Button size="$3" fontWeight="$6" bg="$primary" color="white" br={8}>
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
                        <Button size="$3" fontWeight="$6" bg="$primary" color="white" br={8}>
                          Accepter
                        </Button>
                        <Button size="$3" fontWeight="$6" color="$primary" br={8}>
                          Refuser
                        </Button>
                      </XStack>
                    </YStack>
                  </XStack>
                </Card>

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
    </>
  )
}