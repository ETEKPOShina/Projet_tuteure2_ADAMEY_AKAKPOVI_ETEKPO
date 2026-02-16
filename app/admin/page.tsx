'use client';
'use client';

import React, { useState } from 'react';
import { useLazyLoadQuery, useMutation } from 'react-relay';
import {
  XStack,
  YStack,
  Text,
  Button,
  Card,
  Input,
  useWindowDimensions,
  ScrollView,
  Spinner,
} from 'tamagui';
import {
  IconSearch,
  IconBell,
  IconUserCircle,
  IconPlus,
  IconAlertCircle,
  IconAlertTriangle,
  IconCheck,
  IconClock,
  IconUsers,
  IconCertificate,
  IconCalendar,
  IconTrophy,
  IconEye,
  IconSettings,
  IconLink,
} from '@tabler/icons-react';
import ProtectedRoute from "@/src/components/ProtectedRoute";
import ManageUsersDialog from '@/src/components/admin/ManageUsersDialog';
import ValidateTravailDialog from '@/src/components/admin/ValidateTravailDialog';
import PlanSoutenanceDialog from '@/src/components/admin/PlanSoutenanceDialog';
import AssignJuryDialog from '@/src/components/admin/AssignJuryDialog';
import { AssignStudentToSoutenanceDialog } from '@/src/components/admin/AssignStudentToSoutenanceDialog';
import { ADMIN_DASHBOARD_QUERY } from '@/src/relay/queries/AdminDashboardQuery';

export default function AdminDashboard() {
  const [searchQuery, setSearchQuery] = useState('');
  const dimensions = useWindowDimensions();
  const isMobile = dimensions.width < 768;

  // États pour les dialogues
  const [isManageUsersOpen, setIsManageUsersOpen] = useState(false);
  const [isValidateTravailOpen, setIsValidateTravailOpen] = useState(false);
  const [isPlanSoutenanceOpen, setIsPlanSoutenanceOpen] = useState(false);
  const [isAssignJuryOpen, setIsAssignJuryOpen] = useState(false);
  const [isAssignStudentToSoutenanceOpen, setIsAssignStudentToSoutenanceOpen] = useState(false);

  const [selectedTravailId, setSelectedTravailId] = useState<string | null>(null);
  const [selectedSoutenanceId, setSelectedSoutenanceId] = useState<string | null>(null);

  // Récupérer les données du dashboard
  const data = useLazyLoadQuery<any>(ADMIN_DASHBOARD_QUERY, {});
  const dashboardStats = data.dashboardStats || {
    totalEtudiants: 0,
    totalEnseignants: 0,
    travauxEnAttente: 0,
    travauxAcceptes: 0,
    soutenancesPlanifiees: 0,
    soutenancesTerminees: 0,
    comptesInactifs: 0,
  };
  const travaux = data.travaux || [];

  // Cartes de statistiques construites dynamiquement
  const stats = [
    {
      label: 'Étudiants Total',
      value: dashboardStats.totalEtudiants?.toLocaleString() || '0',
      icon: <IconUsers size={24} />,
      color: '#3366ff',
    },
    {
      label: 'Enseignants Inscrits',
      value: dashboardStats.totalEnseignants?.toLocaleString() || '0',
      icon: <IconCertificate size={24} />,
      color: '#8b5cf6',
    },
    {
      label: 'Soutenances Planifiées',
      value: dashboardStats.soutenancesPlanifiees?.toLocaleString() || '0',
      icon: <IconCalendar size={24} />,
      color: '#06b6d4',
    },
    {
      label: 'Travaux en Attente',
      value: dashboardStats.travauxEnAttente?.toLocaleString() || '0',
      icon: <IconTrophy size={24} />,
      color: '#22c55e',
    },
  ];

  // Alertes dynamiques
  const alerts = [
    {
      icon: <IconClock size={20} />,
      text: `${dashboardStats.travauxEnAttente} Travaux en attente de validation`,
      action: 'Voir',
      color: '#f59e0b',
    },
    {
      icon: <IconAlertTriangle size={20} />,
      text: `${dashboardStats.comptesInactifs} Comptes inactifs à gérer`,
      action: 'Gérer',
      color: '#ef4444',
    },
  ];

  return (
    <ProtectedRoute requiredRole="ADMINISTRATEUR">
    <YStack flex={1} backgroundColor="$background">
      {/* Header */}
      <XStack
        padding="$4"
        backgroundColor="white"
        borderBottomWidth={1}
        borderBottomColor="#e5e7eb"
        alignItems="center"
        justifyContent="space-between"
        $sm={{ flexDirection: 'column', gap: '$3' }}
      >
        <XStack alignItems="center" gap="$3">
          <YStack
            width={40}
            height={40}
            backgroundColor="#3366ff"
            borderRadius="$3"
            alignItems="center"
            justifyContent="center"
          >
            <IconCertificate color="white" size={24} />
          </YStack>
          <Text fontSize="$5" fontWeight="600" color="#000">
            Université de Lomé
          </Text>
        </XStack>

        <XStack alignItems="center" gap="$3" $sm={{ width: '100%' }}>
          <YStack
            flex={1}
            flexDirection="row"
            borderWidth={1}
            borderColor="#e5e7eb"
            borderRadius="$3"
            paddingHorizontal="$3"
            alignItems="center"
            height={40}
          >
            <IconSearch size={20} color="#9ca3af" />
            <input
              type="text"
              placeholder="Rechercher"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                flex: 1,
                border: 'none',
                outline: 'none',
                marginLeft: 8,
                fontFamily: 'inherit',
                fontSize: '14px',
              }}
            />
          </YStack>
          <Button
            size="$3"
            width={40}
            height={40}
            padding={0}
            backgroundColor="transparent"
            icon={<IconBell size={20} color="#6b7280" />}
          />
          <Button
            size="$3"
            width={40}
            height={40}
            padding={0}
            backgroundColor="transparent"
            icon={<IconUserCircle size={20} color="#6b7280" />}
          />
        </XStack>
      </XStack>

      <ScrollView showsVerticalScrollIndicator={false}>
        <YStack padding="$6" gap="$6" $sm={{ padding: '$4' }}>
          {/* Titre */}
          <YStack gap="$2">
            <Text fontSize="$8" fontWeight="700" color="#000">
              Tableau de Bord Administrateur
            </Text>
          </YStack>

          {/* Statistiques */}
          <XStack
            gap="$4"
            flexWrap="wrap"
            $sm={{ flexDirection: 'column' }}
          >
            {stats.map((stat, idx) => (
              <Card
                key={idx}
                flex={1}
                minWidth={200}
                padding="$5"
                borderWidth={1}
                borderColor="#e5e7eb"
                backgroundColor="white"
                borderRadius="$4"
              >
                <YStack gap="$3">
                  <XStack alignItems="center" justifyContent="space-between">
                    <Text fontSize="$3" color="#6b7280" fontWeight="500">
                      {stat.label}
                    </Text>
                    <YStack color={stat.color}>
                      {stat.icon}
                    </YStack>
                  </XStack>
                  <Text fontSize="$7" fontWeight="700" color="#000">
                    {stat.value}
                  </Text>
                </YStack>
              </Card>
            ))}
          </XStack>

          {/* Alertes et Actions */}
          <XStack gap="$4" flexWrap="wrap" $sm={{ flexDirection: 'column' }}>
            {/* Alertes */}
            <Card
              flex={1}
              minWidth={300}
              padding="$5"
              borderWidth={1}
              borderColor="#e5e7eb"
              backgroundColor="white"
              borderRadius="$4"
            >
              <YStack gap="$4">
                <Text fontSize="$5" fontWeight="600" color="#000">
                  Alertes et Actions Rapides
                </Text>

                {alerts.map((alert, idx) => (
                  <XStack
                    key={idx}
                    padding="$3"
                    backgroundColor={idx === 0 ? '#fffbeb' : '#fef2f2'}
                    borderRadius="$3"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <XStack alignItems="center" gap="$3">
                      <YStack color={alert.color}>
                        {alert.icon}
                      </YStack>
                      <Text fontSize="$3" color="#000">
                        {alert.text}
                      </Text>
                    </XStack>
                    <Button
                      size="$2"
                      backgroundColor="transparent"
                      color={alert.color}
                      fontSize="$2"
                      paddingHorizontal="$2"
                      onPress={() => {
                        if (idx === 0) setIsValidateTravailOpen(true);
                        else setIsManageUsersOpen(true);
                      }}
                    >
                      {alert.action}
                    </Button>
                  </XStack>
                ))}

                {/* Boutons d'action */}
                <YStack gap="$2">
                  <Button
                    width="100%"
                    height={44}
                    backgroundColor="#3366ff"
                    color="white"
                    fontSize="$3"
                    fontWeight="600"
                    icon={<IconPlus size={20} />}
                    onPress={() => setIsPlanSoutenanceOpen(true)}
                  >
                    Planifier une soutenance
                  </Button>
                  <Button
                    width="100%"
                    height={44}
                    backgroundColor="#8b5cf6"
                    color="white"
                    fontSize="$3"
                    fontWeight="600"
                    icon={<IconLink size={20} />}
                    onPress={() => setIsAssignStudentToSoutenanceOpen(true)}
                  >
                    Associer Étudiant à Soutenance
                  </Button>
                  <Button
                    width="100%"
                    height={44}
                    backgroundColor="white"
                    color="#000"
                    fontSize="$3"
                    fontWeight="600"
                    borderWidth={1}
                    borderColor="#e5e7eb"
                    icon={<IconUsers size={20} />}
                    onPress={() => setIsManageUsersOpen(true)}
                  >
                    Gérer les utilisateurs
                  </Button>
                </YStack>
              </YStack>
            </Card>

            {/* Statistiques Rapides */}
            <YStack gap="$4">
              <Card
                padding="$4"
                borderWidth={1}
                borderColor="#e5e7eb"
                backgroundColor="white"
                borderRadius="$4"
                width={300}
                $sm={{ width: '100%' }}
              >
                <YStack gap="$3" alignItems="center">
                  <XStack alignItems="center" gap="$2">
                    <Text fontSize="$4" fontWeight="600" color="#000">
                      12
                    </Text>
                    <Text fontSize="$2" color="#6b7280">
                      Soutenances en attente
                    </Text>
                  </XStack>
                  <Text fontSize="$2" color="#ef4444" fontWeight="500">
                    ⚠️ Action requise
                  </Text>
                </YStack>
              </Card>

              <Card
                padding="$4"
                borderWidth={1}
                borderColor="#e5e7eb"
                backgroundColor="white"
                borderRadius="$4"
                width={300}
                $sm={{ width: '100%' }}
              >
                <YStack gap="$3" alignItems="center">
                  <XStack alignItems="center" gap="$2">
                    <Text fontSize="$4" fontWeight="600" color="#000">
                      5
                    </Text>
                    <Text fontSize="$2" color="#6b7280">
                      Jurys incomplets
                    </Text>
                  </XStack>
                  <Text fontSize="$2" color="#f59e0b" fontWeight="500">
                    ⚠️ À vérifier
                  </Text>
                </YStack>
              </Card>
            </YStack>
          </XStack>

          {/* Tableau des Travaux en Attente */}
          <Card
            padding="$5"
            borderWidth={1}
            borderColor="#e5e7eb"
            backgroundColor="white"
            borderRadius="$4"
          >
            <YStack gap="$4">
              <Text fontSize="$5" fontWeight="600" color="#000">
                Travaux en Attente de Validation ({travaux.length})
              </Text>

              {/* Tableau Header */}
              <XStack
                paddingBottom="$3"
                borderBottomWidth={1}
                borderBottomColor="#e5e7eb"
                alignItems="center"
              >
                <Text flex={2} fontSize="$2" color="#6b7280" fontWeight="600">
                  Étudiant
                </Text>
                <Text flex={1.5} fontSize="$2" color="#6b7280" fontWeight="600">
                  Titre
                </Text>
                <Text flex={1} fontSize="$2" color="#6b7280" fontWeight="600">
                  Date de Soumission
                </Text>
                <Text flex={1} fontSize="$2" color="#6b7280" fontWeight="600">
                  Action
                </Text>
              </XStack>

              {/* Tableau Rows */}
              <YStack gap="$3">
                {travaux.length === 0 ? (
                  <Text color="#6b7280">Aucun travail en attente de validation</Text>
                ) : (
                  travaux.map((travail: any) => (
                    <XStack
                      key={travail.id}
                      paddingVertical="$3"
                      borderBottomWidth={1}
                      borderBottomColor="#f3f4f6"
                      alignItems="center"
                    >
                      <Text flex={2} fontSize="$3" color="#000" fontWeight="500">
                        {travail.etudiantNom}
                      </Text>
                      <Text flex={1.5} fontSize="$3" color="#6b7280">
                        {travail.titre.substring(0, 30)}...
                      </Text>
                      <Text flex={1} fontSize="$3" color="#6b7280">
                        {new Date(travail.dateSoumission).toLocaleDateString('fr-FR')}
                      </Text>
                      <YStack flex={1}>
                        <Button
                          size="$2"
                          bg="#3366ff"
                          color="white"
                          fontSize="$2"
                          icon={<IconEye size={16} />}
                          onPress={() => {
                            setSelectedTravailId(travail.id);
                            setIsValidateTravailOpen(true);
                          }}
                        >
                          Examiner
                        </Button>
                      </YStack>
                    </XStack>
                  ))
                )}
              </YStack>
            </YStack>
          </Card>

          {/* Footer spacing */}
          <YStack height={20} />
        </YStack>
      </ScrollView>

      {/* Dialogues */}
      <ManageUsersDialog 
        isOpen={isManageUsersOpen}
        onOpenChange={setIsManageUsersOpen}
      />

      <ValidateTravailDialog
        isOpen={isValidateTravailOpen}
        travailId={selectedTravailId}
        travail={travaux.find((t: any) => t.id === selectedTravailId) || null}
        onOpenChange={setIsValidateTravailOpen}
        onSuccess={() => {
          // Rafraîchir les données
        }}
      />

      <PlanSoutenanceDialog
        isOpen={isPlanSoutenanceOpen}
        onOpenChange={setIsPlanSoutenanceOpen}
        onSuccess={() => {
          // Rafraîchir les données
        }}
      />

      <AssignJuryDialog
        isOpen={isAssignJuryOpen}
        soutenanceId={selectedSoutenanceId}
        onOpenChange={setIsAssignJuryOpen}
        onSuccess={() => {
          // Rafraîchir les données
        }}
      />

      <AssignStudentToSoutenanceDialog
        open={isAssignStudentToSoutenanceOpen}
        onOpenChange={setIsAssignStudentToSoutenanceOpen}
        onSuccess={() => {
          // Rafraîchir les données
        }}
      />
    </YStack>
    </ProtectedRoute>
  );
}



/**
 * COMPOSANT: AdminDashboard
 * 
 * Affiche:
 * - Header avec logo, recherche et notifications
 * - 4 cartes de statistiques (étudiants, enseignants, soutenances)
 * - Section d'alertes et actions rapides
 * - Tableau des travaux en attente de validation
 * - Dialogues pour:
 *   - Gérer les utilisateurs
 *   - Valider les travaux
 *   - Planifier les soutenances
 *   - Assigner les jurys
 * 
 * Responsive: Mobile, Tablet, Desktop
 */