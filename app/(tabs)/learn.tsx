import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Image,
    ImageBackground,
    Platform,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';
import Typography from '../../constants/Typography';

export default function LearnScreen() {
    return (
        <SafeAreaView style={styles.safeArea}>
            {/* Header */}
            <View style={styles.header}>
                <View style={styles.userInfo}>
                    <View style={styles.avatarContainer}>
                        <Image
                            source={{ uri: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&w=150&q=80' }}
                            style={styles.avatar}
                        />
                        <View style={styles.onlineBadge} />
                    </View>
                    <View>
                        <Text style={styles.greetingText}>Good Morning,</Text>
                        <Text style={styles.userName}>Alex</Text>
                    </View>
                </View>

                <View style={styles.streakBadge}>
                    <MaterialIcons name="local-fire-department" size={20} color={Colors.learn.primary} />
                    <Text style={styles.streakCount}>12</Text>
                </View>
            </View>

            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                {/* Quick Stats */}
                <View style={styles.statsContainer}>
                    <View style={[styles.statCard, { backgroundColor: Colors.learn.light, borderColor: '#ffecd9' }]}>
                        <View style={styles.statIconWrapper}>
                            <MaterialIcons name="school" size={24} color={Colors.learn.primary} />
                        </View>
                        <View>
                            <Text style={styles.statLabel}>Mastered</Text>
                            <Text style={styles.statValue}>458</Text>
                        </View>
                    </View>

                    <View style={[styles.statCard, { backgroundColor: Colors.social.light, borderColor: '#d9ebff' }]}>
                        <View style={[styles.statIconWrapper, { backgroundColor: 'transparent' }]}>
                            <MaterialIcons name="bolt" size={26} color={Colors.social.primary} />
                        </View>
                        <View>
                            <Text style={styles.statLabel}>Total XP</Text>
                            <Text style={styles.statValue}>2.4k</Text>
                        </View>
                    </View>
                </View>

                {/* Flashcard Area */}
                <View style={styles.flashcardContainer}>
                    <View style={styles.flashcardEffectsContainer}>
                        <View style={styles.flashcardEffect2} />
                        <View style={styles.flashcardEffect1} />

                        {/* Main Card */}
                        <View style={styles.flashcard}>
                            <ImageBackground
                                source={{ uri: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' }} // Taj Mahal placeholder
                                style={styles.cardCover}
                            >
                                <View style={styles.cardGradient} />
                                <View style={styles.cardLanguageTag}>
                                    <Text style={styles.cardLanguageTagText}>Hindi</Text>
                                </View>
                            </ImageBackground>

                            <View style={styles.cardContent}>
                                <TouchableOpacity style={styles.audioButton}>
                                    <MaterialIcons name="volume-up" size={28} color={Colors.neutral.white} />
                                </TouchableOpacity>

                                <Text style={styles.cardWord}>नमस्ते</Text>
                                <Text style={styles.cardPronunciation}>/nə.məs.te/</Text>
                                <Text style={styles.cardTranslation}>Hello / Greetings</Text>

                                <View style={styles.cardActionsInfo}>
                                    <View style={styles.actionInfoItem}>
                                        <Text style={styles.actionInfoLabel}>Skip</Text>
                                        <MaterialIcons name="swipe-left" size={24} color={Colors.neutral.muted} />
                                    </View>
                                    <View style={styles.actionInfoItem}>
                                        <Text style={[styles.actionInfoLabel, { color: Colors.learn.primary }]}>Learn</Text>
                                        <MaterialIcons name="swipe-right" size={24} color={Colors.learn.primary} />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>

                    {/* Action Buttons */}
                    <View style={styles.actionButtonsContainer}>
                        <TouchableOpacity style={styles.smallActionButton}>
                            <MaterialIcons name="close" size={32} color={Colors.neutral.muted} />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.largeActionButton}>
                            <MaterialIcons name="check" size={40} color={Colors.neutral.white} />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.smallActionButton}>
                            <MaterialIcons name="bookmark" size={30} color={Colors.neutral.muted} />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Weekly Progress */}
                <View style={styles.weeklyContainer}>
                    <View style={styles.weeklyHeader}>
                        <Text style={styles.weeklyTitle}>Weekly Activity</Text>
                        <TouchableOpacity>
                            <Text style={styles.weeklyLink}>View Details</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.weeklyCard}>
                        <View style={styles.weeklyCardHeader}>
                            <View>
                                <Text style={styles.weeklyCardSubtitle}>Words Learned</Text>
                                <View style={styles.weeklyCardDataRow}>
                                    <Text style={styles.weeklyCardValue}>45</Text>
                                    <Text style={styles.weeklyCardTrend}>▲ 12%</Text>
                                </View>
                            </View>
                            <View style={styles.weeklyCardBadge}>
                                <Text style={styles.weeklyCardBadgeText}>This Week</Text>
                            </View>
                        </View>

                        {/* Chart Simulation */}
                        <View style={styles.chartContainer}>
                            {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, index) => {
                                const isToday = index === 2; // Wednesday
                                const height = [40, 65, 85, 15, 15, 15, 15][index];

                                return (
                                    <View key={index} style={styles.chartBarCol}>
                                        <View style={styles.chartBarBg}>
                                            <View style={[
                                                styles.chartBarFill,
                                                { height: `${height}%` },
                                                isToday && styles.chartBarFillActive
                                            ]} />
                                        </View>
                                        <Text style={[styles.chartDayText, isToday && styles.chartDayTextActive]}>
                                            {day}
                                        </Text>
                                    </View>
                                );
                            })}
                        </View>
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
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 16,
        backgroundColor: 'rgba(248, 247, 245, 0.9)',
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.05,
                shadowRadius: 4,
            },
            android: {
                elevation: 4,
            }
        }),
        zIndex: 10,
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    avatarContainer: {
        position: 'relative',
        width: 48,
        height: 48,
        borderRadius: 24,
        borderWidth: 2,
        borderColor: 'rgba(255, 107, 0, 0.2)', // light primary
        padding: 2,
    },
    avatar: {
        width: '100%',
        height: '100%',
        borderRadius: 20,
    },
    onlineBadge: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: '#22c55e',
        borderWidth: 2,
        borderColor: Colors.neutral.white,
    },
    greetingText: {
        fontSize: 12,
        fontWeight: '500',
        color: Colors.neutral.muted,
    },
    userName: {
        fontSize: 18,
        fontWeight: '700',
        color: Colors.neutral.text,
    },
    streakBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        backgroundColor: '#fff7ed', // very light orange
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: 'rgba(255, 107, 0, 0.1)',
    },
    streakCount: {
        fontSize: 16,
        fontWeight: '700',
        color: Colors.learn.primary,
    },
    scrollView: {
        flex: 1,
    },
    statsContainer: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingTop: 16,
        gap: 12,
    },
    statCard: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
        borderRadius: 16,
        borderWidth: 1,
        gap: 12,
    },
    statIconWrapper: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'rgba(255, 107, 0, 0.1)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    statLabel: {
        fontSize: 12,
        fontWeight: '500',
        color: Colors.neutral.muted,
    },
    statValue: {
        fontSize: 18,
        fontWeight: '700',
        color: Colors.neutral.text,
    },
    flashcardContainer: {
        marginTop: 24,
        paddingHorizontal: 20,
    },
    flashcardEffectsContainer: {
        position: 'relative',
        width: '100%',
        aspectRatio: 0.8, // Slightly taller than square
    },
    flashcardEffect1: {
        position: 'absolute',
        top: 16,
        left: 12,
        right: 12,
        bottom: -16,
        backgroundColor: Colors.neutral.white,
        borderRadius: 40,
        opacity: 0.6,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2,
        transform: [{ scale: 0.95 }],
    },
    flashcardEffect2: {
        position: 'absolute',
        top: 32,
        left: 24,
        right: 24,
        bottom: -32,
        backgroundColor: Colors.neutral.white,
        borderRadius: 40,
        opacity: 0.3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 1,
        transform: [{ scale: 0.9 }],
    },
    flashcard: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: Colors.neutral.white,
        borderRadius: 40,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.1,
        shadowRadius: 20,
        elevation: 5,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.02)',
    },
    cardCover: {
        height: '60%',
        width: '100%',
        position: 'relative',
    },
    cardGradient: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.4)',
    },
    cardLanguageTag: {
        position: 'absolute',
        top: 16,
        right: 16,
        backgroundColor: 'rgba(0,0,0,0.3)',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 16,
    },
    cardLanguageTagText: {
        color: Colors.neutral.white,
        fontSize: 12,
        fontWeight: '600',
        letterSpacing: 1,
    },
    cardContent: {
        flex: 1,
        backgroundColor: Colors.neutral.white,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
        marginTop: -24,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        position: 'relative',
    },
    audioButton: {
        position: 'absolute',
        top: -28,
        right: 32,
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: Colors.learn.primary,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: Colors.learn.primary,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 6,
    },
    cardWord: {
        fontSize: 36,
        fontWeight: '800',
        color: Colors.neutral.text,
        letterSpacing: -1,
    },
    cardPronunciation: {
        fontSize: 18,
        fontWeight: '500',
        color: Colors.learn.primary,
        marginTop: 8,
    },
    cardTranslation: {
        fontSize: 16,
        color: Colors.neutral.muted,
        marginTop: 4,
    },
    cardActionsInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 24,
        paddingHorizontal: 8,
    },
    actionInfoItem: {
        alignItems: 'center',
        gap: 4,
    },
    actionInfoLabel: {
        fontSize: 10,
        fontWeight: '700',
        textTransform: 'uppercase',
        letterSpacing: 1,
        color: Colors.neutral.muted,
    },
    actionButtonsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 32,
        marginTop: 40,
    },
    smallActionButton: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: Colors.neutral.white,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: Colors.neutral.border,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
    },
    largeActionButton: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: Colors.learn.primary,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: Colors.learn.primary,
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.3,
        shadowRadius: 16,
        elevation: 8,
    },
    weeklyContainer: {
        marginTop: 40,
        paddingHorizontal: 20,
    },
    weeklyHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginBottom: 16,
        paddingHorizontal: 4,
    },
    weeklyTitle: {
        ...Typography.h3,
    },
    weeklyLink: {
        fontSize: 14,
        fontWeight: '600',
        color: Colors.learn.primary,
    },
    weeklyCard: {
        backgroundColor: Colors.neutral.white,
        borderRadius: 24,
        padding: 24,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.05)',
    },
    weeklyCardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 24,
    },
    weeklyCardSubtitle: {
        fontSize: 14,
        color: Colors.neutral.muted,
        marginBottom: 4,
    },
    weeklyCardDataRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    weeklyCardValue: {
        fontSize: 24,
        fontWeight: '700',
        color: Colors.neutral.text,
    },
    weeklyCardTrend: {
        fontSize: 14,
        fontWeight: '500',
        color: '#22c55e', // green
    },
    weeklyCardBadge: {
        backgroundColor: Colors.neutral.offWhite,
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 8,
        alignSelf: 'flex-start',
    },
    weeklyCardBadgeText: {
        fontSize: 12,
        fontWeight: '600',
        color: Colors.neutral.text,
    },
    chartContainer: {
        flexDirection: 'row',
        height: 120,
        alignItems: 'flex-end',
        justifyContent: 'space-between',
    },
    chartBarCol: {
        flex: 1,
        alignItems: 'center',
        gap: 8,
        height: '100%',
    },
    chartBarBg: {
        width: '100%',
        flex: 1,
        backgroundColor: Colors.neutral.offWhite,
        borderRadius: 100,
        justifyContent: 'flex-end',
        overflow: 'hidden',
    },
    chartBarFill: {
        width: '100%',
        backgroundColor: Colors.neutral.border,
        borderRadius: 100,
    },
    chartBarFillActive: {
        backgroundColor: Colors.learn.primary,
        shadowColor: Colors.learn.primary,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 4,
    },
    chartDayText: {
        fontSize: 12,
        fontWeight: '500',
        color: Colors.neutral.muted,
    },
    chartDayTextActive: {
        fontWeight: '700',
        color: Colors.learn.primary,
    }
});
