import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Picker } from 'react-native';
import { RadioButton } from 'react-native-paper'
import { dataRef } from '../Reference';


export default class EditSiswa extends React.Component {
  state  =  {
    key: this.props.route.params.data.key,
    tipePinjam: this.props.route.params.data.tipePinjam,
    kodePinjam: this.props.route.params.data.kodePinjam,
    bukuPinjam: this.props.route.params.data.bukuPinjam,
    tanggalPinjam: this.props.route.params.data.tanggalPinjam,
    kategori: this.props.route.params.data.kategori  
  };

  ubahData = key => {
    dataRef.child(key).update({ 
      tipePinjam: this.state.tipePinjam, 
      kodePinjam: this.state.kodePinjam,
      bukuPinjam: this.state.bukuPinjam, 
      tanggalPinjam: this.state.tanggalPinjam,  
      kategori: this.state.kategori });
    alert('Data edited successfully!');
    this.props.navigation.goBack();
    // apa nama screen nya ?
  };

  hapusData = key => {
    dataRef.child(key).remove();
    alert('Data removed successfully!');
    this.props.navigation.goBack();
  };

    componentDidMount() {
    dataRef.on('value', snapshot => {
      let data = snapshot.val();
      let student = Object.values(data);
      const pinjamData = student.filter(item => item.kategori === 'pinjam');
      this.setState({
        pinjam: pinjamData,
      });
    });
  }
  
  render() {
    const { pinjam, tipePinjam } = this.state
    return (
      <View style={styles.container}>
      <Text style={styles.header}>PERPANJANG PINJAM</Text>
    <View style={{ flexDirection: 'row'}}>
        <Text style={{ position: 'relative', top: 7 , marginLeft: 25}}>Perpanjang</Text>
      <RadioButton
          value="Perpanjang"
          title="Perpanjang"
          status={tipePinjam === 'Perpanjang' ? 'checked' : 'unchecked'}
          onPress={() => { this.setState({ tipePinjam: 'Perpanjang' }); }}
        />
        </View>
       <TextInput
          underlineColorAndroid={'#218c74'}
          value={this.state.tanggalPinjam}
          onChangeText={tanggalPinjam => this.setState({ tanggalPinjam })}
          placeholder={'Tanggal Peminjaman'}
          style={styles.input}
        />
        <View style={styles.button}>
        <View style={{ margin: 3, left:15}}>
        <Button color="#218c74"
          title="Update"
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
