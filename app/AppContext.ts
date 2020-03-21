import React from 'react'
import { IItem } from './interfaces/IItem'

export interface IAppContext {
  showEditScreen?: boolean
  handleClickRow?: (item: IItem) => void
  handleDismissEdit?: () => void
  item?: IItem
}

const defaultContext = {
}

export const AppContext = React.createContext<IAppContext>(defaultContext)