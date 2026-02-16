import { useState } from 'react'
import {
  Dialog,
  YStack,
  XStack,
  Text,
  Button,
  Input,
  H3,
  Select,
} from 'tamagui'
import { useMutation } from 'react-relay'
import { CreateDisponibiliteMutation } from '@/src/relay/mutations/CreateDisponibiliteMutation'
import { IconChevronDown } from '@tabler/icons-react'

interface TeacherAvailabilityDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSuccess?: () => void
}

const jours = [
  { label: 'Lundi', value: 'LUNDI' },
  { label: 'Mardi', value: 'MARDI' },
  { label: 'Mercredi', value: 'MERCREDI' },
  { label: 'Jeudi', value: 'JEUDI' },
  { label: 'Vendredi', value: 'VENDREDI' },
]

export function TeacherAvailabilityDialog({
  open,
  onOpenChange,
  onSuccess,
}: TeacherAvailabilityDialogProps) {
  const [jourSemaine, setJourSemaine] = useState<string>('LUNDI')
  const [heureDebut, setHeureDebut] = useState('08:00')
  const [heureFin, setHeureFin] = useState('12:00')
  const [loading, setLoading] = useState(false)

  const [commitMutation] = useMutation(CreateDisponibiliteMutation)

  const handleSubmit = () => {
    if (!jourSemaine || !heureDebut || !heureFin) {
      alert('Veuillez remplir tous les champs')
      return
    }

    const startMinutes = timeToMinutes(heureDebut)
    const endMinutes = timeToMinutes(heureFin)

    if (endMinutes <= startMinutes) {
      alert('L\'heure de fin doit être après l\'heure de début')
      return
    }

    setLoading(true)
    commitMutation({
      variables: {
        jourSemaine,
        heureDebut: `${heureDebut}:00`,
        heureFin: `${heureFin}:00`,
      },
      onCompleted: () => {
        onOpenChange(false)
        setJourSemaine('LUNDI')
        setHeureDebut('08:00')
        setHeureFin('12:00')
        setLoading(false)
        onSuccess?.()
      },
      onError: (error) => {
        console.error('Create availability error:', error)
        setLoading(false)
        alert('Erreur lors de la création de la disponibilité')
      },
    })
  }

  const timeToMinutes = (time: string) => {
    const [hours, minutes] = time.split(':').map(Number)
    return hours * 60 + minutes
  }

  return (
    <Dialog modal open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content
          bordered
          elevate
          key="content"
          animateOnly={['transform', 'opacity']}
          animation="medium"
          enterStyle={{ x: 0, y: -20, opacity: 0 }}
          exitStyle={{ x: 0, y: 30, opacity: 0 }}
          gap="$4"
          p="$6"
          maxWidth={500}
        >
          <YStack gap="$4">
            <H3 fontWeight="700">Ajouter une Disponibilité</H3>

            <YStack gap="$2">
              <Text fontWeight="600">Jour de la semaine:</Text>
              <Select
                value={jourSemaine}
                onValueChange={setJourSemaine}
              >
                <Select.Trigger w="100%" iconAfter={IconChevronDown}>
                  <Select.Value
                    placeholder="Sélectionnez un jour"
                    color="#003366"
                  />
                </Select.Trigger>
                <Select.Content>
                  <Select.ScrollUpButton />
                  <Select.Viewport minWidth={200}>
                    {jours.map((jour) => (
                      <Select.Item
                        key={jour.value}
                        index={jours.indexOf(jour)}
                        value={jour.value}
                        label={jour.label}
                      >
                        <Text>{jour.label}</Text>
                      </Select.Item>
                    ))}
                  </Select.Viewport>
                  <Select.ScrollDownButton />
                </Select.Content>
              </Select>
            </YStack>

            <XStack gap="$4">
              <YStack gap="$2" f={1}>
                <Text fontWeight="600">Heure de début:</Text>
                <Input
                  type="time"
                  value={heureDebut}
                  onChangeText={setHeureDebut}
                  placeholder="08:00"
                />
              </YStack>
              <YStack gap="$2" f={1}>
                <Text fontWeight="600">Heure de fin:</Text>
                <Input
                  type="time"
                  value={heureFin}
                  onChangeText={setHeureFin}
                  placeholder="12:00"
                />
              </YStack>
            </XStack>

            <XStack gap="$3" jc="flex-end">
              <Button
                size="$3"
                variant="outlined"
                onPress={() => {
                  onOpenChange(false)
                  setJourSemaine('LUNDI')
                  setHeureDebut('08:00')
                  setHeureFin('12:00')
                }}
                disabled={loading}
              >
                Annuler
              </Button>
              <Button
                size="$3"
                bg="$blue10"
                color="white"
                onPress={handleSubmit}
                disabled={loading}
              >
                {loading ? 'Ajout...' : 'Ajouter Disponibilité'}
              </Button>
            </XStack>
          </YStack>

          <Dialog.Close asChild>
            <Button position="absolute" top="$2" right="$2" size="$2" circular />
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog>
  )
}
