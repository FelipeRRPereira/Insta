import React, { Component } from "react";
import { View, Text, Image, StyleSheet, Platform, Dimensions, ScrollView } from "react-native";

import api from "./api/feed.json";
import { IgIcon } from './components/ig-icon/ig-icon.component';

const width = Dimensions.get('window').width;

class App extends Component {
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
          <IgIcon name="dots" style={{ fontSize: 20, color: "black" }} />
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
              <IgIcon 
                name="heart-empty" 
                style={{ fontSize: 20, margin: 10, color: "black" }} 
              />
              :
              <IgIcon
                name="heart-full"
                style={{ fontSize: 20, margin: 10, color: "black" }}
              />
          }
          <Text>{post.curtidas} Likes</Text>
        </View>
      </View>
    )
  }

  render() {
    return (
      <View style={{ flex: 1, paddingTop: Platform.OS === 'ios' ? 20 : 0 }}>
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 10,
            height: 70,
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <IgIcon name="photo-camera-empty" style={{ fontSize: 32, color: "black" }} />
          <IgIcon name="Insta-logo-black" style={{ fontSize: 140, color: "black" }} />
          <IgIcon name="paper-plane" style={{ fontSize: 32, color: "black" }} />
        </View>
        <ScrollView
          style={styles.container}
          contentContainerStyle={{ paddingTop: Platform.OS === 'ios' ? 20 : 0 }}
        >
          {
            api.feed.map((post, index) => this.renderPost(post, index))
          }
        </ScrollView>
        <View
          style={{
            flexDirection: "row",
            padding: 10,
            height: 62,
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <IgIcon name="home" style={{ fontSize: 32, color: "black" }} />
          <IgIcon name="search" style={{ fontSize: 32, color: "black" }} />
          <IgIcon name="add-square" style={{ fontSize: 32, color: "black" }} />
          <IgIcon name="heart-empty" style={{ fontSize: 32, color: "black" }} />
          <IgIcon name="user" style={{ fontSize: 32, color: "black" }} />
        </View>
      </View>
    );
  }
}

export default App;

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
  }
});
