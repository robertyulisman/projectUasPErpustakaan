import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  TextInput,
  AsyncStorage
} from 'react-native';
import { useTheme } from '@react-navigation/native';


const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onSubmit = () => {
    if (email === '' && password === '') {
      alert('email dan password tidak boleh kosong');
    } else {
      AsyncStorage.setItem('email', email);
      AsyncStorage.setItem('password', password);
      alert('berhasil mendaftar, silahkan login');
      setEmail('');
      setPassword('');

      navigation.navigate('Login');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>HALAMAN DAFTAR</Text>
      <View
        style={{
          marginHorizontal: 20,
          paddingVertical: 20,
        }}>
        <Text>Email</Text>
          <TextInput
            underlineColorAndroid={'#218c74'}
            style={styles.input}
            placeholder="Email"
            onChangeText={email => setEmail(email)}
            value={email}
          />
        <Text>Password</Text>
          <TextInput
            underlineColorAndroid={'#218c74'}
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            onChangeText={password => setPassword(password)}
            value={password}
          />
      </View>
      <TouchableOpacity
        onPress={onSubmit}
        style={{
          backgroundColor: 'green',
          paddingHorizontal: 20,
          paddingVertical: 10,
          marginTop: 10,
          marginBottom: 20
        }}>
        <Text style={{ color: 'white' }}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={{ color: '#000000' }}>Kembali</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f5f6fa'
  },
  header:{
    fontSize: 20,
    fontWeight: 'bold',
    textAlign : 'center',
    marginBottom : 30
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    marginBottom: 10,
  },
});
