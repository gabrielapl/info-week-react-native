import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { MovieDetails } from "../screens/MovieDetails";
import utils from "../utils";

interface Props {
  movie: MovieDetails;
}

export function CardMovieDetails({ movie }: Props) {

  const navigation: any = useNavigation();

  function handleGoMovieDetails() {
    navigation.push("MovieDetails", { id: movie.id });
  }

  return (
    <TouchableOpacity style={styles.container} onPress={handleGoMovieDetails} >
      <Image 
        source={{ uri: utils.imageUrl + movie.backdrop_path }} 
        style={styles.poster} 
      />
      <Text style={styles.title} >{movie.title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 180,
    backgroundColor: utils.colors.green,
    marginBottom: 24,
    borderRadius: 24
  },
  poster: {
    height: 140,
    width: '100%',
    borderRadius: 24,
    marginBottom: 4
  },
  title: {
    color: utils.colors.green_light,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});