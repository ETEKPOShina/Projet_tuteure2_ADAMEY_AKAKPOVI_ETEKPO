'use client';

import { useState } from 'react';
import { useLazyLoadQuery } from 'react-relay';
import {
  YStack,
  XStack,
  Text,
  Button,
  Stack,
  ScrollView,
} from 'tamagui';
import {
  IconFileUpload,
  IconPlus,
  IconAlertCircle,
} from '@tabler/icons-react';
import { MES_TRAVAUX_QUERY } from '@/src/relay/queries/MesTravaux_Query';
import TravailCard from '@/src/components/TravailCard';
import SubmitTravailDialog from '@/src/components/SubmitTravailDialog';

export default function MesDocumentsPage() {
  const [isSubmitDialogOpen, setIsSubmitDialogOpen] = useState(false);

  // Récupérer les travaux via GraphQL
  let mesTravaux = [];
  let error = null;
  try {
    const data = useLazyLoadQuery<any>(MES_TRAVAUX_QUERY, {});
    mesTravaux = data.mesTravaux || [];
  } catch (err: any) {
    error = err.message;
  }

  return (
    <>
      <Stack flex={1} p={32} bg={'#F4F7FA'}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <YStack gap={32}>
            {/* En-tête */}
            <YStack gap={10}>
              <XStack justifyContent="space-between" alignItems="center">
                <YStack flex={1}>
                  <Text fontSize={36} fontWeight={'$7'} color={'$primary'}>
                    Mes Documents
                  </Text>
                  <Text fontWeight={'$5'} color={'gray'}>
                    Suivez l'avancement de vos travaux
                  </Text>
                </YStack>

                <Button
                  bg={'$primary'}
                  color={'#ffffff'}
                  fontWeight={'$6'}
                  icon={<IconPlus size={20} stroke={3} />}
                  onPress={() => setIsSubmitDialogOpen(true)}
                >
                  Nouveau travail
                </Button>
              </XStack>
            </YStack>

            {/* Erreur de requête */}
            {error && (
              <YStack bg="$red2" p={16} br={8} gap={8}>
                <XStack alignItems="center" gap={8}>
                  <IconAlertCircle size={24} color="#dc3545" />
                  <Text fontWeight={'600'} color="#dc3545" fontSize={14}>
                    Erreur lors du chargement
                  </Text>
                </XStack>
                <Text color="#dc3545" fontSize={12}>
                  {error}
                </Text>
              </YStack>
            )}

            {/* Liste vide */}
            {!error && mesTravaux.length === 0 && (
              <YStack
                bg={'#ffffff'}
                p={48}
                br={12}
                alignItems="center"
                gap={16}
                borderColor={'#ddd'}
                borderWidth={1}
              >
                <IconFileUpload size={64} color="#ccc" stroke={1.5} />
                <YStack alignItems="center" gap={8}>
                  <Text fontSize={18} fontWeight={'$7'} color={'$primary'}>
                    Aucun travail soumis
                  </Text>
                  <Text fontSize={14} color="gray" textAlign="center" maxWidth={400}>
                    Commencez par soumettre votre premier mémoire ou travail académique
                  </Text>
                </YStack>
                <Button
                  bg={'$primary'}
                  color={'#ffffff'}
                  fontWeight={'$6'}
                  size={'$5'}
                  onPress={() => setIsSubmitDialogOpen(true)}
                  mt={16}
                >
                  Soumettre un travail
                </Button>
              </YStack>
            )}

            {/* Liste des travaux */}
            {!error && mesTravaux.length > 0 && (
              <YStack gap={16}>
                <XStack alignItems="center" gap={8}>
                  <Text fontWeight={'$6'} fontSize={14} color="gray">
                    {mesTravaux.length} travail{mesTravaux.length > 1 ? 's' : ''}
                  </Text>
                </XStack>

                {mesTravaux.map((travail: any) => (
                  <TravailCard key={travail.id} travail={travail} />
                ))}
              </YStack>
            )}

            {/* Padding bottom */}
            <YStack h={32} />
          </YStack>
        </ScrollView>
      </Stack>

      {/* Dialog pour soumettre un travail */}
      <SubmitTravailDialog
        isOpen={isSubmitDialogOpen}
        onOpenChange={setIsSubmitDialogOpen}
        onSuccess={() => {
          // Rafraîchir les données si nécessaire
          alert('Travail soumis avec succès!');
        }}
      />
    </>
  );
}