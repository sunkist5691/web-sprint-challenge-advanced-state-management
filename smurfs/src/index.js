import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { smurfReducer } from './store/reducer/smurfReducer'


import "./index.css";
import App from "./components/App";


const store = createStore(smurfReducer, applyMiddleware(thunk))

ReactDOM.render(
<Provider store={ store }>
   <Router>
      <App />
   </Router>
</Provider>, 
document.getElementById("root"));
