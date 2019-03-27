import React from "react";
import {
    View,
    Text,
    TextInput,
    Image,
    StyleSheet,
    Platform,
    ScrollView,
    StatusBar,
    TouchableOpacity
} from "react-native";
import { HeaderBackButton, NavigationActions, StackActions } from 'react-navigation'

import api from "@api/feed.json";
import { IgIcon } from '@ui/components/ig-icon/ig-icon.component';

import { BaseScreen } from "@ui/screen/base";

import { MESSAGE_ROUTES } from '@ui/navigator/routes/message';
import { CAMERA_ROUTES } from '@ui/navigator/routes/camera';

export class DirectsScreen extends BaseScreen {
    static navigationOptions = ({ navigation }) => {
        const title = navigation.getParam('title')

        return {
            title: title,
            headerLeft: <HeaderBackButton onPress={navigation.getParam('_onDismiss')} />,
            headerRight: <TouchableOpacity><IgIcon name="plus" style={styles.iconsDirect} /></TouchableOpacity>
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

    screenWillFocus() {
        StatusBar.setTranslucent(false)
    }

    renderHeaderDirect() {
        return (
            <View
                style={styles.headerDirect}
            >
                <IgIcon name="left-arrow" style={styles.iconsDirect} />
                <Text
                    style={styles.headerTitle}
                >Direct</Text>
                <IgIcon name="plus" style={styles.iconsDirect} />
            </View>
        )
    }
    renderFooterDirect() {
        return (
            <TouchableOpacity
                style={styles.footerDirect}
                onPress={() => this.goToCamera()}
            >
                <IgIcon name="photo-camera" style={styles.iconFooter} />
                <Text
                    style={styles.textFooter}
                >Câmera</Text>
            </TouchableOpacity>
        )
    }

    goToMessage() {
        this.props.navigation.navigate(MESSAGE_ROUTES.MESSAGE)
    }

    goToCamera() {
        this.props.navigation.navigate(CAMERA_ROUTES.CAMERA)
    }

    renderConversas(conversas, index) {
        return (
            <TouchableOpacity 
                key={index} 
                style={styles.directs} 
                onPress={() => this.goToMessage()}
            >
                <View style={styles.perfil}
                >
                    <Image
                        style={styles.imagePerfil}
                        source={{ uri: conversas.perfil }}
                    />
                    {
                        conversas.online ? <View style={styles.onLinePerfil} /> : null
                    }
                </View>
                <View style={styles.infoPerfil}>
                    <Text style={styles.autorPerfil}>{conversas.autor}</Text>
                    <Text>{conversas.mensagem}</Text>
                </View>
                <IgIcon name="photo-camera" style={styles.cameraPerfil} />
            </TouchableOpacity>
        )
    }
    
    //{this.renderHeaderDirect()}

    renderContent() {
        return (
            <View style={{ flex: 1, paddingTop: Platform.OS === 'ios' ? 20 : 0 }}>
                <View
                    style={styles.search}
                >
                    <IgIcon name="search" style={styles.iconSearch} />
                    <TextInput
                        style={styles.inputSearch}
                        onChangeText={() => null}
                        placeholder={"Search"}
                        returnKeyType={"search"}
                    />
                </View>
                <ScrollView
                    style={styles.container}
                    contentContainerStyle={{ paddingTop: Platform.OS === 'ios' ? 20 : 0 }}
                >
                    {
                        api.conversas.map((conversas, index) => this.renderConversas(conversas, index))
                    }
                </ScrollView>
                {this.renderFooterDirect()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5FCFF",
        fontFamily: "Lato-Regular"
    },
    headerDirect: {
        flexDirection: "row",
        paddingHorizontal: 15,
        height: 62,
        justifyContent: "space-between",
        alignItems: "center"
    },
    headerTitle: {
        fontSize: 26,
        color: "#000"
    },
    iconsDirect: { 
        fontSize: 26, 
        color: "black",
        marginRight: 15
    },
    search: {
        height: 57,
        marginHorizontal: 15,
        backgroundColor: "#e8eaed",
        borderRadius: 13,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 15,
        marginVertical: 10
    },
    iconSearch: { 
        fontSize: 26, 
        color: "#B1B1B1" 
    },
    inputSearch: {
        fontWeight: "normal",
        fontSize: 26,
        lineHeight: 29,
        paddingHorizontal: 20
    },
    footerDirect: {
        flexDirection: "row",
        paddingHorizontal: 10,
        height: 62,
        justifyContent: "center",
        alignItems: "center"
    },
    iconFooter: { 
        fontSize: 32, 
        color: "#3A8AEC" 
    },
    textFooter: {
        marginLeft: 10,
        fontSize: 26,
        color: "#3A8AEC"
    },
    directs: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 15,
        marginTop: 15,
        position: "relative"
    },
    perfil: {
        flexDirection: "column",
        position: "relative",
        alignItems: "flex-end",
        height: 75
    },
    imagePerfil: {
        width: 70,
        height: 70,
        borderRadius: 35,
        margin: 0
    },
    onLinePerfil: {
        width: 30,
        height: 30,
        margin: 0,
        borderRadius: 15,
        backgroundColor: "green",
        bottom: 25,
        borderWidth: 4,
        borderColor: "white"
    },
    infoPerfil: {
        justifyContent: "center",
        flex: 1,
        marginHorizontal: 10
    },
    autorPerfil: {
        fontSize: 18,
        fontWeight: "bold"
    },
    cameraPerfil: { fontSize: 32 }
});
