import { View, Text, Image, StyleSheet } from "react-native";

export function CardMovieDetails() {
  return (
    <View>
      <Image source={{ uri: 'https://image.tmdb.org/t/p/original/yFSIUVTCvgYrpalUktulvk3Gi5Y.jpg' }} style={styles.poster} />
      <View>
        <Text>Vingadores</Text>
        <Text>Assistido</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  poster: {
    height: 220,
    width: 180
  }
});