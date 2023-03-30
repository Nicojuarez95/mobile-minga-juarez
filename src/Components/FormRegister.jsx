import React, { useState } from 'react';
import axios from 'axios';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function FormRegister() {
  const [name, setName] = useState('');     
  const [email, setEmail] = useState('');     
  const [photo, setPhoto] = useState('');     
  const [password, setPassword] = useState('');

  async function handleSubmit() {
    let data = {
        name: name,
        email: email,
        photo: photo,
        password: password
    }
    console.log(data);
    let url = 'https://minga-host.onrender.com/auth/signup'
    try {
        await axios.post(url, data)
        console.log('creado')
    } catch (error) {
        console.log('ERROR'+error)
    }
}
  

  return (
    <View style={styles.container}>
      <View style={styles.fieldset}>
        <Text style={styles.legend}>Name</Text>
        <TextInput style={styles.input} id="name" name="name" required onChangeText={(inputText => setName(inputText))} />
        {/* <Image source={require('')} /> */}
      </View>

      <View style={styles.fieldset}>
        <Text style={styles.legend}>Email</Text>
        <TextInput style={styles.input} id="email" name="email" required onChangeText={(inputText => setEmail(inputText))}/>
        {/* <Image source={require('')} /> */}
      </View>

      <View style={styles.fieldset}>
        <Text style={styles.legend}>Photo</Text>
        <TextInput style={styles.input} id="photo" name="photo" required onChangeText={(inputText => setPhoto(inputText))}/>
        {/* <Image source={require('')} /> */}
      </View>

      <View style={styles.fieldset}>
        <Text style={styles.legend}>Password</Text>
        <TextInput style={styles.input} id="password" name="password" required onChangeText={(inputText => setPassword(inputText))}/>
        {/* <Image source={require('')} /> */}
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Sign up</Text>
      </TouchableOpacity>

      <View style={styles.divGoogle}>
        {/* <Image source={require('')} /> */}
        <TouchableOpacity style={styles.button2} onPress={() => {
            // handle Google sign up logic here
          }}>
          <Text style={styles.buttonText2}>Sign up with Google</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.parrafosForm}>
        <Text>
          Already have an account?
          <Text style={styles.parrafosFormText} onPress={() => {
              navigation.navigate("SignIn");
            }}> Log in</Text> 
        </Text>
        <Text>
          Go back to 
          <Text style={styles.parrafosFormText} onPress={() => {
              navigation.navigate("SignIn");
            }}> home page</Text> 
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 15,
    marginTop: 30,
    width: "100%",
  },
  fieldset: {
    display: "flex",
    alignItems: "flex-start",
    width: 410,
    height: 60,
    width: "90%",
    justifyContent: "flex-start",
    borderRadius: 10,
    background: "#EBEBEB",
    borderWidth: 1,
  },
  legend: {
    marginLeft: 10,
    fontSize: 12,
    lineHeight: 15,
    letterSpacing: 10,
    fontWeight: 500,
    color: "#4338CA",
  },
  input: {
    width: "95%",
    backgroundColor: "transparent",
    height: 45,
    fontSize: 15,
    padding: 11,
    borderRadius: 5,
  },
  divCheck: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    fontSize: 12,
    lineHeight: 5,
    letterSpacing: 5,
    color: "#1F1F1F",
    gap: 5,
    width: 410,
  },

  button: {
    backgroundColor: "#4338CA",
    borderRadius: 10,
    height: 60,
    marginBottom: 20,
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
  },
  
  buttonText: {
    color: "white"
  },

  button2: {
    backgroundColor: "white",
    borderRadius: 10,
    height: 60,
    margin: 15,
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
  },
  
  buttonText3: {
    color: "grey"
  },

  divGoogle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 410,
    height: 16,
    borderRadius: 10,
    background: "#EBEBEB",
    border: 1,
  },

  parrafosForm: {
    display: "flex",
    gap: 17,
    width: "100%",
    marginTop: 20,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },

  parrafosFormText:{
    color: "#4338CA",
    fontWeight: 700,
  },
});