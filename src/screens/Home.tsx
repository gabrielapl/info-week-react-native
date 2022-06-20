import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
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


      <ModalView visible={searchModalVisible} closeModal={() => setSearchModalVisible(false)}>
        <ModalSearch />
      </ModalView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black_light,
  },
});
