// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeStackNavigator from './src/navigator/navigation';
import { Provider } from 'react-redux';
import { store } from './src/store/store';

const App = () => {
  return (
    <Provider store={store} >
      <NavigationContainer>
        <HomeStackNavigator />
      </NavigationContainer>
      </Provider>
  );
};

export default App;