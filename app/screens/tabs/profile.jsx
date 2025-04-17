import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react'

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.images}>
        <Image style={styles.banner} source={require("../../../assets/images/greyimage.jpg")}
          resizeMode="cover" />
        <Image style={styles.profile} source={require("../../../assets/images/avatar.jpg")} />
      </View>
      <View style={styles.profileContainer}>
        <View style={styles.textProfile}>
          <View style={styles.text}>
            <Text style={styles.bold}>Name here</Text>
            <Image source={require("../../../assets/images/pencil-square.png")}/>
            </View>
            <Text sytle={styles.pronouns}>pronounces here</Text>
        </View>
        <View style={styles.restProfile}>
          <Text style={styles.description}>
            Lorem ipsum dolor.
          </Text>
          <View style={styles.favoritesContainer}>
            <Text style={styles.bold}>❤ My Favorites</Text>
            <View style={styles.countryFav}>
              <Image />
              <Image />
              <Image />
              <Image />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  profileContainer: {
    flex: 1,
    flexDirection: 'column'
  },
  banner: {
    position: 'absolute',
    top: 0,
    width: 395,
    height: 230,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  profile: {
    position: 'absolute',
    left: 20,
    marginTop: 160,
    height: 125,
    width: 125,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 6
  },
  textProfile: {
    marginLeft: 20,
    marginTop: 300
  },
  text: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center'
  },
  bold: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  pronouns: {
    color: 'grey'
  },
  restProfile: {
    marginTop: 20,
    marginLeft: 20,
  },
  description: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 12,
    fontWeight: 500,
    width: 350,
    marginBottom: 30
  }
})