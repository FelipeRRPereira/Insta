import React, { Component } from 'react';
import { View, Text,  Txt, Image } from 'react-native'

class IgProfile extends Component {
    render() {
        return (
            <View>
                <View>
                    <Text>Cancel</Text>
                    <Text>Edit Profile</Text>
                    <Text>Done</Text>
                </View>
                <View>
                    <Image />
                    <Text>Change Profile Photo</Text>
                </View>
                <View>
                    <View>
                        <Text></Text>
                    </View>
                </View>
            </View>   
        )
    }
}

export default IgProfile;