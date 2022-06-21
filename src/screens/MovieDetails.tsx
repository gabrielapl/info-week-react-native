import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Button } from "../components/Button";
import Feather from '@expo/vector-icons/Feather';
import colors from "../theme/colors";
import { useNavigation, useRoute } from "@react-navigation/native";
import api from "../services/api";

interface MovieDetails {
  backdrop_path: string;
  overview: string;
  title: string;
}

export function MovieDetails({ navigation, route }:any) {

  const [movie, setMovie] = useState<MovieDetails>({} as MovieDetails)
  const { id } = route.params;

  function handleGoBack() {
    navigation.goBack();
  }

  useEffect(() => {
    async function getMovieDetails() {
      const response = await api.get("movie/" + id);

      setMovie(response.data);
    }
    
    getMovieDetails();
  }, []);

  return (
    <View style={styles.container} >
      <View style={styles.header} >
        <TouchableOpacity  onPress={handleGoBack}>
          <Feather name="chevron-left" color="#FFF" size={24} />
        </TouchableOpacity>
      </View>

      <View style={styles.content} >
        <Image source={{ uri: 'https://image.tmdb.org/t/p/original' + movie.backdrop_path }} style={styles.banner} />
        <View style={{ paddingHorizontal: 24 }} >
          <Text style={styles.title} >{movie.title}</Text>
          <Text style={styles.sinopse} >{movie.overview}</Text>

          <Button
            text="Assistir mais tarde..."
            color=""
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black_light,
  },
  header: {
    width: '100%',
    height: 84,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    position: 'relative',
    zIndex: 9,

    justifyContent: 'center',
    paddingLeft: 50
  },
  content: {
    marginTop: -84
  },
  banner: {
    width: '100%',
    height: 240
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.white,
    marginVertical: 12
  },
  sinopse: {
    color: colors.white,
    marginBottom: 24
  },
});