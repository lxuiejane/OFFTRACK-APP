import { StyleSheet, Text, SafeAreaView, Image, View, FlatList } from 'react-native'
import React from 'react'
import posts from '../../posts.js';

export default function NotificationScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>🔔 Notifications</Text>
      <View style={styles.cardsContainer}>
        <FlatList
          data={posts}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.fullCard}>
              <View style={styles.imageShadowWrapper}>
                <Image source={item.image} style={styles.cardMage} />
              </View>
              <View style={styles.card}>
                <Text style={styles.textCard}>{item.name} posted:</Text>
                <Text style={styles.messageCard}>{item.message}</Text>
              </View>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    position: 'absolute',
    left: 20,
    top: 60,
    fontWeight: '600',
    fontSize: 30,
  },
  fullCard: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingRight: 6,
    paddingVertical: 10,
    paddingLeft: 10,
    borderRadius: 7,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    margin: 5
  },
  card: {
    marginTop: 5,
    flexShrink: 1
  },
  textCard: {
    fontWeight: '700',
  },
  messageCard: {
    color: '#A5A5A5'
  },
  cardMage: {
    height: 70,
    width: 70,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 4,
  },
  imageShadowWrapper: {
    marginRight: 10,
    borderRadius: 100,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  cardsContainer: {
    marginTop: 20,
    width: '90%'
  }
});
