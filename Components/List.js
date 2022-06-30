/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View, FlatList, Text} from 'react-native';
import Card from './Card';
import PropTypes from 'prop-types';
const propTypes = {
  title: PropTypes.string,
  content: PropTypes.array,
};
class List extends React.PureComponent {
  render() {
    const {navigation, title, content} = this.props;
    return (
      <View style={styles.list}>
        <View>
          <Text style={styles.text}>{title}</Text>
        </View>
        <View>
          <FlatList
            data={content}
            horizontal={true}
            renderItem={({item}) => <Card navigation={navigation} item={item} />} />
        </View>
      </View>
    );
  }
}
List.propTypes = propTypes;
export default List;
const styles = StyleSheet.create({
  list: {
    marginTop: 25,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
    padding: 10,
  },
});
