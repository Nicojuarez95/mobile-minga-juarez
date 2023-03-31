import React from 'react';
import { View, Text, Image, TextInput } from 'react-native';
import CardMangas from '../Components/CardMangas';
import img1 from "../../assets/imagen16.png"
import img2 from "../../assets/imagen17.png"
import img3 from "../../assets/imagen18.png"
import search from "../../assets/Search.png"

export default function Mangas() {
  return (

    <View style={styles.container}>
      <View style={styles.fondoManga}>
        <Text style={styles.title}>Mangas</Text>
        <View style={styles.searchContainer}>
          <Image source={search} style={styles.searchIcon} />
          <TextInput style={styles.searchInput} placeholder='Find your manga here' />
        </View>
      </View>

      <View style={styles.sectionManga}>

        <Text style={styles.exploreMangas}>Explore</Text>
        <View style={styles.imgMangasMobile}>
          <View style={styles.imgMangasContainer}>
            <Text style={styles.textMobileManga}>Adventurers</Text>
            <Image source={img1} style={styles.imgMangas} />
          </View>
          <View style={styles.imgMangasContainer}>
            <Text style={styles.textMobileManga}>Nostalgic</Text>
            <Image source={img2} style={styles.imgMangas} />
          </View>
          <View style={styles.imgMangasContainer}>
            <Text style={styles.textMobileManga}>Popular</Text>
            <Image source={img3} style={styles.imgMangas} />
          </View>
        </View>

        <View style={styles.contChecks}>
          <View style={styles.categoryButton2} value={true} />
          <Text style={styles.categoryLabel}>shonen</Text>
          <View style={styles.categoryButton3} value={true} />
          <Text style={styles.categoryLabel}>seinen</Text>
          <View style={styles.categoryButton4} value={true} />
          <Text style={styles.categoryLabel}>shojo</Text>
          <View style={styles.categoryButton5} value={true} />
          <Text style={styles.categoryLabel}>comic</Text>
        </View>

        <View style={styles.contCartas}>
            <CardMangas/>
        </View>
        <View style={styles.contBoton}>

        </View>
      </View>

    </View>
  );
}

const styles = {
  container: {
    backgroundColor: '#FFF',
    height: "100%"
  },
  fondoManga: {
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 10,
  },
  searchContainer: {
    flex: 1,
    height: 40,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  sectionManga: {
    flex: 1,
    padding: 20,
  },
  exploreMangas: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  imgMangasMobile: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  contCartas:{
    justifyContent: "center",
    alignItems: "center"
  },
  contChecks:{
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
  }
}