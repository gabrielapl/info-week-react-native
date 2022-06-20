import { View, StyleSheet } from 'react-native';
import colors from '../theme/colors';

export function Header() {
  return (
    <View style={styles.container} >

    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 200,
    backgroundColor: colors.green_light
  }
});