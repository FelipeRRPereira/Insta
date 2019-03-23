import { createStackNavigator } from 'react-navigation';

import { CameraRoutes } from '@ui/navigator/routes/camera'

export const CameraStack = createStackNavigator(CameraRoutes, {
    headerMode: 'none',
    mode: 'modal'
})