/* eslint-disable prettier/prettier */
import {StyleSheet, View} from 'react-native';
import React from 'react';
import Video from 'react-native-video';

const Videos = ({onClose}) => {
  return (
    <Video
      // source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}} // Can be a URL or a local file.
      source={require('../assets/videos/47.mp4')} // Can be a URL or a local file.
      fullscreenOrientation="all"
      controls={true}
      onEnd={() => {
        onClose();
      }}
      style={styles.backgroundVideo}
    />
  );
};

export default Videos;

const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
