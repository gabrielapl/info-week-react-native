import AsyncStorage from '@react-native-async-storage/async-storage';
import { MovieDetails } from '../screens/MovieDetails';

const key = "movie-list:favorite";

async function getMoviesStorage() {
  const response = await AsyncStorage.getItem(key);
  const data: MovieDetails[] = response ? JSON.parse(response) : [];

  return data;
}

async function setMoviesStorage(movie: MovieDetails) {
  const response = await AsyncStorage.getItem(key)
  const data = response ? JSON.parse(response) : [];
    
  await AsyncStorage.setItem(key, JSON.stringify([...data, movie]));
}

async function removeMovieStorage(id: number) {
  const data = await getMoviesStorage();
  await AsyncStorage.setItem(key, JSON.stringify(data.filter(movie => movie.id !== id )));
}

export { getMoviesStorage, setMoviesStorage, removeMovieStorage };