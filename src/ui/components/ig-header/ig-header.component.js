import React from 'react';
import { View, StyleSheet } from 'react-native';

import { IgIcon } from '../ig-icon/ig-icon.component';

const IgHeader = () => {
    return (
        <View
            style={styles.header}
        >
            <IgIcon name="photo-camera-empty" style={styles.iconStyle} />
            <IgIcon name="Insta-logo-black" style={{ fontSize: 140, color: "black" }} />
            <IgIcon name="paper-plane" style={styles.iconStyle} />
        </View>
    );
};

export default IgHeader;

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        paddingHorizontal: 10,
        height: 70,
        justifyContent: "space-between",
        alignItems: "center"
    },
    iconStyle: {
        fontSize: 32,
        color: "black"
    }
});