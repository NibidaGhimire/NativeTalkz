


import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Button } from 'react-native';

const PhraseBox = () => {
    const easyPhrases = [
        "One : Itta",
        "Two : Hiichchhi",
        "Three : Suumkaa",
        "Four :	Lankabo",
        "Five :	Nankabo"

    ];

    const intermediatePhrases = [
        "I eat rice. : Kam cā cam",
        "He eats rice. : Khosāwā",
        "I am a boy. : Kam vācchā ha",
        "Eat rice. : Cā co",
        "Sleep now. : hotola dhīsā",



    ];

    const hardPhrases = [

    ];

    const [selectedSection, setSelectedSection] = useState('Easy'); // Initially, 'Easy' section is selected

    const toggleSection = (section) => {
        setSelectedSection(section);
    };

    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <Button
                    title="Easy"
                    onPress={() => toggleSection('Easy')}
                    color={selectedSection === 'Easy' ? '#896790' : '#ddd'}
                />
                <Button
                    title="Intermediate"
                    onPress={() => toggleSection('Intermediate')}
                    color={selectedSection === 'Intermediate' ? '#896790' : '#ddd'}
                />
                <Button
                    title="Hard"
                    onPress={() => toggleSection('Hard')}
                    color={selectedSection === 'Hard' ? '#896790' : '#ddd'}
                />
            </View>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                {selectedSection === 'Easy' && (
                    <Section title="Easy Phrases" phrases={easyPhrases} />
                )}
                {selectedSection === 'Intermediate' && (
                    <Section title="Intermediate Phrases" phrases={intermediatePhrases} />
                )}
                {selectedSection === 'Hard' && (
                    <Section title="Hard Phrases" phrases={hardPhrases} />
                )}
            </ScrollView>
        </View>
    );
};

const Section = ({ title, phrases }) => (
    <View style={styles.section}>
        <Text style={styles.sectionTitle}>{title}</Text>
        {phrases.map((phrase, index) => (
            <TouchableOpacity
                key={index}
                style={styles.phraseBox}
                onPress={() => alert(phrase)} // Replace this with your desired action
            >
                <Text style={styles.phraseText}>{phrase}</Text>
            </TouchableOpacity>
        ))}
    </View>
);

const styles = StyleSheet.create({
    container: {
        borderColor: '#896790',
        borderWidth: 12,
        flex: 1,
        backgroundColor: '#f0f0f0',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginBottom: 20,
        marginTop: 3,
        borderRadius: 15,
    },
    scrollViewContent: {
        padding: 5,
    },
    section: {
        marginBottom: 20,
        borderRadius: 15,
        backgroundColor: '#fff',
        padding: 10,
    },
    sectionTitle: {
        fontSize: 22, // Font size increased by 2
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
    },
    phraseBox: {
        backgroundColor: '#fff',
        borderRadius: 10, // Slightly curved edges
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        marginBottom: 10,
        padding: 10, // Smaller padding
    },
    phraseText: {
        fontSize: 20, // Font size increased by 2
        fontWeight: 'bold',
        color: '#333',
    },
});

export default PhraseBox;
