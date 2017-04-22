import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

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
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
