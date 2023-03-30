import React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native';

import bg from '../../assets/fondoHome.png';
import TituloSeccion1Hero1 from '../Components/TituloSeccion1Hero';
import Parrafo1Seccion1Hero1 from '../Components/Parrafo1Seccion1Hero';
import BotonSeccion1Hero1 from '../Components/BotonSeccion1Hero';
import ContFormRegister from './ContFormRegister';

export default function Seccion1Hero1() {
  return (
    <ImageBackground source={bg} style={styles.backgroundImage}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.seccion}>
          <View style={styles.texto}>
            <TituloSeccion1Hero1 text='Your favorite comic book store ✨' />
            <Parrafo1Seccion1Hero1 text='Explore our catalog to live the adventure of your life' />
            <BotonSeccion1Hero1 text="Let's go!" />
          </View>
        </View>
        <View style={styles.seccion2}>
          <ContFormRegister />
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    height:"200%"
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
  },
  texto: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 35,
  },
});