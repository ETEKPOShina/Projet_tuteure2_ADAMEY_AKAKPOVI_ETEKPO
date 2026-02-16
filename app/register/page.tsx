'use client';

import { IconCopyrightFilled, IconSchool } from '@tabler/icons-react';
import { Button, Input, Text, XStack, YStack } from 'tamagui';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/src/services/auth';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [typeUtilisateur, setTypeUtilisateur] = useState<
    'ETUDIANT' | 'ENSEIGNANT' | 'ADMINISTRATEUR'
  >('ETUDIANT');
  const [localError, setLocalError] = useState<string | null>(null);

  const { signup, isLoading, error,user } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e?: any) => {
    e?.preventDefault();
    setLocalError(null);

    // Validation
    if (!email.trim() || !password.trim() || !firstName.trim() || !lastName.trim()) {
      setLocalError('Tous les champs sont obligatoires');
      return;
    }

    try {
      // Appeler signup
      const result = await signup({
        email: email.trim(),
        password,
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        typeUtilisateur,
      });

      // Si succès → rediriger
      if (result.success) {
         const currentUser = result.user;
         if(currentUser?.typeUtilisateur == "ETUDIANT"){
          router.push('/students')
        } else if (currentUser?.typeUtilisateur == "ENSEIGNANT"){
          router.push('/teacher/dashboard')
        }else if (currentUser?.typeUtilisateur =="ADMINISTRATEUR"){
          router.push('/admin')
        } else {
          router.push('/access-denied')
        }
        // router.push('/dashboard');
      } else {
        setLocalError(result.error || 'Erreur lors de la création du compte');
      }
    } catch (err: any) {
      setLocalError(err?.message || 'Erreur lors de la création du compte');
    }
  };

  return (
    <YStack flex={1} bg={'#f6f6f8'} h={'100vh'} alignItems="center" justifyContent="center">
      <YStack alignItems="center" gap={10}>
        <Button
          size={100}
          circular
          icon={<IconSchool size={50} color="#0e3cb3" stroke={3} />}
          p={5}
        />

        <YStack bg={'#ffffff'} flex={1} minWidth={200} maxWidth={400} p={30} br={20} gap={10}>
          <Text fontWeight={'$7'} fontSize={'$7'}>
            Bienvenue sur Thesis Manager
          </Text>
          <Text fontWeight={'$5'} fontSize={'$4'} textAlign="center" color={'gray'}>
            Votre plateforme de gestion de soutenance
          </Text>

          <YStack my={6}>
            <Text fontWeight={'$6'} fontSize={'$4'} color={'gray'}>
              Prénom
            </Text>
            <Input
              value={firstName}
              onChangeText={(v: string) => setFirstName(v)}
              placeholder="Prénom"
              editable={!isLoading}
            />
          </YStack>

          <YStack my={6}>
            <Text fontWeight={'$6'} fontSize={'$4'} color={'gray'}>
              Nom
            </Text>
            <Input
              value={lastName}
              onChangeText={(v: string) => setLastName(v)}
              placeholder="Nom"
              editable={!isLoading}
            />
          </YStack>

          <YStack my={6}>
            <Text fontWeight={'$6'} fontSize={'$4'} color={'gray'}>
              Adresse Email
            </Text>
            <Input
              value={email}
              onChangeText={(v: string) => setEmail(v)}
              placeholder="adresse Email"
              editable={!isLoading}
            />
          </YStack>

          <YStack my={6}>
            <Text fontWeight={'$6'} fontSize={'$4'} color={'gray'}>
              Mot de passe
            </Text>
            <Input
              value={password}
              onChangeText={(v: string) => setPassword(v)}
              placeholder="mot de passe"
              secureTextEntry
              editable={!isLoading}
            />
          </YStack>

          <YStack my={6}>
            <Text fontWeight={'$6'} fontSize={'$4'} color={'gray'}>
              Type d'utilisateur
            </Text>
            <select
              value={typeUtilisateur}
              onChange={(e) => setTypeUtilisateur(e.target.value as any)}
              style={{
                padding: 8,
                borderRadius: 6,
                border: '1px solid #e0e0e0',
                fontFamily: 'inherit',
              }}
              disabled={isLoading}
            >
              <option value="ETUDIANT">Étudiant</option>
              <option value="ENSEIGNANT">Enseignant</option>
              <option value="ADMINISTRATEUR">Administrateur</option>
            </select>
          </YStack>

          {(localError || error) && <Text color="red">{localError || error}</Text>}

          <Button
            my={10}
            bg={'#0e3cb3'}
            color={'white'}
            fontWeight={'$6'}
            fontSize={'$5'}
            onPress={handleSubmit}
            disabled={isLoading}
          >
            {isLoading ? 'Création...' : 'Créer mon compte'}
          </Button>

          <Text textAlign="center" fontSize={'$3'} color={'gray'}>
            Déjà inscrit?{' '}
            <Text
              color={'#0e3cb3'}
              fontWeight={'$6'}
              onPress={() => router.push('/login')}
              style={{ cursor: 'pointer' }}
            >
              Se connecter
            </Text>
          </Text>
        </YStack>

        <XStack gap={5}>
          <IconCopyrightFilled color="#808080" />
          <Text color={'gray'} fontWeight={'$6'}>
            Université de Lomé. Tous droits réservés
          </Text>
        </XStack>
      </YStack>
    </YStack>
  );
}