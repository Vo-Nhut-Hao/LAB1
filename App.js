// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HelloScreen from './screens/HelloScreen'; // Câu 1
import ButtonScreen from './screens/ButtonScreen'; // Câu 2
import CustomButtonScreen from './screens/CustomButtonScreen'; // Câu 3
import StatePropsScreen from './screens/StatePropsScreen'; // Câu 4
import FlexboxScreen from './screens/FlexboxScreen'; // Câu 5
import ScrollViewScreen from './screens/ScrollViewScreen'; // Câu 6
import FormScreen from './screens/FormScreen'; // Câu 7
import FlatListScreen from './screens/FlatListScreen'; // Câu 8
import SectionListScreen from './screens/SectionListScreen'; // Câu 9
import MiniAppScreen from './screens/MiniAppScreen'; // Câu 10

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Câu 1" component={HelloScreen} />
        <Tab.Screen name="Câu 2" component={ButtonScreen} />
        <Tab.Screen name="Câu 3" component={CustomButtonScreen} />
        <Tab.Screen name="Câu 4" component={StatePropsScreen} />
        <Tab.Screen name="Câu 5" component={FlexboxScreen} />
        <Tab.Screen name="Câu 6" component={ScrollViewScreen} />
        <Tab.Screen name="Câu 7" component={FormScreen} />
        <Tab.Screen name="Câu 8" component={FlatListScreen} />
        <Tab.Screen name="Câu 9" component={SectionListScreen} />
        <Tab.Screen name="Câu 10" component={MiniAppScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
