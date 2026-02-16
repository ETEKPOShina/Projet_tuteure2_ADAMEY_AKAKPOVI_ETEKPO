import { useState } from 'react'
import {
  Dialog,
  YStack,
  XStack,
  Text,
  Button,
  Input,
  TextArea,
  H3,
} from 'tamagui'
import { useMutation } from 'react-relay'
import { SaisirNoteMutation } from '@/src/relay/mutations/SaisirNoteMutation'

interface RateStudentDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  jury: {
    id: string
    roleDisplay: string
    soutenance?: {
      travaux?: Array<{
        titre: string
        etudiantNom: string
        resume?: string
      }>
    }
  } | null
  onSuccess?: () => void
}

export function RateStudentDialog({
  open,
  onOpenChange,
  jury,
  onSuccess,
}: RateStudentDialogProps) {
  const [note, setNote] = useState('')
  const [commentaire, setCommentaire] = useState('')
  const [loading, setLoading] = useState(false)

  const [commitMutation] = useMutation(SaisirNoteMutation)

  const handleSubmit = () => {
    if (!jury || !note) {
      alert('Veuillez entrer une note')
      return
    }

    const noteFloat = parseFloat(note)
    if (isNaN(noteFloat) || noteFloat < 0 || noteFloat > 20) {
      alert('La note doit être entre 0 et 20')
      return
    }

    setLoading(true)
    commitMutation({
      variables: {
        juryId: jury.id,
        note: noteFloat,
        commentaire: commentaire.trim() || null,
      },
      onCompleted: () => {
        onOpenChange(false)
        setNote('')
        setCommentaire('')
        setLoading(false)
        onSuccess?.()
      },
      onError: (error) => {
        console.error('Rate error:', error)
        setLoading(false)
        alert('Erreur lors de la soumission de la note')
      },
    })
  }

  const travail = jury?.soutenance?.travaux?.[0]

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
            <H3 fontWeight="700">Noter l'Étudiant</H3>

            {jury && travail && (
              <YStack gap="$3" p="$3" bg="$gray2" br="$2">
                <Text fontWeight="600" fontSize="$4">
                  {travail.titre}
                </Text>
                <Text fontSize="$3" color="$gray11">
                  Étudiant: {travail.etudiantNom}
                </Text>
                <Text fontSize="$3" color="$gray10">
                  Rôle: {jury.roleDisplay}
                </Text>
              </YStack>
            )}

            <YStack gap="$2">
              <Text fontWeight="600">Note (0-20):</Text>
              <Input
                type="number"
                placeholder="Ex: 15.5"
                value={note}
                onChangeText={setNote}
                min={0}
                max={20}
                step={0.5}
              />
            </YStack>

            <YStack gap="$2">
              <Text fontWeight="600">Commentaire (optionnel):</Text>
              <TextArea
                placeholder="Votre appréciation de la présentation..."
                value={commentaire}
                onChangeText={setCommentaire}
                minHeight={100}
              />
            </YStack>

            <XStack gap="$3" jc="flex-end">
              <Button
                size="$3"
                variant="outlined"
                onPress={() => {
                  onOpenChange(false)
                  setNote('')
                  setCommentaire('')
                }}
                disabled={loading}
              >
                Annuler
              </Button>
              <Button
                size="$3"
                bg="$green10"
                color="white"
                onPress={handleSubmit}
                disabled={loading || !note}
              >
                {loading ? 'Envoi...' : 'Soumettre la Note'}
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
