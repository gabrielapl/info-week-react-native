import { TouchableOpacity, TouchableOpacityProps, Text, StyleSheet } from "react-native";
import colors from "../theme/colors";

interface Props extends TouchableOpacityProps {
  text: string;
  color: string;
}

export function Button({ text, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest} >
      <Text>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 48,
    backgroundColor: colors.green_light,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8
  },
  text: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.white
  }
});