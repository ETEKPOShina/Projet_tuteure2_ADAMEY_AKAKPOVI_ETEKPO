'use client';

import { IconCopyrightFilled, IconSchool } from '@tabler/icons-react';
import { Button, Input, Text, XStack, YStack } from 'tamagui';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/src/services/auth';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [localError, setLocalError] = useState<string | null>(null);
  const { login, isLoading, error,user } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e?: any) => {
    e?.preventDefault();
    setLocalError(null);

    // Validation
    if (!email.trim() || !password.trim()) {
      setLocalError('Email et mot de passe sont obligatoires');
      return;
    }

    try {
      // Appeler login
      const result = await login({
        email: email.trim(),
        password,
      });
      

      // Si succès → rediriger
      if (result.success) {
        const currentUser = result.user;
        if(currentUser?.typeUtilisateur == "ETUDIANT"){
          router.push('/students')
        } else if (currentUser?.typeUtilisateur == "ENSEIGNANT"){
          router.push('/teacher/dashboard')
        } else if (currentUser?.typeUtilisateur =="ADMINISTRATEUR"){
          router.push('/admin')
        } else {
          router.push('/access-denied')
        }
        // router.push('/dashboard');
      } else {
        setLocalError(result.error || 'Erreur lors de la connexion');
      }
    } catch (err: any) {
      setLocalError(err?.message || 'Erreur lors de la connexion');
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

          <YStack my={10}>
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

          <YStack my={10}>
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
            {isLoading ? 'Connexion...' : 'Se connecter'}
          </Button>

          <Text textAlign="center" fontSize={'$3'} color={'gray'}>
            Pas encore inscrit?{' '}
            <Text
              color={'#0e3cb3'}
              fontWeight={'$6'}
              onPress={() => router.push('/register')}
              style={{ cursor: 'pointer' }}
            >
              Créer un compte
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