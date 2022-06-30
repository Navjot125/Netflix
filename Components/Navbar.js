/* eslint-disable prettier/prettier */

import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';
import Colors from '../Screens/Theme/Colors';


const propTypes = {
  main: PropTypes.bool,
};
const defaultProps = {
  main: false,
};
class Navbar extends React.PureComponent {
  render() {
    const {navigation, main} = this.props;
    return (
      <SafeAreaView>
        {main ? (
          <View style={styles.mainNav}>
            <Image
              style={styles.image}
              source={require('../assets/images/images.jpg')}
            />
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('search');
              }}>
              <Icon name={'search-outline'} size={40} color={Colors.black} />
            </TouchableOpacity>
          </View>
        ) : (
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}>
              <Icon name={'chevron-back'} size={40} color={'#000'} />
            </TouchableOpacity>
          </View>
        )}
      </SafeAreaView>
    );
  }
}

Navbar.propTypes = propTypes;
Navbar.defaultProps = defaultProps;
export default Navbar;

const styles = StyleSheet.create({
  image: {
    height: 50,
    width: 50,
  },
  mainNav:{
    // flex:1,
    justifyContent:'space-between',
    flexDirection:'row',
    // padding:10,
    alignItems:'center',
    paddingHorizontal:10,
    // position: 'absolute',
    // zIndex:2,
  },
});

