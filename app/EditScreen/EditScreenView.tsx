import React, { useContext } from 'react'
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Image
} from 'react-native'
import Modal from 'react-native-modal'
import { AppContext } from '../AppContext'

export const EditScreenView = () => {
  const context = useContext(AppContext)
  const item = context.item!

  return (
    <Modal
      isVisible={context.showEditScreen}
      onBackdropPress={context.handleDismissEdit}
      onBackButtonPress={context.handleDismissEdit}
    >
      <View style={styles.container}>
        <ScrollView>
          <Image
            source={{ uri: item.imageUri }}
            style={{ height: 250, width: '100%' }}
          />
          <Text>{item.title}</Text>
          <Text>{item.body}</Text>
        </ScrollView>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    marginTop: 75,
    borderRadius: 4,
    padding: 15
  }
})