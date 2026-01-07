'use client';
// components/CalendarWidget.tsx
import { YStack, XStack, Text, Card, H2, Separator } from 'tamagui'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import { PickersDay, PickersDayProps } from '@mui/x-date-pickers/PickersDay'
import { styled } from '@mui/material/styles'
import dayjs, { Dayjs } from 'dayjs'
import 'dayjs/locale/fr'
import { Badge } from '@mui/material'
import  React from 'react'


// Jours avec des soutenances
const daysWithDefenses = [5, 11, 18]

// Styled PickersDay avec badge pour les jours avec événements
const StyledDay = styled(PickersDay)(({ theme }) => ({
  '&.has-event': {
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: '4px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '4px',
      height: '4px',
      borderRadius: '50%',
      backgroundColor: theme.palette.primary.main,
    },
  },
  '&.Mui-selected.has-event::after': {
    backgroundColor: 'white',
  },
}))

// Custom Day Component
function ServerDay(props: PickersDayProps<Dayjs> & { hasEvent?: boolean }) {
  const { hasEvent, day, outsideCurrentMonth, ...other } = props

  return (
    <StyledDay
      {...other}
      outsideCurrentMonth={outsideCurrentMonth}
      day={day}
      className={hasEvent && !outsideCurrentMonth ? 'has-event' : ''}
    />
  )
}

export default function CalendarWidget() {
  const [selectedDate, setSelectedDate] = React.useState<Dayjs | null>(
    dayjs('2024-11-05')
  )

  // Événements à venir
  const upcomingEvents = [
    {
      day: '05',
      month: 'NOV',
      title: 'Soutenance de M. Koffi',
      time: '10:00 - Salle B12',
    },
    {
      day: '11',
      month: 'NOV',
      title: 'Soutenance de Mme. Akou',
      time: '14:30 - Salle C01',
    },
  ]

  return (
    <Card p="$4" bordered bg='#ffffff' br={15}>
      <YStack gap="$4">
        <H2 fontSize="$6" fontWeight="700" textAlign='center' >
          Soutenances à Venir
        </H2>

        {/* MUI Calendar */}
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="fr">
          <DateCalendar
            value={selectedDate}
            onChange={(newValue) => setSelectedDate(newValue)}
            slots={{
              day: ServerDay,
            }}
            slotProps={{
              day: (ownerState) => ({
                hasEvent: daysWithDefenses.includes(ownerState.day.date()),
              } as any),
            }}
            sx={{
              width: '100%',
              maxHeight: 'none',
              '& .MuiPickersCalendarHeader-root': {
                paddingLeft: 1,
                paddingRight: 1,
                marginBottom: 1,
              },
              '& .MuiDayCalendar-header': {
                justifyContent: 'space-around',
              },
              '& .MuiDayCalendar-weekContainer': {
                justifyContent: 'space-around',
              },
              '& .MuiPickersDay-root': {
                fontSize: '0.875rem',
                fontWeight: 500,
              },
              '& .MuiPickersDay-root.Mui-selected': {
                backgroundColor: '#003366',
                '&:hover': {
                  backgroundColor: '#002147',
                },
              },
            }}
          />
        </LocalizationProvider>

        <Separator />

        {/* Événements à venir */}
        <YStack gap="$3">
          {upcomingEvents.map((event, index) => (
            <XStack key={index} ai="center" gap="$3">
              <YStack
                w={48}
                h={48}
                ai="center"
                jc="center"
                bg="$blue3"
                br="$3"
              >
                <Text fontWeight="700" fontSize="$3" color="$blue11">
                  {event.day}
                </Text>
                <Text fontSize="$1" color="$blue11">
                  {event.month}
                </Text>
              </YStack>
              <YStack f={1}>
                <Text fontWeight="600" fontSize="$3">
                  {event.title}
                </Text>
                <Text fontSize="$2" color="$gray11">
                  {event.time}
                </Text>
              </YStack>
            </XStack>
          ))}
        </YStack>
      </YStack>
    </Card>
  )
}

// Vous devez aussi installer dayjs
// npm install dayjs