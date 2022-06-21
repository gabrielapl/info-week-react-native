import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import colors from "../theme/colors";

export function MovieDetails() {
  return (
    <View style={styles.container} >
      <Image source={{ uri: 'https://image.tmdb.org/t/p/original/nNmJRkg8wWnRmzQDe2FwKbPIsJV.jpg' }} style={styles.banner} />
      <View style={{ paddingHorizontal: 24 }} >
        <Text style={styles.title} >Os Vingadores: The Avengers</Text>
        <Text style={styles.sinopse} >Loki, o irmão de Thor, ganha acesso ao poder ilimitado do cubo cósmico ao roubá-lo de dentro das instalações da S.H.I.E.L.D. Nick Fury, o diretor desta agência internacional que mantém a paz, logo reúne os únicos super-heróis que serão capazes de defender a Terra de ameaças sem precedentes. Homem de Ferro, Capitão América, Hulk, Thor, Viúva Negra e Gavião Arqueiro formam o time dos sonhos de Fury, mas eles precisam aprender a colocar os egos de lado e agir como um grupo em prol da humanidade.</Text>
        <Text style={styles.time}>Duração:  2 horas</Text>
        <View style={styles.categoryWrapper}>
          <Text style={styles.category}>Ação</Text>
          <Text style={styles.category}>Aventura</Text>
        </View>

        <TouchableOpacity>
          <Text>Assistir mais tarde...</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black_light,
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
    marginBottom: 12
  },
  categoryWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 24
  },
  category: {
    color: colors.white,
    marginRight: 24
  },
  time: {
    color: colors.white
  }
});