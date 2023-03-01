import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { pokemonsReducer } from './reducers/pokemons'
import { Provider } from 'react-redux'
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux'
import 'antd/dist/reset.css'
import './index.css'
import { logger } from './middlewares'
/* import { featuring, logger } from './middlewares' //usando featuringMiddleware*/ 
const composedEnhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
   applyMiddleware(logger));

/*    const composedEnhancers = compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
     applyMiddleware(logger,featuring)); // Usando featuringMiddleware*/
  
const store = createStore(pokemonsReducer, composedEnhancers)

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Provider store={store}>
    <App />
    </Provider>
  </>,
);
