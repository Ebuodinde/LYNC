import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import { supabase } from '../lib/supabase';
import Colors from '../constants/Colors';

export default function IndexScreen() {
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkSession = async () => {
            const { data: { session } } = await supabase.auth.getSession();

            if (session) {
                // User is logged in, redirect to main app
                // Later: check profile completion to see if they should go to onboarding
                router.replace('/(tabs)/learn');
            } else {
                // No session, go to login
                router.replace('/(auth)/login');
            }
        };

        checkSession();

        // Optional: Listen to auth changes
        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            if (session) {
                router.replace('/(tabs)/learn');
            } else {
                router.replace('/(auth)/login');
            }
        });

        return () => subscription.unsubscribe();
    }, []);

    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color={Colors.social.primary} />
            <Text style={styles.text}>Loading LYNC...</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.neutral.white,
    },
    text: {
        marginTop: 16,
        color: Colors.neutral.muted,
        fontSize: 16,
    }
});
