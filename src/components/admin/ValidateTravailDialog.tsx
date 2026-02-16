'use client';

import { useState } from 'react';
import { useMutation } from 'react-relay';
import {
  Dialog,
  Button,
  YStack,
  XStack,
  Text,
  Input,
  ScrollView,
  Spinner,
  Card,
  TextArea,
} from 'tamagui';
import { IconCheck, IconX, IconDownload } from '@tabler/icons-react';
import { ACCEPTER_TRAVAIL_MUTATION } from '@/src/relay/mutations/AccepterTravailMutation';
import { REJETER_TRAVAIL_MUTATION } from '@/src/relay/mutations/RejeterTravailMutation';

interface ValidateTravailDialogProps {
  isOpen: boolean;
  travailId: string | null;
  travail: any;
  onOpenChange: (open: boolean) => void;
  onSuccess: () => void;
}

export default function ValidateTravailDialog({
  isOpen,
  travailId,
  travail,
  onOpenChange,
  onSuccess,
}: ValidateTravailDialogProps) {
  const [rejectReason, setRejectReason] = useState('');
  const [commitAccept, acceptLoading] = useMutation(ACCEPTER_TRAVAIL_MUTATION);
  const [commitReject, rejectLoading] = useMutation(REJETER_TRAVAIL_MUTATION);

  if (!travail) return null;

  const handleAccept = () => {
    commitAccept({
      variables: { id: travailId },
      onCompleted: (response: any) => {
        if (response.accepterTravail?.success) {
          alert('Travail accepté!');
          onOpenChange(false);
          onSuccess();
        }
      },
      onError: (err) => alert('Erreur: ' + err.message),
    });
  };

  const handleReject = () => {
    if (!rejectReason.trim()) {
      alert('Veuillez entrer un motif de rejet');
      return;
    }
    commitReject({
      variables: { id: travailId, motif: rejectReason },
      onCompleted: (response: any) => {
        if (response.rejeterTravail?.success) {
          alert('Travail rejeté!');
          onOpenChange(false);
          onSuccess();
        }
      },
      onError: (err) => alert('Erreur: ' + err.message),
    });
  };

  return (
    <Dialog modal open={isOpen} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content
          bordered
          elevate
          padding="$4"
          gap="$4"
          width={600}
          maxWidth="90%"
        >
          <Dialog.Title fontSize={20} fontWeight="700">
            Valider le Travail
          </Dialog.Title>

          <ScrollView height={400} showsVerticalScrollIndicator={false}>
            <YStack gap="$4">
              {/* Informations du travail */}
              <YStack gap="$2">
                <Text fontWeight="600" fontSize={14} color="$gray10">
                  Titre
                </Text>
                <Text fontWeight="600">{travail.titre}</Text>
              </YStack>

              <YStack gap="$2">
                <Text fontWeight="600" fontSize={14} color="$gray10">
                  Étudiant
                </Text>
                <Text>{travail.etudiantNom}</Text>
              </YStack>

              <YStack gap="$2">
                <Text fontWeight="600" fontSize={14} color="$gray10">
                  Type
                </Text>
                <Text>{travail.typeDisplay}</Text>
              </YStack>

              <YStack gap="$2">
                <Text fontWeight="600" fontSize={14} color="$gray10">
                  Résumé
                </Text>
                <Text color="$gray10">{travail.resume || 'N/A'}</Text>
              </YStack>

              {/* Documents */}
              <YStack gap="$2">
                <Text fontWeight="600" fontSize={14} color="$gray10">
                  Documents
                </Text>
                {travail.documents && travail.documents.length > 0 ? (
                  <YStack gap="$2">
                    {travail.documents.map((doc: any) => (
                      <Card key={doc.id} padding="$2" gap="$2">
                        <XStack alignItems="center" justifyContent="space-between">
                          <YStack flex={1}>
                            <Text fontWeight="500">{doc.nomFichier}</Text>
                            <Text fontSize={12} color="$gray10">
                              {doc.typeDisplay}
                            </Text>
                          </YStack>
                          <Button
                            size="$2"
                            icon={<IconDownload size={16} />}
                            onPress={() => window.open(doc.uri)}
                          >
                            Télécharger
                          </Button>
                        </XStack>
                      </Card>
                    ))}
                  </YStack>
                ) : (
                  <Text color="$gray10">Aucun document</Text>
                )}
              </YStack>

              {/* Motif de rejet */}
              <YStack gap="$2">
                <Text fontWeight="600" fontSize={14} color="$gray10">
                  Motif de rejet (si applicable)
                </Text>
                <TextArea
                  placeholder="Décrivez les raisons du rejet..."
                  value={rejectReason}
                  onChangeText={setRejectReason}
                  borderWidth={1}
                  borderColor="$gray4"
                  padding="$3"
                  minHeight={100}
                />
              </YStack>
            </YStack>
          </ScrollView>

          <XStack gap="$3" justifyContent="flex-end">
            <Button
              bg="$red6"
              color="white"
              disabled={rejectLoading}
              icon={rejectLoading ? <Spinner size="small" /> : <IconX size={16} />}
              onPress={handleReject}
            >
              {rejectLoading ? 'Rejet...' : 'Rejeter'}
            </Button>
            <Button
              bg="$green6"
              color="white"
              disabled={acceptLoading}
              icon={acceptLoading ? <Spinner size="small" /> : <IconCheck size={16} />}
              onPress={handleAccept}
            >
              {acceptLoading ? 'Acceptation...' : 'Accepter'}
            </Button>
            <Button
              theme="active"
              bg="$gray4"
              color="$color"
              onPress={() => onOpenChange(false)}
            >
              Fermer
            </Button>
          </XStack>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog>
  );
}
