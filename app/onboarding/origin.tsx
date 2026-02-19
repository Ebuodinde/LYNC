import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
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

const COUNTRIES = [
    { id: 'US', name: 'United States', flag: '🇺🇸', lang: 'English' },
    { id: 'GB', name: 'United Kingdom', flag: '🇬🇧', lang: 'English' },
    { id: 'CA', name: 'Canada', flag: '🇨🇦', lang: 'English/French' },
    { id: 'FR', name: 'France', flag: '🇫🇷', lang: 'French' },
    { id: 'DE', name: 'Germany', flag: '🇩🇪', lang: 'German' },
    { id: 'JP', name: 'Japan', flag: '🇯🇵', lang: 'Japanese' },
    { id: 'ES', name: 'Spain', flag: '🇪🇸', lang: 'Spanish' },
    { id: 'IT', name: 'Italy', flag: '🇮🇹', lang: 'Italian' },
];

export default function OriginScreen() {
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedOrigin, setSelectedOrigin] = useState('US');

    const filteredCountries = COUNTRIES.filter(c =>
        c.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

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
                    <Text style={styles.stepText}>Step 1 of 4</Text>
                    <View style={styles.spacer} />
                </View>
                <View style={styles.progressContainer}>
                    <View style={styles.progressBarBg}>
                        <View style={[styles.progressBarFill, { width: '25%' }]} />
                    </View>
                </View>
            </View>

            {/* Main Content */}
            <View style={styles.main}>
                <Text style={styles.title}>What is your origin?</Text>
                <Text style={styles.subtitle}>
                    This helps us tailor your language immersion experience and connect you with peers.
                </Text>

                {/* Selected Chips Area */}
                {selectedOrigin && (
                    <View style={styles.chipContainer}>
                        <View style={styles.chip}>
                            <Text style={styles.chipFlag}>
                                {COUNTRIES.find(c => c.id === selectedOrigin)?.flag}
                            </Text>
                            <Text style={styles.chipText}>
                                {COUNTRIES.find(c => c.id === selectedOrigin)?.name}
                            </Text>
                            <TouchableOpacity onPress={() => setSelectedOrigin(null)}>
                                <MaterialIcons name="close" size={16} color={Colors.social.primary} />
                            </TouchableOpacity>
                        </View>
                    </View>
                )}

                {/* Search Bar */}
                <View style={styles.searchContainer}>
                    <MaterialIcons name="search" size={22} color={Colors.neutral.muted} style={styles.searchIcon} />
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search for a country..."
                        placeholderTextColor={Colors.neutral.muted}
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                    />
                </View>

                {/* Country List */}
                <ScrollView style={styles.listContainer} showsVerticalScrollIndicator={false}>
                    {filteredCountries.map((country) => {
                        const isSelected = selectedOrigin === country.id;
                        return (
                            <TouchableOpacity
                                key={country.id}
                                style={[styles.listItem, isSelected && styles.listItemSelected]}
                                onPress={() => setSelectedOrigin(country.id)}
                            >
                                <View style={styles.listItemLeft}>
                                    <View style={styles.listAvatar}>
                                        <Text style={styles.listAvatarFlag}>{country.flag}</Text>
                                    </View>
                                    <View>
                                        <Text style={[styles.listItemName, isSelected && styles.listItemNameSelected]}>
                                            {country.name}
                                        </Text>
                                        {country.lang && (
                                            <Text style={styles.listItemLang}>{country.lang}</Text>
                                        )}
                                    </View>
                                </View>
                                <View style={[
                                    styles.radioCircle,
                                    isSelected && styles.radioCircleSelected
                                ]}>
                                    {isSelected && <MaterialIcons name="check" size={16} color={Colors.neutral.white} />}
                                </View>
                            </TouchableOpacity>
                        );
                    })}
                    <View style={styles.bottomSpacer} />
                </ScrollView>
            </View>

            {/* Footer */}
            <View style={styles.footer}>
                <TouchableOpacity
                    style={[styles.continueButton, !selectedOrigin && styles.disabledButton]}
                    disabled={!selectedOrigin}
                    onPress={() => router.push('/onboarding/languages')}
                >
                    <Text style={styles.continueButtonText}>Continue</Text>
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
        backgroundColor: Colors.neutral.offWhite,
        paddingTop: Platform.OS === 'android' ? 24 : 0,
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
    stepText: {
        ...Typography.bodyMedium,
        color: Colors.neutral.muted,
    },
    spacer: {
        width: 40,
    },
    progressContainer: {
        paddingHorizontal: 16,
        paddingBottom: 16,
    },
    progressBarBg: {
        height: 6,
        backgroundColor: Colors.neutral.border,
        borderRadius: 3,
        overflow: 'hidden',
    },
    progressBarFill: {
        height: '100%',
        backgroundColor: Colors.social.primary,
        borderRadius: 3,
    },
    main: {
        flex: 1,
        paddingHorizontal: 16,
    },
    title: {
        ...Typography.h1,
        marginBottom: 8,
    },
    subtitle: {
        ...Typography.body,
        marginBottom: 24,
    },
    chipContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 16,
    },
    chip: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.social.light,
        borderColor: 'rgba(0, 122, 255, 0.2)',
        borderWidth: 1,
        borderRadius: 24,
        paddingHorizontal: 12,
        paddingVertical: 6,
        gap: 8,
    },
    chipFlag: {
        fontSize: 16,
    },
    chipText: {
        color: Colors.social.primary,
        fontWeight: '600',
        fontSize: 14,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.neutral.white,
        borderRadius: 12,
        paddingHorizontal: 16,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 2,
    },
    searchIcon: {
        marginRight: 8,
    },
    searchInput: {
        flex: 1,
        height: 48,
        fontSize: 16,
        color: Colors.neutral.text,
    },
    listContainer: {
        flex: 1,
    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 12,
        backgroundColor: Colors.neutral.white,
        borderRadius: 16,
        marginBottom: 8,
        borderWidth: 2,
        borderColor: 'transparent',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 1,
    },
    listItemSelected: {
        borderColor: Colors.social.primary,
    },
    listItemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
    },
    listAvatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: Colors.neutral.offWhite,
        alignItems: 'center',
        justifyContent: 'center',
    },
    listAvatarFlag: {
        fontSize: 24,
    },
    listItemName: {
        ...Typography.bodyMedium,
    },
    listItemNameSelected: {
        fontWeight: '700',
    },
    listItemLang: {
        ...Typography.caption,
    },
    radioCircle: {
        width: 24,
        height: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: Colors.neutral.muted,
        alignItems: 'center',
        justifyContent: 'center',
    },
    radioCircleSelected: {
        borderColor: Colors.social.primary,
        backgroundColor: Colors.social.primary,
    },
    bottomSpacer: {
        height: 100, // Make room for fixed footer
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 16,
        paddingBottom: Platform.OS === 'ios' ? 32 : 16,
        backgroundColor: 'rgba(248, 249, 250, 0.9)', // Needs better gradient in production
        borderTopWidth: 1,
        borderTopColor: 'rgba(0,0,0,0.02)'
    },
    continueButton: {
        height: 56,
        backgroundColor: Colors.social.primary,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: Colors.social.primary,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 4,
    },
    disabledButton: {
        opacity: 0.5,
        shadowOpacity: 0,
    },
    continueButtonText: {
        color: Colors.neutral.white,
        fontSize: 18,
        fontWeight: '700',
    }
});
