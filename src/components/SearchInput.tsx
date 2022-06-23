import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather} from '@expo/vector-icons';
import utils from '../utils';

interface Props {
  onSearch: () => void;
  handleChangeSearch: (text: string) => void;
}

export function SearchInput({ onSearch, handleChangeSearch }: Props) {

  return (
    <View style={styles.inputContainer} >
      <TextInput 
        style={styles.input}
        placeholder="Busque um filme..."
        returnKeyType="send"
        onChangeText={text => handleChangeSearch(text)}
        onSubmitEditing={onSearch}
      />
      <TouchableOpacity style={styles.searchButton} 
        activeOpacity={0.7}
        onPress={onSearch}
      >
        <Feather name="chevron-right" size={24} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
};

export const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: utils.colors.white,
    borderRadius: 5,
    marginTop: -28,
    marginHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 56,
    paddingHorizontal: 20,
    backgroundColor: utils.colors.white,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    borderRightWidth: 1,
    color: utils.colors.black_light
  },
  searchButton: {
    backgroundColor: utils.colors.green,
    height: 56,
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  }
});