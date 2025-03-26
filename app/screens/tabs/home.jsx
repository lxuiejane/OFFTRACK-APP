import { StyleSheet, Text, View, FlatList, Image, ImageBackground, TouchableOpacity } from 'react-native'
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter()
  const DATA = [
    {
      id: 1,
      image: require("../../../assets/images/barcelona.png"),
      country: "🇪🇸",
      title: "Barcelona",
      date: "maart 2024 - april 2024"
    },
    {
      id: 2,
      image: require("../../../assets/images/newyork.png"),
      country: "🇺🇸",
      title: "New York",
      date: "maart 2024 - april 2024"
    },
    {
      id: 3,
      image: require("../../../assets/images/tokyo.png"),
      country: "🇯🇵",
      title: "Tokyo",
      date: "september 2023 - december 2023"
    },
    {
      id: 4,
      image: require("../../../assets/images/rome.png"),
      country: "🇮🇹",
      title: "Rome",
      date: "januari 2023 - februari 2023"
    },
    {
      id: 5,
      image: require("../../../assets/images/chongqing.png"),
      country: "🇨🇳",
      title: "Chongqing",
      date: "januari 2023 - februari 2023"
    },
  ]
  return (
    <View style={styles.container}>
      <Text style={styles.text}>🏖️  My Trips</Text>
      <View style={styles.margin}>
        <FlatList
          data={DATA}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => router.push("/screens/tabs/add")}>
              <View style={styles.fullCard}>
                <View style={styles.card}>
                  <ImageBackground source={item.image}
                    style={styles.cardMage}
                    imageStyle={styles.cardMage}>
                    <View style={styles.overlay}>
                      <View style={styles.countryInfo}>
                        <Text style={styles.textFlag}>{item.country}</Text>
                        <Text style={styles.textCard}>{item.title}</Text>
                      </View>
                    </View>
                  </ImageBackground>
                </View>
                <View style={styles.countryDate}>
                  <Image source={require("../../../assets/images/stopwatch.png")}
                    resizeMode="cover" />
                  <Text style={styles.date}>{item.date}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'white'

  },
  text: {
    position: 'absolute',
    left: 0,
    top: 0,
    marginTop: 40,
    marginLeft: 20,
    fontSize: 30,
    fontWeight: 'bold',
  },
  margin: {
    marginTop: 100,
  },
  fullCard: {
    marginVertical: 5
  },
  card: {
    backgroundColor: "white",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    padding: 4,
    marginVertical: 1,
    borderRadius: 5,
    width: 350
  },
  cardMage: {
    borderRadius: 5,
    height: 150,
  },
  overlay: {
    flex: 1,
    textAlign: 'left',
    flexDirection: 'column',
    margin: 5
  },
  countryInfo: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
  },
  textFlag: {
    backgroundColor: 'white',
    padding: 5,
    margin: 5,
    borderRadius: 5,
    fontWeight: 'bold',
    fontSize: 16
  },
  textCard: {
    backgroundColor: 'white',
    paddingVertical: 5,
    paddingHorizontal: 10,
    margin: 5,
    borderRadius: 5,
    fontWeight: 'bold',
    fontSize: 16
  },
  date: {
    color: 'grey',
    marginLeft: 7
  },
  countryDate: {
    alignItems: 'center',
    color: 'grey',
    flex: 1,
    flexDirection: 'row'
  }
})