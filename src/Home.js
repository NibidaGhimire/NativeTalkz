

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Home = ({ navigation }) => {
  // Function to navigate to the respective screens
  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome to NativeTalkz!</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.boxContainer}>
          <TouchableOpacity
            style={styles.largeBox}
            onPress={() => navigateToScreen('PhraseBox')}
          >
            <Text style={styles.boxText}>Phrase Box</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.largeBox}
            onPress={() => navigateToScreen('DiscussionForum')}
          >
            <Text style={styles.boxText}>Discussion Forum</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.smallBox}
          onPress={() => navigateToScreen('UserContribution')}
        >
          <Text style={styles.boxText}>User Contribution</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
  },
  content: {
    flex: 1,
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  largeBox: {
    flex: 1,
    backgroundColor: '#b195d2',
    padding: 30,
    borderRadius: 16,
    marginRight: 10,
    marginBottom: 10,
  },
  smallBox: {
    flex: 0.1, // Adjust the flex value to control the size
    backgroundColor: '#b195d2',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  boxText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Home;




// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// const Home = ({ navigation }) => {
//   // Function to navigate to the respective screens
//   const navigateToScreen = (screenName) => {
//     navigation.navigate(screenName);
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.headerText}>Welcome to NativeTalkz!</Text>
//       </View>
//       <View style={styles.content}>
//         <View style={styles.boxContainer}>
//           <TouchableOpacity
//             style={styles.largeBox}
//             onPress={() => navigateToScreen('PhraseBox')}
//           >
//             <Text style={styles.boxText}>Phrase Box</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={styles.largeBox}
//             onPress={() => navigateToScreen('DiscussionForum')}
//           >
//             <Text style={styles.boxText}>Discussion Forum</Text>
//           </TouchableOpacity>
//         </View>
//         <TouchableOpacity
//           style={styles.smallBox}
//           onPress={() => navigateToScreen('UserContribution')}
//         >
//           <Text style={styles.boxText}>User Contribution</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5', // Light gray background
//     padding: 20,
//   },
//   header: {
//     alignItems: 'center',
//     marginBottom: 30,
//   },
//   headerText: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     color: '#333', // Dark gray text
//   },
//   content: {
//     flex: 1,
//   },
//   boxContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   largeBox: {
//     flex: 1,
//     backgroundColor: '#6b63ff', // Light purple
//     padding: 30,
//     borderRadius: 16,
//     marginRight: 20,
//     marginBottom: 20,
//     elevation: 4,
//   },
//   smallBox: {
//     flex: 0.45,
//     backgroundColor: '#ff6b6b', // Light red
//     padding: 20,
//     borderRadius: 10,
//     marginBottom: 20,
//     elevation: 4,
//   },
//   boxText: {
//     color: '#fff', // White text
//     fontSize: 20,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });

// export default Home;
