import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Image,
    Platform,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';
import Typography from '../../constants/Typography';

const MATCHES = [
    { id: '1', name: 'Emma', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&w=150&q=80', online: true },
    { id: '2', name: 'Lucas', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&w=150&q=80', online: false },
    { id: '3', name: 'Yuki', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&w=150&q=80', online: true },
    { id: '4', name: 'Mateo', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&w=150&q=80', online: false },
];

const CHATS = [
    {
        id: '1',
        name: 'Sarah',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&w=150&q=80',
        lastMessage: "¡Hola! ¿Cómo estás hoy?",
        time: '2m',
        unread: 2,
        online: true,
        lang: '🇪🇸'
    },
    {
        id: '2',
        name: 'Kenji',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&w=150&q=80',
        lastMessage: "Yes, that sounds like a great plan!",
        time: '1h',
        unread: 0,
        online: false,
        lang: '🇯🇵'
    },
    {
        id: '3',
        name: 'Maria',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&w=150&q=80',
        lastMessage: "Let me know when you're free to practice.",
        time: 'Yesterday',
        unread: 0,
        online: false,
        lang: '🇮🇹'
    }
];

export default function MessagesScreen() {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <SafeAreaView style={styles.safeArea}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Messages</Text>
                <TouchableOpacity style={styles.iconButton}>
                    <MaterialIcons name="more-horiz" size={24} color={Colors.neutral.text} />
                </TouchableOpacity>
            </View>

            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                {/* Search Bar */}
                <View style={styles.searchContainer}>
                    <MaterialIcons name="search" size={22} color={Colors.neutral.muted} style={styles.searchIcon} />
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search messages or matches..."
                        placeholderTextColor={Colors.neutral.muted}
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                    />
                </View>

                {/* New Matches Row */}
                <View style={styles.matchesSection}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>New Matches</Text>
                        <View style={styles.badgeContainer}>
                            <Text style={styles.badgeText}>4</Text>
                        </View>
                    </View>

                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.matchesScrollContent}>
                        {MATCHES.map((match) => (
                            <TouchableOpacity key={match.id} style={styles.matchItem}>
                                <View style={styles.matchAvatarContainer}>
                                    <Image source={{ uri: match.image }} style={styles.matchAvatar} />
                                    {match.online && <View style={styles.onlineBadge} />}
                                </View>
                                <Text style={styles.matchName}>{match.name}</Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>

                {/* Chats List */}
                <View style={styles.chatsSection}>
                    <Text style={styles.sectionTitle}>Recent Chats</Text>

                    <View style={styles.chatList}>
                        {CHATS.map((chat) => (
                            <TouchableOpacity key={chat.id} style={styles.chatItem}>
                                <View style={styles.chatAvatarContainer}>
                                    <Image source={{ uri: chat.image }} style={styles.chatAvatar} />
                                    {chat.online && <View style={styles.onlineBadgeSmall} />}
                                </View>

                                <View style={styles.chatInfo}>
                                    <View style={styles.chatHeaderRow}>
                                        <View style={styles.nameRow}>
                                            <Text style={styles.chatName}>{chat.name}</Text>
                                            <Text style={styles.chatLang}>{chat.lang}</Text>
                                        </View>
                                        <Text style={[styles.chatTime, chat.unread > 0 && styles.chatTimeUnread]}>
                                            {chat.time}
                                        </Text>
                                    </View>

                                    <View style={styles.chatMessageRow}>
                                        <Text
                                            style={[styles.chatMessage, chat.unread > 0 && styles.chatMessageUnread]}
                                            numberOfLines={1}
                                        >
                                            {chat.lastMessage}
                                        </Text>
                                        {chat.unread > 0 && (
                                            <View style={styles.unreadBadge}>
                                                <Text style={styles.unreadBadgeText}>{chat.unread}</Text>
                                            </View>
                                        )}
                                    </View>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                <View style={{ height: 40 }} />
            </ScrollView>

            {/* Floating Action Button */}
            <TouchableOpacity style={styles.fab}>
                <MaterialIcons name="edit" size={24} color={Colors.neutral.white} />
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: Colors.neutral.white, // Using solid white for lists
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: Platform.OS === 'android' ? 24 : 16,
        paddingBottom: 16,
        backgroundColor: Colors.neutral.white,
    },
    headerTitle: {
        ...Typography.h1,
        fontSize: 28,
    },
    iconButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: Colors.neutral.offWhite,
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollView: {
        flex: 1,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.neutral.offWhite,
        borderRadius: 16,
        paddingHorizontal: 16,
        marginHorizontal: 20,
        marginBottom: 24,
        height: 48,
    },
    searchIcon: {
        marginRight: 8,
    },
    searchInput: {
        flex: 1,
        height: '100%',
        fontSize: 16,
        color: Colors.neutral.text,
    },
    matchesSection: {
        marginBottom: 32,
    },
    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginBottom: 16,
        gap: 8,
    },
    sectionTitle: {
        ...Typography.h3,
        fontSize: 18,
    },
    badgeContainer: {
        backgroundColor: Colors.social.light,
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 10,
    },
    badgeText: {
        fontSize: 12,
        fontWeight: '700',
        color: Colors.social.primary,
    },
    matchesScrollContent: {
        paddingHorizontal: 16,
        gap: 16,
    },
    matchItem: {
        alignItems: 'center',
        width: 72,
    },
    matchAvatarContainer: {
        width: 64,
        height: 64,
        borderRadius: 32,
        borderWidth: 2,
        borderColor: Colors.social.primary,
        padding: 2,
        marginBottom: 8,
        position: 'relative',
    },
    matchAvatar: {
        width: '100%',
        height: '100%',
        borderRadius: 28,
    },
    onlineBadge: {
        position: 'absolute',
        bottom: 2,
        right: 2,
        width: 14,
        height: 14,
        borderRadius: 7,
        backgroundColor: '#22c55e',
        borderWidth: 2,
        borderColor: Colors.neutral.white,
    },
    matchName: {
        fontSize: 13,
        fontWeight: '600',
        color: Colors.neutral.text,
    },
    chatsSection: {
        paddingHorizontal: 20,
    },
    chatList: {
        marginTop: 16,
        gap: 20, // Increase space between chats
    },
    chatItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
    },
    chatAvatarContainer: {
        position: 'relative',
        width: 56,
        height: 56,
    },
    chatAvatar: {
        width: 56,
        height: 56,
        borderRadius: 28,
    },
    onlineBadgeSmall: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: 14,
        height: 14,
        borderRadius: 7,
        backgroundColor: '#22c55e',
        borderWidth: 2,
        borderColor: Colors.neutral.white,
    },
    chatInfo: {
        flex: 1,
        justifyContent: 'center',
    },
    chatHeaderRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 4,
    },
    nameRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
    chatName: {
        fontSize: 16,
        fontWeight: '700',
        color: Colors.neutral.text,
    },
    chatLang: {
        fontSize: 12,
    },
    chatTime: {
        fontSize: 12,
        color: Colors.neutral.muted,
        fontWeight: '500',
    },
    chatTimeUnread: {
        color: Colors.chat.primary,
        fontWeight: '700',
    },
    chatMessageRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 16,
    },
    chatMessage: {
        flex: 1,
        fontSize: 14,
        color: Colors.neutral.muted,
    },
    chatMessageUnread: {
        color: Colors.neutral.text,
        fontWeight: '600',
    },
    unreadBadge: {
        backgroundColor: Colors.chat.primary,
        minWidth: 20,
        height: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 6,
    },
    unreadBadgeText: {
        color: Colors.neutral.white,
        fontSize: 10,
        fontWeight: '700',
    },
    fab: {
        position: 'absolute',
        bottom: 24,
        right: 24,
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: Colors.chat.primary,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: Colors.chat.primary,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 6,
    }
});
