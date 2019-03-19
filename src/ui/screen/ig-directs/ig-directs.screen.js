import React, { Component } from "react";
import {
    View,
    Text,
    TextInput,
    Image,
    StyleSheet,
    Platform,
    Dimensions,
    ScrollView
} from "react-native";

import api from "../../../api/feed.json";
import { IgIcon } from '../../components/ig-icon/ig-icon.component';

const width = Dimensions.get('window').width;

class IgDirects extends Component {
    renderHeaderDirect() {
        return (
            <View>
                <View
                    style={styles.headerDirect}
                >
                    <IgIcon name="left-arrow" style={styles.iconsDirect} />
                    <Text
                        style={styles.headerTitle}
                    >Direct</Text>
                    <IgIcon name="plus" style={styles.iconsDirect} />
                </View>
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
            </View>
        )
    }
    renderFooterDirect() {
        return (
            <View
                style={styles.footerDirect}
            >
                <IgIcon name="photo-camera" style={styles.iconFooter} />
                <Text
                    style={styles.textFooter}
                >Câmera</Text>
            </View>
        )
    }
    renderConversas(conversas, index) {
        return (
            <View key={index} style={styles.directs} >
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
            </View>
        )
    }

    render() {
        return (
            <View style={{ flex: 1, paddingTop: Platform.OS === 'ios' ? 20 : 0 }}>
                {this.renderHeaderDirect()}
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

export default IgDirects;

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
        fontSize: 34, 
        color: "black" 
    },
    search: {
        height: 57,
        marginHorizontal: 15,
        backgroundColor: "#e8eaed",
        borderRadius: 13,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 15,
        marginBottom: 15
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
