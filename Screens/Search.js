/* eslint-disable prettier/prettier */
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {SearchMovieTv} from '../Services/Services';
import Card from '../Components/Card';
import Error from '../Components/Error';

const Search = navigation => {
  const [text, setText] = useState();
  const [searchResults, setSearchResults] = useState();
  const [error, setError] = useState(false);

  const onsubmit = querry => {
    Promise.all([SearchMovieTv(querry, 'movie'), SearchMovieTv(querry, 'tv')])
      .then(([movies, tv]) => {
        const data = [...movies, ...tv];
        setSearchResults(data);
      })
      .catch(() => {
        setError(true);
      });
  };
  return (
    <React.Fragment>
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder={'Search Movie'}
              onChangeText={setText}
              value={text}
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              onsubmit(text);
            }}>
            <Icon name={'search-outline'} size={40} color={'#000'} />
          </TouchableOpacity>
        </View>
        <View style={styles.searchItems}>
          {searchResults && searchResults.length > 0 && (
            <FlatList
              numColumns={3}
              data={searchResults}
              renderItem={({item}) => (
                <Card navigation={navigation} item={item} />
              )}
              keyExtractor={item => item.id}
            />
          )}
          {searchResults && searchResults.length == 0 && (
            <View style={styles.noResults}>
              <Text>No results matching your criteria.</Text>
              <Text>Try different keywords.</Text>
            </View>
          )}
          {!searchResults && (
            <View style={styles.empty}>
              <Text>Type something to start searching</Text>
            </View>
          )}
          {error && <Error />}
        </View>
      </SafeAreaView>
    </React.Fragment>
  );
};

export default Search;

const styles = StyleSheet.create({
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    borderRadius: 15,
    padding: 8,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    paddingTop: 40,
  },
  form: {
    flexBasis: 'auto',
    flexGrow: 1,
    paddingHorizontal: 8,
  },
  searchItems: {
    padding: 5,
  },
  noResults: {
    paddingTop: 20,
  },
});
