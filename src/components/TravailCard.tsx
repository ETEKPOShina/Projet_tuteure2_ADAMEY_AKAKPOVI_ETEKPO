'use client';

import { useState } from 'react';
import {
  YStack,
  XStack,
  Text,
  Card,
  Progress,
  Button,
  ScrollView,
  Separator,
  Avatar,
} from 'tamagui';
import {
  IconFile,
  IconCircle,
  IconAlertCircle,
  IconClock,
  IconCalendarEvent,
  IconUsers,
  IconDownload,
  IconX,
} from '@tabler/icons-react';

interface TravailProps {
  travail: any;
}

export default function TravailCard({ travail }: TravailProps) {
  const [expanded, setExpanded] = useState(false);

  // Déterminer les couleurs selon le statut
  const getStatusColor = () => {
    switch (travail.statut) {
      case 'ACCEPTE':
        return '#28a745';
      case 'REJETE':
        return '#dc3545';
      case 'EN_ATTENTE_VALIDATION':
        return '#ffc107';
      case 'SOUMIS':
        return '#17a2b8';
      default:
        return '#6c757d';
    }
  };

  const getStatusIcon = () => {
    switch (travail.statut) {
      case 'ACCEPTE':
        return <IconCircle size={24} color="#28a745" />;
      case 'REJETE':
        return <IconAlertCircle size={24} color="#dc3545" />;
      case 'EN_ATTENTE_VALIDATION':
        return <IconClock size={24} color="#ffc107" />;
      default:
        return <IconFile size={24} color="#6c757d" />;
    }
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  return (
    <Card
      elevate
      size="$4"
      bordered
      bg="$background"
      mb="$4"
      overflow="hidden"
    >
      {/* En-tête de la carte */}
      <YStack p="$4" gap="$3">
        {/* Titre et statut */}
        <XStack justifyContent="space-between" alignItems="flex-start" gap="$3">
          <YStack flex={1} gap="$2">
            <XStack alignItems="center" gap="$2">
              {getStatusIcon()}
              <Text fontSize={18} fontWeight="$7" flex={1}>
                {travail.titre}
              </Text>
            </XStack>
            <Text fontSize={12} color="$gray10">
              {travail.typeDisplay} • Soumis le {formatDate(travail.dateSoumission)}
            </Text>
          </YStack>

          {/* Badge de statut */}
          <YStack
            bg={getStatusColor()}
            opacity={0.2}
            px="$3"
            py="$2"
            br="$2"
            borderColor={getStatusColor()}
            borderWidth={1}
          >
            <Text
              fontSize={12}
              fontWeight="$6"
              color={getStatusColor()}
              textTransform="uppercase"
            >
              {travail.statutDisplay}
            </Text>
          </YStack>
        </XStack>

        {/* Barre de progression */}
        {travail.progression && (
          <YStack gap="$2">
            <XStack justifyContent="space-between" alignItems="center">
              <Text fontSize={12} fontWeight="$5">
                Progression
              </Text>
              <Text fontSize={12} fontWeight="$6" color="$primary">
                {Math.round(travail.progression.pourcentage)}%
              </Text>
            </XStack>
            <Progress
              value={travail.progression.pourcentage}
              width="100%"
              height={8}
              borderRadius={4}
            />
            <Text fontSize={11} color="$gray10">
              {travail.progression.message}
            </Text>
          </YStack>
        )}

        {/* Motif de rejet si statut REJETE */}
        {travail.statut === 'REJETE' && travail.motifRejet && (
          <YStack
            gap="$2"
            bg="$red2"
            p="$3"
            br="$2"
            borderColor="$red8"
            borderWidth={1}
          >
            <XStack alignItems="center" gap="$2">
              <IconAlertCircle size={20} color="$red10" />
              <Text fontWeight="$6" color="$red10" fontSize={13}>
                Motif du rejet
              </Text>
            </XStack>
            <Text fontSize={12} color="$red10">
              {travail.motifRejet}
            </Text>
          </YStack>
        )}

        {/* Bouton pour développer */}
        <Button
          size="$2"
          chromeless
          onPress={() => setExpanded(!expanded)}
          justifyContent="center"
        >
          <Text color="$primary" fontSize={12} fontWeight="$6">
            {expanded ? 'Réduire' : 'Voir les détails'} →
          </Text>
        </Button>
      </YStack>

      {/* Contenu développé */}
      {expanded && (
        <>
          <Separator />

          <YStack p="$4" gap="$4">
            {/* Section Soutenance */}
            {travail.soutenance ? (
              <YStack gap="$3">
                <Text fontSize={14} fontWeight="$7" color="$primary">
                  📅 Soutenance prévue
                </Text>
                <Card bg="$blue2" p="$3" br="$2">
                  <YStack gap="$2">
                    <XStack gap="$2" alignItems="center">
                      <IconCalendarEvent size={18} color="$primary" />
                      <Text fontWeight="$6">
                        {formatDate(travail.soutenance.dateSoutenance)}
                      </Text>
                    </XStack>
                    <XStack gap="$2" alignItems="center">
                      <IconClock size={18} color="$primary" />
                      <Text fontWeight="$5">
                        {travail.soutenance.heureDebut} - Salle {travail.soutenance.salle}
                      </Text>
                    </XStack>
                    <Text fontSize={11} color="$gray10">
                      Mode: {travail.soutenance.modeDisplay}
                    </Text>
                  </YStack>
                </Card>

                {/* Membres du jury */}
                {travail.soutenance.jurys && travail.soutenance.jurys.length > 0 && (
                  <YStack gap="$2">
                    <XStack gap="$2" alignItems="center">
                      <IconUsers size={18} color="$primary" />
                      <Text fontWeight="$6">Membres du jury</Text>
                    </XStack>
                    <YStack gap="$1">
                      {travail.soutenance.jurys.map((jury: any, idx: number) => (
                        <XStack key={idx} gap="$2" alignItems="center" p="$2" bg="$gray2" br="$1">
                          <Avatar size="$2" circular>
                            <Avatar.Image source={{ uri: '' }} />
                            <Avatar.Fallback bg="$primary" />
                          </Avatar>
                          <YStack flex={1}>
                            <Text fontSize={12} fontWeight="$6">
                              {jury.enseignantNom}
                            </Text>
                            <Text fontSize={11} color="$gray10">
                              {jury.roleDisplay}
                            </Text>
                          </YStack>
                        </XStack>
                      ))}
                    </YStack>
                  </YStack>
                )}
              </YStack>
            ) : (
              <YStack p="$3" bg="$gray2" br="$2" alignItems="center">
                <Text fontSize={12} color="$gray10" textAlign="center">
                  Soutenance non encore planifiée
                </Text>
              </YStack>
            )}

            <Separator />

            {/* Section Documents */}
            <YStack gap="$3">
              <Text fontSize={14} fontWeight="$7" color="$primary">
                📁 Documents envoyés
              </Text>
              {travail.documents && travail.documents.length > 0 ? (
                <YStack gap="$2">
                  {travail.documents.map((doc: any) => (
                    <XStack
                      key={doc.id}
                      gap="$3"
                      p="$3"
                      bg="$gray2"
                      br="$2"
                      alignItems="center"
                      borderColor="$gray5"
                      borderWidth={1}
                    >
                      <IconFile size={24} color="$primary" />
                      <YStack flex={1} gap="$1">
                        <Text fontSize={12} fontWeight="$6" numberOfLines={1}>
                          {doc.nomFichier}
                        </Text>
                        <XStack gap="$2" alignItems="center">
                          <Text fontSize={11} color="$gray10">
                            {doc.typeDisplay}
                          </Text>
                          <Text fontSize={11} color="$gray10">
                            • {formatDate(doc.dateDepot)}
                          </Text>
                        </XStack>
                      </YStack>
                      <Button
                        size="$2"
                        icon={<IconDownload size={16} />}
                        chromeless
                        onPress={() => window.open(doc.uri, '_blank')}
                      />
                    </XStack>
                  ))}
                </YStack>
              ) : (
                <YStack p="$3" bg="$gray2" br="$2" alignItems="center">
                  <Text fontSize={12} color="$gray10" textAlign="center">
                    Aucun document
                  </Text>
                </YStack>
              )}
            </YStack>
          </YStack>
        </>
      )}
    </Card>
  );
}
