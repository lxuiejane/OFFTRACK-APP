import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity, SafeAreaView, Image, Alert } from "react-native";
import { useRouter } from "expo-router";
import { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login() {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function loginUser(email, password) {
        const storedProfile = await AsyncStorage.getItem("userProfile");
        if (!storedProfile) {
            throw new Error("No local user found. Please register first.");
        }
        const localUser = JSON.parse(storedProfile);
        if (localUser.email === email && localUser.password === password) {
            return { message: "Logged in." };

        } else {
            throw new Error("Invalid Credentials");
        }
    }

    const handleLogin = async () => {
        if (!email.trim() || !password.trim()) {
            Alert.alert("Error", "Please fill in all fields.");
            return;
        }
        try {
            const result = await loginUser(email, password);
            Alert.alert("Success", result.message);
            router.push("/screens/tabs/home");
        } catch (error) {
            Alert.alert("Login Error", error.message);
        }
    };

    return (
        <ImageBackground
            style={styles.background}
            source={require("../../../assets/images/loginbg.png")}
            resizeMode="cover"
        >
            <SafeAreaView style={styles.main}>
                <View style={styles.container}>
                    <View style={styles.offTrack}>
                        <Image source={require("../../../assets/images/compass.png")} resizeMode="cover" />
                        <Text style={styles.title}>OffTrack</Text>
                    </View>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter E-mail Address"
                        placeholderTextColor="black"
                        onChangeText={setEmail}
                        value={email}
                        autoCapitalize="none"
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter Password"
                        placeholderTextColor="black"
                        onChangeText={setPassword}
                        value={password}
                        secureTextEntry={true}
                    />
                    <TouchableOpacity style={styles.button} onPress={handleLogin}>
                        <Text style={styles.buttonText}>LOGIN</Text>
                    </TouchableOpacity>

                    <Text onPress={() => router.push("/screens/auth/register")} style={styles.text}>
                        Don't have an account? Sign up
                    </Text>
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
}


const styles = StyleSheet.create({
    background: StyleSheet.absoluteFillObject,
    main: {
        flex: 1,
    },
    offTrack: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 30,
        marginLeft: 20
    },
    title: {
        flex: 1,
        fontWeight: 'bold',
        fontSize: 30,
        marginLeft: 10,
    },
    text: {
        marginTop: 30,
        fontWeight: 'bold',
        color: 'white'
    },
    textInput: {
        backgroundColor: 'rgba(255, 255, 255, 0.83)',
        borderRadius: 100,
        width: 350,
        padding: 15,
        margin: 5,
        fontWeight: 'bold',
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        backgroundColor: "black",
        padding: 15,
        width: 350,
        borderRadius: 100,
        marginVertical: 5,
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    }
})