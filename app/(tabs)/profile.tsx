import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Image,
    Platform,
} from 'react-native';
import { useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';
import Typography from '../../constants/Typography';

export default function ProfileScreen() {
    const router = useRouter();

    const handleLogout = () => {
        // In real app, call Supabase signOut
        router.replace('/(auth)/login');
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                {/* Header Section */}
                <View style={styles.header}>
                    <TouchableOpacity style={styles.iconButton}>
                        <MaterialIcons name="settings" size={24} color={Colors.neutral.text} />
                    </TouchableOpacity>
                </View>

                {/* Profile Info */}
                <View style={styles.profileSection}>
                    <View style={styles.avatarContainer}>
                        <Image
                            source={{ uri: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&w=300&q=80' }}
                            style={styles.avatar}
                        />
                        <TouchableOpacity style={styles.editAvatarButton}>
                            <MaterialIcons name="edit" size={16} color={Colors.neutral.white} />
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.nameText}>Alex, 24</Text>
                    <Text style={styles.locationText}>Seattle, WA</Text>

                    {/* Quick Stats Row */}
                    <View style={styles.statsRow}>
                        <View style={styles.statItem}>
                            <Text style={styles.statValue}>12</Text>
                            <Text style={styles.statLabel}>Day Streak</Text>
                        </View>
                        <View style={styles.statDivider} />
                        <View style={styles.statItem}>
                            <Text style={styles.statValue}>2.4k</Text>
                            <Text style={styles.statLabel}>Total XP</Text>
                        </View>
                        <View style={styles.statDivider} />
                        <View style={styles.statItem}>
                            <Text style={styles.statValue}>4</Text>
                            <Text style={styles.statLabel}>Connections</Text>
                        </View>
                    </View>
                </View>

                {/* Languages Section */}
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Languages</Text>
                        <TouchableOpacity>
                            <Text style={styles.sectionAction}>Edit</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.card}>
                        <View style={styles.langItem}>
                            <View style={styles.langLeft}>
                                <Text style={styles.langEmoji}>🇺🇸</Text>
                                <View>
                                    <Text style={styles.langName}>English</Text>
                                    <Text style={styles.langLevel}>Native</Text>
                                </View>
                            </View>
                            <View style={styles.badgeNative}>
                                <Text style={styles.badgeTextNative}>TEACHING</Text>
                            </View>
                        </View>

                        <View style={styles.cardDivider} />

                        <View style={styles.langItem}>
                            <View style={styles.langLeft}>
                                <Text style={styles.langEmoji}>🇪🇸</Text>
                                <View>
                                    <Text style={styles.langName}>Spanish</Text>
                                    <Text style={styles.langLevel}>Intermediate (B1)</Text>
                                </View>
                            </View>
                            <View style={styles.badgeLearning}>
                                <Text style={styles.badgeTextLearning}>LEARNING</Text>
                            </View>
                        </View>
                    </View>
                </View>

                {/* Achievements Section */}
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Achievements</Text>
                        <TouchableOpacity>
                            <Text style={styles.sectionAction}>See All</Text>
                        </TouchableOpacity>
                    </View>

                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.achievementsScroll}>
                        <View style={styles.achievementCard}>
                            <View style={[styles.achievementIconWrapper, { backgroundColor: 'rgba(255, 107, 0, 0.1)' }]}>
                                <MaterialIcons name="local-fire-department" size={32} color={Colors.learn.primary} />
                            </View>
                            <Text style={styles.achievementTitle}>7-Day Streak</Text>
                            <Text style={styles.achievementDesc}>Completed a full week</Text>
                        </View>

                        <View style={styles.achievementCard}>
                            <View style={[styles.achievementIconWrapper, { backgroundColor: 'rgba(0, 122, 255, 0.1)' }]}>
                                <MaterialIcons name="people" size={32} color={Colors.social.primary} />
                            </View>
                            <Text style={styles.achievementTitle}>Social Butterfly</Text>
                            <Text style={styles.achievementDesc}>Made 3 new matches</Text>
                        </View>

                        <View style={[styles.achievementCard, styles.achievementCardLocked]}>
                            <View style={[styles.achievementIconWrapper, { backgroundColor: Colors.neutral.offWhite }]}>
                                <MaterialIcons name="lock" size={32} color={Colors.neutral.muted} />
                            </View>
                            <Text style={styles.achievementTitle}>Early Bird</Text>
                            <Text style={styles.achievementDesc}>Learn before 8 AM</Text>
                        </View>
                    </ScrollView>
                </View>

                {/* App Settings / Logout */}
                <View style={styles.section}>
                    <View style={styles.card}>
                        <TouchableOpacity style={styles.menuItem}>
                            <View style={styles.menuItemLeft}>
                                <View style={[styles.menuIconWrapper, { backgroundColor: 'rgba(52, 199, 89, 0.1)' }]}>
                                    <MaterialIcons name="security" size={20} color={Colors.profile.primary} />
                                </View>
                                <Text style={styles.menuItemText}>Privacy & Security</Text>
                            </View>
                            <MaterialIcons name="chevron-right" size={24} color={Colors.neutral.muted} />
                        </TouchableOpacity>

                        <View style={styles.cardDivider} />

                        <TouchableOpacity style={styles.menuItem}>
                            <View style={styles.menuItemLeft}>
                                <View style={[styles.menuIconWrapper, { backgroundColor: 'rgba(0, 122, 255, 0.1)' }]}>
                                    <MaterialIcons name="help-outline" size={20} color={Colors.social.primary} />
                                </View>
                                <Text style={styles.menuItemText}>Help & Support</Text>
                            </View>
                            <MaterialIcons name="chevron-right" size={24} color={Colors.neutral.muted} />
                        </TouchableOpacity>

                        <View style={styles.cardDivider} />

                        <TouchableOpacity style={styles.menuItem} onPress={handleLogout}>
                            <View style={styles.menuItemLeft}>
                                <View style={[styles.menuIconWrapper, { backgroundColor: 'rgba(239, 68, 68, 0.1)' }]}>
                                    <MaterialIcons name="logout" size={20} color="#ef4444" />
                                </View>
                                <Text style={[styles.menuItemText, { color: '#ef4444' }]}>Log Out</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ height: 40 }} />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: Colors.neutral.offWhite,
    },
    scrollView: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingTop: Platform.OS === 'android' ? 24 : 16,
    },
    iconButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: Colors.neutral.white,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: Colors.neutral.border,
    },
    profileSection: {
        alignItems: 'center',
        paddingTop: 8,
        paddingBottom: 24,
    },
    avatarContainer: {
        position: 'relative',
        marginBottom: 16,
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 60,
        borderWidth: 4,
        borderColor: Colors.neutral.white,
    },
    editAvatarButton: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: Colors.profile.primary,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 3,
        borderColor: Colors.neutral.white,
    },
    nameText: {
        ...Typography.h2,
        marginBottom: 4,
    },
    locationText: {
        ...Typography.bodyMedium,
        color: Colors.neutral.muted,
        marginBottom: 24,
    },
    statsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.neutral.white,
        paddingVertical: 16,
        paddingHorizontal: 24,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: Colors.neutral.border,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
    },
    statItem: {
        alignItems: 'center',
        flex: 1,
    },
    statValue: {
        fontSize: 20,
        fontWeight: '700',
        color: Colors.neutral.text,
        marginBottom: 4,
    },
    statLabel: {
        ...Typography.caption,
    },
    statDivider: {
        width: 1,
        height: 32,
        backgroundColor: Colors.neutral.border,
        marginHorizontal: 16,
    },
    section: {
        paddingHorizontal: 20,
        marginBottom: 32,
    },
    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    sectionTitle: {
        ...Typography.h3,
        fontSize: 20,
    },
    sectionAction: {
        fontSize: 14,
        fontWeight: '600',
        color: Colors.social.primary,
    },
    card: {
        backgroundColor: Colors.neutral.white,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: Colors.neutral.border,
        overflow: 'hidden',
    },
    cardDivider: {
        height: 1,
        backgroundColor: Colors.neutral.offWhite,
        marginLeft: 64, // Align with text
    },
    langItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
    },
    langLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
    },
    langEmoji: {
        fontSize: 32,
    },
    langName: {
        fontSize: 16,
        fontWeight: '700',
        color: Colors.neutral.text,
        marginBottom: 2,
    },
    langLevel: {
        fontSize: 14,
        color: Colors.neutral.muted,
    },
    badgeNative: {
        backgroundColor: 'rgba(52, 199, 89, 0.1)',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 12,
    },
    badgeTextNative: {
        fontSize: 10,
        fontWeight: '700',
        color: Colors.profile.primary,
        letterSpacing: 0.5,
    },
    badgeLearning: {
        backgroundColor: 'rgba(255, 107, 0, 0.1)',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 12,
    },
    badgeTextLearning: {
        fontSize: 10,
        fontWeight: '700',
        color: Colors.learn.primary,
        letterSpacing: 0.5,
    },
    achievementsScroll: {
        paddingRight: 20,
        gap: 16,
    },
    achievementCard: {
        width: 140,
        backgroundColor: Colors.neutral.white,
        borderRadius: 20,
        padding: 16,
        borderWidth: 1,
        borderColor: Colors.neutral.border,
        alignItems: 'center',
    },
    achievementCardLocked: {
        opacity: 0.5,
        backgroundColor: Colors.neutral.offWhite,
    },
    achievementIconWrapper: {
        width: 64,
        height: 64,
        borderRadius: 32,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 12,
    },
    achievementTitle: {
        fontSize: 14,
        fontWeight: '700',
        color: Colors.neutral.text,
        textAlign: 'center',
        marginBottom: 4,
    },
    achievementDesc: {
        fontSize: 12,
        color: Colors.neutral.muted,
        textAlign: 'center',
        lineHeight: 16,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
    },
    menuItemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
    },
    menuIconWrapper: {
        width: 36,
        height: 36,
        borderRadius: 18,
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuItemText: {
        fontSize: 16,
        fontWeight: '500',
        color: Colors.neutral.text,
    }
});
