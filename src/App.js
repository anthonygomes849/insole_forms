import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Forms from './pages/Forms';
import createRoutes from './routes';

export default function App() {
  const Routes = createRoutes();
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Forms} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
