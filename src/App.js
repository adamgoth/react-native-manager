import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
  const config = {
      apiKey: 'AIzaSyBj4oGmzDynISEHtnX33Pzub9mOQXDvUJU',
      authDomain: 'react-native-manager-243b3.firebaseapp.com',
      databaseURL: 'https://react-native-manager-243b3.firebaseio.com',
      projectId: 'react-native-manager-243b3',
      storageBucket: 'react-native-manager-243b3.appspot.com',
      messagingSenderId: '697680890499'
    };

    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
