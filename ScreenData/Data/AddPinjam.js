import React from 'react';
import {StyleSheet, Text, View, Button, TextInput , Picker} from 'react-native';
import { RadioButton } from 'react-native-paper'
import {dataRef} from '../Reference';

export default class AddSiswa extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tipePinjam: '',
      kodePinjam: '',
      bukuPinjam: '',
      nisPinjam: '',
      tanggalPinjam: '',
      kategori: 'pinjam',
      student: [],
      siswa: [],
      buku: []
    };
  }

    componentDidMount() {
    dataRef.on('value', (snapshot) => {
      let data = snapshot.val();
	    let student = Object.values(data);
      const siswaData = student.filter(item => item.kategori === 'siswa')
      const bukuData = student.filter(item => item.kategori === 'buku')
      this.setState({
        siswa: siswaData,
        buku: bukuData
      });
	  });
 }

  sendDataPinjam = () => {
    alert('Peminjaman Berhasil! Batas Peminjaman 7 Hari!');
    this.props.navigation.goBack();
  const newDataPinjam = {
      tipePinjam: this.state.tipePinjam.trim(),
      kodePinjam: this.state.kodePinjam.trim(),
      bukuPinjam: this.state.bukuPinjam.trim(),
      nisPinjam: this.state.nisPinjam.trim(),
		  tanggalPinjam: this.state.tanggalPinjam.trim(),
      kategori: this.state.kategori.trim(),
    };
    const db_Pinjam = dataRef.push(newDataPinjam);
    const key = db_Pinjam.key;
    dataRef.child(key).update({'key': key})
}

	render(){
    const {student, siswa, buku , tipePinjam } = this.state
    console.log(tipePinjam)
		return(
		<View style={styles.container}>
    <Text style={{ position: 'relative', right: 45, marginTop: 30 , marginBottom: 10  }}>Tipe Peminjaman :</Text>
    <View style={{ flexDirection: 'row', marginBottom: 15}}>
    <Text style={{ position: 'relative', top: 7}}>Baru</Text>
      <RadioButton
          value="Baru"
          title="baru"
          status={tipePinjam === 'Baru' ? 'checked' : 'unchecked'}
          onPress={() => { this.setState({ tipePinjam: 'Baru' }); }}
        />
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
          value={this.state.kodePinjam}
          onChangeText={kodePinjam => this.setState({ kodePinjam })}
          placeholder={'Kode Peminjaman'}
          style={styles.input}
        />
    <Picker style={styles.input}
        selectedValue={this.state.bukuPinjam}
        mode="dropdown"
        // style={{backgroundColor: 'red'}}h 
        onValueChange={(itemValue, itemIndex) => {
          console.log('ini value', itemValue)
          this.setState({bukuPinjam: itemValue})
          }}
      >
      <Picker.Item label="Kode Buku" />
      {buku.map((item, index) => {
        return(
          <Picker.Item key={index} label={item.kodebuku} value={item.kodebuku} />
        )
      })}   
      </Picker>
		<Picker style={styles.input}
        selectedValue={this.state.nisPinjam}
        mode="dropdown"
        // style={{backgroundColor: 'red'}}h 
        onValueChange={(itemValue, itemIndex) => {
          console.log('ini value', itemValue)
          this.setState({nisPinjam: itemValue})
          }}
      >
      <Picker.Item label="NIS" />
      {siswa.map((item, index) => {
        return(
          <Picker.Item key={index} label={item.nis} value={item.nis} />
        )
      })}   
      </Picker>
       <TextInput
          underlineColorAndroid={'#218c74'}
          value={this.state.tanggalPinjam}
          onChangeText={tanggalPinjam => this.setState({ tanggalPinjam })}
          placeholder={'Tanggal Peminjaman'}
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
          onPress={this.sendDataPinjam}
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