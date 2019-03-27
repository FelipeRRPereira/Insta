import { createBottomTabNavigator } from 'react-navigation';

import { FeedStack } from '@ui/navigator/stack/feed';
import { DirectsStack } from '@ui/navigator/stack/directs';
import { MessageStack } from '@ui/navigator/stack/message';

import { TabBar } from '@ui/components/tabbar';

export const RootTabBar = createBottomTabNavigator(
    {
        FeedStack: {
            screen: FeedStack
        },
        /* MessageStack: {
            screen: MessageStack
        }, */        
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