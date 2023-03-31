import React, { useState, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSelector } from "react-redux";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Home from "../Screen/Home";
import ContFormRegister from "../Screen/ContFormRegister";
import Mangas from "../Screen/Mangas";
import Perfil from "../Screen/Perfil";
import LogOut from "../Screen/LogOut";

const Tab = createBottomTabNavigator();

function BottomTabsNavigation() {
  let state = useSelector((store) => store.bottomTabsReducer.state);
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

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="register"
        component={ContFormRegister}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Mangas"
        component={Mangas}
        options={{ headerShown: false }}
      />

      {token ? (
        <Tab.Screen name="Perfil" options={{ headerShown: false }}>
          {() => (
            <>
              <Perfil />
              <LogOut/>
            </>
          )}
        </Tab.Screen>
      ): <></>}
      
    </Tab.Navigator>
  );
}

export default BottomTabsNavigation;
