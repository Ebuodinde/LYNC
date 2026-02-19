import { Stack } from 'expo-router';

export default function OnboardingLayout() {
    return (
        <Stack screenOptions={{ headerShown: false, animation: 'slide_from_right' }}>
            <Stack.Screen name="origin" />
            <Stack.Screen name="languages" />
            <Stack.Screen name="photos" />
            <Stack.Screen name="calibration" />
        </Stack>
    );
}
