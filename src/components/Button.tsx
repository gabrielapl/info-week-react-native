import { TouchableOpacity, TouchableOpacityProps, Text, StyleSheet } from "react-native";
import utils from "../utils";

interface Props extends TouchableOpacityProps {
  text: string;
  color: string;
}

export function Button({ text, color, ...rest }: Props) {
  return (
    <TouchableOpacity style={[styles.container, { backgroundColor: color }]} {...rest} >
      <Text style={styles.text} >{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8
  },
  text: {
    fontSize: 16,
    fontWeight: '700',
    color: utils.colors.white
  }
});