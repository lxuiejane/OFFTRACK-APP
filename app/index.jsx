// rnfs

import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity, SafeAreaView, Image } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function Register() {

    const router = useRouter()

    return (
        <ImageBackground
            style={styles.background}
            source={require("../assets/images/bg.jpg")}
            resizeMode="cover"
        >
            <SafeAreaView style={styles.main}>
                <View style={styles.offTrack}>
                    <Image source={require("../assets/images/compass.png")}
                        resizeMode="cover" />
                    <Text style={styles.title}>OffTrack</Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.text}> {`Explore a \n new world \n with us`}</Text>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button} onPress={() => router.push("/screens/auth/register")}>
                            <Text style={styles.buttonText}>REGISTER</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button} onPress={() => router.push("/screens/auth/login")}>
                            <Text style={styles.buttonText}>LOG IN</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: StyleSheet.absoluteFillObject,
    main: {
        flex: 1,
        alignItems: 'center'
    },
    offTrack: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 40,
        marginLeft: 20
    },
    title: {
        flex: 1,
        fontWeight: 'bold',
        fontSize: 30,
        marginLeft: 10,
    },
    text: {
        color: 'white',
        fontSize: 50,
        fontWeight: 'bold',
        marginTop: 400,
    },
    container: {
        flex: 1,
        position: 'absolute',
    },
    buttonContainer: {
        marginTop: 100
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