import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { dataRef } from '../Reference';


export default class EditSiswa extends React.Component {
  state  =  {
    key: this.props.route.params.data.key,
    nis: this.props.route.params.data.nis,
    namalengkap: this.props.route.params.data.namalengkap,
    kelas: this.props.route.params.data.kelas,
    kategori: this.props.route.params.data.kategori  
  };

  ubahData = key => {
    dataRef.child(key).update({ 
      nis: this.state.nis, 
      namalengkap: this.state.namalengkap,
      kelas: this.state.kelas, 
      kategori: this.state.kategori });
    alert('Data Berhasil Di Edit!');
    this.props.navigation.goBack();
    // apa nama screen nya ?
  };

  hapusData = key => {
    dataRef.child(key).remove();
    alert('Data Berhasil Di Hapus!');
    this.props.navigation.goBack();
  };
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}> DETAIL SISWA </Text>
        <TextInput
          underlineColorAndroid={'#218c74'}
          keyboardType = 'numeric'
          value={this.state.nis}
          onChangeText={nis => this.setState({ nis })}
          style={styles.input}
        />
        <TextInput
          underlineColorAndroid={'#218c74'}
          value={this.state.namalengkap}
          onChangeText={namalengkap => this.setState({ namalengkap})}
          style={styles.input}
        />
        <TextInput
          underlineColorAndroid={'#218c74'}
          value={this.state.kelas}
          onChangeText={kelas => this.setState({ kelas})}
          style={styles.input}
        />
        <View style={styles.button}>
        <View style={{ margin: 3, left:15}}>
        <Button color="#218c74"
          title="Edit"
          onPress={() => {
            console.log('key', this.state.key )
            this.ubahData(this.state.key)}}
        />
        </View>
        <View style={{ margin: 3, left:36}}>
        <Button color="#218c74"
          title="Delete"
          onPress={() => this.hapusData(this.state.key)}
        />
        </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6fa',
    alignItems: 'center',
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
  button: {
    flexDirection: 'row',
  },
});
