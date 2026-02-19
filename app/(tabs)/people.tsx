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
import { MaterialIcons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';
import Typography from '../../constants/Typography';

export default function PeopleScreen() {
    const [activeTab, setActiveTab] = useState('explore'); // explore, nearby

    return (
        <SafeAreaView style={styles.safeArea}>
            {/* Top Navigation */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.iconButton}>
                    <MaterialIcons name="tune" size={24} color={Colors.neutral.text} />
                </TouchableOpacity>

                <View style={styles.segmentedControl}>
                    <TouchableOpacity
                        style={[styles.segmentButton, activeTab === 'explore' && styles.segmentActive]}
                        onPress={() => setActiveTab('explore')}
                    >
                        <Text style={[styles.segmentText, activeTab === 'explore' && styles.segmentTextActive]}>Explore</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.segmentButton, activeTab === 'nearby' && styles.segmentActive]}
                        onPress={() => setActiveTab('nearby')}
                    >
                        <Text style={[styles.segmentText, activeTab === 'nearby' && styles.segmentTextActive]}>Nearby</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.iconButton}>
                    <MaterialIcons name="notifications-none" size={24} color={Colors.neutral.text} />
                    {/* Notification Dot */}
                    <View style={styles.notificationDot} />
                </TouchableOpacity>
            </View>

            {/* Main Content Area */}
            <View style={styles.main}>
                {/* Card Stack Region */}
                <View style={styles.cardStackContainer}>

                    {/* Active Top Card */}
                    <View style={styles.activeCard}>
                        <ImageBackground
                            source={{ uri: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' }} // Profile photo placeholder
                            style={styles.cardImageArea}
                        >
                            {/* Gradient overlay for text readability */}
                            <View style={styles.gradientOverlay} />

                            {/* Match Percentage Badge */}
                            <View style={styles.matchBadge}>
                                <Text style={styles.matchBadgeText}>92% Match</Text>
                            </View>

                            {/* Profile Info Overlay */}
                            <View style={styles.profileInfoOverlay}>
                                <View style={styles.nameRow}>
                                    <Text style={styles.profileName}>Sarah, 24</Text>
                                    <MaterialIcons name="verified" size={20} color={Colors.social.primary} />
                                </View>

                                <View style={styles.locationRow}>
                                    <MaterialIcons name="location-pin" size={16} color={Colors.neutral.white} />
                                    <Text style={styles.locationText}>2 miles away</Text>
                                </View>

                                {/* Languages Section inside image */}
                                <View style={styles.languagesRow}>
                                    <View style={styles.langBadgeContainer}>
                                        <Text style={styles.langTypeLabel}>Speaks</Text>
                                        <View style={styles.langChipsRow}>
                                            <View style={styles.langChip}>
                                                <Text style={styles.langEmoji}>🇺🇸</Text>
                                                <Text style={styles.langConfigText}>Native</Text>
                                            </View>
                                            <View style={styles.langChip}>
                                                <Text style={styles.langEmoji}>🇪🇸</Text>
                                                <Text style={styles.langConfigText}>B2</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={styles.verticalDivider} />
                                    <View style={styles.langBadgeContainer}>
                                        <Text style={styles.langTypeLabel}>Learning</Text>
                                        <View style={styles.langChip}>
                                            <Text style={styles.langEmoji}>🇯🇵</Text>
                                            <Text style={styles.langConfigText}>Beginner</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </ImageBackground>
                    </View>
                </View>

                {/* Action Controls */}
                <View style={styles.actionControlsContainer}>
                    <TouchableOpacity style={styles.smallCircleButton}>
                        <MaterialIcons name="close" size={28} color="#ef4444" />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.largeCircleButton}>
                        <MaterialIcons name="chat" size={36} color={Colors.neutral.white} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.smallCircleButton}>
                        <MaterialIcons name="star" size={28} color="#f59e0b" />
                    </TouchableOpacity>
                </View>
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
        paddingTop: Platform.OS === 'android' ? 16 : 8,
        paddingBottom: 16,
        backgroundColor: Colors.neutral.offWhite,
        zIndex: 10,
    },
    iconButton: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: Colors.neutral.white,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
        position: 'relative',
    },
    notificationDot: {
        position: 'absolute',
        top: 10,
        right: 12,
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: Colors.social.primary,
        borderWidth: 1.5,
        borderColor: Colors.neutral.white,
    },
    segmentedControl: {
        flexDirection: 'row',
        backgroundColor: '#e9ecef',
        padding: 4,
        borderRadius: 24,
        width: 200,
    },
    segmentButton: {
        flex: 1,
        paddingVertical: 8,
        alignItems: 'center',
        borderRadius: 20,
    },
    segmentActive: {
        backgroundColor: Colors.neutral.white,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    segmentText: {
        fontSize: 14,
        fontWeight: '600',
        color: Colors.neutral.muted,
    },
    segmentTextActive: {
        color: Colors.neutral.text,
    },
    main: {
        flex: 1,
        paddingHorizontal: 16,
        paddingBottom: 16,
    },
    cardStackContainer: {
        flex: 1,
        position: 'relative',
        marginTop: 8,
    },
    activeCard: {
        flex: 1,
        backgroundColor: Colors.neutral.white,
        borderRadius: 24,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.15,
        shadowRadius: 16,
        elevation: 6,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.02)',
    },
    cardImageArea: {
        flex: 1,
        width: '100%',
        height: '100%',
        position: 'relative',
    },
    gradientOverlay: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: '60%',
        backgroundColor: 'rgba(0,0,0,0.4)', // Base overlay
        // A real gradient would require expo-linear-gradient, using solid opacity for MVP simplification
    },
    matchBadge: {
        position: 'absolute',
        top: 16,
        left: 16,
        backgroundColor: 'rgba(52, 199, 89, 0.9)', // profile/green primary
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.2)',
    },
    matchBadgeText: {
        color: Colors.neutral.white,
        fontSize: 12,
        fontWeight: '700',
        letterSpacing: 0.5,
    },
    profileInfoOverlay: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 24,
    },
    nameRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginBottom: 4,
    },
    profileName: {
        fontSize: 32,
        fontWeight: '800',
        color: Colors.neutral.white,
        letterSpacing: -0.5,
    },
    locationRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        marginBottom: 20,
    },
    locationText: {
        fontSize: 14,
        fontWeight: '500',
        color: 'rgba(255,255,255,0.8)',
    },
    languagesRow: {
        flexDirection: 'row',
        backgroundColor: 'rgba(0,0,0,0.4)',
        borderRadius: 16,
        padding: 16,
        backdropFilter: 'blur(10px)', // web only technically, but gives idea
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.1)',
    },
    langBadgeContainer: {
        flex: 1,
    },
    verticalDivider: {
        width: 1,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginHorizontal: 16,
    },
    langTypeLabel: {
        fontSize: 11,
        textTransform: 'uppercase',
        letterSpacing: 1,
        fontWeight: '700',
        color: 'rgba(255,255,255,0.6)',
        marginBottom: 8,
    },
    langChipsRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
    },
    langChip: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.15)',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 8,
        gap: 4,
    },
    langEmoji: {
        fontSize: 14,
    },
    langConfigText: {
        fontSize: 12,
        fontWeight: '600',
        color: Colors.neutral.white,
    },
    actionControlsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 24,
        gap: 24,
    },
    smallCircleButton: {
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: Colors.neutral.white,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
        borderWidth: 1,
        borderColor: '#eee',
    },
    largeCircleButton: {
        width: 72,
        height: 72,
        borderRadius: 36,
        backgroundColor: Colors.social.primary,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: Colors.social.primary,
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.3,
        shadowRadius: 16,
        elevation: 8,
    }
});
