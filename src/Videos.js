import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Video from 'react-native-video';

const Videos = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Videos</Text>
      <Video
        source={require('./vid.mp4')}
        style={styles.video}
        controls={true}
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
  video: {
    width: '100%',
    height: 300, // Adjust the height as needed
  },
});

export default Videos;

// https://youtu.be/fw8J9-KhGdU?si=_VPSw-d8bia79Qsp

