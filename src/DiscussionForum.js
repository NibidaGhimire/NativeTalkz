import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';

const DiscussionForum = () => {
    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState('');

    const fetchPosts = async () => {
        try {
            const response = await axios.get('http://10.0.2.2:8000/discussionforum/discussionforum/add/');
            setPosts(response.data);
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <View style={styles.container}>

            <FlatList
                data={posts}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.postContainer}
                        onPress={() => alert(item.content)} // Replace with your desired action
                    >
                        <Text style={styles.postContent}>{item.content}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        color: 'red',
        borderColor: '#896790',
        borderWidth: 12,
        flex: 1,
        padding: 20,
        backgroundColor: '#D0D0D0',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    postContainer: {
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        marginBottom: 5,
        padding: 20,
    },
    postContent: {
        fontSize: 16,
    },
});

export default DiscussionForum;
