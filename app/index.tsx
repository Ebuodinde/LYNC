import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function IndexScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>LYNC (Social Shield)</Text>
            <Text style={styles.subtitle}>Welcome to the MVP</Text>
            <Link href="/(auth)/login" style={styles.link}>
                Go to Login
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
        marginBottom: 24,
    },
    link: {
        color: '#007AFF',
        fontSize: 16,
        fontWeight: '600',
    },
});
