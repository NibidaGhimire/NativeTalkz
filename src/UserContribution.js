import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const UserContribution = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>User Contribution</Text>
      </View>
      <View style={styles.content}>
        {/* Your content for user contribution can go here */}
        <Text style={styles.text}>This is the User Contribution page.</Text>
        {/* Add your UI elements and content as needed */}
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
  text: {
    fontSize: 16,
    color: '#333333',
  },
});

export default UserContribution;
