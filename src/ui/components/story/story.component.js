import React, { Component } from 'react'
import { View, ScrollView, Image, StyleSheet } from 'react-native';

export class Story extends Component {
     constructor(props) {
        super(props)

        /* this.state = {
            story: []
        } */
    }

    /* componentDidMount(){
        this.setState({story: this.props.story})
    } */

    renderStore(story){
        return (
            <View 
                style={styles.storyView}
            >
                <Image
                    style={styles.storyImage}
                    source={{ uri: story }}
                />
            </View>
        )
    }
    
    /* {
        story.message.map((story, index) => this.renderStore(story, index))
    } */
    render() {
        const story = this.props.story[1]
        return (
            <ScrollView
                horizontal={true}
            >
                {
                    this.renderStore(story)
                    //alert(this.props.story)
                    /* story.forEach(element => {
                        this.renderStore(element)
                    }) */
                }
                
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    storyView:{
        width: 68,
        height: 68,
        borderRadius: 34,
        borderWidth: 2,
        borderColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 7,
    },
    storyImage: {
        width: 60,
        height: 60,
        borderRadius: 30
    }
})