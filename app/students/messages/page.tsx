'use client';

import { Stack, Text, YStack } from "tamagui";

export default function MessagesPage() {
    return (
        <Stack flex={1} p={32} bg={'#F4F7FA'}>
            <YStack>
                <Text fontSize={36} fontWeight={'$7'} color={'$primary'}>
                    Messages
                </Text>
                <Text fontWeight={'$5'} color={'gray'}>
                    Communiquez avec votre directeur et votre jury
                </Text>
            </YStack>
        </Stack>
    );
}
