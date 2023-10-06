// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// const DiscussionForum = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Discussion Forum</Text>
//       {/* Add discussion forum content here */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#fff',
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
// });

// export default DiscussionForum;



import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

const DiscussionForum = () => {
  const [posts, setPosts] = useState([]); // Store user posts
  const [newPost, setNewPost] = useState(''); // Store the content of a new post

  const handlePost = () => {
    if (newPost.trim() !== '') {
      // Add the new post to the list of posts
      setPosts([...posts, { id: Date.now(), content: newPost, comments: [] }]);
      setNewPost(''); // Clear the input field
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Discussion Forum</Text>
      <TextInput
        placeholder="Write your post..."
        value={newPost}
        onChangeText={(text) => setNewPost(text)}
        style={styles.input}
      />
      <Button title="Post" onPress={handlePost} />
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.postContainer}>
            <Text style={styles.postContent}>{item.content}</Text>
            {/* Add comments section here */}
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
  postContainer: {
    marginBottom: 20,
  },
  postContent: {
    fontSize: 16,
  },
});

export default DiscussionForum;
