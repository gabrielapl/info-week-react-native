import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { View, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { SearchModalMovie } from '../../screens/Home';
import api from '../../services/api';

interface Props {
  onCloseModal: () => void;
  movies: SearchModalMovie[];
}

export function ModalSearch({ onCloseModal, movies }: Props) {

  const navigation: any = useNavigation();

  function handleGoMovieDetails(id: number) {
    onCloseModal();
    navigation.push("MovieDetails", { id });
  }

  return (
    <View>
      <FlatList 
        data={movies}
        numColumns={2}
        style={styles.searchList}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.posterButton} onPress={() => handleGoMovieDetails(item.id)} >
            <Image source={{ uri: `https://image.tmdb.org/t/p/original${item.poster_path}` }} style={styles.poster} />
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  searchList: {
    marginTop: 40,
    paddingHorizontal: 20
  },
  posterButton: {
    flex: 1,
    maxWidth:'50%',
    alignItems:'center',
    marginBottom:20,
  },
  poster: {
    height: 220,
    width: 180
  }
});