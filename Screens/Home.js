/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {
  GetPopularMovie,
  GetUpcomingMovie,
  GetPopularTv,
  GetFamilyMovies,
} from '../Services/Services';
import {SliderBox} from 'react-native-image-slider-box';
import List from '../Components/List';
import Error from '../Components/Error';
const dimensions = Dimensions.get('screen');
const Home = ({navigation}) => {
  const [moviesImages, setMoviesImages] = useState();
  const [popularMovies, setPopularMovies] = useState();
  const [familyMovies, setFamilyMovies] = useState();
  const [popularTv, setPopularTv] = useState();
  const [error, setError] = useState(false);
  const [Loader, setLoader] = useState(false);

  const GetData = () => {
    return Promise.all([
      GetUpcomingMovie(),
      GetPopularMovie(),
      GetPopularTv(),
      GetFamilyMovies(),
    ]);
  };
  useEffect(() => {
    GetData()
      .then(
        ([
          UpcomingMoviesData,
          PopularMoviesData,
          PopularTvData,
          FamilyMoviesData,
        ]) => {
          const moviesImagesArray = [];
          UpcomingMoviesData.forEach(movie => {
            moviesImagesArray.push(
              'https://image.tmdb.org/t/p/w500' + movie.poster_path,
            );
          });
          setMoviesImages(moviesImagesArray);
          setPopularMovies(PopularMoviesData);
          setPopularTv(PopularTvData);
          setFamilyMovies(FamilyMoviesData);
        },
      )
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoader(true);
      });
  }, []);
  return (
    <React.Fragment>
      {Loader && !error && (
        <ScrollView>
          {moviesImages && (
            <View style={styles.container}>
              <SliderBox
                images={moviesImages}
                sliderBoxHeight={dimensions.height / 1.5}
                dotStyle={styles.sliderStyle}
                autoplay={true}
                circleLoop={true}
              />
            </View>
          )}
          {popularMovies && (
            <View style={styles.carousel}>
              <List
                navigation={navigation}
                title="Popular Movies"
                content={popularMovies}
              />
            </View>
          )}

          {popularTv && (
            <View style={styles.carousel}>
              <List
                navigation={navigation}
                title="Popular Tv's"
                content={popularTv}
              />
            </View>
          )}

          {familyMovies && (
            <View style={styles.carousel}>
              <List
                navigation={navigation}
                title="Fmily Movies"
                content={familyMovies}
              />
            </View>
          )}
        </ScrollView>
      )}
      {!Loader && <ActivityIndicator size={'large'} />}
      {error && <Error />}
    </React.Fragment>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sliderStyle: {
    height: 0,
  },
  carousel: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
