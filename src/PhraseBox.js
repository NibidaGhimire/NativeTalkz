
// import React from 'react';
// import { View, Text, ScrollView, StyleSheet, Button } from 'react-native';




// const PhraseBox = ({ navigation }) => {
  
// const phrases = [
//   "Hello, World!",
//   "This is a phrase.",
//   "React Native is awesome!",
//   "Build mobile apps with ease.",
//   "Phrases in a box!",
//   "Customize as you like.",
// ];

// const PhraseBox = () => {
//   return (
//     <View style={styles.container}>
//       <ScrollView>
//         {phrases.map((phrase, index) => (
//           <View style={styles.phraseBox} key={index}>
//             <Text style={styles.phraseText}>{phrase}</Text>
//           </View>
//         ))}
//       </ScrollView>

      
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#fff',
//   },
//   phraseBox: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 10,
//     marginVertical: 5,
//   },
//   phraseText: {
//     fontSize: 16,
//   },
// });

//   return (
//     <View style={styles.container}>
//       <ScrollView>
//         {phrases.map((phrase, index) => (
//           <View style={styles.phraseBox} key={index}>
//             <Text style={styles.phraseText}>{phrase}</Text>
           
//           </View>
//         ))}
       
//       </ScrollView>
//     </View>
//   );
// };



// export default PhraseBox;



import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

const PhraseBox = () => {
  const phrases = [
    "Hello, World!",
    "This is a phrase.",
    "React Native is awesome!",
    "Build mobile apps with ease.",
    "Phrases in a box!",
    "Customize as you like.",
  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {phrases.map((phrase, index) => (
          <TouchableOpacity
            key={index}
            style={styles.phraseBox}
            onPress={() => alert(phrase)} // Replace this with your desired action
          >
            <Text style={styles.phraseText}>{phrase}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0', // Background color for the entire page
  },
  scrollViewContent: {
    padding: 20,
  },
  phraseBox: {
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    marginBottom: 10,
    padding: 20,
  },
  phraseText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333', // Text color
  },
});

export default PhraseBox;
