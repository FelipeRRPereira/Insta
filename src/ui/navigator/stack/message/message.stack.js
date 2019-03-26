import { createStackNavigator } from 'react-navigation';

import { MessageRoutes } from '@ui/navigator/routes/message'

export const MessageStack = createStackNavigator(MessageRoutes, {
    headerMode: 'none',
    mode: 'modal'
})