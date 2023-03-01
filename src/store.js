import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import dataReducer from './slices/dataSlice';
import uiReducer from './slices/uiSlice';

export const store = configureStore({
  reducer: {
    data: dataReducer,
    ui: uiReducer
  },
  devTools: true, // opción para habilitar las devTools
  enhancer: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // función para conectar las devTools con la store de Redux
});
