import { StyleSheet } from "react-native";
import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabsLayout() {
    return (
        <Tabs screenOptions={{ 
            headerShown: false, 
            tabBarShowLabel: false,
        }}>
            <Tabs.Screen name="home" options={{
                tabBarIcon: () => (
                    <Ionicons name="home-sharp" size={30} color="black" />),
            }}
            />
            <Tabs.Screen name="search" options={{
                tabBarIcon: () => (
                    <Ionicons name="search" size={30} color="black" />
                )
            }} />
            <Tabs.Screen name="add" options={{
                tabBarIcon: () => (
                    <Ionicons name="add" size={30} color="black" />
                )
            }} />
            <Tabs.Screen name="notifications" options={{
                tabBarIcon: () => (
                    <Ionicons name="alert" size={30} color="black" />
                )
            }} />
            <Tabs.Screen name="profile" options={{
                tabBarIcon: () => (
                    <Ionicons name="person" size={30} color="black" />
                )
            }} />
        </Tabs>
    )
}

const styles = StyleSheet.create({

});
