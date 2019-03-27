import React, { Component } from 'react';
import { 
    View, 
    Text, 
    TextInput,
    Image, 
    KeyboardAvoidingView, 
    TouchableOpacity,
    ScrollView, 
    StyleSheet 
} from 'react-native';

import api from '@api/feed.json';
import { IgIcon } from '@ui/components/ig-icon/ig-icon.component.js';

import { CAMERA_ROUTES } from '@ui/navigator/routes/camera'

export class MessageScreen extends Component {
    goToCamera() {
        this.props.navigation.navigate(CAMERA_ROUTES.CAMERA)
    }
    renderHeader() {
        const uri = "https://img.freepik.com/free-photo/adorable-jack-russell-retriever-puppy-portrait_53876-64825.jpg?size=338&ext=jpg"
        return (
            <View style={styles.headerMessage}>
                <IgIcon name="left-arrow" style={styles.iconsDirect} />
                <View style={styles.infoRemetente}>
                    <Image
                        style={styles.photoMessage}
                        source={{ uri: uri }}
                    />
                    <Text>joao316</Text>
                </View>
                <View style={styles.iconsRight}>
                    <IgIcon name="info" style={styles.iconsDirect} />
                </View>
            </View>
        )
    }
    renderMessage(message, index) {
        return (
            <View
                key={index}
            >
                {
                    <Text style={message.recebido ? styles.leftMassage : styles.rightMassage}>{message.mensagem}</Text> 
                }
            </View>
        )
    }
    renderFooter() {
        return (
            <View
                style={styles.inputMensagemView}
            >
                <TouchableOpacity 
                    style={styles.fundoCamera}
                    onPress={() => this.goToCamera()}
                >
                    <IgIcon name="photo-camera" style={styles.iconCamera} />
                </TouchableOpacity>
                <TextInput
                    style={styles.inputMensagem}
                    onChangeText={() => null}
                    placeholder={"Message..."}
                />
                <IgIcon name="mic" style={styles.iconsInput} />
                <IgIcon name="image" style={styles.iconsInput} />
                <IgIcon name="add-solid" style={styles.iconsInput} />
            </View>
        )
    }
    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                {this.renderHeader()}
                <ScrollView 
                    style={styles.scrollMessage}
                >
                    {
                        api.message.map((message, index) => this.renderMessage(message, index))
                    }
                </ScrollView>
                {this.renderFooter()}
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: "#F5FCFF",
        fontFamily: "Lato-Regular"
    },
    headerMessage: {
        flexDirection: "row",
        paddingHorizontal: 15,
        height: 62,
        alignItems: "center",
        borderBottomWidth: 1,
        borderColor: "#D8D8D8"
    },
    iconsDirect: {
        fontSize: 28,
        color: "#D8D8D8",
        marginHorizontal: 2
    },
    iconsRight: {
        flexDirection: "row",
        alignItems: "flex-end"
    },
    infoRemetente: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center"
    },
    photoMessage: {
        width: 42,
        height: 42,
        borderRadius: 21,
        marginHorizontal: 15
    },
    scrollMessage: {
        flexDirection: "column-reverse",
        paddingVertical: 5,
        paddingHorizontal: 10
    },
    leftMassage: {
        alignSelf: "flex-start",
        backgroundColor: "white",
        borderColor: "#D8D8D8",
        borderWidth: 1,
        paddingVertical: 15,
        borderRadius: 30,
        paddingHorizontal: 30,
        maxWidth: 250,
        marginTop: 10,
        color: "black",
        fontFamily: "Lato-Regular" 
    },
    rightMassage: {
        alignSelf: "flex-end",
        backgroundColor: "#D8D8D8",
        paddingVertical: 15,
        borderRadius: 30,
        paddingHorizontal: 30,
        maxWidth: 250,
        marginTop: 10,
        color: "black",
        fontFamily: "Lato-Regular"       
    },
    inputMensagemView: {
        flexDirection: "row",
        alignItems: "center",
        borderColor: "#D8D8D8",
        borderWidth: 1,
        borderRadius: 30,
        paddingHorizontal: 4,
        margin: 10
    },
    fundoCamera: {
        backgroundColor: "#3A8AEC",
        borderRadius: 20,
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center"
    },
    iconCamera: {
        fontSize: 22,
        color: "white"
    },
    inputMensagem: {
        flex: 1,
        marginLeft: 15
    },
    iconsInput: { 
        fontSize: 20,
        color: "black",
        marginHorizontal: 5
    }
});
