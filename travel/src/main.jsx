import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createStore, applyMiddleware, compose } from 'redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AuthContextProvider from "./helper/Login"
import { Provider } from "react-redux";
import reducers from './reducers/reducers'
import thunk from 'redux-thunk';
const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <Provider store={store} >


 <App />
      </Provider>
  

    </AuthContextProvider>
   
  </React.StrictMode>
);
