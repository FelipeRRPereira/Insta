import { createStackNavigator } from 'react-navigation';

import { RootTabBar } from '../tabbar'

export const RootStack = createStackNavigator(
    {
        RootTabBar: {
            screen: RootTabBar,
            navigationOptions: {
                header: null
            }
        }
    }
)
    
    /** 
    DirectStack: {
        screen: DirectStack,
        navigationOptions: {
            header: null
        }
    }
    */
