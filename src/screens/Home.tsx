import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { CardMovieDetails } from '../components/CardMovieDetails';
import { Header } from '../components/Header';
import { ModalView } from '../components/Modal';
import { ModalSearch } from '../components/Modal/ModalSearch';
import { SearchInput } from '../components/SearchInput';
import api from '../services/api';
import colors from '../theme/colors';

export interface SearchModalMovie {
  id: number;
  poster_path: string;
}

export function Home() {

  const [searchModalVisible, setSearchModalVisible] = useState(false);
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState<SearchModalMovie[]>([]);

  async function searchMovies(){
    try {
      const response = await api.get("search/movie", {
        params: {
          query: search
        }
      });

      setMovies(response.data.results);
      setSearchModalVisible(true);

    } catch (error) {
      
    }
  }
  
  return (
    <View style={styles.container}>
      <Header />

      <SearchInput 
        onSearch={searchMovies} 
        handleChangeSearch={(text) => setSearch(text)}
      />

      <Text style={styles.title} >Minha lista</Text>
      
      <FlatList 
        data={[1,2,3,4]}
        style={{ paddingHorizontal: 24 }}
        renderItem={({ item }) => (
          <CardMovieDetails />
        )}
      />

      <ModalView visible={searchModalVisible} closeModal={() => setSearchModalVisible(false)}>
        <ModalSearch onCloseModal={() => setSearchModalVisible(false)} movies={movies} />
      </ModalView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black_light,
  },
  title: {
    fontSize: 18,
    color: colors.green_light,
    marginTop: 20,
    marginLeft: 24,
    marginBottom: 24
  }
});
