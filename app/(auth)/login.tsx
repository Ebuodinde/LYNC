import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ImageBackground,
    SafeAreaView,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';
import { useRouter } from 'expo-router';
import Colors from '../../constants/Colors';
import Typography from '../../constants/Typography';

export default function LoginScreen() {
    const router = useRouter();
    const [email, setEmail] = useState('');

    const handleContinue = () => {
        if (email) {
            // Pass the email as a parameter to the verification screen
            router.push({
                pathname: '/(auth)/verify',
                params: { email }
            });
        }
    };

    return (
        <ImageBackground
            source={{ uri: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' }} // Diverse friends placeholder
            style={styles.backgroundImage}
            resizeMode="cover"
        >
            <View style={styles.overlay}>
                <SafeAreaView style={styles.safeArea}>
                    {/* Header Context for non-mobile or top space */}
                    <View style={styles.headerContainer}>
                        <Text style={styles.mainTitle}>LYNC</Text>
                        <Text style={styles.subTitle}>Protect your social circle.</Text>
                    </View>

                    <KeyboardAvoidingView
                        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                        style={styles.keyboardView}
                    >
                        <View style={styles.card}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.cardTitle}>Welcome back</Text>
                                <Text style={styles.cardSubtitle}>Please enter your details to sign in.</Text>
                            </View>

                            <View style={styles.formContainer}>
                                <Text style={styles.label}>Email</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="name@example.com"
                                    placeholderTextColor={Colors.neutral.muted}
                                    value={email}
                                    onChangeText={setEmail}
                                    keyboardType="email-address"
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                />

                                <TouchableOpacity
                                    style={[styles.continueButton, !email && styles.disabledButton]}
                                    onPress={handleContinue}
                                    disabled={!email}
                                >
                                    <Text style={styles.continueButtonText}>Continue</Text>
                                </TouchableOpacity>

                                <View style={styles.dividerContainer}>
                                    <View style={styles.dividerLine} />
                                    <Text style={styles.dividerText}>Or continue with</Text>
                                    <View style={styles.dividerLine} />
                                </View>

                                <View style={styles.socialButtonsContainer}>
                                    <TouchableOpacity style={styles.socialButton}>
                                        <Text style={styles.socialButtonText}>Google</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.socialButton}>
                                        <Text style={styles.socialButtonText}>Apple</Text>
                                    </TouchableOpacity>
                                </View>

                                <Text style={styles.termsText}>
                                    By continuing, you agree to our <Text style={styles.termsLink}>Terms</Text> and <Text style={styles.termsLink}>Privacy Policy</Text>.
                                </Text>
                            </View>
                        </View>
                    </KeyboardAvoidingView>
                </SafeAreaView>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.4)', // Gradient dark overlay simulation
    },
    safeArea: {
        flex: 1,
        justifyContent: 'space-between',
    },
    headerContainer: {
        paddingTop: 60,
        paddingHorizontal: 24,
    },
    mainTitle: {
        fontSize: 40,
        fontWeight: '900',
        color: Colors.neutral.white,
        letterSpacing: -1,
        marginBottom: 8,
        textShadowColor: 'rgba(0, 0, 0, 0.2)',
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 4,
    },
    subTitle: {
        fontSize: 18,
        fontWeight: '500',
        color: 'rgba(255, 255, 255, 0.9)',
        textShadowColor: 'rgba(0, 0, 0, 0.1)',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 2,
    },
    keyboardView: {
        flex: 1,
        justifyContent: 'flex-end',
        padding: 16,
        paddingBottom: Platform.OS === 'ios' ? 40 : 20,
    },
    card: {
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        borderRadius: 24,
        padding: 24,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.25,
        shadowRadius: 20,
        elevation: 10,
    },
    cardHeader: {
        alignItems: 'center',
        marginBottom: 24,
    },
    cardTitle: {
        ...Typography.h2,
        marginBottom: 4,
    },
    cardSubtitle: {
        ...Typography.bodyMedium,
        color: Colors.neutral.muted,
    },
    formContainer: {
        gap: 16,
    },
    label: {
        ...Typography.label,
        color: Colors.neutral.text,
        marginLeft: 4,
        marginBottom: -8, // visually closer to input
    },
    input: {
        height: 56,
        backgroundColor: Colors.neutral.offWhite,
        borderWidth: 1,
        borderColor: Colors.neutral.border,
        borderRadius: 12,
        paddingHorizontal: 16,
        fontSize: 16,
        fontWeight: '500',
        color: Colors.neutral.text,
    },
    continueButton: {
        height: 56,
        backgroundColor: Colors.social.primary,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8,
        shadowColor: Colors.social.primary,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 4,
    },
    disabledButton: {
        opacity: 0.7,
    },
    continueButtonText: {
        color: Colors.neutral.white,
        fontSize: 16,
        fontWeight: '700',
    },
    dividerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 16,
    },
    dividerLine: {
        flex: 1,
        height: 1,
        backgroundColor: Colors.neutral.border,
    },
    dividerText: {
        marginHorizontal: 16,
        ...Typography.caption,
        fontWeight: '500',
    },
    socialButtonsContainer: {
        flexDirection: 'row',
        gap: 12,
        marginBottom: 16,
    },
    socialButton: {
        flex: 1,
        height: 48,
        backgroundColor: Colors.neutral.white,
        borderWidth: 1,
        borderColor: Colors.neutral.border,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    socialButtonText: {
        fontSize: 14,
        fontWeight: '600',
        color: Colors.neutral.text,
    },
    termsText: {
        textAlign: 'center',
        fontSize: 12,
        color: Colors.neutral.muted,
        lineHeight: 18,
    },
    termsLink: {
        color: Colors.social.primary,
        fontWeight: '500',
    }
});
