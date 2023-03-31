import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import dbz from "../../assets/dbz.png"

export default function CardMangas() {
    const navigation= useNavigation()

  return (
    <View style={styles.card}>
        <View style={styles.category} />
        <View style={styles.text1}>
            <View>
                <Text style={styles.title}>DBZ</Text>
                <Text >Comic</Text>
            </View>

            <Text style={styles.read} onPress={() => {
                navigation.navigate("register");
                }}>Read</Text>
        </View>

        <View style={styles.imgContainer}>
            <Image style={styles.imgManga} source={dbz}/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    marginVertical: 10,
    width:"80%",
    borderWidth:1,
    borderRadius: 6
  },
  category: {
    width: 10,
    height: '100%',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  shonen: {
    backgroundColor: '#F06C9B',
  },
  text1: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    width:"50%",
    justifyContent: "center",
    gap: 30
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  categoryName: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  read: {
    backgroundColor: '#F06C9B',
    color: '#FFF',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  imgContainer: {
    width: "50%",
    height: 150,
    borderRadius: 5,
    overflow: 'hidden',
  },
  imgManga: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});