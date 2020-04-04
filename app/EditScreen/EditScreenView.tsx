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
      style={styles.modal}
      isVisible={context.showEditScreen}
      onBackdropPress={context.handleDismissEdit}
      onBackButtonPress={context.handleDismissEdit}
    >
      <View style={styles.container}>
        <ScrollView>
          <Image
            source={{ uri: item.imageUri }}
            style={styles.headerImage}
          />
          <View style={styles.contentContainer}>
            <Text style={styles.titleLabel}>
              {item.title}
            </Text>
            <Text style={styles.bodyLabel}>
              {item.body}
            </Text>
          </View>
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
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  headerImage: {
    height: 250,
    width: '100%',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  contentContainer: {
    padding: 15
  },
  modal: {
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0
  },
  titleLabel: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  bodyLabel: {
    fontSize: 16,
    marginTop: 20
  }
})