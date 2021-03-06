import React, {ReactNode } from 'react';

import { Modal, ModalProps, View, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import utils from '../../utils';

type Props = ModalProps & {
  children: ReactNode;
  closeModal: () => void;
}

export function ModalView({ children, closeModal, ...rest }: Props){

  return(
    <Modal 
      transparent
      animationType="slide"
      statusBarTranslucent
      {...rest}
    > 
    <TouchableWithoutFeedback onPress={closeModal} >
        <View style={styles.overlay} >
          <View  style={styles.container}>
              <View style={styles.bar}/>
              {children}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  )
}

export const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop: 100,
    backgroundColor: utils.colors.black_light
  },
  overlay:{
    flex:1,
    backgroundColor: utils.colors.overlay
  },
  bar:{
    width: 39,
    height:2,
    borderRadius:2,
    backgroundColor: utils.colors.green_light,
    alignSelf: "center",
    marginTop:13,
  }

})