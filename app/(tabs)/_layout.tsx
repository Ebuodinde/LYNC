import React from 'react';
import { Tabs } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

// Custom Tab Icon component with badge support
function TabIcon({ name, color, focused, label, badgeCount = 0 }) {
    return (
        <View style={styles.tabIconContainer}>
            <View style={[
                styles.iconWrapper,
                focused && { backgroundColor: `${color}15` } // 15% opacity hex
            ]}>
                <View style={styles.iconInner}>
                    <MaterialIcons name={name} size={26} color={color} />
                    {badgeCount > 0 && (
                        <View style={styles.badgeContainer}>
                            <View style={styles.badge} />
                        </View>
                    )}
                </View>
            </View>
            <Text style={[
                styles.tabLabel,
                { color },
                focused && styles.tabLabelFocused
            ]}>
                {label}
            </Text>
        </View>
    );
}

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false, // Hide default labels since we use custom labels in TabIcon
                tabBarStyle: {
                    backgroundColor: Colors.neutral.white,
                    borderTopWidth: 1,
                    borderTopColor: Colors.neutral.border,
                    height: 80,
                    paddingBottom: 20,
                    paddingTop: 10,
                    elevation: 10,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: -2 },
                    shadowOpacity: 0.05,
                    shadowRadius: 10,
                }
            }}>

            <Tabs.Screen
                name="learn"
                options={{
                    title: 'Learn',
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            name="school"
                            color={focused ? Colors.learn.primary : Colors.neutral.muted}
                            focused={focused}
                            label="Learn"
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name="people"
                options={{
                    title: 'Social',
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            name="group"
                            color={focused ? Colors.social.primary : Colors.neutral.muted}
                            focused={focused}
                            label="Social"
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name="messages"
                options={{
                    title: 'Chat',
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            name="chat-bubble"
                            color={focused ? Colors.chat.primary : Colors.neutral.muted}
                            focused={focused}
                            label="Chat"
                            badgeCount={2} // Simulation
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            name="person"
                            color={focused ? Colors.profile.primary : Colors.neutral.muted}
                            focused={focused}
                            label="Profile"
                        />
                    ),
                }}
            />
        </Tabs>
    );
}

const styles = StyleSheet.create({
    tabIconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4,
    },
    iconWrapper: {
        width: 64,
        height: 36,
        borderRadius: 18,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconInner: {
        position: 'relative',
    },
    badgeContainer: {
        position: 'absolute',
        top: -2,
        right: -4,
        backgroundColor: Colors.neutral.white, // Border effect
        borderRadius: 6,
        padding: 2,
    },
    badge: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#ef4444', // Red badge
    },
    tabLabel: {
        fontSize: 11,
        fontWeight: '500',
        color: Colors.neutral.muted,
    },
    tabLabelFocused: {
        fontWeight: '700',
    }
});
