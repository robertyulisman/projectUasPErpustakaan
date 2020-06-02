import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { RadioButton } from 'react-native-paper'

const HomeScreen = ({navigation}) => {

    return (
      <View style={styles.container}>
      <Text style={styles.textprofil}>Hello User !</Text>
      <Text style={styles.textprofil}>Selamat Datang</Text>
      <Image style={styles.logo} source={require('./profil.png')} />
      <Text style={styles.textdesk}>Sistem Informasi</Text>
      <Text style={styles.textdesk}>Perpustakaan</Text>
      </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: '#FFFFFF'
  },
  logo: {
    marginTop: 20,
    height: 128,
    width: 170,
  },
  textprofil: {
    fontWeight: 'bold',
    fontSize: 20
  },
  textdesk: {
    color: '#dcdde1'
  }
});
