import React, { Component } from 'react';
import { View, Text, TextInput, Image, TouchableHighlight, StyleSheet } from 'react-native'

import api from "@api/feed.json";

export default class Profile extends Component {
    renderProfile(profile, index) {
        return (
            <View key={index} style={{flex: 1}}>
                <View style={styles.profile}>
                    <Image
                        style={styles.photoProfile} 
                        source={{ uri: profile.photo }} 
                    />
                    <TouchableHighlight><Text style={styles.changePhotoProfile}>Change Profile Photo</Text></TouchableHighlight>
                </View>
                <View style={styles.infoProfile}>
                    <View style={styles.labelsInfoProfile}>
                        <Text style={styles.labelInfo}>Name</Text>
                        <Text style={styles.labelInfo}>Username</Text>
                        <Text style={styles.labelInfo}>Website</Text>
                        <Text style={styles.labelInfo}>Bio</Text>
                    </View>
                    <View style={styles.inputsInfoProfile}>
                        <TextInput style={styles.inputInfo} value={profile.name} />
                        <TextInput style={styles.inputInfo} value={profile.username} />
                        <TextInput style={styles.inputInfo} value={profile.website} />
                        <TextInput style={styles.inputInfo} value={profile.bio} />
                    </View>
                </View>
                <View style={styles.tryInstaBusiness}>
                    <TouchableHighlight><Text style={styles.textTryInsta}>Try Instagram Business Tools</Text></TouchableHighlight>
                </View>
                <View style={styles.labelPrivateInfo}>
                    <Text style={styles.textPrivateInfo}>Private Information</Text>
                </View>
                <View style={styles.privateInfo}>
                    <View style={styles.labelsPrivateInfo}>
                        <Text style={styles.labelInfo}>E-mail</Text>
                        <Text style={styles.labelInfo}>Phone</Text>
                        <Text style={styles.labelInfo}>Gender</Text>
                    </View>
                    <View style={styles.inputsPrivateInfo}>
                        <TextInput style={styles.inputInfo} value={profile.email} />
                        <TextInput style={styles.inputInfo} value={profile.phone} />
                        <TextInput style={styles.inputInfo} value={profile.gender} />
                    </View>
                </View>
            </View>
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerProfile}>
                    <Text style={styles.textHeader}>Cancel</Text>
                    <Text style={styles.textBoldHeader}>Edit Profile</Text>
                    <Text style={styles.textHeader}>Done</Text>
                </View>
                {
                    api.profile.map((profile, index) => this.renderProfile(profile, index))
                }
            </View>   
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontFamily: "Lato-Regular",
    },
    headerProfile: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10 
    },
    textHeader: {
        fontSize: 18,
        color: "black"
    },
    textBoldHeader: {
        fontWeight: "bold",
        fontSize: 18,
        color: "black" 
    },
    profile: {
        borderWidth: 1,
        borderColor: "#D8D8D8",
        paddingTop: 20,
        alignItems: "center",
        flex: 4
    },
    photoProfile: {
        height: 100,
        width: 100,
        borderRadius: 50,
        marginBottom: 15
    },
    changePhotoProfile: {
        color: "#3897F0",
        fontWeight: "bold"
    },
    infoProfile: {
        flex: 5,
        flexDirection: "row",
        paddingHorizontal: 10
    },
    labelsInfoProfile: {
        flex: 2,
        flexDirection: "column"
    },
    labelInfo:{
        lineHeight: 45,
        fontWeight: "500",
        fontSize: 18,
        color: "black"
    },
    inputsInfoProfile: {
        flexDirection: "column",
        height: 45,
        flex: 4
    },
    inputInfo:{
        fontSize: 18,
        color: "black",
        borderBottomWidth: 1,
        borderColor: "#D8D8D8"
    },
    tryInstaBusiness: {
        flex: 1, 
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: "#D8D8D8",
        bottom: 12
    },
    textTryInsta:{
        fontSize: 18,
        color: "#3897F0"
    },
    labelPrivateInfo: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        bottom: 5
    },
    textPrivateInfo:{
        lineHeight: 45,
        fontWeight: "500",
        fontSize: 18,
        color: "black"
    },
    privateInfo:{
        flex: 4,
        flexDirection: "row",
        padding: 10
    },
    labelsPrivateInfo: {
        flexDirection: "column",
        flex: 2
    },
    inputsPrivateInfo: {
        flexDirection: "column",
        height: 45,
        flex: 4
    }
});
