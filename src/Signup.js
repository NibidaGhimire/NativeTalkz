import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Signup = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Perform signup logic here (e.g., store user data)
    // After successful signup, navigate to the login page
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Signup</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        style={styles.input}
      />
      <Button title="Signup" onPress={handleSignup} />
      <Text style={styles.loginLink} onPress={() => navigation.navigate('Login')}>
        Already have an account? Login
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#F5F5F5', // Light gray background
        alignItems: 'center', // Center items horizontally
        justifyContent: 'center', // Center items vertically
      },
      header: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333', // Dark gray text color
      },
      input: {
        width: '100%', // Full width
        height: 50,
        borderColor: '#DADADA', // Light gray border color
        borderWidth: 1,
        marginBottom: 20,
        paddingLeft: 15,
        fontSize: 18,
        backgroundColor: 'white',
        borderRadius: 5,
      },
  loginLink: {
    color: 'blue',
    textDecorationLine: 'underline',
    alignSelf: 'center',
    marginTop: 10,
  },
});

export default Signup;
