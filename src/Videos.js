import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Videos = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Videos</Text>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});

export default Videos;
