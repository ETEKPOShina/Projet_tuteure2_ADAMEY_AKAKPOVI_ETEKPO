import { IconSchool, IconLayoutDashboard, IconChecklist, IconCalendar, IconArchive, IconUser, IconSettings, IconLogout, IconAlertTriangle, IconEdit } from "@tabler/icons-react"
// import { Stats } from "fs"
import { Avatar, Button, Card, ScrollView, Separator, Stack, Text, XStack, YStack } from "tamagui"

function Sidebar() {
  return (
    <YStack
      width={260}
      padding="$4"
      justifyContent="space-between"
      backgroundColor="$cardLight"
      borderRightWidth={1}
      borderColor="$borderLight"
    >
      <YStack gap="$5">
        <XStack alignItems="center" gap="$3">
          <Stack
            width={40}
            height={40}
            backgroundColor="$primary"
            borderRadius="$md"
            alignItems="center"
            justifyContent="center"
          >
            <IconSchool size={22} color="white" />
          </Stack>
          <Text fontSize={18} fontWeight="700">
            Univ-Lomé
          </Text>
        </XStack>

        <XStack gap="$3" alignItems="center">
          <Avatar circular size="$4">
            <Avatar.Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjPwiFiYtPJ9HsLU5iL-dSMUG1mfkrUWlgKUYToc_2XO2HxsAGYQU-0r1O71A-tYs-BMB9YTeWC_s_LXacquYLpYb_GJVg9oZIXOqPU9vlpjbivQ_QUiyS2ZerWBsgNI-FX1pFB8wQdV9BOtgveVOwesq6OOGUibzehNORPuTQuSCunSRaHzG84d9dYDywIA6FnmDmUsGeIf1jflUSofRKyQK6G8BWrPCi4lUGUv65rR2XxU_LyqWqD_2em9G_QXZzQspH_Gd_Ph8" />
          </Avatar>
          <YStack>
            <Text fontWeight="600">Professeur Durand</Text>
            <Text fontSize={13} opacity={0.7}>
              Enseignant-Chercheur
            </Text>
          </YStack>
        </XStack>

        <NavItem icon={<IconLayoutDashboard />} label="Tableau de bord" active />
        <NavItem icon={<IconChecklist />} label="Mes Évaluations" />
        <NavItem icon={<IconCalendar />} label="Calendrier" />
        <NavItem icon={<IconArchive />} label="Archives" />
        <NavItem icon={<IconUser />} label="Profil" />
      </YStack>

      <YStack gap="$2">
        <Separator />
        <NavItem icon={<IconSettings />} label="Paramètres" />
        <NavItem icon={<IconLogout />} label="Déconnexion" />
      </YStack>
    </YStack>
  )
}

function NavItem({ icon, label, active = false }) {
  return (
    <XStack
      gap="$3"
      padding="$3"
      borderRadius="$md"
      alignItems="center"
      backgroundColor={active ? '$primary' : 'transparent'}
    >
      {icon}
      <Text color={active ? 'white' : '$textLight'} fontSize={14}>
        {label}
      </Text>
    </XStack>
  )
}

function MainContent() {
  return (
    <ScrollView flex={1} padding="$6">
      <YStack maxWidth={1200} alignSelf="center" gap="$6">
        <Header />
        <Stats />
        <XStack gap="$6">
          {/* <CalendarCard /> */}
          <RightColumn />
        </XStack>
      </YStack>
    </ScrollView>
  )
}

function Header() {
  return (
    <XStack justifyContent="space-between" alignItems="center">
      <YStack>
        <Text fontSize={28} fontWeight="800">
          Tableau de bord
        </Text>
        <Text opacity={0.7}>Bonjour, Professeur Durand</Text>
      </YStack>

      <XStack gap="$3">
        <Button bordered icon={<IconCalendar size={18} />}>
          Proposer une date
        </Button>
        <Button backgroundColor="$primary" color="white" icon={<IconChecklist size={18} />}>
          Mes évaluations
        </Button>
      </XStack>
    </XStack>
  )
}

function Stats() {
  return (
    <XStack gap="$4">
      <StatCard label="Soutenances ce mois-ci" value="8" />
      <StatCard label="Évaluations en attente" value="4" />
      <StatCard label="Mémoires supervisés" value="12" />
    </XStack>
  )
}

function StatCard({ label, value }) {
  return (
    <Card flex={1} padding="$4">
      <Text opacity={0.7}>{label}</Text>
      <Text fontSize={36} fontWeight="800">
        {value}
      </Text>
    </Card>
  )
}

function RightColumn() {
  return (
    <YStack flex={2} gap="$6">
      <Card padding="$5">
        <Text fontSize={18} fontWeight="700" marginBottom="$3">
          Mes évaluations en attente
        </Text>
        <EvaluationRow name="Amina Diallo" title="IA et agriculture durable" date="15 Nov 2024" />
        <EvaluationRow name="Jean-Paul Kossi" title="Impact des microcrédits…" date="22 Nov 2024" />
      </Card>

      <Card padding="$5">
        <Text fontSize={18} fontWeight="700" marginBottom="$3">
          Notifications
        </Text>

        <Alert
          icon={<IconAlertTriangle />}
          title="Invitation à un jury"
          text="Jury de soutenance – 18 Nov 2024"
        />

        <Alert
          icon={<IconEdit />}
          title="Modification de calendrier"
          text="Soutenance déplacée au 11 Nov 2024"
        />
      </Card>
    </YStack>
  )
}

function EvaluationRow({ name, title, date }) {
  return (
    <XStack justifyContent="space-between" paddingVertical="$2">
      <Text>{name}</Text>
      <Text opacity={0.7}>{title}</Text>
      <Text>{date}</Text>
      <Button size="$2">Évaluer</Button>
    </XStack>
  )
}

function Alert({ icon, title, text }) {
  return (
    <XStack gap="$3" padding="$3" backgroundColor="$secondary" borderRadius="$md">
      {icon}
      <YStack>
        <Text fontWeight="600">{title}</Text>
        <Text fontSize={13}>{text}</Text>
      </YStack>
    </XStack>
  )
}
