import { createStackNavigator } from 'react-navigation';

import { RootTabBar } from '../tabbar'
import { DirectsStack } from '@ui/navigator/stack/directs'
import { CameraStack } from '@ui/navigator/stack/camera'
import { MessageStack } from '@ui/navigator/stack/message'

export const RootStack = createStackNavigator(
    {
        RootTabBar: {
            screen: RootTabBar,
            navigationOptions: {
                header: null
            }
        },
        DirectsStack: {
            screen: DirectsStack,
            navigationOptions: {
                header: null
            }
        },
        CameraStack: {
            screen: CameraStack,
            navigationOptions: {
                header: null
            }
        },
        MessageStack: {
            screen: MessageStack,
            navigationOptions: {
                header: null
            }
        }
    },
    {
        mode: "model"
    }
)
