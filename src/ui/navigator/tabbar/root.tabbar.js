import { createBottomTabNavigator } from 'react-navigation';

import { FeedStack } from '../../navigator/stack/feed';
import { TabBar } from './tabbar'

export const RootTabBar = createBottomTabNavigator(
    {
        FeedStack: {
            screen: FeedStack
        },
    },
    {
        tabBarComponent: TabBar,
        tabBarOption: {
            activeTintColor: "#000",
            inactiveTintColor: "#CCC"
        },
        lazy: true,
        swipeEnable: false
    }
       
)

/** tabBarComponent - procurar
 * 
 * {
        tabBarComponent: TabBar,
        tabBarOption: {
            activeTintColor: "#000",
            inactiveTintColor: "#CCC"
        },
        lazy: true,
        swipeEnable
    }
    
 */