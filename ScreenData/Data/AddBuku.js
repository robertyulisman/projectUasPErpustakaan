import React from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';
import {dataRef} from '../Reference';

export default class AddBuku extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      kodebuku: '',
      judulbuku: '',
      pengarang: '',
      penerbit: '',
      tanggalregistrasi: '',
      status: 'tersedia',
      kategori: 'buku',
    };
  }

  sendDataBuku = () => {
    alert('Buku Berhasil ditambahkan kedalam Database Buku!');
     this.props.navigation.goBack();
  const newDataBuku = {
      kodebuku: this.state.kodebuku.trim(),
		  judulbuku: this.state.judulbuku.trim(),
      pengarang: this.state.pengarang.trim(),
      penerbit: this.state.penerbit.trim(),
      tanggalregistrasi: this.state.tanggalregistrasi.trim(),
      status: this.state.status.trim(),
      kategori: this.state.kategori.trim(),
    };
    const db_Buku = dataRef.push(newDataBuku);
    const key = db_Buku.key;
    dataRef.child(key).update({'key': key})
}

	render(){
		return(
		<View style={styles.container}>
      <Text style={styles.header}>TAMBAH BUKU BARU</Text>
        <TextInput
          underlineColorAndroid={'#218c74'}
          value={this.state.kodebuku}
          onChangeText={kodebuku => this.setState({ kodebuku })}
          placeholder={'Kode Buku'}
          style={styles.input}
        />
       <TextInput
          underlineColorAndroid={'#218c74'}
          value={this.state.judulbuku}
          onChangeText={judulbuku => this.setState({ judulbuku })}
          placeholder={'Judul Buku'}
          style={styles.input}
        />
        <TextInput
          underlineColorAndroid={'#218c74'}
          value={this.state.pengarang}
          onChangeText={pengarang => this.setState({ pengarang })}
          placeholder={'Pengarang'}
          style={styles.input}
        />
        <TextInput
          underlineColorAndroid={'#218c74'}
          value={this.state.penerbit}
          onChangeText={penerbit => this.setState({ penerbit })}
          placeholder={'penerbit'}
          style={styles.input}
        />
        <TextInput
          underlineColorAndroid={'#218c74'}
          value={this.state.tanggalregistrasi}
          onChangeText={tanggalregistrasi => this.setState({ tanggalregistrasi })}
          placeholder={'Tanggal Registrasi'}
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
          onPress={this.sendDataBuku}
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