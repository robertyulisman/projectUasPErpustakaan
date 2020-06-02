import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { dataRef } from '../Reference';


export default class EditSiswa extends React.Component {
  state  =  {
    key: this.props.route.params.data.key,
    kodePK: this.props.route.params.data.kodePK,
    nispengembalian: this.props.route.params.data.nispengembalian,
    kodebukupengembalian: this.props.route.params.data.kodebukupengembalian,
    namasiswapengembalian: this.props.route.params.data.namasiswapengembalian,
    tanggalP: this.props.route.params.data.tanggalP,
    tanggalK: this.props.route.params.data.tanggalK,
    denda: this.props.route.params.data.denda,
    kategori: this.props.route.params.data.kategori  
  };

  ubahData = key => {
    dataRef.child(key).update({ 
      kodePK: this.state.kodePK,
      nispengembalian: this.state.nispengembalian, 
      kodebukupengembalian: this.state.kodebukupengembalian,
      namasiswapengembalian: this.state.namasiswapengembalian, 
      tanggalP: this.state.tanggalP, 
      tanggalK: this.state.tanggalK,
      denda: this.state.denda, 
      kategori: this.state.kategori });
    alert('Pengembalian Berhasil Buku Pinjaman Telah Dikembalikan!');
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
        <Text style={styles.header}> INFORMASI PENGEMBALIAN </Text>
        <TextInput
          underlineColorAndroid={'#218c74'}
          value={this.state.nispengembalian}
          keyboardType = 'numeric'
          onChangeText={nispengembalian => this.setState({ nispengembalian })}
          placeholder={'NIS'}
          style={styles.input}
        />
        <TextInput
          underlineColorAndroid={'#218c74'}
          value={this.state.kodebukupengembalian}
          onChangeText={ kodebukupengembalian => this.setState({  kodebukupengembalian })}
          placeholder={'Kode Buku'}
          style={styles.input}
        />
        <TextInput
          underlineColorAndroid={'#218c74'}
          value={this.state.namasiswapengembalian}
          onChangeText={namasiswapengembalian => this.setState({ namasiswapengembalian })}
          placeholder={'Nama Siswa'}
          style={styles.input}
        />
        <TextInput
          underlineColorAndroid={'#218c74'}
          value={this.state.tanggalP}
          onChangeText={tanggalP => this.setState({ tanggalP })}
          placeholder={'Tanggal Peminjaman'}
          style={styles.input}
        />
        <TextInput
          underlineColorAndroid={'#218c74'}
          value={this.state.tanggalK}
          onChangeText={tanggalK => this.setState({ tanggalK })}
          style={styles.input}
        />
        <TextInput
          underlineColorAndroid={'#218c74'}
          value={this.state.denda}
          onChangeText={denda => this.setState({ denda })}
          placeholder={'Denda '}
          style={styles.input}
        />
        <View style={styles.button}>
        <View style={{ margin: 3, left:15}}>
        <Button color="#218c74"
          title="DELETE"
          onPress={() => this.hapusData(this.state.key)}
        />
        </View>
        <View style={{ margin: 3, left:36}}>
        <Button color="#218c74"
          title="UPDATE"
          onPress={() => {
            console.log('key', this.state.key )
            this.ubahData(this.state.key)}}
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
