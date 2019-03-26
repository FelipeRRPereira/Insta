import React, { Component, Fragment } from 'react';
import { 
    View, 
    StyleSheet, 
    TouchableOpacity,
    StatusBar,
    Platform
} from 'react-native';

import { IgIcon } from '../ig-icon/ig-icon.component';
import { DIRECTS_ROUTES } from '@ui/navigator/routes/directs';
import { CAMERA_ROUTES } from '@ui/navigator/routes/camera'

export class NavBar extends Component {
    goToCamera() {
        this.props.navigation.navigate(CAMERA_ROUTES.CAMERA)
    }

    goToDirects(){
        this.props.navigation.navigate(DIRECTS_ROUTES.DIRECTS, {
            title: 'Direct'
        })
    }

    render() {
        return (
            <Fragment>
                <StatusBar barStyle="dark-content" backgroundColor={'transparent'} />
                <View
                    style={styles.header}
                >   
                    <TouchableOpacity
                        id="camera"
                        onPress={() => this.goToCamera()}
                    >
                        <IgIcon name="photo-camera-empty" style={styles.iconStyle} />
                    </TouchableOpacity>
                    
                    <IgIcon name="Insta-logo-black" style={{ fontSize: 140, color: "black" }} />
                    
                    <TouchableOpacity
                        id="direct"
                        onPress={() => this.goToDirects()}
                    >
                        <IgIcon name="paper-plane" style={styles.iconStyle} />
                    </TouchableOpacity>
                </View>    
            </Fragment>
        );
    }
};

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        paddingHorizontal: 10,
        ...Platform.select({
            ios: {
                height: 90,
                paddingTop: 40,
            },
            android: {
                height: 82,
                paddingTop: 20,
            }
        }),
        height: 70,
        justifyContent: "space-between",
        alignItems: "center"
    },
    iconStyle: {
        fontSize: 32,
        color: "black"
    }
});