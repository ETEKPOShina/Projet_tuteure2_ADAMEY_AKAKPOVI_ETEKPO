'use client'

import { useState, Suspense } from 'react'
import { useLazyLoadQuery } from 'react-relay'
import {
  YStack,
  XStack,
  Text,
  Button,
  Card,
  H1,
  H2,
  Tabs,
  Spinner,
} from 'tamagui'
import {
  IconCalendarEvent,
  IconWriting,
  IconDownload,
  IconCheck,
  IconX,
} from '@tabler/icons-react'
import { DashboardEncadrantQuery } from '@/src/relay/queries/DashboardEncadrantQuery'
import { DashboardJuryQuery } from '@/src/relay/queries/DashboardJuryQuery'
import { ValidateWorkDialogTeacher } from '@/src/components/teacher/ValidateWorkDialogTeacher'
import { RateStudentDialog } from '@/src/components/teacher/RateStudentDialog'
import { TeacherAvailabilityDialog } from '@/src/components/teacher/TeacherAvailabilityDialog'
import { formatDate, formatTime } from '@/src/utils/formatters'

function EncadrantTab() {
  const data = useLazyLoadQuery(DashboardEncadrantQuery, {})
  const [selectedWork, setSelectedWork] = useState(null)
  const [validateDialogOpen, setValidateDialogOpen] = useState(false)

  const travaux = data?.mesTravauxEncadres || []

  return (
    <YStack gap="$6">
      <YStack gap="$3">
        <H2 fontSize="$6" fontWeight="700">Mes Étudiants Supervisés</H2>
        <Text fontSize="$4" color="$gray11">
          {travaux.length} {travaux.length > 1 ? 'mémoires' : 'mémoire'} en supervision
        </Text>
      </YStack>

      {travaux.length === 0 ? (
        <Card p="$6" bg="$gray2" br="$4" jc="center" ai="center">
          <Text fontSize="$5" color="$gray10">
            Aucun étudiant supervisé pour le moment
          </Text>
        </Card>
      ) : (
        <YStack gap="$3">
          {travaux.map((travail) => (
            <Card
              key={travail.id}
              p="$4"
              borderWidth={2}
              borderColor="$gray4"
              br="$4"
              hoverStyle={{ bg: '$gray2' }}
            >
              <YStack gap="$3">
                <XStack jc="space-between" ai="flex-start" gap="$4">
                  <YStack f={1} gap="$2">
                    <Text fontWeight="700" fontSize="$5">
                      {travail.titre}
                    </Text>
                    <XStack gap="$2" ai="center">
                      <Text color="$gray11" fontWeight="500">
                        Étudiant:
                      </Text>
                      <Text fontWeight="600">{travail.etudiantNom}</Text>
                    </XStack>

                    {travail.statut && (
                      <XStack gap="$2" ai="center">
                        <Text color="$gray11" fontWeight="500">
                          Statut:
                        </Text>
                        <Text
                          px="$3"
                          py="$1"
                          br="$2"
                          bg={
                            travail.statut === 'ACCEPTE'
                              ? '$green3'
                              : travail.statut === 'REJETE'
                                ? '$red3'
                                : travail.statut === 'SOUMIS'
                                  ? '$blue3'
                                  : '$gray3'
                          }
                          color={
                            travail.statut === 'ACCEPTE'
                              ? '$green11'
                              : travail.statut === 'REJETE'
                                ? '$red11'
                                : travail.statut === 'SOUMIS'
                                  ? '$blue11'
                                  : '$gray11'
                          }
                          fontWeight="600"
                          fontSize="$3"
                        >
                          {travail.statutDisplay || travail.statut}
                        </Text>
                      </XStack>
                    )}

                    <Text fontSize="$3" color="$gray10">
                      Soumis le: {formatDate(travail.dateSoumission)}
                    </Text>
                  </YStack>

                  <Button
                    bg="$blue10"
                    color="white"
                    fontWeight="$6"
                    size="$4"
                    onPress={() => {
                      setSelectedWork(travail)
                      setValidateDialogOpen(true)
                    }}
                  >
                    Évaluer
                  </Button>
                </XStack>

                {travail.documents && travail.documents.length > 0 && (
                  <XStack gap="$2" ai="center" pt="$3" borderTopWidth={1} borderColor="$gray4">
                    <IconDownload size={18} color="#003366" />
                    <Text fontWeight="500">Pièces jointes:</Text>
                    {travail.documents.map((doc) => (
                      <Button
                        key={doc.id}
                        size="$2"
                        variant="outlined"
                        onPress={() => window.open(doc.uri, '_blank')}
                      >
                        {doc.nomFichier}
                      </Button>
                    ))}
                  </XStack>
                )}

                {travail.soutenance && (
                  <Card p="$3" bg="$blue2" br="$3" mt="$2">
                    <YStack gap="$2">
                      <Text fontWeight="600" color="#003366">
                        Soutenance Prévue
                      </Text>
                      <XStack gap="$4" flexWrap="wrap">
                        <YStack gap="$1">
                          <Text fontSize="$3" color="$gray11">Date</Text>
                          <Text fontWeight="600">
                            {formatDate(travail.soutenance.dateSoutenance)}
                          </Text>
                        </YStack>
                        <YStack gap="$1">
                          <Text fontSize="$3" color="$gray11">
                            Heure
                          </Text>
                          <Text fontWeight="600">
                            {travail.soutenance.heureDebut}
                          </Text>
                        </YStack>
                        <YStack gap="$1">
                          <Text fontSize="$3" color="$gray11">
                            Salle
                          </Text>
                          <Text fontWeight="600">
                            {travail.soutenance.salle}
                          </Text>
                        </YStack>
                        <YStack gap="$1">
                          <Text fontSize="$3" color="$gray11">
                            Mode
                          </Text>
                          <Text fontWeight="600">
                            {travail.soutenance.modeDisplay}
                          </Text>
                        </YStack>
                      </XStack>
                    </YStack>
                  </Card>
                )}
              </YStack>
            </Card>
          ))}
        </YStack>
      )}

      {selectedWork && (
        <ValidateWorkDialogTeacher
          open={validateDialogOpen}
          onOpenChange={setValidateDialogOpen}
          work={selectedWork}
          onSuccess={() => {
            setValidateDialogOpen(false)
            setSelectedWork(null)
          }}
        />
      )}
    </YStack>
  )
}

function JuryTab() {
  const data = useLazyLoadQuery(DashboardJuryQuery, {})
  const [selectedJury, setSelectedJury] = useState(null)
  const [rateDialogOpen, setRateDialogOpen] = useState(false)

  const jurys = data?.mesJurys || []

  return (
    <YStack gap="$6">
      <YStack gap="$3">
        <H2 fontSize="$6" fontWeight="700">Mes Soutenances</H2>
        <Text fontSize="$4" color="$gray11">
          {jurys.length} {jurys.length > 1 ? 'soutenances' : 'soutenance'} prévue(s)
        </Text>
      </YStack>

      {jurys.length === 0 ? (
        <Card p="$6" bg="$gray2" br="$4" jc="center" ai="center">
          <Text fontSize="$5" color="$gray10">
            Aucune soutenance prévue pour le moment
          </Text>
        </Card>
      ) : (
        <YStack gap="$3">
          {jurys.map((jury) => {
            const travail = jury.soutenance?.travaux?.[0]
            const rated = jury.note !== null && jury.note !== undefined

            return (
              <Card
                key={jury.id}
                p="$4"
                borderWidth={2}
                borderColor={rated ? '$green4' : '$gray4'}
                br="$4"
                hoverStyle={{ bg: '$gray2' }}
              >
                <YStack gap="$3">
                  <XStack jc="space-between" ai="flex-start" gap="$4">
                    <YStack f={1} gap="$2">
                      {travail && (
                        <>
                          <Text fontWeight="700" fontSize="$5">
                            {travail.titre}
                          </Text>
                          <XStack gap="$2" ai="center">
                            <Text color="$gray11" fontWeight="500">
                              Étudiant:
                            </Text>
                            <Text fontWeight="600">{travail.etudiantNom}</Text>
                          </XStack>
                        </>
                      )}

                      <XStack gap="$2" ai="center">
                        <Text color="$gray11" fontWeight="500">
                          Rôle:
                        </Text>
                        <Text fontWeight="600">{jury.roleDisplay}</Text>
                      </XStack>

                      {rated && (
                        <XStack gap="$2" ai="center">
                          <IconCheck size={18} color="#22c55e" />
                          <Text fontWeight="600" color="#22c55e">
                            Noté: {jury.note}/20
                          </Text>
                        </XStack>
                      )}
                    </YStack>

                    <Button
                      bg={rated ? '$green10' : '$blue10'}
                      color="white"
                      fontWeight="$6"
                      size="$4"
                      icon={
                        rated ? <IconCheck size={18} /> : undefined
                      }
                      onPress={() => {
                        setSelectedJury(jury)
                        setRateDialogOpen(true)
                      }}
                      disabled={rated}
                    >
                      {rated ? 'Noté' : 'Noter'}
                    </Button>
                  </XStack>

                  {jury.soutenance && (
                    <Card p="$3" bg="$blue2" br="$3">
                      <YStack gap="$2">
                        <Text fontWeight="600" color="#003366">
                          Infos de la Soutenance
                        </Text>
                        <XStack gap="$4" flexWrap="wrap">
                          <YStack gap="$1">
                            <Text fontSize="$3" color="$gray11">
                              Date
                            </Text>
                            <Text fontWeight="600">
                              {formatDate(jury.soutenance.dateSoutenance)}
                            </Text>
                          </YStack>
                          <YStack gap="$1">
                            <Text fontSize="$3" color="$gray11">
                              Heure
                            </Text>
                            <Text fontWeight="600">
                              {jury.soutenance.heureDebut}
                            </Text>
                          </YStack>
                          <YStack gap="$1">
                            <Text fontSize="$3" color="$gray11">
                              Salle
                            </Text>
                            <Text fontWeight="600">
                              {jury.soutenance.salle}
                            </Text>
                          </YStack>
                          <YStack gap="$1">
                            <Text fontSize="$3" color="$gray11">
                              Mode
                            </Text>
                            <Text fontWeight="600">
                              {jury.soutenance.modeDisplay}
                            </Text>
                          </YStack>
                        </XStack>
                      </YStack>
                    </Card>
                  )}

                  {travail?.documents && travail.documents.length > 0 && (
                    <XStack
                      gap="$2"
                      ai="center"
                      p="$3"
                      bg="$gray2"
                      br="$3"
                    >
                      <IconDownload size={18} color="#003366" />
                      <Text fontWeight="500">Mémoire:</Text>
                      {travail.documents.map((doc) => (
                        <Button
                          key={doc.id}
                          size="$2"
                          variant="outlined"
                          onPress={() => window.open(doc.uri, '_blank')}
                        >
                          Ouvrir
                        </Button>
                      ))}
                    </XStack>
                  )}

                  {jury.note && jury.commentaire && (
                    <Card p="$3" bg="$green2" br="$3">
                      <YStack gap="$2">
                        <Text fontWeight="600" color="#16a34a">
                          Votre Appréciation
                        </Text>
                        <Text fontSize="$3">{jury.commentaire}</Text>
                      </YStack>
                    </Card>
                  )}
                </YStack>
              </Card>
            )
          })}
        </YStack>
      )}

      {selectedJury && (
        <RateStudentDialog
          open={rateDialogOpen}
          onOpenChange={setRateDialogOpen}
          jury={selectedJury}
          onSuccess={() => {
            setRateDialogOpen(false)
            setSelectedJury(null)
          }}
        />
      )}
    </YStack>
  )
}

function DashboardPageContent() {
  const [availabilityDialogOpen, setAvailabilityDialogOpen] = useState(false)

  return (
    <>
      {/* Header */}
      <XStack jc="space-between" ai="center" mb="$8" flexWrap="wrap" gap="$4">
        <YStack gap="$1">
          <H1 fontWeight="700" fontSize="$9">
            Tableau de Bord Enseignant
          </H1>
          <Text fontSize="$5" color="$gray11">
            Gérez vos supervisions et évaluations
          </Text>
        </YStack>
        <Button
          bg="#003366"
          color="white"
          fontWeight="$6"
          size="$4"
          icon={<IconCalendarEvent size={18} />}
          onPress={() => setAvailabilityDialogOpen(true)}
        >
          Ajouter une Disponibilité
        </Button>
      </XStack>

      {/* Tabs */}
      <Tabs
        defaultValue="tab1"
        orientation="horizontal"
        flexDirection="column"
        width="100%"
        borderColor="$borderColor"
      >
        <Tabs.List disablePassBorderRadius>
          <Tabs.Trigger value="tab1" flexDirection="column">
            <Text fontWeight="600">Mes Étudiants</Text>
          </Tabs.Trigger>
          <Tabs.Trigger value="tab2" flexDirection="column">
            <Text fontWeight="600">Mes Soutenances</Text>
          </Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content value="tab1" p="$4">
          <Suspense fallback={<Spinner size="large" />}>
            <EncadrantTab />
          </Suspense>
        </Tabs.Content>

        <Tabs.Content value="tab2" p="$4">
          <Suspense fallback={<Spinner size="large" />}>
            <JuryTab />
          </Suspense>
        </Tabs.Content>
      </Tabs>

      {/* Availability Dialog */}
      <TeacherAvailabilityDialog
        open={availabilityDialogOpen}
        onOpenChange={setAvailabilityDialogOpen}
        onSuccess={() => {
          setAvailabilityDialogOpen(false)
        }}
      />
    </>
  )
}

export default function DashboardPage() {
  return (
    <Suspense fallback={<Spinner size="large" />}>
      <DashboardPageContent />
    </Suspense>
  )
}