'use client'

import { useState } from 'react'
import { 
  YStack, 
  XStack, 
  Text, 
  Button, 
  Card, 
  Avatar,
  Input,
  ScrollView,
  Circle,
  Square,
  styled,
  Stack,
  Separator
} from 'tamagui'
import { 
  Home, 
  Shield, 
  Users, 
  FileText, 
  Settings, 
  HelpCircle,
  Search,
  Plus,
  AlertCircle,
  UserX,
  FileCheck,
  ChevronDown
} from '@tamagui/lucide-icons'

// Styled components
const Sidebar = styled(YStack, {
  width: 240,
  backgroundColor: '$background',
  padding: '$4',
  borderRightWidth: 1,
  borderRightColor: '$borderColor',
  height: '100vh',
  gap: '$2'
})

const NavItem = styled(XStack, {
  padding: '$3',
  borderRadius: '$3',
  alignItems: 'center',
  gap: '$3',
  cursor: 'pointer',
  hoverStyle: {
    backgroundColor: '$backgroundHover'
  },
  pressStyle: {
    backgroundColor: '$backgroundPress'
  },
  variants: {
    active: {
      true: {
        backgroundColor: '$blue3',
        color: '$blue11'
      }
    }
  } as const
})

const StatCard = styled(Card, {
  flex: 1,
  padding: '$4',
  backgroundColor: '$background',
  borderRadius: '$4',
  borderWidth: 1,
  borderColor: '$borderColor',
  gap: '$2'
})

const ActionCard = styled(XStack, {
  padding: '$4',
  backgroundColor: '$background',
  borderRadius: '$3',
  borderWidth: 1,
  borderColor: '$borderColor',
  gap: '$3',
  alignItems: 'center'
})

// Chart data
const chartData = [
  { month: 'Jan', value: 30, color: '#f97316' },
  { month: 'Feb', value: 45, color: '#f97316' },
  { month: 'Mar', value: 38, color: '#3b82f6' },
  { month: 'Apr', value: 42, color: '#3b82f6' },
  { month: 'May', value: 35, color: '#3b82f6' },
  { month: 'Jun', value: 30, color: '#3b82f6' },
  { month: 'Jul', value: 28, color: '#3b82f6' },
  { month: 'Aug', value: 25, color: '#3b82f6' }
]

const activityData = [
  { user: 'Dr. Smith', action: 'Approved a new defense request for J. Doe', time: '2 hours ago' },
  { user: 'Admin', action: 'Generated annual defense report', time: 'Yesterday' },
  { user: 'Prof. Davis', action: "Updated jury members for A. Wilson's defense", time: '3 days ago' }
]

export default function AdminDashboard() {
  const [activeNav, setActiveNav] = useState('dashboard')

  return (
    <XStack flex={1} backgroundColor="$background">
      {/* Sidebar */}
      <Sidebar>
        {/* Logo */}
        <XStack gap="$3" alignItems="center" paddingBottom="$4">
          <Circle size={40} backgroundColor="$gray8">
            <Text color="white" fontWeight="bold">TD</Text>
          </Circle>
          <YStack>
            <Text fontWeight="bold" fontSize="$5">ThesisDefend</Text>
            <Text fontSize="$2" color="$gray10">Admin Panel</Text>
          </YStack>
        </XStack>

        {/* Navigation */}
        <YStack gap="$1" flex={1}>
          <NavItem 
            active={activeNav === 'dashboard'}
            onPress={() => setActiveNav('dashboard')}
          >
            <Home size={20} />
            <Text>Dashboard</Text>
          </NavItem>
          
          <NavItem 
            active={activeNav === 'defenses'}
            onPress={() => setActiveNav('defenses')}
          >
            <Shield size={20} />
            <Text>Defenses</Text>
          </NavItem>
          
          <NavItem 
            active={activeNav === 'users'}
            onPress={() => setActiveNav('users')}
          >
            <Users size={20} />
            <Text>Users</Text>
          </NavItem>
          
          <NavItem 
            active={activeNav === 'reports'}
            onPress={() => setActiveNav('reports')}
          >
            <FileText size={20} />
            <Text>Reports</Text>
          </NavItem>
        </YStack>

        {/* Bottom actions */}
        <YStack gap="$2" borderTopWidth={1} borderTopColor="$borderColor" paddingTop="$4">
          <NavItem>
            <Settings size={20} />
            <Text>Settings</Text>
          </NavItem>
          <NavItem>
            <HelpCircle size={20} />
            <Text>Help</Text>
          </NavItem>
          
          {/* User profile */}
          <XStack 
            gap="$3" 
            padding="$3" 
            alignItems="center"
            marginTop="$2"
          >
            <Circle size={32} backgroundColor="$blue9">
              <Text color="white" fontSize="$3">A</Text>
            </Circle>
            <YStack flex={1}>
              <Text fontWeight="600" fontSize="$3">Admin User</Text>
              <Text fontSize="$2" color="$gray10">admin@univ.edu</Text>
            </YStack>
            <ChevronDown size={16} color="$gray10" />
          </XStack>
        </YStack>
      </Sidebar>

      {/* Main Content */}
      <ScrollView flex={1}>
        <YStack padding="$6" gap="$6" backgroundColor="$gray2">
          {/* Header */}
          <YStack gap="$3">
            <Text fontSize="$8" fontWeight="bold">Administrator Dashboard</Text>
            <Text color="$gray11">Welcome back. Here's an overview of the thesis defense activities.</Text>
          </YStack>

          {/* Search and Action Bar */}
          <XStack gap="$3" alignItems="center">
            <XStack 
              flex={1} 
              backgroundColor="$background" 
              borderRadius="$3" 
              paddingHorizontal="$3"
              paddingVertical="$2"
              alignItems="center"
              gap="$2"
              borderWidth={1}
              borderColor="$borderColor"
            >
              <Search size={20} color="$gray10" />
              <Input 
                flex={1}
                placeholder="Search students, teachers..." 
                unstyled
                fontSize="$4"
              />
            </XStack>
            <Button 
              backgroundColor="$blue9" 
              color="white"
              icon={<Plus size={20} />}
              pressStyle={{ backgroundColor: '$blue10' }}
            >
              New Defense
            </Button>
          </XStack>

          {/* Stats Cards */}
          <XStack gap="$4">
            <StatCard>
              <Text fontSize="$3" color="$gray11">Total Active Students</Text>
              <Text fontSize="$9" fontWeight="bold">850</Text>
            </StatCard>
            
            <StatCard>
              <Text fontSize="$3" color="$gray11">Supervising Teachers</Text>
              <Text fontSize="$9" fontWeight="bold">120</Text>
            </StatCard>
            
            <StatCard>
              <Text fontSize="$3" color="$gray11">Upcoming Defenses</Text>
              <Text fontSize="$9" fontWeight="bold">45</Text>
            </StatCard>
            
            <StatCard>
              <Text fontSize="$3" color="$gray11">Defenses This Year</Text>
              <Text fontSize="$9" fontWeight="bold">210</Text>
            </StatCard>
          </XStack>

          {/* Chart and Actions Row */}
          <XStack gap="$4" alignItems="flex-start">
            {/* Chart Card */}
            <Card 
              flex={2} 
              padding="$5" 
              backgroundColor="$background"
              borderRadius="$4"
              borderWidth={1}
              borderColor="$borderColor"
            >
              <Text fontSize="$6" fontWeight="bold" marginBottom="$4">
                Upcoming Defenses by Month
              </Text>
              
              {/* Simple Bar Chart */}
              <XStack 
                height={300} 
                backgroundColor="$gray3" 
                borderRadius="$3"
                padding="$4"
                alignItems="flex-end"
                justifyContent="space-around"
              >
                {chartData.map((item, index) => (
                  <YStack key={index} alignItems="center" gap="$2" flex={1}>
                    <Stack
                      width={40}
                      height={`${(item.value / 50) * 100}%`}
                      backgroundColor={item.color}
                      borderRadius="$2"
                      animation="quick"
                      hoverStyle={{
                        opacity: 0.8,
                        scale: 1.05
                      }}
                    />
                    <Text fontSize="$2" color="$gray11">{item.month}</Text>
                  </YStack>
                ))}
              </XStack>
            </Card>

            {/* Action Required Panel */}
            <YStack flex={1} gap="$3">
              <Text fontSize="$6" fontWeight="bold">Action Required</Text>
              
              <ActionCard>
                <Circle size={40} backgroundColor="$red3">
                  <AlertCircle size={20} color="$red9" />
                </Circle>
                <YStack flex={1} gap="$1">
                  <Text fontWeight="600" fontSize="$4">Overdue Thesis Submissions</Text>
                  <Text fontSize="$3" color="$gray11">5 students have missed their submission deadline</Text>
                </YStack>
              </ActionCard>

              <ActionCard>
                <Circle size={40} backgroundColor="$orange3">
                  <UserX size={20} color="$orange9" />
                </Circle>
                <YStack flex={1} gap="$1">
                  <Text fontWeight="600" fontSize="$4">Unassigned Jury Members</Text>
                  <Text fontSize="$3" color="$gray11">3 upcoming defenses need jury assignments</Text>
                </YStack>
              </ActionCard>

              <ActionCard>
                <Circle size={40} backgroundColor="$blue3">
                  <FileCheck size={20} color="$blue9" />
                </Circle>
                <YStack flex={1} gap="$1">
                  <Text fontWeight="600" fontSize="$4">New Defense Requests</Text>
                  <Text fontSize="$3" color="$gray11">8 new requests are pending approval</Text>
                </YStack>
              </ActionCard>

              {/* Thesis Status Overview */}
              <Card 
                padding="$4" 
                backgroundColor="$background"
                borderRadius="$4"
                borderWidth={1}
                borderColor="$borderColor"
                marginTop="$2"
              >
                <Text fontSize="$5" fontWeight="bold" marginBottom="$3">
                  Thesis Status Overview
                </Text>
                <XStack justifyContent="center" alignItems="center">
                  <Circle size={120} backgroundColor="$orange3" position="relative">
                    <Circle size={100} backgroundColor="$orange5">
                      <Circle size={80} backgroundColor="$orange7">
                        <Text color="white" fontWeight="bold" fontSize="$6">65%</Text>
                      </Circle>
                    </Circle>
                  </Circle>
                </XStack>
                <YStack gap="$2" marginTop="$3">
                  <XStack justifyContent="space-between">
                    <XStack gap="$2" alignItems="center">
                      <Circle size={8} backgroundColor="$orange5" />
                      <Text fontSize="$3">In Progress</Text>
                    </XStack>
                    <Text fontSize="$3" fontWeight="600">540</Text>
                  </XStack>
                  <XStack justifyContent="space-between">
                    <XStack gap="$2" alignItems="center">
                      <Circle size={8} backgroundColor="$green9" />
                      <Text fontSize="$3">Completed</Text>
                    </XStack>
                    <Text fontSize="$3" fontWeight="600">290</Text>
                  </XStack>
                  <XStack justifyContent="space-between">
                    <XStack gap="$2" alignItems="center">
                      <Circle size={8} backgroundColor="$red9" />
                      <Text fontSize="$3">Overdue</Text>
                    </XStack>
                    <Text fontSize="$3" fontWeight="600">20</Text>
                  </XStack>
                </YStack>
              </Card>
            </YStack>
          </XStack>

          {/* Recent Activity */}
          <Card 
            padding="$5" 
            backgroundColor="$background"
            borderRadius="$4"
            borderWidth={1}
            borderColor="$borderColor"
          >
            <Text fontSize="$6" fontWeight="bold" marginBottom="$4">
              Recent Activity
            </Text>
            
            <YStack gap="$3">
              {/* Table Header */}
              <XStack paddingBottom="$2" borderBottomWidth={1} borderBottomColor="$borderColor">
                <Text flex={1} fontSize="$3" fontWeight="600" color="$gray11">USER</Text>
                <Text flex={2} fontSize="$3" fontWeight="600" color="$gray11">ACTION</Text>
                <Text flex={1} fontSize="$3" fontWeight="600" color="$gray11" textAlign="right">TIMESTAMP</Text>
              </XStack>

              {/* Table Rows */}
              {activityData.map((activity, index) => (
                <XStack 
                  key={index} 
                  paddingVertical="$3"
                  borderBottomWidth={index < activityData.length - 1 ? 1 : 0}
                  borderBottomColor="$borderColor"
                >
                  <Text flex={1} fontSize="$4">{activity.user}</Text>
                  <Text flex={2} fontSize="$4" color="$gray11">{activity.action}</Text>
                  <Text flex={1} fontSize="$4" color="$gray11" textAlign="right">{activity.time}</Text>
                </XStack>
              ))}
            </YStack>
          </Card>
        </YStack>
      </ScrollView>
    </XStack>
  )
}
