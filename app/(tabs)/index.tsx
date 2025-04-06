import { View, StyleSheet } from 'react-native';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
    return (
        <ThemedView style={styles.emptyContainer}>

        </ThemedView>
    );
}

const styles = StyleSheet.create({
    emptyContainer: {
        flex: 1
    },
});