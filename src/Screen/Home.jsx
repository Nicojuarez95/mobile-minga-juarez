import React, { useState } from "react";
import { View, StyleSheet, ImageBackground, ScrollView, Text } from 'react-native';
import bg from '../../assets/home.png';
import { useFocusEffect } from "@react-navigation/native";
import { useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import TituloSeccion1Hero1 from '../Components/TituloSeccion1Hero';
import Parrafo1Seccion1Hero1 from '../Components/Parrafo1Seccion1Hero';
import BotonSeccion1Hero1 from '../Components/BotonSeccion1Hero';
import FormLogin from '../Components/FormLogin';

export default function Seccion1Hero1() {
  let [token, setToken] = useState("");
  let state = useSelector((store) => store.bottomTabsReducer.state);

  useFocusEffect(
    React.useCallback(() => {
      async function getData() {
        try {
          const value = await AsyncStorage.getItem("token");
          setToken(value);
        } catch (error) {
          console.log(error);
        }
      }
      getData();
    }, [state])
  );

  return (
    <ImageBackground source={bg} style={styles.backgroundImage}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.seccion}>
          <View style={styles.texto}>
            <TituloSeccion1Hero1 text='Best Manga Reader' />
            <Parrafo1Seccion1Hero1 text='Find the perfect manga for you' />
            <BotonSeccion1Hero1 text="Read" />
          </View>
        </View>
        {token ? (<>
          <View style={styles.seccion3}>
        <Text style={styles.text}>Welcome to our manga reading app! Dive into the exciting world of manga with our wide selection of popular and classic titles. Whether you're looking for action, romance, comedy, or any other genre, we've got something for everyone. With an intuitive and easy-to-use interface, it's never been easier to read your favorite manga anywhere, anytime!</Text>
        </View>
        </>) : (<ScrollView style={styles.seccion2}>
          <FormLogin />
        </ScrollView>)}
        
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    minHeight:"200%"
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  seccion: {
    height: "50%",
    padding: 20,
    justifyContent: 'center',
  },
  seccion2: {
    height: "100%",
    backgroundColor: "white"
  },
  texto: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 35,
  },
  seccion3: {
    height: "50%",
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "white",
    fontSize: 28,
    marginTop: 20,
    padding: 30,
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    letterSpacing: 1,
    lineHeight: 38,
  },
});