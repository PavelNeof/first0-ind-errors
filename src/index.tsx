import React from 'react';
import ReactDOM from 'react-dom';
import {App} from 'App';
import reportWebVitals from './reportWebVitals';
import {store} from "./store";
import {Provider, RootStateOrAny} from "react-redux";

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
    ,
  document.getElementById('root')
);

reportWebVitals();


/*
<Provider store={{store} as RootStateOrAny}>
    <App />
</Provider>,*/
