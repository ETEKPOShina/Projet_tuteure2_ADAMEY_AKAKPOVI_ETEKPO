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
  Select,
  Spinner,
} from 'tamagui';
import { IconCalendar, IconClock } from '@tabler/icons-react';
import { CREATE_SOUTENANCE_MUTATION } from '@/src/relay/mutations/CreateSoutenanceMutation';

interface PlanSoutenanceDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess: () => void;
}

export default function PlanSoutenanceDialog({
  isOpen,
  onOpenChange,
  onSuccess,
}: PlanSoutenanceDialogProps) {
  const [dateSoutenance, setDateSoutenance] = useState('');
  const [heureDebut, setHeureDebut] = useState('');
  const [salle, setSalle] = useState('');
  const [capacite, setCapacite] = useState('');
  const [mode, setMode] = useState('PRESENTIEL');

  const [commitCreate, loading] = useMutation(CREATE_SOUTENANCE_MUTATION);

  const handleCreate = () => {
    if (!dateSoutenance || !heureDebut || !salle || !capacite) {
      alert('Veuillez remplir tous les champs');
      return;
    }

    commitCreate({
      variables: {
        dateSoutenance,
        heureDebut,
        salle,
        capacite: parseInt(capacite),
        mode,
      },
      onCompleted: (response: any) => {
        if (response.createSoutenance?.success) {
          alert('Soutenance planifiée!');
          // Réinitialiser les champs
          setDateSoutenance('');
          setHeureDebut('');
          setSalle('');
          setCapacite('');
          setMode('PRESENTIEL');
          onOpenChange(false);
          onSuccess();
        } else {
          alert('Erreur: ' + response.createSoutenance?.message);
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
          width={500}
          maxWidth="90%"
        >
          <Dialog.Title fontSize={20} fontWeight="700">
            Planifier une Soutenance
          </Dialog.Title>

          <YStack gap="$4">
            <YStack gap="$2">
              <Text fontWeight="600" fontSize={14}>
                Date de soutenance
              </Text>
              <Input
                placeholder="YYYY-MM-DD"
                value={dateSoutenance}
                onChangeText={setDateSoutenance}
                borderWidth={1}
                borderColor="$gray4"
                padding="$3"
              />
            </YStack>

            <YStack gap="$2">
              <Text fontWeight="600" fontSize={14}>
                Heure de début
              </Text>
              <Input
                placeholder="HH:MM"
                value={heureDebut}
                onChangeText={setHeureDebut}
                borderWidth={1}
                borderColor="$gray4"
                padding="$3"
              />
            </YStack>

            <YStack gap="$2">
              <Text fontWeight="600" fontSize={14}>
                Salle
              </Text>
              <Input
                placeholder="Ex: Amphi 101, Salle 302..."
                value={salle}
                onChangeText={setSalle}
                borderWidth={1}
                borderColor="$gray4"
                padding="$3"
              />
            </YStack>

            <YStack gap="$2">
              <Text fontWeight="600" fontSize={14}>
                Capacité
              </Text>
              <Input
                type="number"
                placeholder="Nombre de places"
                value={capacite}
                onChangeText={setCapacite}
                borderWidth={1}
                borderColor="$gray4"
                padding="$3"
              />
            </YStack>

            <YStack gap="$2">
              <Text fontWeight="600" fontSize={14}>
                Mode
              </Text>
              <Select value={mode} onValueChange={setMode}>
                <Select.Trigger width="100%" padding="$3" borderWidth={1} borderColor="$gray4">
                  <Select.Value />
                </Select.Trigger>
                <Select.Content>
                  <Select.Item label="Présentiel" value="PRESENTIEL" />
                  <Select.Item label="Visioconférence" value="VISIO" />
                  <Select.Item label="Hybride" value="HYBRIDE" />
                </Select.Content>
              </Select>
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
              disabled={loading}
              icon={loading ? <Spinner size="small" /> : undefined}
              onPress={handleCreate}
            >
              {loading ? 'Création...' : 'Créer'}
            </Button>
          </XStack>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog>
  );
}
