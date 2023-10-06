
import React from 'react';
import { View, Text, ScrollView, StyleSheet, Button } from 'react-native';




const PhraseBox = ({ navigation }) => {
  
const phrases = [
  "Hello, World!",
  "This is a phrase.",
  "React Native is awesome!",
  "Build mobile apps with ease.",
  "Phrases in a box!",
  "Customize as you like.",
];

const PhraseBox = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        {phrases.map((phrase, index) => (
          <View style={styles.phraseBox} key={index}>
            <Text style={styles.phraseText}>{phrase}</Text>
          </View>
        ))}
      </ScrollView>

      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  phraseBox: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 5,
  },
  phraseText: {
    fontSize: 16,
  },
});

  return (
    <View style={styles.container}>
      <ScrollView>
        {phrases.map((phrase, index) => (
          <View style={styles.phraseBox} key={index}>
            <Text style={styles.phraseText}>{phrase}</Text>
           
          </View>
        ))}
       
      </ScrollView>
    </View>
  );
};



export default PhraseBox;
