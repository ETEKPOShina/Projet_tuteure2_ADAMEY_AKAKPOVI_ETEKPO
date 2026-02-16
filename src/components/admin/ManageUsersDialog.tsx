'use client';

import { useState } from 'react';
import { useLazyLoadQuery } from 'react-relay';
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
} from 'tamagui';
import { IconX, IconCheck, IconTrash } from '@tabler/icons-react';
import { LISTE_UTILISATEURS_QUERY } from '@/src/relay/queries/ListeUtilisateursQuery';

interface ManageUsersDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ManageUsersDialog({ isOpen, onOpenChange }: ManageUsersDialogProps) {
  const [searchQuery, setSearchQuery] = useState('');

  let users: any[] = [];
  let loading = false;

  try {
    const data = useLazyLoadQuery<any>(LISTE_UTILISATEURS_QUERY, { search: searchQuery });
    users = data.users || [];
  } catch (err) {
    loading = true;
  }

  return (
    <Dialog modal open={isOpen} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content
          bordered
          elevate
          padding="$4"
          gap="$4"
          width={700}
          maxWidth="90%"
        >
          <Dialog.Title fontSize={20} fontWeight="700">
            Gérer les Utilisateurs
          </Dialog.Title>

          <Input
            placeholder="Rechercher par email ou nom..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            borderWidth={1}
            borderColor="$gray4"
            padding="$3"
          />

          <ScrollView height={400} showsVerticalScrollIndicator={false}>
            <YStack gap="$3">
              {loading ? (
                <YStack alignItems="center" justifyContent="center" gap="$2">
                  <Spinner />
                  <Text>Chargement des utilisateurs...</Text>
                </YStack>
              ) : users.length === 0 ? (
                <Text color="$gray10">Aucun utilisateur trouvé</Text>
              ) : (
                users.map((user: any) => (
                  <Card key={user.id} padding="$3" gap="$2">
                    <XStack justifyContent="space-between" alignItems="center">
                      <YStack flex={1}>
                        <Text fontWeight="600">
                          {user.firstName} {user.lastName}
                        </Text>
                        <Text fontSize={12} color="$gray10">
                          {user.email}
                        </Text>
                        <Text fontSize={11} color="$gray9">
                          Type: {user.typeUtilisateurDisplay} • Créé: {new Date(user.dateCreation).toLocaleDateString('fr-FR')}
                        </Text>
                      </YStack>
                      <YStack alignItems="center" gap="$1">
                        <YStack
                          paddingHorizontal="$3"
                          paddingVertical="$2"
                          borderRadius="$2"
                          backgroundColor={user.actif ? '#d1fae5' : '#fef3c7'}
                          alignItems="center"
                        >
                          <Text
                            fontSize={12}
                            fontWeight="600"
                            color={user.actif ? '#059669' : '#d97706'}
                          >
                            {user.actif ? '✓ Actif' : '⊘ Inactif'}
                          </Text>
                        </YStack>
                      </YStack>
                    </XStack>
                  </Card>
                ))
              )}
            </YStack>
          </ScrollView>

          <XStack gap="$3" justifyContent="flex-end">
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
