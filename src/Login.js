import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const Login = ({ route, navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const { onLogin } = route.params;

    const handleLogin = () => {
        const correctUsername = 'user';
        const correctPassword = 'password';

        if (username === correctUsername && password === correctPassword) {
            onLogin();
            navigation.navigate('PhraseBox');
        } else {
            setError('Incorrect username or password. Please try again.');
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Login</Text>
                <Text style={styles.footerText}>Enter your email and Password.</Text>
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
                {error ? <Text style={styles.errorText}>{error}</Text> : null}
                <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <View style={styles.styleText}>
                    <Text style={styles.baseText1}>Don't have an account? Sign up!</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 0.9,
        backgroundColor: '#F5F5F5',
        justifyContent: 'center',
        // alignItems: 'center',
    },
    header: {
        alignItems: 'center',
    },
    headerText: {
        fontFamily: 'custom-font',
        fontSize: 40,
        fontWeight: 'bold',
        color: '#333',
    },
    footerText: {
        marginTop: 40,
        marginBottom: 40,
        fontSize: 12,
        color: '#888',
    },
    input: {
        width: 300,
        height: 50,
        borderColor: '#DADADA',
        borderWidth: 1,
        marginBottom: 20,
        paddingLeft: 15,
        fontSize: 18,
        backgroundColor: 'white',
        borderRadius: 60,
    },
    loginButton: {
        backgroundColor: '#896790',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 30, // Make the button round
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    styleText: {
        fontSize: 12,
        alignItems: 'center',
    },
    baseText1: {
        fontSize: 12,
        margin: 10,
        alignItems: 'center',
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
        fontSize: 16,
    },
});

export default Login;