import React, { Component } from 'react';
import { View, Text, Image, ScrollView, KeyboardAvoidingView, StyleSheet } from 'react-native';

import api from '../../../api/feed.json';
import { IgIcon } from '../../components/ig-icon/ig-icon.component.js';

export default class IgMessage extends Component {
    renderMessage(message, index) {
        return (
            <View key={index} style={styles.message}>
                <Text>{message.mensagem}</Text>
            </View>
        )
    }
    render() {
        const uri = "https://img.freepik.com/free-photo/adorable-jack-russell-retriever-puppy-portrait_53876-64825.jpg?size=338&ext=jpg"
        return (
            <View style={styles.container}>
                <View style={styles.headerMessage}>
                    <IgIcon name="left-arrow" style={styles.iconsDirect} />
                    <Image 
                        style={styles.photoMessage}
                        source={{ uri: uri }} 
                    />
                    <Text>joao316</Text>
                    <IgIcon />
                    <IgIcon />
                </View>
                <ScrollView>
                    {
                        api.message.map((message, index) => this.renderMessage(message, index))
                    }
                </ScrollView>
            </View>
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
        fontSize: 34,
        color: "black"
    },
    photoMessage: {
        width: 42,
        height: 42,
        borderRadius: 21,
        marginHorizontal: 15
    },
    message: {
        flex: 1,
        flexDirection: "column"
    }
});
