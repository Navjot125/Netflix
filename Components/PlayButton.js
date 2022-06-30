/* eslint-disable prettier/prettier */
import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../Screens/Theme/Colors';

class PlayButton extends React.PureComponent {
  render() {
    const {handlePress} = this.props;
    return (
      <Pressable onPress={() => handlePress()} style={styles.button}>
        <Icon
          name="caret-forward-outline"
          style={styles.icon}
          size={30}
          color={Colors.white}
        />
      </Pressable>
    );
  }
}

export default PlayButton;
const styles = StyleSheet.create({
  button: {
    alignContent: 'center',
    borderRadius: 50,
    width: 50,
    padding: 10,
    backgroundColor: 'red',
  },
  icon: {
    marginLeft: 2,
  },
});
