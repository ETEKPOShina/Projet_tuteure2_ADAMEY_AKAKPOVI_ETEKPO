'use client';

import { IconSchool } from "@tabler/icons-react";
import { Button, Input, Stack, Text, XStack, YStack ,} from "tamagui";

export default function LoginPage(){
    return(
        <Stack flex={1} p={100} flexDirection="row" bg={'#f6f6f8'} h={'100vh'}>
          <YStack  flex={0.5} gap={10}>
            <XStack alignItems="center" gap={6}>
                <Button
                 size={50}
                 circular
                //  bg={'#0e3cb3'}
                 icon={<IconSchool size={25} color="#0e3cb3" stroke={3}/>}
                 p={5}


                />
                <Text fontSize={'$6'} fontWeight={'$6'}>Portail de l'université de Lomé </Text>
                
            </XStack>

            <Text fontWeight={'$6'} fontSize={'$8'}>Bienvenue sur Thesis Manager</Text>

            <Text maxWidth={400} fontWeight={'$5'} color={'gray'}>Manage, schedule, and archive thesis defenses with a secure and centralized system designed for academic excellence.</Text>
                   
          </YStack>
          <YStack flex={0.5} p={10}  alignItems="center">
            <YStack bg={'#ffffff'} flex={1} minWidth={200} maxWidth={400} p={30} br={20} >
                <Text fontWeight={'$7'} fontSize={'$7'}>Se connecter</Text>
                <Text fontWeight={'$5'} fontSize={'$4'} color={'gray'}>Entrez vos coordonnées pour vous connecter</Text>

                <YStack my={10}>
                    <Text fontWeight={'$5'}>Adresse Email</Text>
                    <Input
                     placeholder="adresse Email"
                     
                    />
                </YStack>

                 <YStack my={10}>
                    <Text fontWeight={'$5'}>Mots de passe</Text>
                    <Input
                     placeholder="mots de passe"
                     
                     
                    />
                </YStack>
                
                <Text textAlign="right" fontWeight={'$7'} fontSize={'$5'} color={'#0e3cb3'} cursor="pointer">mots de passe oublié ?</Text>
                <Button my={10}bg={'#0e3cb3'} color={'white'} fontWeight={'$6'} fontSize={'$5'}>Se connecter</Button>

            </YStack>
          </YStack>

        </Stack>
    )
}