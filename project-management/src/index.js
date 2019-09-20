import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import thunk from 'redux-thunk'
import { reduxFirestore ,getFirestore } from 'redux-firestore'
import {  reactReduxFirebase ,getFirebase } from 'react-redux-firebase'
import fbconfig from './configs/fbconfig'

const store = createStore(rootReducer, 
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
        reduxFirestore(fbconfig),
        reactReduxFirebase(fbconfig, {useFirestoreForProfile: true, userProfile: 'users' ,attachAuthIsReady: true})
    )    
)

// By using this method we are able to load DOM only when firebase auth is ready 
store.firebaseAuthIsReady.then( () => {
    ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: https://bit.ly/CRA-PWA
    serviceWorker.unregister();
})
    



