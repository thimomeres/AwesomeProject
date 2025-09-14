import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';

const Exercise3bio = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.content}>
        <View>
          <Text style={styles.title}>Hello I Am Timo 👋</Text>
        </View>
        <View>
          <Text style={styles.p1}> Welcome To my Bio Data</Text>
        </View>
        <Image style={styles.photo1} source={require('./asset/biofoto.jpeg')} />
        <View style={styles.containerText}>
          <Text style={styles.p2}> Name : Timo</Text>
          <Text style={styles.p2}> Age : 20</Text>
          <Text style={styles.p2}> Address : Indonesia</Text>
          <Text style={styles.p2}> Email :thimo@gmail.com</Text>
          <Text style={styles.p2}> Phone : 08123456789</Text>
          <Text style={styles.p2}> Instagram : @thimo_kyrie</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Exercise3bio;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#71714aff', // terlihat di seluruh layar
  },
  content: {
    flexGrow: 1, // pastikan isi bisa memanjang

    paddingVertical: 20,
  },
  containerText: {
    marginTop: 20,
    marginBottom: 40,
    backgroundColor: '#8a8a8a97',
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ebe773ff',
    marginTop: 20,
    fontFamily: 'georgia',
    backgroundColor: '#8a8a8a97',
    padding: 6,
    marginBottom: 20,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  photo1: {
    width: 200,
    height: 200,
    marginTop: 10,
    marginLeft: 85,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: '#ffffff',
  },
  p1: {
    fontSize: 15,
    color: '#fffefed9',
    textAlign: 'center',
    marginTop: 0,
    fontFamily: 'Arial',
    padding: 0,
    marginBottom: 0,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  p2: {
    fontSize: 20,
    color: '#fbfbfbff',
    textAlign: 'left',
    marginTop: 20,
    fontFamily: 'Georgia',
    padding: 1,
    marginBottom: 0,
    marginHorizontal: 30,
  },
});
