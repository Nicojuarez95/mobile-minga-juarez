import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import pr from "../../assets/profile.png"

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const userData = await AsyncStorage.getItem('user');
      setUser(JSON.parse(userData));
    };
    getUser();
  }, []);

  return (
    <ImageBackground source={pr} style={styles.background}>
      <View style={styles.container}>
        {user ? (
          <View style={styles.userContainer}>
            <Text style={styles.userTitle}>USER INFORMATION</Text>
            <Image style={styles.userPhoto} source={{ uri: user.photo }} />
            <Text style={styles.userText}>{user.name}</Text>
            <Text style={styles.userText}>{user.email}</Text>
          </View>
        ) : (
          <View style={styles.loggedOutContainer}>
            <Text style={styles.loggedOutText}>You are not logged in</Text>
            <TouchableOpacity style={styles.button} onPress={() => alert('login')}>
              <Text style={styles.buttonText}>Log in</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'contain',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  userContainer: {
    alignItems: 'center',
    gap: 15
  },
  userTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  userText: {
    textAlign: 'center',
    height:30,
    width:290,
    backgroundColor: 'rgba(245,245,245,0.9)',
    fontSize: 20,
    color: '#000',
    marginBottom: 5,
    borderRadius: 15
  },
  userPhoto: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#fff',
  },
  button: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#e74c3c',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loggedOutContainer: {
    alignItems: 'center',
  },
  loggedOutText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
});