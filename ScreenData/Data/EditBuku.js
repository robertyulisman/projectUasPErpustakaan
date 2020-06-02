import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { dataRef } from '../Reference';


export default class EditBuku extends React.Component {
  state  =  {
    key: this.props.route.params.data.key,
    kodebuku: this.props.route.params.data.kodebuku,
    judulbuku: this.props.route.params.data.judulbuku,
    pengarang: this.props.route.params.data.pengarang,
    penerbit: this.props.route.params.data.penerbit,
    tanggalregistrasi: this.props.route.params.data.tanggalregistrasi,
    status: this.props.route.params.data.status,
    kategori: this.props.route.params.data.kategori   
  };
  
  ubahData = key => {
    dataRef.child(key).update({ 
      kodebuku: this.state.kodebuku, 
      judulbuku: this.state.judulbuku,
      pengarang: this.state.pengarang,
      penerbit: this.state.penerbit,
      tanggalregistrasi: this.state.tanggalregistrasi,
      status: this.state.status, 
      kategori: this.state.kategori });
    alert('Data Berhasil Di Edit!');
    this.props.navigation.goBack();
  };

  hapusData = key => {
    dataRef.child(key).remove();
    alert('Data Berhasil Di Hapus!');
    this.props.navigation.goBack();
  };
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>
          {"DETAIL DATA BUKU"}
        </Text>
        <TextInput
          underlineColorAndroid={'#218c74'}
          value={this.state.kodebuku}
          onChangeText={kodebuku => this.setState({ kodebuku })}
          style={styles.input}
        />
        <TextInput
          underlineColorAndroid={'#218c74'}
          value={this.state.judulbuku}
          onChangeText={judulbuku => this.setState({ judulbuku })}
          style={styles.input}
        />
        <TextInput
          underlineColorAndroid={'#218c74'}
          value={this.state.pengarang}
          onChangeText={pengarang => this.setState({ pengarang })}
          style={styles.input}
        />
        <TextInput
          underlineColorAndroid={'#218c74'}
          value={this.state.penerbit}
          onChangeText={penerbit => this.setState({ penerbit })}
          style={styles.input}
        />
        <TextInput
          underlineColorAndroid={'#218c74'}
          value={this.state.tanggalregistrasi}
          onChangeText={tanggalregistrasi => this.setState({ tanggalregistrasi })}
          style={styles.input}
        />
        <TextInput
          underlineColorAndroid={'#218c74'}
          value={this.state.status}
          onChangeText={status => this.setState({ status })}
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
