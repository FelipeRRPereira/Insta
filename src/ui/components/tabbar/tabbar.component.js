import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import { IgIcon } from '../ig-icon/ig-icon.component';

export class TabBar extends Component {
    render() {
        return (
            <View
                style={styles.footer}
            >
                <IgIcon name="home" style={styles.iconStyle} />
                <IgIcon name="search" style={styles.iconStyle} />
                <IgIcon name="add-square" style={styles.iconStyle} />
                <IgIcon name="heart-empty" style={styles.iconStyle} />
                <IgIcon name="user" style={styles.iconStyle} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    footer: {
        flexDirection: "row",
        padding: 10,
        height: 62,
        justifyContent: "space-between",
        alignItems: "center"
    },
    iconStyle: {
        fontSize: 30, 
        color: "black"
    }
});
