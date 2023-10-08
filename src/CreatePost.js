import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

const CreatePost = () => {
    const [newPost, setNewPost] = useState('');

    const handleCreatePost = () => {
        // Send a POST request to your Django API to create the post
        fetch('http://10.0.2.2:8000/discussionforum/discussionforum/add/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // You may need to include authentication headers here
            },
            body: JSON.stringify({ content: newPost }),
        })
            .then(response => response.json())
            .then(data => {
                // Handle the response from the Django API, e.g., show a success message
                console.log('Post created successfully:', data);
                // Clear the input field
                setNewPost('');
            })
            .catch(error => {
                // Handle any errors that occurred during the request
                console.error('Error creating post:', error);
            });
    };

    return (
        <View style={styles.container}>

            <View style={styles.inputContainer}>
                <Text style={styles.placeholderText}>Write your post...</Text>
                <TextInput
                    value={newPost}
                    onChangeText={(text) => setNewPost(text)}
                    style={styles.input}
                    multiline
                    placeholder=""
                    textAlignVertical="top" // Set cursor at the top
                />
            </View>
            <TouchableOpacity onPress={handleCreatePost} style={styles.createButton}>
                <Text style={styles.buttonText}>Create</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderColor: '#896790',
        borderWidth: 12,
        flex: 1,
        padding: 20,
        backgroundColor: '#D0D0D0',
    },
    header: {
        fontSize: 24,
        color: 'gray',
        fontWeight: 'bold',
        marginBottom: 20,
    },
    inputContainer: {
        backgroundColor: '#fff',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 15,
        marginBottom: 20,
        padding: 10,
    },
    placeholderText: {
        color: 'gray',
    },
    input: {
        height: 100, // Adjust the height for a multiline input
        backgroundColor: 'transparent',
    },
    createButton: {
        backgroundColor: '#896790',
        paddingVertical: 10,
        paddingHorizontal: 25,
        borderRadius: 25, // Make the button round
        justifyContent: 'center', // Center the text vertically
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default CreatePost;
