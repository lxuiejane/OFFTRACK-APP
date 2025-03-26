import { StyleSheet, Text, SafeAreaView, View, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'

export default function AddScreen() {
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.title}>
        <Image source={require("../../../assets/images/books.png")} />
        <Text style={styles.text}>New diary entry</Text>
      </View>

      <View>
        <Text>Location of Vacation</Text>
        <TextInput
          style={styles.input} />
        <Text>Banner Image</Text>
        <Text>Duration</Text>
        <TextInput />
        <Text>Diary Entry</Text>
        <TextInput />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>SUBMIT</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    top: 20,
    left: 20,
    textAlign: 'center'
  },
  text: {
    fontWeight: 'bold',
    fontSize: 29,
    marginLeft: 15
  },
  button: {
    backgroundColor: "black",
    padding: 15,
    width: 350,
    borderRadius: 10,
    marginVertical: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  }
})