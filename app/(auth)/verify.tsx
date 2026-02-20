import React, { useState, useRef } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';
import Typography from '../../constants/Typography';
import { supabase } from '../../lib/supabase';

export default function VerifyScreen() {
    const router = useRouter();
    const { email } = useLocalSearchParams();

    // OTP logic
    const [code, setCode] = useState(['', '', '', '', '', '', '', '']);
    const inputRefs = [
        useRef(null), useRef(null), useRef(null), useRef(null),
        useRef(null), useRef(null), useRef(null), useRef(null)
    ];

    const handleChange = (text, index) => {
        const newCode = [...code];
        newCode[index] = text;
        setCode(newCode);

        // Auto focus next
        if (text && index < 7) {
            inputRefs[index + 1].current.focus();
        }
    };

    const handleKeyPress = (e, index) => {
        if (e.nativeEvent.key === 'Backspace' && !code[index] && index > 0) {
            inputRefs[index - 1].current.focus();
        }
    };

    const [loading, setLoading] = useState(false);

    const handleVerify = async () => {
        const fullCode = code.join('');
        if (fullCode.length === 8) {
            setLoading(true);
            try {
                const {
                    data: { session },
                    error,
                } = await supabase.auth.verifyOtp({
                    email: email as string,
                    token: fullCode,
                    type: 'email',
                });

                if (error) {
                    console.error("Verification error:", error.message);
                    alert(error.message);
                } else if (session) {
                    // Check if user is completing onboarding or new
                    // Assume new users go to onboarding, existing to tabs
                    // For MVP simplicity, we might route directly to origin if they have no profile
                    // We'll figure this logic definitively in the index.tsx session controller later
                    // Currently pushing to learn directly to match previous mock
                    router.replace('/(tabs)/learn');
                }
            } catch (err) {
                console.error('Unexpected error:', err);
                alert("An unexpected error occurred.");
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => router.back()}
                >
                    <MaterialIcons name="arrow-back" size={24} color={Colors.neutral.text} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>LYNC</Text>
                <TouchableOpacity style={styles.helpButton}>
                    <Text style={styles.helpButtonText}>Help</Text>
                </TouchableOpacity>
            </View>

            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.keyboardView}
            >
                <View style={styles.content}>
                    {/* Icon */}
                    <View style={styles.iconContainer}>
                        <MaterialIcons name="mark-email-read" size={48} color={Colors.social.primary} />
                    </View>

                    <Text style={styles.title}>Enter Verification Code</Text>
                    <Text style={styles.subtitle}>
                        We sent a code to <Text style={styles.emailText}>{email || 'your email'}</Text>
                    </Text>

                    <TouchableOpacity onPress={() => router.back()}>
                        <Text style={styles.changeEmailText}>Change Email</Text>
                    </TouchableOpacity>

                    {/* OTP Inputs */}
                    <View style={styles.otpContainer}>
                        {code.map((digit, index) => (
                            <TextInput
                                key={index}
                                ref={inputRefs[index]}
                                style={[styles.otpInput, digit && styles.otpInputFilled]}
                                value={digit}
                                onChangeText={(text) => handleChange(text, index)}
                                onKeyPress={(e) => handleKeyPress(e, index)}
                                keyboardType="numeric"
                                maxLength={1}
                                selectTextOnFocus
                            />
                        ))}
                    </View>

                    <View style={styles.resendContainer}>
                        <Text style={styles.resendPrompt}>Didn't receive the code?</Text>
                        <TouchableOpacity>
                            <Text style={styles.resendAction}>Resend in 00:30</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity
                        style={[
                            styles.verifyButton,
                            code.join('').length < 8 && styles.disabledButton
                        ]}
                        onPress={handleVerify}
                        disabled={code.join('').length < 8}
                    >
                        <Text style={styles.verifyButtonText}>Verify</Text>
                        <MaterialIcons name="arrow-forward" size={20} color={Colors.neutral.white} />
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: Colors.neutral.offWhite,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    backButton: {
        width: 48,
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 24,
    },
    headerTitle: {
        ...Typography.h3,
        flex: 1,
        textAlign: 'center',
        letterSpacing: -0.5,
    },
    helpButton: {
        width: 48,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    helpButtonText: {
        color: Colors.social.primary,
        fontWeight: '700',
        fontSize: 14,
    },
    keyboardView: {
        flex: 1,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 16,
        paddingBottom: 40,
    },
    iconContainer: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: Colors.social.light,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 32,
    },
    title: {
        ...Typography.h1,
        textAlign: 'center',
        marginBottom: 12,
    },
    subtitle: {
        ...Typography.body,
        textAlign: 'center',
        marginBottom: 4,
    },
    emailText: {
        fontWeight: '600',
        color: Colors.neutral.text,
    },
    changeEmailText: {
        color: Colors.social.primary,
        fontWeight: '600',
        fontSize: 14,
        marginBottom: 40,
        marginTop: 8,
    },
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        marginBottom: 32,
        gap: 6,
    },
    otpInput: {
        width: 38,
        height: 54,
        backgroundColor: Colors.neutral.white,
        borderWidth: 1,
        borderColor: Colors.neutral.border,
        borderRadius: 10,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '700',
        color: Colors.neutral.text,
    },
    otpInputFilled: {
        borderColor: Colors.social.primary,
        backgroundColor: Colors.social.light,
    },
    resendContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginBottom: 32,
    },
    resendPrompt: {
        color: Colors.neutral.muted,
        fontWeight: '500',
        fontSize: 14,
    },
    resendAction: {
        color: Colors.social.primary,
        fontWeight: '700',
        fontSize: 14,
    },
    verifyButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        maxWidth: 320,
        height: 56,
        backgroundColor: Colors.social.primary,
        borderRadius: 16,
        gap: 8,
        shadowColor: Colors.social.primary,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 8,
        elevation: 4,
    },
    disabledButton: {
        opacity: 0.5,
        shadowOpacity: 0,
    },
    verifyButtonText: {
        color: Colors.neutral.white,
        fontSize: 18,
        fontWeight: '700',
    }
});
