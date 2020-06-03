import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './pages/Home';
import Pokedex from './pages/Pokedex';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Home: {
        screen: Home,
        navigationOptions: {
          headerTransparent: true,
        },
      },
      Pokedex: {
        screen: Pokedex,
      },
    },
    {
      defaultNavigationOptions: {
        title: null,
        headerTransparent: {
          backgroundColor: 'transparent',
        },
      },
    }
  )
);

export default Routes;
