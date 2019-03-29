import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native';

import Permissions from 'react-native-permissions'
import { RNCamera } from 'react-native-camera';

import { styles } from './camera.style'
import { IgIcon } from '../ig-icon/ig-icon.component';
import { StorageService } from '@services';

const CAMERA_PERMITION_TYPE = 'camera'
const MICROPHONE_PERMITION_TYPE = 'microphone'

export class Camera extends Component {
    constructor(props){
        super(props)

        this.state = {
            cameraPermission: null,
            microphonePermission: null,
            images: []
        }

        this.onRef = this.onRef.bind(this)
        this.takePicture = this.takePicture.bind(this)
        this._requestPermission = this._requestPermission.bind(this)
        this._requestCameraPermission = this._requestCameraPermission.bind(this)
        this._restMicrophonePermission = this._restMicrophonePermission.bind(this)
        //this._checkPermissions = this._checkPermissions.bind(this)
        this._hasPermission = this._hasPermission.bind(this)
    }
    
    componentDidMount() {
        this._requestPermission()
    }

    _requestPermission() {
        this._requestCameraPermission().then(this._restMicrophonePermission)
    }

    _requestCameraPermission() {
        return Permissions.request(CAMERA_PERMITION_TYPE).then(resCameraPermission => {
            this.setState({ cameraPermission: resCameraPermission })
        })
    }

    _restMicrophonePermission() {
        return Permissions.request(MICROPHONE_PERMITION_TYPE).then(resMicrophonePermission => {
            this.setState({ microphonePermission: resMicrophonePermission })
        })
    }

    // Metodo para validar se a permissão
    // para usar deve ser feito o bind ====> this._checkPermissions = this._checkPermissions.bind(this)
    _checkPermissions() {
        const permitionsToCheck = [CAMERA_PERMITION_TYPE, MICROPHONE_PERMISSION_TYPE]

        Permissions.checkMultiple(permitionsToCheck).then(({ camera, microphone }) => {
            this.setState({
                cameraPermission: camera,
                microphonePermission: microphone
            })
        })
    }

    _hasPermission() {
        const { cameraPermission, microphonePermission } = this.state

        return cameraPermission === 'authorized' && microphonePermission === 'authorized'
    }

    onRef(reference) {
        this.camera = reference
    }

    async takePicture() {
        if(this.camera && this._hasPermission()) {
            const options = { base64: true, pauseAfterCapture: true }
            const data = await this.camera.takePictureAsync(options)

            this.camera.resumePreview()

            this.props.toPhoto(data.uri)
        }
    }

    renderCamera() {
        return (
            <View style={styles.camera.container}>
                <RNCamera
                    style={styles.camera.rnCamera}
                    ref={this.onRef}
                    flashMode={RNCamera.Constants.FlashMode.auto}
                    type={RNCamera.Constants.Type.back}
                >
                    <TouchableOpacity 
                        onPress={this.takePicture}
                        style={{ 
                            backgroundColor: "white",
                            height: 80,
                            width: 80,
                            borderRadius: 40,
                            margin: 10,
                            justifyContent: "center",
                            alignSelf: 'center',
                            alignItems: 'center'
                        }}>
                        <IgIcon name="photo-camera-empty" style={{ fontSize: 40, opacity: 0.1 }} />
                    </TouchableOpacity>
                </RNCamera>
            </View>
        )
    }

    renderPermissionRequest() {
        return (
            <View style={styles.permissionRequest.container}>
                <Text style={styles.permissionRequest.title}>
                    Precisamos de permissão para acessar sua câmera e seu microfone!
                </Text>
                <TouchableOpacity
                    style={styles.permissionRequest.button}
                    onPress={this._requestPermissions}
                    activeOpacity={0.8}
                >
                    <Text style={styles.permissionRequest.buttonText}>
                        PERMITIR
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }

    render() {
        return !!this._hasPermission() ? this.renderCamera() : this.renderPermissionRequest() 
    }
}