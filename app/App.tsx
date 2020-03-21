import React from 'react'
import { StatusBar, SafeAreaView } from 'react-native'
import { ListScreen } from './ListScreen/ListScreen'
import { EditScreen } from './EditScreen/EditScreen'

export const App = () => {
  return (<>
    <StatusBar barStyle="light-content" />
    <SafeAreaView>
      <ListScreen />
      <EditScreen />
    </SafeAreaView>
  </>)
}