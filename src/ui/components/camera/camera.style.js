import { StyleSheet } from 'react-native'

const camera = StyleSheet.create({
    container: {
        flex: 1
    },
    rnCamera: {
        flex: 1,
        flexDirection: "column-reverse"
    },
})

const permissionRequest = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20
    },
    title: {
        fontFamily: 'Lato-Regular',
        fontSize: 20,
        textAlign: 'center'
    },
    button: {
        padding: 10,
        marginTop: 10
    },
    text: {
        fontFamily: 'Lato-Regular',
        fontSize: 15,
        color: 'white'
    }
})

export const styles = {
    camera,
    permissionRequest,
}