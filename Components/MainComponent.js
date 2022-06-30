/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Detail from '../Screens/Detail';
import Navbar from './Navbar';
import Home from '../Screens/Home';
import Search from '../Screens/Search';

const Stack = createNativeStackNavigator();

class MainComponent extends React.PureComponent {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTransparent: true,
            header: ({navigation}) => (
              <Navbar navigation={navigation} main={true} />
            ),
          }}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{
            headerTransparent: true,
            header: ({navigation}) => <Navbar navigation={navigation} />,
          }}
        />
        <Stack.Screen
          name="search"
          component={Search}
          options={{
            headerTransparent: true,
            header: ({navigation}) => <Navbar navigation={navigation} />,
          }}
        />
      </Stack.Navigator>
    );
  }
}

export default MainComponent;
