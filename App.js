// import core
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Routes from './src/configs/routes';

const App = () => {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
};

export default App;
