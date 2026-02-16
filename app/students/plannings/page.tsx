'use client';

import { Stack, Text, YStack } from "tamagui";

export default function PlanningsPage() {
    return (
        <Stack flex={1} p={32} bg={'#F4F7FA'}>
            <YStack>
                <Text fontSize={36} fontWeight={'$7'} color={'$primary'}>
                    Plannings
                </Text>
                <Text fontWeight={'$5'} color={'gray'}>
                    Consultez les dates de vos soutenances
                </Text>
            </YStack>
        </Stack>
    );
}
