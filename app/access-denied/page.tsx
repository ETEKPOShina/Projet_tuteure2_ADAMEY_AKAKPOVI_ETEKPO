'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import { YStack, XStack, Text, Button, Card, H1 } from 'tamagui'
import { IconLock, IconArrowLeft } from '@tabler/icons-react'

const roleDisplayNames: Record<string, string> = {
  ETUDIANT: 'Étudiant',
  ENSEIGNANT: 'Enseignant',
  ADMINISTRATEUR: 'Administrateur',
}

const roleDescriptions: Record<string, string> = {
  ETUDIANT: 'cette section est réservée aux étudiants',
  ENSEIGNANT: 'cette section est réservée aux enseignants',
  ADMINISTRATEUR: 'cette section est réservée aux administrateurs',
}

export default function AccessDeniedPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  
  const requiredRole = searchParams.get('requiredRole') || 'UNKNOWN'
  const userRole = searchParams.get('userRole') || 'GUEST'

  const requiredRoleDisplay = roleDisplayNames[requiredRole] || requiredRole
  const roleDescription = roleDescriptions[requiredRole] || 'cette section est protégée'

  return (
    <YStack
      f={1}
      jc="center"
      ai="center"
      p="$6"
      gap="$6"
      bg="$gray1"
    >
      <Card
        p="$8"
        br="$6"
        bg="white"
        borderWidth={2}
        borderColor="$red4"
        maxWidth={600}
        w="100%"
        gap="$6"
      >
        {/* Icon */}
        <XStack jc="center" ai="center">
          <IconLock size={64} color="#dc2626" strokeWidth={1.5} />
        </XStack>

        {/* Title */}
        <YStack gap="$2" ai="center">
          <H1 fontWeight="700" fontSize="$9" ta="center">
            Accès Refusé
          </H1>
          <Text fontSize="$5" color="$gray11" ta="center">
            Vous n'avez pas les permissions requises
          </Text>
        </YStack>

        {/* Message */}
        <Card p="$4" bg="$red2" br="$4" borderLeftWidth={4} borderColor="$red10">
          <Text fontSize="$4" color="$red11" ta="center">
            {roleDescription.charAt(0).toUpperCase() + roleDescription.slice(1)}
            .
          </Text>
        </Card>

        {/* Details */}
        <YStack gap="$3">
          <Card p="$3" bg="$gray2" br="$3">
            <XStack gap="$2" ai="center" jc="space-between">
              <Text fontSize="$3" color="$gray11" fontWeight="500">
                Rôle requis:
              </Text>
              <Text fontSize="$3" fontWeight="600" color="$blue11">
                {requiredRoleDisplay}
              </Text>
            </XStack>
          </Card>

          {userRole !== 'GUEST' && (
            <Card p="$3" bg="$gray2" br="$3">
              <XStack gap="$2" ai="center" jc="space-between">
                <Text fontSize="$3" color="$gray11" fontWeight="500">
                  Votre rôle:
                </Text>
                <Text fontSize="$3" fontWeight="600" color="$orange11">
                  {roleDisplayNames[userRole] || userRole}
                </Text>
              </XStack>
            </Card>
          )}
        </YStack>

        {/* CTA */}
        <YStack gap="$3">
          {userRole === 'GUEST' ? (
            <>
              <Button
                size="$5"
                bg="#003366"
                color="white"
                fontWeight="$6"
                br="$3"
                onPress={() => router.push('/login')}
              >
                Se Connecter
              </Button>
              <Button
                size="$5"
                bg="$blue3"
                color="#003366"
                fontWeight="$6"
                br="$3"
                borderWidth={2}
                borderColor="#003366"
                onPress={() => router.push('/register')}
              >
                S'Inscrire
              </Button>
            </>
          ) : (
            <>
              <Text ta="center" fontSize="$3" color="$gray11">
                Si vous pensez que c'est une erreur, contactez votre administrateur.
              </Text>
              <Button
                size="$5"
                bg="#003366"
                color="white"
                fontWeight="$6"
                br="$3"
                onPress={() => router.push('/login')}
                icon={<IconArrowLeft size={18} />}
              >
                Retour à la connexion
              </Button>
            </>
          )}
        </YStack>
      </Card>

      {/* Footer message */}
      <Text fontSize="$2" color="$gray10" ta="center">
        Avez-vous besoin d'aide? Contactez le support technique.
      </Text>
    </YStack>
  )
}
