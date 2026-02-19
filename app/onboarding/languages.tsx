import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Platform,
} from 'react-native';
import { useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';
import Typography from '../../constants/Typography';

const NATIVE_LANGS = [
    { id: 'en', name: 'English', flag: '🇺🇸' },
    { id: 'es', name: 'Spanish', flag: '🇪🇸' },
    { id: 'fr', name: 'French', flag: '🇫🇷' },
    { id: 'de', name: 'German', flag: '🇩🇪' },
    { id: 'tr', name: 'Turkish', flag: '🇹🇷' },
];

const TARGET_LANGS = [
    { id: 'jp', name: 'Japanese', flag: '🇯🇵' },
    { id: 'it', name: 'Italian', flag: '🇮🇹' },
    { id: 'kr', name: 'Korean', flag: '🇰🇷' },
    { id: 'cn', name: 'Chinese', flag: '🇨🇳' },
    { id: 'br', name: 'Portuguese', flag: '🇧🇷' },
];

export default function LanguagesScreen() {
    const router = useRouter();
    const [nativeLangs, setNativeLangs] = useState(['en']);
    const [targetLangs, setTargetLangs] = useState(['jp']);

    const toggleNative = (id) => {
        setNativeLangs(prev =>
            prev.includes(id) ? prev.filter(l => l !== id) : [...prev, id]
        );
    };

    const toggleTarget = (id) => {
        setTargetLangs(prev =>
            prev.includes(id) ? prev.filter(l => l !== id) : [...prev, id]
        );
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            {/* Header & Progress */}
            <View style={styles.header}>
                <View style={styles.headerTop}>
                    <TouchableOpacity
                        style={styles.iconButton}
                        onPress={() => router.back()}
                    >
                        <MaterialIcons name="arrow-back" size={24} color={Colors.neutral.text} />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Languages</Text>
                    <View style={styles.spacer} />
                </View>
                <View style={styles.progressContainer}>
                    <View style={styles.progressTextRow}>
                        <Text style={styles.stepText}>Step 2 of 4</Text>
                        <Text style={styles.percentText}>50%</Text>
                    </View>
                    <View style={styles.progressBarBg}>
                        <View style={[styles.progressBarFill, { width: '50%' }]} />
                    </View>
                </View>
            </View>

            <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                {/* Section 1: I Speak */}
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <View style={styles.iconWrapperBlue}>
                            <MaterialIcons name="chat-bubble" size={20} color={Colors.social.primary} />
                        </View>
                        <Text style={styles.sectionTitle}>I speak...</Text>
                    </View>
                    <Text style={styles.sectionSubtitle}>
                        Select your native language(s) to connect with learners.
                    </Text>

                    <View style={styles.chipsRow}>
                        {NATIVE_LANGS.map(lang => {
                            const isSelected = nativeLangs.includes(lang.id);
                            return (
                                <TouchableOpacity
                                    key={lang.id}
                                    style={[styles.chip, isSelected && styles.chipActiveBlue]}
                                    onPress={() => toggleNative(lang.id)}
                                >
                                    <Text style={styles.chipFlag}>{lang.flag}</Text>
                                    <Text style={[styles.chipText, isSelected && styles.chipTextActive]}>
                                        {lang.name}
                                    </Text>
                                    {isSelected && <MaterialIcons name="check" size={16} color={Colors.neutral.white} />}
                                </TouchableOpacity>
                            );
                        })}
                        <TouchableOpacity style={styles.addChip}>
                            <MaterialIcons name="add" size={20} color={Colors.neutral.muted} />
                            <Text style={styles.addChipText}>Add more</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.divider} />

                {/* Section 2: I Want to Learn */}
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <View style={styles.iconWrapperOrange}>
                            <MaterialIcons name="school" size={20} color={Colors.learn.primary} />
                        </View>
                        <Text style={styles.sectionTitle}>I want to learn...</Text>
                    </View>
                    <Text style={styles.sectionSubtitle}>
                        Pick languages you want to improve or start learning.
                    </Text>

                    <View style={styles.chipsRow}>
                        {TARGET_LANGS.map(lang => {
                            const isSelected = targetLangs.includes(lang.id);
                            return (
                                <TouchableOpacity
                                    key={lang.id}
                                    style={[styles.chip, isSelected && styles.chipActiveOrange]}
                                    onPress={() => toggleTarget(lang.id)}
                                >
                                    <Text style={styles.chipFlag}>{lang.flag}</Text>
                                    <Text style={[styles.chipText, isSelected && styles.chipTextActive]}>
                                        {lang.name}
                                    </Text>
                                    {isSelected && <MaterialIcons name="check" size={16} color={Colors.neutral.white} />}
                                </TouchableOpacity>
                            );
                        })}
                        <TouchableOpacity style={styles.addChip}>
                            <MaterialIcons name="add" size={20} color={Colors.neutral.muted} />
                            <Text style={styles.addChipText}>Add more</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>

            {/* Footer */}
            <View style={styles.footer}>
                <TouchableOpacity
                    style={styles.continueButton}
                    onPress={() => router.push('/onboarding/photos')}
                >
                    <Text style={styles.continueButtonText}>Continue</Text>
                    <MaterialIcons name="arrow-forward" size={20} color={Colors.neutral.white} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: Colors.neutral.white,
    },
    header: {
        backgroundColor: Colors.neutral.white,
        paddingTop: Platform.OS === 'android' ? 24 : 0,
        zIndex: 10,
    },
    headerTop: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingBottom: 8,
    },
    iconButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerTitle: {
        ...Typography.h3,
        flex: 1,
        textAlign: 'center',
        paddingRight: 40, // Balance icon button
    },
    spacer: {
        width: 0,
    },
    progressContainer: {
        paddingHorizontal: 24,
        paddingBottom: 16,
    },
    progressTextRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginBottom: 8,
    },
    stepText: {
        ...Typography.label,
        color: Colors.neutral.muted,
    },
    percentText: {
        fontSize: 12,
        fontWeight: '700',
        color: Colors.social.primary,
    },
    progressBarBg: {
        height: 8,
        backgroundColor: Colors.neutral.offWhite,
        borderRadius: 4,
        overflow: 'hidden',
    },
    progressBarFill: {
        height: '100%',
        backgroundColor: Colors.social.primary,
        borderRadius: 4,
    },
    scrollView: {
        flex: 1,
    },
    scrollContent: {
        paddingHorizontal: 24,
        paddingTop: 8,
        paddingBottom: 100, // Space for footer
    },
    section: {
        marginBottom: 32,
    },
    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginBottom: 16,
    },
    iconWrapperBlue: {
        backgroundColor: Colors.social.light,
        padding: 8,
        borderRadius: 8,
    },
    iconWrapperOrange: {
        backgroundColor: Colors.learn.light,
        padding: 8,
        borderRadius: 8,
    },
    sectionTitle: {
        ...Typography.h2,
    },
    sectionSubtitle: {
        ...Typography.caption,
        fontSize: 15,
        marginBottom: 16,
        lineHeight: 22,
    },
    chipsRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 12,
    },
    chip: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 40,
        backgroundColor: Colors.neutral.white,
        borderWidth: 1,
        borderColor: Colors.neutral.border,
        borderRadius: 20,
        paddingLeft: 12,
        paddingRight: 16,
        gap: 8,
    },
    chipActiveBlue: {
        backgroundColor: Colors.social.primary,
        borderColor: Colors.social.primary,
        shadowColor: Colors.social.light,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 2,
    },
    chipActiveOrange: {
        backgroundColor: Colors.learn.primary,
        borderColor: Colors.learn.primary,
        shadowColor: Colors.learn.light,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 2,
    },
    chipFlag: {
        fontSize: 18,
    },
    chipText: {
        fontSize: 14,
        fontWeight: '500',
        color: Colors.neutral.text,
    },
    chipTextActive: {
        color: Colors.neutral.white,
        fontWeight: '600',
    },
    addChip: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 40,
        backgroundColor: Colors.neutral.offWhite,
        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor: Colors.neutral.muted,
        borderRadius: 20,
        paddingLeft: 12,
        paddingRight: 16,
        gap: 4,
    },
    addChipText: {
        fontSize: 14,
        fontWeight: '500',
        color: Colors.neutral.muted,
    },
    divider: {
        height: 1,
        backgroundColor: Colors.neutral.border,
        marginBottom: 32,
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 16,
        paddingBottom: Platform.OS === 'ios' ? 32 : 16,
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        borderTopWidth: 1,
        borderTopColor: Colors.neutral.border,
    },
    continueButton: {
        flexDirection: 'row',
        height: 56,
        backgroundColor: Colors.social.primary,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        shadowColor: Colors.social.primary,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 4,
    },
    continueButtonText: {
        color: Colors.neutral.white,
        fontSize: 18,
        fontWeight: '700',
    }
});
