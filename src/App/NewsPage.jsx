import { Dimensions, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
const { width, height } = Dimensions.get('window');

const NewsPage = ({ navigation, route }) => {
  const { id } = route.params
  const Links = useSelector((state) => state.news.links);
  const allData = useSelector(state => state.news.data)
  const currentData = allData.filter((data) => data.u_id == id)[0]
  return (
    <SafeAreaView style={styles.page}>
      <Text style={styles.title}>{currentData.title} </Text>
      <Image source={{ uri: Links[id - 1].imageUrl }} style={styles.Image} />
      <Text style={styles.desc}>{currentData.description} </Text>
      <View style={styles.footer}>
        <Text style={styles.author}>
          {currentData.author}
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default NewsPage

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'start',
    backgroundColor: "#0F1C31",
  },
  title: {
    borderBottomWidth: 1,
    borderBottomColor: '#0E7CB2',
    color: '#0EA5E9',
    fontWeight: '600',
    fontSize: 32,
    textAlign: 'center',
    padding: 10,
    marginTop: 30,
  },
  Image: {
    width: width * 0.98,
    height: height * 0.45,
    marginVertical: 15,
    padding: 10,
    borderRadius: 20,
  },
  desc: {
    marginHorizontal: 10,
    padding: 5,
    fontWeight: '400',
    fontSize: 18,
    color: 'white'
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    marginTop: 25,
  },
  author: {
    fontSize: 16,
    fontWeight: '300',
    color: '#7DD3FC'
  }
})