import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { IgIcon } from '@ui/components/ig-icon/ig-icon.component';

export default class Login extends Component {
    render() {
        return (
            <LinearGradient style={styles.container} start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }} colors={['#A21391', '#CD106A', '#D82851', '#E95634', '#F8A64D']} >
                <View style={styles.headerLogin} >
                    <IgIcon name="Insta-logo-white" style={{ fontSize: 160, color: "white" }} />
                    <Text style={styles.textSingIn}>Sing in and use more features</Text>
                </View>
                <View style={styles.inputsLogin}>
                    <TextInput style={styles.input} placeholder="Email or username" />
                    <TextInput style={styles.input} placeholder="Password" />
                    <TouchableOpacity style={styles.button} >
                        <Text style={{ color: "white" }}>Sing in</Text>
                    </TouchableOpacity> 
                </View>
                <View style={styles.footerLogin}>
                    <Text style={styles.continueFace}>Forgot your login details? Get help signing in.</Text>
                    <View style={styles.lineOr}>
                        <View style={styles.linesOr}></View>
                        <Text style={styles.textOr}>OR</Text>
                        <View style={{ height: 1, flex: 1, backgroundColor: "white" }}></View>
                    </View>
                    <View style={styles.facebook}>
                        <IgIcon name="facebook" style={{ fontSize: 14, color: "white" }} />
                        <Text style={styles.textFace}>Continue with facebook</Text>
                    </View>
                    <Text style={styles.continueFace} >Don't have an account? Sing on.</Text>
                </View>
            </LinearGradient>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        fontFamily: "Lato-Regular",
        padding: 40
    },
    headerLogin: {
        flex: 3,
        alignItems: "center"
    },
    inputsLogin: {
        flex: 3      
    },
    textSingIn: {
        fontSize: 16,
        color: "white"
    },
    input: {
        backgroundColor: "#FAFAFA",
        borderRadius: 5,
        marginVertical: 13,
        paddingHorizontal: 20
    },
    button: {
        height: 40,
        borderRadius: 5,
        fontFamily: "Lato-Regular",
        backgroundColor:"#3897F0",
        alignItems: "center",
        justifyContent: "center"
    },
    footerLogin: {
        flex: 3,
        alignItems: "center"
    },
    facebook: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 20,
        flex: 1
    },
    textFace: {
        marginLeft: 10,
        fontSize: 10,
        color: "white"
    },
    continueFace: {
        marginTop: 10,
        fontSize: 10,
        color: "white"
    },
    lineOr: { 
        flexDirection: "row", 
        alignItems: "center",
        marginTop: 10
    },
    linesOr: { 
        height: 1, 
        flex: 1, 
        backgroundColor: "white" 
    },
    textOr: { 
        color: "white",
        fontSize: 12,
        paddingHorizontal: 25
    }
});
