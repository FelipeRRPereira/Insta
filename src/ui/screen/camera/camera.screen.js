import React, { Fragment } from "react";
import { View } from 'react-native';

import { BaseScreen } from '@ui/screen/base'

import { Camera } from '@ui/components/camera';

export class CameraScreen extends BaseScreen {
    static navigationOptions = ({ navigation }) => {
        const title = navigation.getParam('title')

        return {
            headerRight: <HeaderBackButton onPress={navigation.getParam('_onDismiss')} />
        }
    }

    constructor(props) {
        super(props)

        this._onDismiss = this._onDismiss.bind(this)
    }

    _onDismiss() {
        //this.props.navigation.pop()

        const backAction = NavigationActions.back()
        this.props.navigation.dispatch(backAction)
    }

    componentDidMount() {
        super.componentDidMount()

        this.props.navigation.setParams({
            _onDismiss: this._onDismiss
        })
    }
    
    _addToStorege = (photo) => {
        StorageService.setObject('photo', photo).then(
            () => {
                this._onDismiss()
            }
        )
    }

    render() {
        return (
            <Fragment>
                <Camera toPhoto={this._addToStorege}/>
            </Fragment>
        )
    }
}