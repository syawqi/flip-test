import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Import Page
import Screen from './../pages';

// createNavigationStack
const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      {/* Stack Screen Transaction as Home */}
      <Stack.Screen
        name="Home"
        // Transaction Screen
        component={Screen.Transaction.Transaction}
        // remove header
        options={{headerShown: false}}
      />
      {/* Stack Screen TransactionDetail as Detail */}
      <Stack.Screen
        name="Detail"
        component={Screen.Transaction.TransactionDetail}
      />
    </Stack.Navigator>
  );
};

export default Routes;
