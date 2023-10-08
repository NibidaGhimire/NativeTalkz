// import React from 'react';
// import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

// const Notifications = () => {
//   const phrases = [
//     "New message received.",
//     "You have a new notification.",
//     "Reminder: Meeting at 2 PM.",
//     "Your post has been liked.",
//     "New email in your inbox.",
//     "Event reminder: Tomorrow at 10 AM.",
//   ];

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Notifications</Text>
//       <ScrollView contentContainerStyle={styles.scrollViewContent}>
//         {phrases.map((phrase, index) => (
//           <TouchableOpacity
//             key={index}
//             style={styles.phraseBox}
//           // onPress={() => alert(phrase)} // Replace this with your desired action
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

//     borderColor: '#896790',
//     borderWidth: 12,
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#fff',
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   scrollViewContent: {
//     paddingVertical: 10,
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

// export default Notifications;

import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

const Notifications = () => {
    const phrases = [
        "New message received.",
        "You have a new notification.",
        "Reminder: Meeting at 2 PM.",
        "Your post has been liked.",
        "New email in your inbox.",
        "Event reminder: Tomorrow at 10 AM.",
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Notifications</Text>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                {phrases.map((phrase, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.phraseBox}
                    // onPress={() => alert(phrase)} // Replace this with your desired action
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
        borderColor: '#896790',
        borderWidth: 12,
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    scrollViewContent: {
        paddingVertical: 10,
    },
    phraseBox: {
        backgroundColor: '#fff',
        //borderRadius: 10,
        elevation: 3, // Shadow for Android
        shadowColor: '#000', // Shadow for iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        //marginBottom: 10,
        padding: 10, // Reduce padding
    },
    phraseText: {
        fontSize: 16, // Decrease text size
        fontWeight: 'bold',
        color: '#333', // Text color
    },
});

export default Notifications;
