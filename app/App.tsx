import React, { useState } from 'react'
import { StatusBar, SafeAreaView } from 'react-native'
import { ListScreen } from './ListScreen/ListScreen'
import { EditScreen } from './EditScreen/EditScreen'
import { AppContext, IAppContext } from './AppContext'
import { IItem } from './interfaces/IItem'

export const App = () => {
  const [showEditScreen, setShowEditScreen] = useState(false)
  const [item, setItem] = useState({} as IItem)

  const handleClickRow = (selectedItem: IItem) => {
    setItem(selectedItem)
    setShowEditScreen(true)
  }

  const handleDismissEdit = () => {
    setShowEditScreen(false)
  }

  const context: IAppContext = {
    showEditScreen,
    handleClickRow,
    handleDismissEdit,
    item
  }

  return (
    <>
      <AppContext.Provider value={context}>
        <StatusBar barStyle="dark-content" />
        <ListScreen />
        <EditScreen />
      </AppContext.Provider>
    </>)
}