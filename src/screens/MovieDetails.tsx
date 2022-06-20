import { View, Text, StyleSheet } from "react-native";
import colors from "../theme/colors";

export function MovieDetails() {
  return (
    <View style={styles.container} >
      <Text>MovieDetails</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black_light,
  },
});