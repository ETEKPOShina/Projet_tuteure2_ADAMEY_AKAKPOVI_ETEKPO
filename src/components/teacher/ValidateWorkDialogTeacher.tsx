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
import { ACCEPTER_TRAVAIL_MUTATION } from '@/src/relay/mutations/AccepterTravailMutation'
import { REJETER_TRAVAIL_MUTATION } from '@/src/relay/mutations/RejeterTravailMutation'

interface ValidateWorkDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  work: {
    id: string
    titre: string
    etudiantNom: string
    documents?: Array<{ uri: string; nomFichier: string }>
  } | null
  onSuccess?: () => void
}

export function ValidateWorkDialogTeacher({
  open,
  onOpenChange,
  work,
  onSuccess,
}: ValidateWorkDialogProps) {
  const [motif, setMotif] = useState('')
  const [isRejecting, setIsRejecting] = useState(false)

  const [acceptCommit] = useMutation(ACCEPTER_TRAVAIL_MUTATION)
  const [rejectCommit] = useMutation(REJETER_TRAVAIL_MUTATION)

  const handleAccept = () => {
    if (!work) return

    acceptCommit({
      variables: { id: work.id },
      onCompleted: () => {
        onOpenChange(false)
        setMotif('')
        setIsRejecting(false)
        onSuccess?.()
      },
      onError: (error) => {
        console.error('Accept error:', error)
      },
    })
  }

  const handleReject = () => {
    if (!work || !motif.trim()) {
      alert('Veuillez entrer un motif de rejet')
      return
    }

    rejectCommit({
      variables: { id: work.id, motif },
      onCompleted: () => {
        onOpenChange(false)
        setMotif('')
        setIsRejecting(false)
        onSuccess?.()
      },
      onError: (error) => {
        console.error('Reject error:', error)
      },
    })
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
            <H3 fontWeight="700">Valider le Travail</H3>

            {work && (
              <YStack gap="$3" p="$3" bg="$gray2" br="$2">
                <Text fontWeight="600" fontSize="$4">
                  {work.titre}
                </Text>
                <Text fontSize="$3" color="$gray11">
                  Étudiant: {work.etudiantNom}
                </Text>

                {work.documents && work.documents.length > 0 && (
                  <XStack gap="$2" ai="center">
                    <Text fontSize="$3" color="$gray10">
                      Mémoire:
                    </Text>
                    <Button
                      size="$2"
                      variant="outlined"
                      onPress={() => window.open(work.documents[0].uri, '_blank')}
                    >
                      Ouvrir PDF
                    </Button>
                  </XStack>
                )}
              </YStack>
            )}

            {isRejecting ? (
              <YStack gap="$3">
                <Text fontWeight="600">Motif de rejet:</Text>
                <TextArea
                  placeholder="Décrivez les corrections nécessaires..."
                  value={motif}
                  onChangeText={setMotif}
                  minHeight={100}
                />
              </YStack>
            ) : null}

            <XStack gap="$3" jc="flex-end">
              <Button
                size="$3"
                variant="outlined"
                onPress={() => {
                  onOpenChange(false)
                  setMotif('')
                  setIsRejecting(false)
                }}
              >
                Annuler
              </Button>

              {!isRejecting ? (
                <>
                  <Button
                    size="$3"
                    bg="$orange10"
                    color="white"
                    onPress={() => setIsRejecting(true)}
                  >
                    Demander Corrections
                  </Button>
                  <Button
                    size="$3"
                    bg="$green10"
                    color="white"
                    onPress={handleAccept}
                  >
                    Approuver
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    size="$3"
                    variant="outlined"
                    onPress={() => {
                      setIsRejecting(false)
                      setMotif('')
                    }}
                  >
                    Retour
                  </Button>
                  <Button
                    size="$3"
                    bg="$orange10"
                    color="white"
                    onPress={handleReject}
                  >
                    Confirmer Rejet
                  </Button>
                </>
              )}
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
