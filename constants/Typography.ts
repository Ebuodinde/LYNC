import { StyleSheet } from 'react-native';
import Colors from './Colors';

/**
 * LYNC (Social Shield) - Core Typography
 * Uses standard weights. If using custom fonts like Plus Jakarta Sans or Lexend,
 * they need to be loaded in the app root first.
 */

export const Typography = StyleSheet.create({
    h1: {
        fontSize: 32,
        fontWeight: '800', // ExtraBold
        color: Colors.neutral.text,
        letterSpacing: -0.5,
    },
    h2: {
        fontSize: 24,
        fontWeight: '700', // Bold
        color: Colors.neutral.text,
    },
    h3: {
        fontSize: 20,
        fontWeight: '700',
        color: Colors.neutral.text,
    },
    bodyLarge: {
        fontSize: 18,
        fontWeight: '400',
        color: Colors.neutral.text,
    },
    body: {
        fontSize: 16,
        fontWeight: '400',
        color: Colors.neutral.text,
        lineHeight: 24,
    },
    bodyMedium: {
        fontSize: 16,
        fontWeight: '500', // Medium
        color: Colors.neutral.text,
    },
    caption: {
        fontSize: 14,
        fontWeight: '400',
        color: Colors.neutral.muted,
    },
    label: {
        fontSize: 12,
        fontWeight: '600',
        textTransform: 'uppercase',
        letterSpacing: 0.5,
        color: Colors.neutral.muted,
    },
});

export default Typography;
