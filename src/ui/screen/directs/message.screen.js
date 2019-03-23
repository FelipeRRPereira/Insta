import React, { Component } from 'react';
import { View, Text, Image, KeyboardAvoidingView, ScrollView, StyleSheet } from 'react-native';

import api from '@api/feed.json';
import { IgIcon } from '@ui/components/ig-icon/ig-icon.component.js';

export default class Message extends Component {
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
                    <IgIcon name="photo-camera-empty" style={styles.iconsDirect} />
                    <IgIcon name="photo-camera-empty" style={styles.iconsDirect} />
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
            <View>
                <IgIcon name="left-arrow"/>
                <Text>joao316</Text>
                <IgIcon name="photo-camera-empty" />
                <IgIcon name="photo-camera-empty" />
            </View>
        )
    }
    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                {this.renderHeader()}
                <ScrollView style={styles.scrollMessage}>
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
        backgroundColor: "#F5FCFF",
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
        fontSize: 32,
        color: "black",
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
        flex: 1,
        //flexDirection: "column-reverse",
        paddingVertical: 15,
        paddingHorizontal: 20
    },
    leftMassage: {
        alignSelf: "flex-start",
        backgroundColor: "#D8D8D8",
        paddingVertical: 20,
        borderRadius: 30,
        paddingHorizontal: 30,
        marginTop: 10        
    },
    rightMassage: {
        alignSelf: "flex-end",
        backgroundColor: "#D8D8D8",
        paddingVertical: 20,
        borderRadius: 30,
        paddingHorizontal: 30,
        marginTop: 10        
    }
});
