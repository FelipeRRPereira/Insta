import React, { Fragment } from "react";
import { View } from 'react-native';

import { BaseScreen } from '@ui/screen/base'

import { Camera } from '@ui/components/camera';

export class CameraScreen extends BaseScreen {
    render() {
        return (
            <Fragment>
                <Camera />
            </Fragment>
        )
    }
}