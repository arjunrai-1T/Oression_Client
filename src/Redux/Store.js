import { configureStore } from '@reduxjs/toolkit'
import reducerCustom from './Reducer';

export default configureStore({
  reducer: { reducerCustom },
})