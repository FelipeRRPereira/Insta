import { createBottomTabNavigator } from 'react-navigation';

import { FeedStack } from '@ui/navigator/stack/feed';
import { DirectsStack } from '@ui/navigator/stack/directs';
import { TabBar } from './tabbar'

export const RootTabBar = createBottomTabNavigator(
    {
        /* FeedStack: {
            screen: FeedStack
        }, */
        DirectsStack: {
            screen: DirectsStack
        },        
    },
    {
        tabBarComponent: TabBar,
        tabBarOption: {
            activeTintColor: "#000",
            inactiveTintColor: "#CCC"
        },
        lazy: false,
        swipeEnable: false
    }
       
)