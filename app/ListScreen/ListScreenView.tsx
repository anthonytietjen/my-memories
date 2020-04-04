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

    if (i % 5 === 0) {
      imageUri = "https://2.bp.blogspot.com/-9mgbWsd6ilg/UvfJtv2c_FI/AAAAAAAAYv8/Sz6QUx0s3Gw/s1600/DSC_0051.JPG"
    }
    else if (i % 5 === 1) {
      imageUri = "https://4.bp.blogspot.com/-r0CZEqyksj4/UvfJ0Om8mbI/AAAAAAAAYwM/fu-2HSjdJh8/s1600/DSC_0062.JPG"
    }
    else if (i % 5 === 2) {
      imageUri = "https://2.bp.blogspot.com/-JFewn3DIEno/UvfKPaLwdsI/AAAAAAAAYxk/-448yuC5o0A/s1600/DSC_0102.JPG"
    }
    else if (i % 5 === 3) {
      imageUri = "https://1.bp.blogspot.com/-0kSjd4KOum0/UvfJDcZceWI/AAAAAAAAYvE/BhzPvXXjJ1E/s1600/DSC_0025.JPG"
    }
    else if (i % 5 === 4) {
      imageUri = "https://2.bp.blogspot.com/-BYikBL2wWI4/UvekRhv_LzI/AAAAAAAAYuI/gttEAbYDmAE/s1600/DSC_0999.JPG"
    }

    const id = (i + 1).toString()
    const item: IItem = {
      id,
      title: "Having Fun In The Sun ",
      body: "Today we took the kids out where they could get some sunshine.\n\nThey had a blast and can't wait to go back.",
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
                <Text style={styles.titleLabel}>
                  {item.title}
                </Text>

                <Text style={styles.dateLabel}>
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
    padding: 15,
  },
  row: {
    backgroundColor: 'white',
    margin: 15,
    marginBottom: 7,
    borderRadius: 4,
    borderWidth: .5,
    borderColor: '#777'
  },
  rowImage: {
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    height: 150,
    width: '100%'
  },
  rowTitle: {
    padding: 15,
  },
  titleLabel: {
    fontSize: 20
  },
  dateLabel: {
    fontSize: 14,
    marginTop: 10
  }
})