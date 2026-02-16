'use client';

import { useState } from 'react';
import { useLazyLoadQuery, useMutation } from 'react-relay';
import {
  Dialog,
  Button,
  YStack,
  XStack,
  Text,
  Select,
  ScrollView,
  Spinner,
  Card,
} from 'tamagui';
import { IconPlus, IconCheck } from '@tabler/icons-react';
import { TROUVER_ENSEIGNANTS_QUERY } from '@/src/relay/queries/TrouverEnseignantsQuery';
import { ASSIGNER_JURY_MUTATION } from '@/src/relay/mutations/AssignerJuryMutation';

interface AssignJuryDialogProps {
  isOpen: boolean;
  soutenanceId: string | null;
  onOpenChange: (open: boolean) => void;
  onSuccess: () => void;
}

export default function AssignJuryDialog({
  isOpen,
  soutenanceId,
  onOpenChange,
  onSuccess,
}: AssignJuryDialogProps) {
  const [selectedEnseignantId, setSelectedEnseignantId] = useState('');
  const [selectedRole, setSelectedRole] = useState('RAPPORTEUR');
  const [commitAssign, loading] = useMutation(ASSIGNER_JURY_MUTATION);

  let enseignants: any[] = [];

  try {
    const data = useLazyLoadQuery<any>(TROUVER_ENSEIGNANTS_QUERY, {});
    enseignants = data.enseignants || [];
  } catch (err) {
    // Loading
  }

  const handleAssign = () => {
    if (!soutenanceId || !selectedEnseignantId) {
      alert('Veuillez sélectionner un enseignant');
      return;
    }

    commitAssign({
      variables: {
        soutenanceId,
        enseignantId: selectedEnseignantId,
        role: selectedRole,
      },
      onCompleted: (response: any) => {
        if (response.assignerJury?.success) {
          alert('Jury assigné!');
          setSelectedEnseignantId('');
          setSelectedRole('RAPPORTEUR');
          onSuccess();
        } else {
          alert('Erreur: ' + response.assignerJury?.message);
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
            Assigner un Jury
          </Dialog.Title>

          <YStack gap="$4">
            <YStack gap="$2">
              <Text fontWeight="600" fontSize={14}>
                Rôle
              </Text>
              <Select value={selectedRole} onValueChange={setSelectedRole}>
                <Select.Trigger width="100%" padding="$3" borderWidth={1} borderColor="$gray4">
                  <Select.Value />
                </Select.Trigger>
                <Select.Content>
                  <Select.Item label="Président" value="PRESIDENT" />
                  <Select.Item label="Rapporteur" value="RAPPORTEUR" />
                  <Select.Item label="Examinateur" value="EXAMINATEUR" />
                </Select.Content>
              </Select>
            </YStack>

            <YStack gap="$2">
              <Text fontWeight="600" fontSize={14}>
                Sélectionner un Enseignant
              </Text>
              <ScrollView height={300} showsVerticalScrollIndicator={false}>
                <YStack gap="$2">
                  {enseignants.map((enseignant: any) => (
                    <Card
                      key={enseignant.id}
                      padding="$3"
                      gap="$2"
                      borderWidth={selectedEnseignantId === enseignant.id ? 2 : 1}
                      borderColor={selectedEnseignantId === enseignant.id ? '$blue6' : '$gray4'}
                      onPress={() => setSelectedEnseignantId(enseignant.id)}
                      cursor="pointer"
                    >
                      <XStack justifyContent="space-between" alignItems="center">
                        <YStack flex={1}>
                          <Text fontWeight="600">
                            {enseignant.utilisateur?.firstName} {enseignant.utilisateur?.lastName}
                          </Text>
                          <Text fontSize={12} color="$gray10">
                            {enseignant.gradeDisplay} • {enseignant.specialite}
                          </Text>
                          {enseignant.disponibilites && enseignant.disponibilites.length > 0 && (
                            <Text fontSize={11} color="$gray9" mt="$1">
                              Disponibilités: {enseignant.disponibilites.map((d: any) => `${d.jourDisplay} ${d.heureDebut}-${d.heureFin}`).join(', ')}
                            </Text>
                          )}
                        </YStack>
                        {selectedEnseignantId === enseignant.id && (
                          <IconCheck size={20} color="$blue6" />
                        )}
                      </XStack>
                    </Card>
                  ))}
                </YStack>
              </ScrollView>
            </YStack>
          </YStack>

          <XStack gap="$3" justifyContent="flex-end">
            <Button
              theme="active"
              bg="$gray4"
              color="$color"
              onPress={() => onOpenChange(false)}
            >
              Annuler
            </Button>
            <Button
              bg="$blue6"
              color="white"
              disabled={loading || !selectedEnseignantId}
              icon={loading ? <Spinner size="small" /> : <IconPlus size={16} />}
              onPress={handleAssign}
            >
              {loading ? 'Assignation...' : 'Assigner'}
            </Button>
          </XStack>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog>
  );
}
