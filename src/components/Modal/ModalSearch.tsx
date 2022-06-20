import { View, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';

export function ModalSearch() {
  return (
    <View>
      <FlatList 
        data={[1,2,3,4]}
        numColumns={2}
        style={styles.searchList}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.posterButton} >
            <Image source={{ uri: 'https://image.tmdb.org/t/p/original/yFSIUVTCvgYrpalUktulvk3Gi5Y.jpg' }} style={styles.poster} />
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