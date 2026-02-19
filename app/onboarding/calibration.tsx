import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    ImageBackground,
    Platform,
} from 'react-native';
import { useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';
import Typography from '../../constants/Typography';

export default function CalibrationScreen() {
    const router = useRouter();

    // Simple state to simulate swiping progress
    const [progress, setProgress] = useState(3);
    const total = 9;

    const handleSwipe = () => {
        if (progress < total) {
            setProgress(prev => prev + 1);
        } else {
            // Finished calibration, go to main app (Tabs)
            router.replace('/(tabs)/learn');
        }
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            {/* Top App Bar */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.iconButton} onPress={() => router.back()}>
                    <MaterialIcons name="arrow-back" size={24} color={Colors.neutral.text} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Calibration</Text>
                <View style={styles.spacer} />
            </View>

            {/* Progress Section */}
            <View style={styles.progressContainer}>
                <View style={styles.progressTextRow}>
                    <Text style={styles.progressLabel}>Language Compatibility</Text>
                    <Text style={styles.progressCount}>{progress}/{total}</Text>
                </View>
                <View style={styles.progressBarBg}>
                    <View style={[styles.progressBarFill, { width: `${(progress / total) * 100}%` }]} />
                </View>
            </View>

            {/* Main Content Area */}
            <View style={styles.main}>
                {/* Instructional Text */}
                <View style={styles.instructionContainer}>
                    <Text style={styles.title}>What interests you?</Text>
                    <Text style={styles.subtitle}>Swipe right to like, left to pass</Text>
                </View>

                {/* Card Stack Container (Simulated with static views for MVP) */}
                <View style={styles.cardStackContainer}>
                    {/* Card 3 (Bottom) */}
                    <View style={[styles.card, styles.cardEffect2]} />

                    {/* Card 2 (Middle) */}
                    <View style={[styles.card, styles.cardEffect1]}>
                        <View style={styles.cardMiddlePlaceholder}>
                            <MaterialIcons name="travel-explore" size={64} color={Colors.neutral.muted} style={{ opacity: 0.2 }} />
                        </View>
                        <View style={styles.cardMiddleContent}>
                            <View style={styles.skeletonSmall} />
                            <View style={styles.skeletonLarge} />
                        </View>
                    </View>

                    {/* Card 1 (Active) */}
                    <View style={styles.activeCard}>
                        <ImageBackground
                            source={{ uri: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' }} // Business setting placeholder
                            style={styles.cardImageArea}
                        >
                            <View style={styles.gradientOverlay} />
                            <View style={styles.categoryTag}>
                                <Text style={styles.categoryTagText}>PROFESSIONAL</Text>
                            </View>
                            <View style={styles.iconOverlay}>
                                <MaterialIcons name="work" size={32} color={Colors.learn.primary} />
                            </View>
                        </ImageBackground>

                        <View style={styles.cardContent}>
                            <View style={styles.cardTitleRow}>
                                <Text style={styles.cardTitle}>Business Spanish</Text>
                                <Text style={styles.cardEmoji}>🇪🇸</Text>
                            </View>
                            <Text style={styles.cardDescription}>
                                Master negotiation terms, formal email etiquette, and office vocabulary.
                            </Text>
                            <View style={styles.tagsContainer}>
                                <View style={styles.tagOrange}>
                                    <Text style={styles.tagOrangeText}>B2 Level</Text>
                                </View>
                                <View style={styles.tagNeutral}>
                                    <Text style={styles.tagNeutralText}>Career</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>

            {/* Bottom Controls */}
            <View style={styles.controlsContainer}>
                <TouchableOpacity style={styles.passButton} onPress={handleSwipe}>
                    <MaterialIcons name="close" size={36} color={Colors.neutral.muted} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.rewindButton}>
                    <MaterialIcons name="replay" size={24} color={Colors.neutral.muted} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.likeButton} onPress={handleSwipe}>
                    <MaterialIcons name="favorite" size={36} color={Colors.neutral.white} />
                </TouchableOpacity>
            </View>
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
        paddingTop: Platform.OS === 'android' ? 24 : 8,
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
        ...Typography.bodyLarge,
        fontWeight: '700',
    },
    spacer: {
        width: 40,
    },
    progressContainer: {
        paddingHorizontal: 24,
        paddingVertical: 8,
    },
    progressTextRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginBottom: 8,
    },
    progressLabel: {
        ...Typography.caption,
        fontWeight: '500',
    },
    progressCount: {
        fontSize: 14,
        fontWeight: '700',
        color: Colors.learn.primary, // Using orange here as in the design
    },
    progressBarBg: {
        height: 6,
        backgroundColor: Colors.neutral.border,
        borderRadius: 3,
        overflow: 'hidden',
    },
    progressBarFill: {
        height: '100%',
        backgroundColor: Colors.learn.primary,
        borderRadius: 3,
    },
    main: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 16,
        paddingBottom: 16,
    },
    instructionContainer: {
        alignItems: 'center',
        marginBottom: 24,
        zIndex: 10,
    },
    title: {
        ...Typography.h1,
        fontSize: 28,
        marginBottom: 8,
    },
    subtitle: {
        ...Typography.caption,
    },
    cardStackContainer: {
        width: '100%',
        maxWidth: 360,
        aspectRatio: 3 / 4,
        maxHeight: 500,
        position: 'relative',
    },
    card: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: Colors.neutral.white,
        borderRadius: 24,
        borderWidth: 1,
        borderColor: '#eee',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.05,
        shadowRadius: 20,
        elevation: 2,
    },
    cardEffect2: {
        transform: [{ scale: 0.9 }, { translateY: 20 }],
        opacity: 0.3,
        zIndex: 0,
    },
    cardEffect1: {
        transform: [{ scale: 0.95 }, { translateY: 10 }],
        opacity: 0.6,
        zIndex: 10,
        overflow: 'hidden',
    },
    cardMiddlePlaceholder: {
        height: '66%',
        backgroundColor: Colors.neutral.offWhite,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardMiddleContent: {
        flex: 1,
        padding: 24,
        justifyContent: 'flex-end',
        gap: 8,
    },
    skeletonSmall: {
        width: 64,
        height: 16,
        backgroundColor: Colors.neutral.offWhite,
        borderRadius: 4,
    },
    skeletonLarge: {
        width: 128,
        height: 24,
        backgroundColor: '#e2e8f0',
        borderRadius: 4,
    },
    activeCard: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: Colors.neutral.white,
        borderRadius: 24,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.1,
        shadowRadius: 30,
        elevation: 8,
        zIndex: 20,
        borderWidth: 1,
        borderColor: '#eee',
    },
    cardImageArea: {
        height: '60%',
        width: '100%',
        position: 'relative',
        backgroundColor: Colors.neutral.offWhite,
    },
    gradientOverlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.3)', // Simple overlay
    },
    categoryTag: {
        position: 'absolute',
        top: 16,
        right: 16,
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderColor: 'rgba(255,255,255,0.3)',
        borderWidth: 1,
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 16,
    },
    categoryTagText: {
        color: Colors.neutral.white,
        fontSize: 10,
        fontWeight: '700',
        letterSpacing: 1,
    },
    iconOverlay: {
        position: 'absolute',
        bottom: 16,
        left: 16,
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: Colors.neutral.white,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 4,
    },
    cardContent: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        gap: 4,
    },
    cardTitleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    cardTitle: {
        ...Typography.h2,
    },
    cardEmoji: {
        fontSize: 24,
    },
    cardDescription: {
        ...Typography.caption,
        fontSize: 14,
        lineHeight: 20,
        marginTop: 4,
    },
    tagsContainer: {
        flexDirection: 'row',
        marginTop: 16,
        gap: 8,
        flexWrap: 'wrap',
    },
    tagOrange: {
        backgroundColor: '#fff7ed', // orange-50
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 12,
    },
    tagOrangeText: {
        color: '#c2410c', // orange-700
        fontSize: 12,
        fontWeight: '600',
    },
    tagNeutral: {
        backgroundColor: Colors.neutral.offWhite,
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 12,
    },
    tagNeutralText: {
        color: '#334155', // slate-700
        fontSize: 12,
        fontWeight: '600',
    },
    controlsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
        paddingBottom: Platform.OS === 'ios' ? 40 : 32,
        gap: 32,
    },
    passButton: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: Colors.neutral.white,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 12,
        elevation: 4,
        borderWidth: 1,
        borderColor: '#eee',
    },
    rewindButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
    },
    likeButton: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: Colors.learn.primary, // Using orange for learning here
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: Colors.learn.primary,
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.3,
        shadowRadius: 20,
        elevation: 8,
    }
});
