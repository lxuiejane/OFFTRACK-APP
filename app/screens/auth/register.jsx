import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity, SafeAreaView, Image, Alert } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    async function registerUser(email, password) {
        const userProfile = { email, password };
        await AsyncStorage.setItem("userProfile", JSON.stringify(userProfile));
    }
    const handleRegister = async () => {
        if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
            Alert.alert("Error", "Please fill in all fields.");
            return;
        }
        if (password !== confirmPassword) {
            Alert.alert("Error", "Passwords do not match.");
            return;
        }
        else {
            const result = await registerUser(email, password);
            Alert.alert("Success", "Registered successfully");
            router.push("/screens/auth/login");
        }
    };

    return (
        <ImageBackground
            style={styles.background}
            source={require("../../../assets/images/registerbg.png")}
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
                    <TextInput
                        style={styles.textInput}
                        placeholder="Confirm Password"
                        placeholderTextColor="black"
                        onChangeText={setConfirmPassword}
                        value={confirmPassword}
                        secureTextEntry={true}
                    />
                    <TouchableOpacity style={styles.button} onPress={handleRegister}>
                        <Text style={styles.buttonText}>CREATE ACCOUNT</Text>
                    </TouchableOpacity>

                    <Text onPress={() => router.push("/screens/auth/login")} style={styles.text}>
                        Already have an account? Sign in
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
        fontWeight: 'bold'
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