import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function BotonSeccion1Hero1(props) {
  return (
    <TouchableOpacity style={styles.boton} onPress={() => console.log('Presionó el botón')}>
      <Text style={styles.texto}>{props.text || props.children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  boton: {
    backgroundColor: '#4338CA',
    padding: 10,
    width: 290,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
  },
  texto: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
  },
});