/* eslint-disable prettier/prettier */
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Modal,
  ActivityIndicator,
  Pressable,
} from 'react-native';
// import VideoPlayer from 'react-native-video-controls';
import PlayButton from '../Components/PlayButton';
import React, {useState, useEffect} from 'react';
import {GetMovie} from '../Services/Services';
import StarRating from 'react-native-star-rating';
import dateFormat from 'dateformat';
import Videos from '../Components/Videos';
import Navbar from '../Components/Navbar';

const placeholderImage = require('../assets/images/Placeholder.png');
const height = Dimensions.get('screen').height;
const Detail = ({route, navigation}) => {
  const [movieDetail, setMovieDetail] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [loader, setLoader] = useState(false);
  const movieId = route.params.movieId;

  useEffect(() => {
    GetMovie(movieId).then(movieData => {
      setMovieDetail(movieData);
      setLoader(true);
    });
  }, [movieId]);

  const videoShown = () => {
    setModalVisible(!modalVisible);
  };
  return (
    <View>
      {loader && (
        <View>
          <ScrollView>
            <Image
              style={styles.image}
              resizeMode="cover"
              source={
                movieDetail.poster_path
                  ? {
                      uri:
                        'https://image.tmdb.org/t/p/w500' +
                        movieDetail.poster_path,
                    }
                  : placeholderImage
              }
            />
            <View style={styles.container}>
              <View style={styles.playbutton}>
                <PlayButton handlePress={videoShown} />
              </View>
              <Text style={styles.movieTitle}>{movieDetail.title}</Text>
              {movieDetail.genres && (
                <View style={styles.genre}>
                  {movieDetail.genres.map(genre => {
                    return (
                      <Text style={styles.genreText} key={genre.id}>
                        {genre.name}
                      </Text>
                    );
                  })}
                </View>
              )}
              <StarRating
                disabled={true}
                fullStarColor={'gold'}
                starSiz={30}
                maxStars={5}
                rating={movieDetail.vote_average / 2}
              />
              <Text style={styles.overview}>{movieDetail.overview}</Text>
              <Text style={styles.release}>
                {'release date: ' +
                  dateFormat(movieDetail.release_date, 'mmmm dS, yyyy')}
              </Text>
            </View>
          </ScrollView>
          <Modal
            supportedOrientations={['landscape', 'portrait']}
            animationType="slide"
            visible={modalVisible}>
              <Navbar navigation={navigation} />
            <View style={styles.modal}>
              <Videos onClose={videoShown} />
            </View>
          </Modal>
        </View>
      )}
      {!loader && <ActivityIndicator size={'large'} />}
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  image: {
    height: height / 2,
  },
  movieTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  genre: {
    flexDirection: 'row',
    alignContent: 'center',
    marginTop: 20,
  },
  genreText: {
    fontWeight: 'bold',
    margin: 10,
    color: 'red',
  },
  overview: {
    padding: 15,
  },
  release: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  playbutton: {
    position: 'absolute',
    top: -25,
    right: 20,
  },
});
