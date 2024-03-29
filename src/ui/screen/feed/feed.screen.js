import React from "react";
import { 
    View, 
    Text, 
    Image, 
    StyleSheet, 
    Platform, 
    Dimensions, 
    ScrollView,
    StatusBar
} from "react-native";

import api from "@api/feed.json";
import { IgIcon } from "@ui/components/ig-icon/ig-icon.component";

import { BaseScreen } from "@ui/screen/base";
import { StorageService, DogService } from "@services";
import { Story } from '@ui/components/story';

const width = Dimensions.get('window').width;

export class FeedScreen extends BaseScreen {
    
    constructor(props) {
        super(props)

        this.state = {
            posts: api.feed,
            story: []
        }

        this.dogService = new DogService()
    }

    /* componentDidMount() {
        StorageService.getObject('photo', posts).then(() => {
            this.setState({ photo })
        })
    } */

    componentDidMount() {
        super.componentDidMount()
    }

    /* screenDidFocus(event) {
        this.dogService.getRandomImage10()
            .then(dog => this.setState({story: dog.message}))        
        
    } */

    screenDidFocus(event) {
        this.dogService.getRandomImage10()
            .then(dog => this.setState(
                {story: JSON.stringify(dog.message)}
            ))
            //.then(alert(this.state.story))
    }

    renderPost(post, index) {
        return (
            <View key={index}>
                <View style={styles.header}>
                    <Image
                        style={styles.imgPerfil}
                        source={{ uri: post.perfil }}
                    />
                    <View style={styles.infoPerfil}>
                        <Text>{post.autor}</Text>
                        {
                            post.local ? <Text>{post.local}</Text> : null
                        }
                    </View>
                    <IgIcon 
                        name="dots" 
                        style={styles.dots} 
                    />
                </View>
                <Image
                    style={styles.postImage}
                    source={{ uri: post.imagem }}
                />
                <View
                    style={styles.bodyLikes}
                >
                    {
                        post.liked ?
                            <IgIcon name="heart-empty" style={styles.likes} />
                            :
                            <IgIcon name="heart-full" style={styles.likes} />
                    }
                    <Text>{post.curtidas} Likes</Text>
                </View>
            </View>
        )
    }

    renderStory() {
        let arrayStory = this.state.story
        return (
            <Story story={arrayStory} />
        )
    }

    renderContent() {
        return (
            <View style={{ flex: 1, paddingTop: Platform.OS === 'ios' ? 20 : 0 }}>
                <ScrollView
                    style={styles.container}
                    contentContainerStyle={{ paddingTop: Platform.OS === 'ios' ? 20 : 0 }}
                >
                    {this.renderStory()}           
                    {
                        api.feed.map((post, index) => this.renderPost(post, index))
                    }
                </ScrollView>
            </View>
        );
    }

    screenWillFocus() {
        StatusBar.setTranslucent(true)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5FCFF"
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingRight: 10
    },
    imgPerfil: {
        width: 50,
        height: 50,
        borderRadius: 25,
        margin: 10
    },
    infoPerfil: {
        justifyContent: "center",
        flex: 1
    },
    menuHeader: {
        width: 20,
        height: 20
    },
    postImage: {
        width: width,
        height: width
    },
    bodyLikes: {
        flexDirection: "row",
        alignItems: "center",
        margin: 10
    },
    dots: {
        fontSize: 20,
        color: "black"
    },
    likes: {
        fontSize: 20,
        margin: 10,
        color: "black"
    }
});
