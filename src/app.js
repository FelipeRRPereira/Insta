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

import api from "./api/feed.json";
import { IgIcon } from './components/ig-icon/ig-icon.component';

const width = Dimensions.get('window').width;

class App extends Component {
  renderConversas(conversas, index){
    return (
      <View key={index}
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          marginHorizontal: 15,
          marginTop: 15,
          position: "relative"
        }}
      >
        <View 
          style={{
            flexDirection: "column",
            position: "relative",
            alignItems: "flex-end",
            height: 75
          }}
        >
          <Image
            style={{
              width: 70,
              height: 70,
              borderRadius: 35,
              margin: 0
            }}
            source={{ uri: conversas.perfil }}
          />
          <View 
            style={{
              width: 30,
              height: 30,
              margin: 0,
              borderRadius: 15,
              backgroundColor: "green",
              bottom: 25,
              borderWidth: 4,
              borderColor: "white"
            }}
          />
        </View>
        <View
          style={{
            justifyContent: "center",
            flex: 1,
            marginHorizontal: 10
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold"
            }}
          >{conversas.autor}</Text>
          <Text>{conversas.mensagem}</Text>
        </View>
        <IgIcon name="photo-camera" style={{fontSize: 32}} />
      </View>
    )
  }

  render() {
    return (
      <View style={{ flex: 1, paddingTop: Platform.OS === 'ios' ? 20 : 0 }}>
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 15,
            height: 62,
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <IgIcon name="left-arrow" style={{ fontSize: 34, color: "black" }} />
          <Text 
          style={{
            fontSize: 26,
            color: "#000"
          }}
          >Direct</Text>
          <IgIcon name="plus" style={{ fontSize: 34, color: "black" }} />
        </View>
        <View 
          style={{
            height: 57,
            marginHorizontal: 15,
            backgroundColor: "#e8eaed",
            borderRadius: 13,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 15,
            marginBottom: 15
          }}
        >
          <IgIcon name="search" style={{ fontSize: 26, color: "#B1B1B1" }} />
          <TextInput 
            style={{
              fontWeight: "normal",
              fontSize: 26,
              lineHeight: 29,
              paddingHorizontal: 20
            }}
            onChangeText={() => null}
            inlineImageLeft='search'
            placeholder={"Search"}
            returnKeyType={"search"}
          />
        </View>
        <ScrollView
          style={styles.container}
          contentContainerStyle={{ paddingTop: Platform.OS === 'ios' ? 20 : 0 }}
        >
          {
            api.conversas.map((conversas, index) => this.renderConversas(conversas, index))
          }
        </ScrollView>
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 10,
            height: 62,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <IgIcon name="photo-camera" style={{ fontSize: 32, color: "#3A8AEC" }} />
          <Text
            style={{
              marginLeft: 10,
              fontSize: 26,
              color: "#3A8AEC"
            }}
          >Câmera</Text>
        </View>
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
    fontFamily: "Lato-Regular"
  }
});
