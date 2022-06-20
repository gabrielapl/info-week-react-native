import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../theme/colors";

export function CardMovieDetails() {

  const navigation: any = useNavigation();

  function handleGoMovieDetails() {
    navigation.push("MovieDetails");
  }

  return (
    <TouchableOpacity style={styles.container} onPress={handleGoMovieDetails} >
      <Image source={{ uri: 'https://image.tmdb.org/t/p/original/yFSIUVTCvgYrpalUktulvk3Gi5Y.jpg' }} style={styles.poster} />
      <View>
        <Text style={styles.title}>Vingadores</Text>
        
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: colors.white,
    flexDirection: 'row',
    marginBottom: 24,
    borderRadius: 24
  },
  poster: {
    height: 140,
    width: 160,
    marginRight: 14
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.green_light
  }
});