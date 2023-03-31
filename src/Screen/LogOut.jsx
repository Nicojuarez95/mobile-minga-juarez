import React, { useState } from 'react';
import { Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { useFocusEffect } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import bottomTabsActions from '../Store/Perfil/action';  
const { reloadBottomTabs } = bottomTabsActions

export default function LogOut() {
  const navigation = useNavigation();
  const dispatch = useDispatch()
  let state = useSelector(store => store.bottomTabsReducer.state)
  let [token, setToken] = useState('')

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

  let headers = { headers: { 'Authorization': `Bearer ${token}` } }


  const handleLogOut = async () => {
    let url = 'https://minga-host.onrender.com/auth/signout'
    try {
      await axios.post(url," ",headers)

      await AsyncStorage.removeItem('token');
      await AsyncStorage.removeItem('user');
      
      // Obtener los valores de token y user almacenados en AsyncStorage
      const storedToken = await AsyncStorage.getItem('token');
      const storedUser = await AsyncStorage.getItem('user');
      console.log('Token almacenado:', storedToken);
      console.log('Usuario almacenado:', storedUser);
  
      dispatch(reloadBottomTabs({ state: false })); // Actualiza el estado de la aplicación de manera síncrona
      navigation.navigate('Home');
      
    } catch (e) {
      console.log(e);
    }
  };

  return <Button title="Log Out" onPress={handleLogOut} />;
}