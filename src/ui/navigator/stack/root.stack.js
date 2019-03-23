import { createStackNavigator } from 'react-navigation';

import { RootTabBar } from '../tabbar'
import { IgHeader } from '@ui/components/ig-header/ig-header.component';

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
