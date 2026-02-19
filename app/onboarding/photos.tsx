import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Platform,
    Image,
} from 'react-native';
import { useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';
import Typography from '../../constants/Typography';

export default function PhotosScreen() {
    const router = useRouter();

    const handleSkip = () => {
        router.push('/onboarding/calibration');
    };

    const handleContinue = () => {
        router.push('/onboarding/calibration');
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.iconButton} onPress={() => router.back()}>
                    <MaterialIcons name="arrow-back" size={24} color={Colors.neutral.text} />
                </TouchableOpacity>
                <Text style={styles.stepText}>Step 3 of 4</Text>
                <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
                    <Text style={styles.skipButtonText}>Skip</Text>
                </TouchableOpacity>
            </View>

            {/* Progress */}
            <View style={styles.progressContainer}>
                <View style={styles.progressBarBg}>
                    <View style={[styles.progressBarFill, { width: '75%' }]} />
                </View>
            </View>

            <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
                {/* Header Text */}
                <View style={styles.headerTextContainer}>
                    <Text style={styles.title}>Add your photos</Text>
                    <Text style={styles.subtitle}>
                        Add at least 2 photos to continue. Your first photo will be your main profile picture.
                    </Text>
                </View>

                {/* Tip Box */}
                <View style={styles.tipBox}>
                    <MaterialIcons name="lightbulb" size={20} color={Colors.social.primary} style={styles.tipIcon} />
                    <Text style={styles.tipText}>
                        <Text style={styles.tipTextBold}>Tip: </Text>
                        80% of matches happen with a clear smiling face as the main photo.
                    </Text>
                </View>

                {/* Photo Grid */}
                <View style={styles.gridContainer}>
                    {/* Main Photo (Slot 1) - Takes up 2x2 grid spaces */}
                    <View style={[styles.gridItem, styles.gridItemLarge]}>
                        <View style={styles.photoContainer}>
                            <Image
                                source={{ uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' }}
                                style={styles.photo}
                            />
                            <View style={styles.mainBadge}>
                                <Text style={styles.mainBadgeText}>MAIN</Text>
                            </View>
                            <TouchableOpacity style={styles.removeButton}>
                                <MaterialIcons name="close" size={16} color="#ef4444" />
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Secondary Photo (Slot 2) */}
                    <View style={styles.gridItem}>
                        <View style={styles.photoContainer}>
                            <Image
                                source={{ uri: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' }}
                                style={styles.photo}
                            />
                            <TouchableOpacity style={styles.removeButton}>
                                <MaterialIcons name="close" size={14} color="#ef4444" />
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Loading Slot (Slot 3) */}
                    <View style={styles.gridItem}>
                        <View style={[styles.emptySlot, styles.loadingSlot]}>
                            {/* Simulated spinner */}
                            <View style={styles.spinner} />
                        </View>
                    </View>

                    {/* Empty Add Slots */}
                    {[4, 5, 6].map((slot) => (
                        <View key={slot} style={styles.gridItem}>
                            <TouchableOpacity style={styles.emptySlot}>
                                <MaterialIcons
                                    name={slot === 4 ? "add-a-photo" : "add"}
                                    size={28}
                                    color={slot === 4 ? Colors.social.primary : Colors.neutral.muted}
                                />
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>

                <Text style={styles.dragText}>Drag to reorder photos</Text>
            </ScrollView>

            {/* Footer */}
            <View style={styles.footer}>
                <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
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
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingTop: Platform.OS === 'android' ? 24 : 8,
        paddingBottom: 8,
        backgroundColor: Colors.neutral.white,
    },
    iconButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    stepText: {
        ...Typography.label,
        color: Colors.neutral.muted,
    },
    skipButton: {
        height: 40,
        paddingHorizontal: 8,
        justifyContent: 'center',
    },
    skipButtonText: {
        color: Colors.social.primary,
        fontWeight: '700',
        fontSize: 14,
    },
    progressContainer: {
        paddingHorizontal: 24,
        paddingBottom: 8,
    },
    progressBarBg: {
        height: 6,
        backgroundColor: Colors.neutral.offWhite,
        borderRadius: 3,
        overflow: 'hidden',
    },
    progressBarFill: {
        height: '100%',
        backgroundColor: Colors.social.primary,
        borderRadius: 3,
    },
    scrollView: {
        flex: 1,
    },
    scrollContent: {
        paddingHorizontal: 24,
        paddingTop: 16,
        paddingBottom: 120, // Space for gradient footer
    },
    headerTextContainer: {
        marginBottom: 32,
    },
    title: {
        ...Typography.h1,
        marginBottom: 12,
    },
    subtitle: {
        ...Typography.body,
        lineHeight: 24,
    },
    tipBox: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        backgroundColor: Colors.social.light,
        borderColor: 'rgba(0, 122, 255, 0.2)',
        borderWidth: 1,
        borderRadius: 12,
        padding: 16,
        marginBottom: 24,
        gap: 12,
    },
    tipIcon: {
        marginTop: 2,
    },
    tipText: {
        ...Typography.bodyMedium,
        flex: 1,
    },
    tipTextBold: {
        color: Colors.social.primary,
        fontWeight: '700',
    },
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 12,
    },
    gridItem: {
        width: '31%', // roughly 1/3 minus gap
        aspectRatio: 1,
    },
    gridItemLarge: {
        width: '65%', // roughly 2/3 minus gap
        aspectRatio: 1,
    },
    photoContainer: {
        flex: 1,
        borderRadius: 16,
        overflow: 'hidden',
        backgroundColor: Colors.neutral.offWhite,
        position: 'relative',
    },
    photo: {
        width: '100%',
        height: '100%',
    },
    emptySlot: {
        flex: 1,
        borderRadius: 16,
        backgroundColor: Colors.neutral.offWhite,
        borderWidth: 2,
        borderColor: Colors.neutral.border,
        borderStyle: 'dashed',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loadingSlot: {
        borderColor: 'rgba(0, 122, 255, 0.3)',
    },
    spinner: {
        width: 24,
        height: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: Colors.social.primary,
        borderTopColor: 'transparent',
        // In actual app, use Animated or ActivityIndicator
    },
    mainBadge: {
        position: 'absolute',
        bottom: 8,
        left: 8,
        backgroundColor: 'rgba(0,0,0,0.6)',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 6,
    },
    mainBadgeText: {
        color: Colors.neutral.white,
        fontSize: 10,
        fontWeight: '700',
        letterSpacing: 1,
    },
    removeButton: {
        position: 'absolute',
        top: 8,
        right: 8,
        width: 28,
        height: 28,
        borderRadius: 14,
        backgroundColor: 'rgba(255,255,255,0.9)',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    dragText: {
        textAlign: 'center',
        marginTop: 24,
        ...Typography.caption,
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 24,
        paddingBottom: Platform.OS === 'ios' ? 40 : 24,
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
