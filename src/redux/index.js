import {  configureStore } from '@reduxjs/toolkit';
import data from './reducers';

 const store = configureStore({
    reducer: {
        data
    }
  })
export default store;