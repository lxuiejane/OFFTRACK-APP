import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity, SafeAreaView, Image, Alert } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function Login() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Email validation function
    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleLogin = () => {
        if (!email.trim()) {
            Alert.alert("Email Required", "Please enter your email.");
            return;
        }
        if (!isValidEmail(email)) {
            Alert.alert("Invalid Email", "Please enter a valid email address.");
            return;
        }
        if (!password.trim()) {
            Alert.alert("Password Required", "Please enter your password.");
            return;
        }

        // If all checks pass, navigate to home
        router.replace("/screens/tabs/home");
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
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter Password"
                        placeholderTextColor="black"
                        onChangeText={setPassword}
                        value={password}
                        secureTextEntry
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