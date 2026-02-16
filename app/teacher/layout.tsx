// app/(dashboard)/layout.tsx
'use client'

import { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { 
  YStack, 
  XStack, 
  Text, 
  Button, 
  Avatar, 
  ScrollView,
  Separator,
  H3,
  Sheet
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
  IconMenu2,
  IconX
} from '@tabler/icons-react'
import { useAuth } from '@/src/services/auth'
import ProtectedRoute from "@/src/components/ProtectedRoute";

// Menu items configuration
const menuItems = [
  { icon: IconLayoutDashboard, label: 'Tableau de bord', path: '/teacher/dashboard' },
  // { icon: IconStars, label: 'Mes Évaluations', path: '/teacher/evaluations' },
  // { icon: IconCalendarMonth, label: 'Calendrier Complet', path: '/teacher/calendar' },
  // { icon: IconArchive, label: 'Archives', path: '/teacher/archives' },
  // { icon: IconUser, label: 'Profil', path: '/teacher/profile' },
]

// Sidebar Component
function Sidebar({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname()
  const router = useRouter()
  const { user } = useAuth()

  const handleNavigation = (path: string) => {
    router.push(path)
    onNavigate?.()
  }

  const teacherName = user?.firstName && user?.lastName 
    ? `${user.firstName} ${user.lastName}`
    : 'Professeur'

  return (
    <ProtectedRoute requiredRole="ENSEIGNANT">
    <YStack gap="$6" f={1}>
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
            <Text fontWeight="600" fontSize="$4">{teacherName}</Text>
            <Text fontSize="$3" color="$gray11">Enseignant-Chercheur</Text>
          </YStack>
        </XStack>

        {/* Navigation */}
        <YStack gap="$2">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.path
            
            return (
              <Button 
                key={item.path}
                bg={isActive ? "$blue3" : "transparent"} 
                color={isActive ? '#003366' : '#171717'}
                jc="flex-start" 
                fontSize="$4" 
                fontWeight="$6"
                icon={<Icon size={20} color={isActive ? '#003366' : '#171717'} />}
                hoverStyle={{ bg: "$gray3" }}
                onPress={() => handleNavigation(item.path)}
                pressStyle={{ bg: "$blue2" }}
              >
                {item.label}
              </Button>
            )
          })}
        </YStack>
      </YStack>

      {/* Bottom Navigation */}
      <YStack gap="$1" pt="$4" borderTopWidth={1} borderColor="$borderColor" mt="auto">
        <Button 
          bg="transparent" 
          color="#171717" 
          jc="flex-start" 
          fontSize="$4" 
          fontWeight="$6"
          icon={<IconSettings size={20} color='#171717' />}
          hoverStyle={{ bg: "$gray3" }}
          onPress={() => router.push('/settings')}
        >
          Paramètres
        </Button>
        <Button 
          bg="transparent" 
          color="#171717" 
          jc="flex-start" 
          fontSize="$4" 
          fontWeight="$6"
          icon={<IconLogout size={20} color='#171717' />}
          hoverStyle={{ bg: "$gray3" }}
          onPress={() => {
            // Logique de déconnexion
            console.log('Déconnexion')
          }}
        >
          Déconnexion
        </Button>
      </YStack>
    </YStack>
     </ProtectedRoute>
  )
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <XStack f={1} h="100vh">
      {/* Desktop Sidebar */}
      <YStack 
        w={256} 
        bg="$background" 
        $sm={{ display: 'none' }}
        p="$4" 
        borderRightWidth={1} 
        borderColor="$borderColor"
      >
        <Sidebar />
      </YStack>

      {/* Mobile Sheet */}
      <Sheet
        modal
        open={menuOpen}
        onOpenChange={setMenuOpen}
        snapPoints={[90]}
        dismissOnSnapToBottom
      >
        <Sheet.Overlay />
        <Sheet.Frame bg="$background" p="$4">
          <XStack jc="space-between" ai="center" mb="$4">
            <Text fontWeight="700" fontSize="$6" color='#808080'>Menu</Text>
            <Button 
              size="$3" 
              chromeless 
              icon={<IconX size={24} color='#808080' strokeWidth={4} />}
              onPress={() => setMenuOpen(false)}
            />
          </XStack>
          
          <Sidebar onNavigate={() => setMenuOpen(false)} />
        </Sheet.Frame>
      </Sheet>

      {/* Main Content */}
      <ScrollView f={1} bg="#F4F7FA">
        <YStack p="$8" maw={1400} mx="auto" $sm={{p:'$4',w:'100%'}}>
          {/* Mobile Header */}
          <XStack 
            ai="center" 
            gap="$3" 
            px="$1" 
            display='none' 
            $sm={{display:'flex'}} 
            mb='$3' 
            w={300} 
            jc='space-between'
          >
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
            <Button 
              size="$3" 
              chromeless 
              icon={<IconMenu2 size={24} color='#808080' strokeWidth={4}/>}
              marginRight="auto"
              onPress={() => setMenuOpen(true)}
            />
          </XStack>

          {/* Page Content */}
          {children}
        </YStack>
      </ScrollView>
    </XStack>
   
  )
}