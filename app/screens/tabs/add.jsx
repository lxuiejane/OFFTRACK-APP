import { StyleSheet, Text, SafeAreaView, View, Image, TouchableOpacity, TextInput, Button } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { Picker } from '@react-native-picker/picker';

export default function AddScreen() {
  const [selectedValue, setSelectedValue] = useState('Barcelona');
  const router = useRouter();

  const [selectedImage, setSelectedImage] = useState(null);
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.title}>
        <Image source={require("../../../assets/images/books.png")} />
        <Text style={styles.text}>New diary entry</Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.smalltext}>Location of Vacation</Text>
        <Picker
          selectedValue={selectedValue}
          onValueChange={(itemValue) => setSelectedValue(itemValue)}
          style={styles.picker}
        >
          <Picker.Item color="black" label="Barcelona" value="Barcelona" />
          <Picker.Item color="black" label="New York" value="New York" />
          <Picker.Item color="black" label="Tokyo" value="Tokyo" />
          <Picker.Item color="black" label="Rome" value="Rome" />
          <Picker.Item color="black" label="Chongqing" value="Chongqing" />
        </Picker>
        <Text style={styles.chosenText}>Chosen: {selectedValue}</Text>
        <Text style={styles.smalltext}>Banner Image</Text>
        <View style={styles.inputImage}>
          <TouchableOpacity onPress={pickImage}>
            {selectedImage ? (
              <Image source={{ uri: selectedImage }} style={styles.image} />
            ) : (
              <Image source={require('../../../assets/images/plus.png')} />
            )}
          </TouchableOpacity>
        </View>
        <Text style={styles.smalltext}>Duration:</Text>
        <TextInput
          style={styles.input} />
        <Text style={styles.smalltext}>Diary Entry</Text>
        <TextInput
          style={styles.input} />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>SUBMIT</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView >
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
    textAlign: 'center',
  },
  inputContainer: {
    marginTop: 50
  },
  picker: {
    height: 45,
    color: 'black',
    backgroundColor: 'white',
    marginVertical: 10,
    justifyContent: 'center',
    overflow: 'hidden'
  },
  text: {
    fontWeight: 'bold',
    fontSize: 29,
    marginLeft: 15
  },
  smalltext: {
    fontWeight: 'bold',
    fontSize: 16
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
  },
  input: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10
  },
  inputImage: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
    backgroundColor: 'white',
    marginVertical: 5,
    borderRadius: 15
  },
  image: {
    width: '100%',
    height: 200,
    marginTop: 20,
    borderRadius: 10,
  },
})