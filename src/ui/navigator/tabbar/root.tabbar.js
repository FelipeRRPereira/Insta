import { createBottomTabNavigator } from 'react-navigation';

import { FeedStack } from '../../navigator/stack/feed'

export const RootTabBar = createBottomTabNavigator(
    {
        FeedStack: {
            screen: FeedStack
        },
    },
       
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