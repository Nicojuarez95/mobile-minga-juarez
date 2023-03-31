import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSelector } from "react-redux";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Home from "../Screen/Home";
import ContFormRegister from "../Screen/ContFormRegister";
import Mangas from "../Screen/Mangas";
import Perfil from "../Screen/Perfil";
import LogOut from "../Screen/LogOut";
import { FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function BottomTabsNavigation() {
  let state = useSelector((store) => store.bottomTabsReducer.state);
  let [token, setToken] = useState("");

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
    <Tab.Navigator
      tabBarOptions={{
        style: {
          backgroundColor: '#FFF',
          borderTopColor: 'transparent',
          height: 55,
          paddingBottom: 5,
          paddingTop: 5,
          elevation: 0,
          shadowOpacity: 0,
        },
        labelStyle: {
          fontSize: 10,
          marginBottom: 5,
        },
        activeTintColor: '#EB5757',
        inactiveTintColor: '#9B9B9B',
        tabStyle: {
          paddingTop: 0,
          paddingBottom: 0,
        },
        
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={24} color={color} />
          ),
        }}
      />
      {token ? (
        <>
          <Tab.Screen
            name="Mangas"
            component={Mangas}
            options={{
              headerShown: false,
              tabBarLabel: 'Mangas',
              tabBarIcon: ({ color }) => (
                <FontAwesome name="book" size={24} color={color} />
              ),
            }}
          />
          <Tab.Screen name="Perfil" options={{
            headerShown: false,
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color }) => (
              <FontAwesome name="user" size={24} color={color} />
            ),
          }}>
            {() => (
              <>
                <Perfil />
                <LogOut />
              </>
            )}
          </Tab.Screen>
        </>
      ) : (
        <Tab.Screen
          name="register"
          component={ContFormRegister}
          options={{
            headerShown: false,
            tabBarLabel: 'Register',
            tabBarIcon: ({ color }) => (
              <FontAwesome name="user-circle-o" size={24} color={color} />
            ),
          }}
        />
      )}
    </Tab.Navigator>
  );
}

export default BottomTabsNavigation;