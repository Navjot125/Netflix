/* eslint-disable prettier/prettier */
import React from 'react';
import {TouchableOpacity, StyleSheet, Image, Text} from 'react-native';
import PropTypes from 'prop-types';
const propTypes = {
  item: PropTypes.object,
};
const placeholderImage = require('../assets/images/Placeholder.png');

class Card extends React.PureComponent {
  render() {
    const {item, navigation} = this.props;
    return (
      <TouchableOpacity 
      onPress={()=>navigation.navigate('Detail', {movieId : item.id})}
      style={styles.container}>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={
            item.poster_path
              ? {uri: 'https://image.tmdb.org/t/p/w500' + item.poster_path}
              : placeholderImage
          }
        />
        {!item.poster_path && (
          <Text style={styles.movieNames}>{item.title}</Text>
        )}
      </TouchableOpacity>
    );
  }
}

Card.propTypes = propTypes;
export default Card;
const styles = StyleSheet.create({
  container: {
    padding: 5,
    position: 'relative',
    alignItems: 'center',
    height: 200,
    marginBottom:8
  },
  image: {
    height: 200,
    width: 120,
    borderRadius: 20,
  },
  movieNames: {
    position: 'absolute',
    textAlign: 'center',
    top: 10,
    width: 100,
    color: 'blue',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
