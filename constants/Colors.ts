/**
 * LYNC (Social Shield) - Contextual Clean Theme Colors
 *
 * Each major section of the app has a distinct identity based on this color-coded interface.
 */

export const Colors = {
    // Learn (Education) - Used for flashcards, quizzes, learning progress.
    learn: {
        primary: '#FF6B00',
        light: '#FFF0E5', // Derived light variant for backgrounds
        dark: '#CC5500',  // Derived dark variant for interactions
    },

    // Social (Discovery) - Used for matching, profiles, swiping.
    social: {
        primary: '#007AFF',
        light: '#E5F1FF',
        dark: '#0062CC',
    },

    // Chat (Communication) - Used for messaging, typing indicators.
    chat: {
        primary: '#AF52DE',
        light: '#F7EBFC',
        dark: '#8C42B2',
    },

    // Profile (Identity) - Used for user stats, achievements, verification.
    profile: {
        primary: '#34C759',
        light: '#EBF9EE',
        dark: '#2AA047',
    },

    // Neutrals - Backgrounds, text, borders
    neutral: {
        white: '#FFFFFF',
        offWhite: '#F8F9FA',
        text: '#121212',
        muted: '#ADB5BD',
        border: '#E9ECEF', // Added for subtle borders
        backgroundDark: '#0f1923', // From html (dark mode base)
        textDark: '#F8F9FA',
    }
};

export default Colors;
