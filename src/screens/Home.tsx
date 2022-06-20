import { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { CardMovieDetails } from '../components/CardMovieDetails';
import { Header } from '../components/Header';
import { ModalView } from '../components/Modal';
import { ModalSearch } from '../components/Modal/ModalSearch';
import { SearchInput } from '../components/SearchInput';
import colors from '../theme/colors';

export function Home() {

  const [searchModalVisible, setSearchModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Header />

      <SearchInput openModal={() => setSearchModalVisible(true)} />

      <Text style={styles.title} >Minha lista</Text>
      
      <FlatList 
        data={[1,2,3,4]}
        renderItem={({ item }) => (
          <CardMovieDetails />
        )}
      />

      <ModalView visible={searchModalVisible} closeModal={() => setSearchModalVisible(false)}>
        <ModalSearch onCloseModal={() => setSearchModalVisible(false)} />
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
    marginLeft: 24
  }
});
