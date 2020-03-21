import React, { useContext } from 'react'
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image
} from 'react-native'
import { AppContext } from '../AppContext'
import { IItem } from '../interfaces/IItem'

export const ListScreenView = () => {
  const context = useContext(AppContext)
  const data = []
  for (let i = 0; i < 1000; i++) {
    let imageUri;

    if (i % 3 === 0) {
      imageUri = "https://3.bp.blogspot.com/-Wj_iWDJ6J3I/Vsh0xGx4GgI/AAAAAAAAGbQ/gYDDOv4kqTk/s1600/Moon-Tug-Icon-152.png"
    }
    else if (i % 3 === 1) {
      imageUri = "https://4.bp.blogspot.com/-DsEr-J7oEqI/VoekrYxbFFI/AAAAAAAAF3w/2sl6D3ovNpk/s200/icon_512.png"
    }
    else if (i % 3 === 2) {
      imageUri = "https://3.bp.blogspot.com/-_qW6TMsjQNY/Voel1jjpjPI/AAAAAAAAF38/9CrRne9kZkc/s200/icon-lighting-list-256.png"
    }

    const id = (i + 1).toString()
    const item: IItem = {
      id,
      title: "Hello World " + id,
      body: "Here are the details" + id,
      date: `Jan ${id}, 2019`,
      time: "12:43 PM",
      imageUri
    }
    data.push(item)
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.id!}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => context.handleClickRow!(item)}
          >
            <View style={styles.row}>
              <Image
                style={styles.rowImage}
                source={{ uri: item.imageUri }}
              />
              <View style={styles.rowTitle}>
                <Text>
                  {item.title}
                </Text>

                <Text>
                  {item.date}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ddd',
    flex: 1,
    padding: 15
  },
  row: {
    backgroundColor: 'white',
    margin: 15,
    marginBottom: 7,
    borderRadius: 4
  },
  rowImage: {
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    height: 100,
    width: '100%'
  },
  rowTitle: {
    padding: 15
  }
})