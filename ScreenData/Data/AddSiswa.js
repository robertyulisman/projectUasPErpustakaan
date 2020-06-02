import React from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';
import {dataRef} from '../Reference';

export default class AddSiswa extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nis: '',
      namalengkap: '',
      kelas: '',
      kategori: 'siswa',
    };
  }

  sendDataSiswa = () => {
    alert('Siswa Berhasil Di Tambahkan!');
    this.props.navigation.goBack();
  const newDataSiswa = {
      nis: this.state.nis.trim(),
		  namalengkap: this.state.namalengkap.trim(),
      kelas: this.state.kelas.trim(),
      kategori: this.state.kategori.trim(),
    };
    const db_Siswa = dataRef.push(newDataSiswa);
    const key = db_Siswa.key;
    dataRef.child(key).update({'key': key})
}

	render(){
		return(
		<View style={styles.container}>
      <Text style={styles.header}>TAMBAH SISWA BARU</Text>
        <TextInput
          underlineColorAndroid={'#218c74'}
          value={this.state.nis}
          keyboardType = 'numeric'
          onChangeText={nis => this.setState({ nis })}
          placeholder={'NIS'}
          style={styles.input}
        />
       <TextInput 
          underlineColorAndroid={'#218c74'}
          value={this.state.namalengkap}
          onChangeText={namalengkap => this.setState({ namalengkap })}
          placeholder={'Nama Lengkap'}
          style={styles.input}
        />
        <TextInput
          underlineColorAndroid={'#218c74'}
          value={this.state.kelas}
          onChangeText={kelas => this.setState({ kelas })}
          placeholder={'Kelas'}
          style={styles.input}
        />
        <View style={styles.button}>
        <View style={{ margin: 3, left:10}}>
        <Button color="#218c74"
          title="Cancel"
          onPress={this.props.navigation.goBack}
        />
        </View>
        <View style={{ margin: 3, left:30}}>
        <Button color="#218c74"
          title="Submit"
          onPress={this.sendDataSiswa}
        />
         </View>
        </View>
		</View>
		);
	}
}

const styles = StyleSheet.create({
	container:{
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