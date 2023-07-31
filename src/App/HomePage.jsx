import { Dimensions, Image, SafeAreaView, ScrollView, ScrollViewComponent, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "react-native/Libraries/NewAppScreen";


const { width, height } = Dimensions.get('window');

const HomePage = () => {
  const navigation = useNavigation();

  const Links = useSelector((state) => state.news.links);
  return (
    <ScrollView>
      <SafeAreaView style={styles.page}>
        <Text style={styles.title}> Today's News</Text>
        {Links.map((linkItem) => (
          <TouchableOpacity key={linkItem.id} onPress={() => navigation.navigate('NewsPage', { id: linkItem.id })}>
            <View style={styles.card} >
              <Image style={styles.cardImage} source={{ uri: `${linkItem.imageUrl}` }} />
            </View>
          </TouchableOpacity>
        ))}
      </SafeAreaView>
    </ScrollView>

  );
};

export default HomePage;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0F1C31",
  },
  title: {
    borderBottomWidth: 1,
    borderBottomColor: '#0E7CB2',
    color: '#0EA5E9',
    fontWeight: '600',
    fontSize: 30,
  },
  card: {
    width: width * 0.90,
    height: height * 0.4,
    borderRightWidth: 1,
    borderRadius: 20,
    overflow: 'hidden',
    marginVertical: 20,
  },
  cardImage: {
    width: '100%',
    height: '100%',
  }

});
