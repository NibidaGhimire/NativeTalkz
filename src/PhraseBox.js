


// import React from 'react';
// import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

// const PhraseBox = () => {
//   const phrases = [
//     "Hello, World!",
//     "This is a phrase.",
//     "React Native is awesome!",
//     "Build mobile apps with ease.",
//     "Phrases in a box!",
//     "Customize as you like.",
//   ];

//   return (
//     <View style={styles.container}>
//       <ScrollView contentContainerStyle={styles.scrollViewContent}>
//         {phrases.map((phrase, index) => (
//           <TouchableOpacity
//             key={index}
//             style={styles.phraseBox}
//             onPress={() => alert(phrase)} // Replace this with your desired action
//           >
//             <Text style={styles.phraseText}>{phrase}</Text>
//           </TouchableOpacity>
//         ))}
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f0f0f0', // Background color for the entire page
//   },
//   scrollViewContent: {
//     padding: 20,
//   },
//   phraseBox: {
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     elevation: 3, // Shadow for Android
//     shadowColor: '#000', // Shadow for iOS
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 3,
//     marginBottom: 10,
//     padding: 20,
//   },
//   phraseText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#333', // Text color
//   },
// });

// export default PhraseBox;





import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Button } from 'react-native';

const PhraseBox = () => {
  const easyPhrases = [
    "Hello, World!",
    "This is an easy phrase.",
    "React Native is awesome!",
  ];

  const intermediatePhrases = [
    "Build mobile apps with ease.",
    "Phrases in a box!",
  ];

  const hardPhrases = [
    "Customize as you like.",
    "This is a hard phrase to pronounce.",
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
          color={selectedSection === 'Easy' ? '#b195d2' : '#ccc'}
        />
        <Button
          title="Intermediate"
          onPress={() => toggleSection('Intermediate')}
          color={selectedSection === 'Intermediate' ? '#b195d2' : '#ccc'}
        />
        <Button
          title="Hard"
          onPress={() => toggleSection('Hard')}
          color={selectedSection === 'Hard' ? '#b195d2' : '#ccc'}
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
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  scrollViewContent: {
    padding: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  phraseBox: {
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    marginBottom: 10,
    padding: 20,
  },
  phraseText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default PhraseBox;
