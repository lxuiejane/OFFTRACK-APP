import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import { useEffect, UseEffect } from 'react';
import { useRouter } from 'expo-router'
import { useLocalSearchParams, useNavigation } from 'expo-router';
import country from "../country.js";

export default function DetailScreen() {

  const router = useRouter()
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();
  const item = country[id];

  useEffect(() => {
    if (item) {
      navigation.setOptions({ title: item.title });
    }
  }, [item]);
  if (!item) {
    return (
      <View style={styles.container}>
        <Text>City not found!</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerBox}>
        <View style={styles.country}>
          <Text style={styles.title}>{item.country}</Text>
          <Text style={styles.title}>{item.title}</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => router.replace("/screens/tabs/home")}>
          <Text style={styles.backButton}>✖</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.detailPage}>
        <View style={styles.container}>
          <View style={styles.imageBox}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.dateBox}>
              <Image source={require("../../assets/images/stopwatch.png")}
                resizeMode="cover" />
              <Text style={styles.date}>{item.date}</Text>
            </View>
          </View>
          <View style={styles.textBox}>
            <Text style={styles.dayText}>{item.one}</Text>
            <Text style={styles.diaryText}>{item.firstdiary}</Text>
            <Text style={styles.dayText}>{item.two}</Text>
            <Text style={styles.diaryText}>{item.seconddiary}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: "center",
    margin: 0
  },
  detailPage: {
    position: 'absolute',
    top: 70
  },
  headerBox: {
    position: 'absolute',
    top: 0,
    flexDirection: 'row',
    gap: 160,
    marginTop: 20,
  },
  country: {
    flexDirection: 'row',
    gap: 20,
  },
  backButton: {
    fontSize: 30,
  },
  title: {
    fontWeight: 700,
    fontSize: 30
  },
  imageBox: {
    marginVertical: 30
  },
  image: {
    height: 180,
    borderWidth: 5,
    borderColor: 'white',
    borderRadius: 5
  },
  dateBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5
  },
  date: {
    color: "#D1D1D1"
  },
  dayText: {
    marginLeft: 30,
    fontWeight: 700
  },
  diaryText: {
    marginBottom: 20,
    marginHorizontal: 30
  },
})