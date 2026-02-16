'use client'

import { useState } from 'react'
import { useLazyLoadQuery, useMutation } from 'react-relay'
import {
  Dialog,
  YStack,
  XStack,
  Text,
  Button,
  Card,
  Select,
  H3,
  Spinner,
  ScrollView,
} from 'tamagui'
import { IconLink, IconAlertCircle } from '@tabler/icons-react'
import { ASSIGN_STUDENT_TO_SOUTENANCE_QUERY } from '@/src/relay/queries/AssignStudentToSoutenanceQuery'
import { PROGRAMMER_TRAVAIL_MUTATION } from '@/src/relay/mutations/ProgrammerTravailMutation'
import { formatDate } from '@/src/utils/formatters'

interface AssignStudentToSoutenanceDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSuccess?: () => void
}

export function AssignStudentToSoutenanceDialog({
  open,
  onOpenChange,
  onSuccess,
}: AssignStudentToSoutenanceDialogProps) {
  const [selectedStudentId, setSelectedStudentId] = useState<string | null>(null)
  const [selectedSoutenanceId, setSelectedSoutenanceId] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const data = useLazyLoadQuery<any>(ASSIGN_STUDENT_TO_SOUTENANCE_QUERY, {})
  const [programmerCommit] = useMutation(PROGRAMMER_TRAVAIL_MUTATION)

  const travaux = data?.travauxAcceptes || []
  const soutenances = data?.soutenancesAVenir || []

  // Filtrer les travaux qui n'ont pas encore de soutenance
  const availableTravaux = travaux.filter((t: any) => !t.soutenance?.id)

  const selectedTravail = travaux.find((t: any) => t.id === selectedStudentId)
  const selectedSoutenance = soutenances.find((s: any) => s.id === selectedSoutenanceId)

  const handleAssign = () => {
    if (!selectedStudentId || !selectedSoutenanceId) {
      alert('Veuillez sélectionner un étudiant et une soutenance')
      return
    }

    setIsLoading(true)
    programmerCommit({
      variables: {
        travailId: selectedStudentId,
        soutenanceId: selectedSoutenanceId,
      },
      onCompleted: () => {
        setIsLoading(false)
        onOpenChange(false)
        setSelectedStudentId(null)
        setSelectedSoutenanceId(null)
        onSuccess?.()
      },
      onError: (error) => {
        setIsLoading(false)
        console.error('Assignment error:', error)
        alert('Erreur lors de l\'association')
      },
    })
  }

  return (
    <Dialog modal open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay
          key="overlay"
          animation="quick"
          opacity={0.5}
          enterStyle={{ opacity: 0 }}
          exitStyle={{ opacity: 0 }}
        />
        <Dialog.Content
          bordered
          elevate
          key="content"
          animationConfig={{
            type: 'spring',
            damping: 19,
            mass: 0.2,
            stiffness: 300,
          }}
          enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
          exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
          gap="$4"
          maxWidth={600}
          padding="$6"
        >
          {/* Header */}
          <YStack gap="$2">
            <XStack ai="center" gap="$2">
              <IconLink size={24} color="#003366" />
              <H3 fontWeight="700">Associer un Étudiant à une Soutenance</H3>
            </XStack>
            <Text fontSize="$3" color="$gray11">
              Sélectionnez un étudiant ayant un travail accepté et une soutenance
            </Text>
          </YStack>

          <ScrollView maxHeight={400} showsVerticalScrollIndicator>
            <YStack gap="$4" padding="$2">
              {/* Sélection de l'étudiant */}
              <YStack gap="$2">
                <Text fontSize="$3" fontWeight="600" color="$gray12">
                  Sélectionner un Étudiant
                </Text>
                {availableTravaux.length === 0 ? (
                  <Card p="$3" bg="$orange2" br="$3" gap="$2">
                    <XStack ai="center" gap="$2">
                      <IconAlertCircle size={18} color="#ff9500" />
                      <Text fontSize="$3" color="$orange11">
                        Aucun étudiant disponible avec un travail accepté
                      </Text>
                    </XStack>
                  </Card>
                ) : (
                  <YStack gap="$2">
                    {availableTravaux.map((travail: any) => (
                      <Card
                        key={travail.id}
                        onPress={() => setSelectedStudentId(travail.id)}
                        p="$3"
                        br="$3"
                        borderWidth={2}
                        borderColor={
                          selectedStudentId === travail.id ? '$blue10' : '$gray4'
                        }
                        bg={
                          selectedStudentId === travail.id ? '$blue2' : 'white'
                        }
                        cursor="pointer"
                        hoverStyle={{ bg: '$gray2' }}
                      >
                        <YStack gap="$1">
                          <Text fontWeight="600">{travail.etudiantNom}</Text>
                          <Text fontSize="$2" color="$gray11">
                            {travail.titre}
                          </Text>
                        </YStack>
                      </Card>
                    ))}
                  </YStack>
                )}
              </YStack>

              {/* Sélection de la soutenance */}
              <YStack gap="$2">
                <Text fontSize="$3" fontWeight="600" color="$gray12">
                  Sélectionner une Soutenance
                </Text>
                {soutenances.length === 0 ? (
                  <Card p="$3" bg="$orange2" br="$3" gap="$2">
                    <XStack ai="center" gap="$2">
                      <IconAlertCircle size={18} color="#ff9500" />
                      <Text fontSize="$3" color="$orange11">
                        Aucune soutenance disponible
                      </Text>
                    </XStack>
                  </Card>
                ) : (
                  <YStack gap="$2">
                    {soutenances.map((soutenance: any) => (
                      <Card
                        key={soutenance.id}
                        onPress={() => setSelectedSoutenanceId(soutenance.id)}
                        p="$3"
                        br="$3"
                        borderWidth={2}
                        borderColor={
                          selectedSoutenanceId === soutenance.id
                            ? '$green10'
                            : '$gray4'
                        }
                        bg={
                          selectedSoutenanceId === soutenance.id
                            ? '$green2'
                            : 'white'
                        }
                        cursor="pointer"
                        hoverStyle={{ bg: '$gray2' }}
                      >
                        <YStack gap="$2">
                          <XStack jc="space-between" ai="center">
                            <Text fontWeight="600">
                              {formatDate(soutenance.dateSoutenance)}
                            </Text>
                            <Text fontSize="$2" color="$gray11">
                              {soutenance.heureDebut} - {soutenance.heureFin}
                            </Text>
                          </XStack>
                          <XStack gap="$3">
                            <Text fontSize="$2" color="$gray11">
                              Salle: {soutenance.salle}
                            </Text>
                            <Text fontSize="$2" color="$gray11">
                              Mode: {soutenance.modeDisplay}
                            </Text>
                          </XStack>
                        </YStack>
                      </Card>
                    ))}
                  </YStack>
                )}
              </YStack>

              {/* Résumé */}
              {selectedTravail && selectedSoutenance && (
                <Card p="$3" bg="$blue2" br="$3" gap="$2">
                  <Text fontWeight="600" color="$blue11">
                    Vérification
                  </Text>
                  <YStack gap="$1">
                    <Text fontSize="$2">
                      <Text fontWeight="600">Étudiant:</Text>{' '}
                      {selectedTravail.etudiantNom}
                    </Text>
                    <Text fontSize="$2">
                      <Text fontWeight="600">Travail:</Text> {selectedTravail.titre}
                    </Text>
                    <Text fontSize="$2">
                      <Text fontWeight="600">Soutenance:</Text> Le{' '}
                      {formatDate(selectedSoutenance.dateSoutenance)} à{' '}
                      {selectedSoutenance.heureDebut} en salle{' '}
                      {selectedSoutenance.salle}
                    </Text>
                  </YStack>
                </Card>
              )}
            </YStack>
          </ScrollView>

          {/* Actions */}
          <XStack gap="$3" jc="flex-end">
            <Button
              size="$4"
              variant="outlined"
              onPress={() => onOpenChange(false)}
              disabled={isLoading}
            >
              Annuler
            </Button>
            <Button
              size="$4"
              bg="#003366"
              color="white"
              fontWeight="600"
              onPress={handleAssign}
              disabled={!selectedStudentId || !selectedSoutenanceId || isLoading}
              icon={isLoading ? undefined : <IconLink size={18} />}
            >
              {isLoading ? <Spinner size="small" /> : 'Associer'}
            </Button>
          </XStack>

          <Dialog.Close asChild>
            <Button
              position="absolute"
              top="$3"
              right="$3"
              size="$2"
              circular
              icon={null}
            >
              ×
            </Button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog>
  )
}
