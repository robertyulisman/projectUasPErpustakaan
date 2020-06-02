import React from 'react';
import {StyleSheet, Text, View, Button, TextInput , Picker} from 'react-native';
import { RadioButton } from 'react-native-paper'
import {dataRef} from '../Reference';

export default class AddSiswa extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      kodePK: '',
      nispengembalian: '',
      kodebukupengembalian: '',
      namasiswapengembalian: '',
      tanggalP: '',
      tanggalK: '',
      denda: '',
      kategori: 'kembali',
      pinjam: []
    };
  }

  componentDidMount() {
    dataRef.on('value', (snapshot) => {
      let data = snapshot.val();
	    let student = Object.values(data);
      const pinjamData = student.filter(item => item.kategori === 'pinjam');
      this.setState({
        pinjam: pinjamData,
      });
	  });
 }

  sendDataKembali = () => {
    alert('Data Berhasil Dibuat! Silahkan Lengkapi Data');
    console.log('value kode pinjam', this.state.kodePK.trim())
    this.props.navigation.goBack();
  const newDataKembali = {
      kodePK: this.state.kodePK.trim(),
      nispengembalian: this.state.nispengembalian.trim(),
		  kodebukupengembalian: this.state.kodebukupengembalian.trim(),
      namasiswapengembalian: this.state.namasiswapengembalian.trim(),
      tanggalP: this.state.tanggalP.trim(),
      tanggalK: this.state.tanggalK.trim(),
      denda: this.state.denda.trim(),
      kategori: this.state.kategori.trim(),
    };
    const db_Kembali = dataRef.push(newDataKembali);
    const key = db_Kembali.key;
    dataRef.child(key).update({'key': key})
}

	render(){
    const { pinjam } = this.state
		return(
		<View style={styles.container}>
      <Text style={styles.header}>DATA KEMBALI</Text>
        <Picker style={styles.input}
        selectedValue={this.state.kodePK}
        mode="dropdown"
        // style={{backgroundColor: 'red'}}h 
        onValueChange={(itemValue, itemIndex) => {
          console.log('ini value', itemValue)
          this.setState({kodePK: itemValue})
          }}
      >
      <Picker.Item label="Kode Peminjaman" />
      {pinjam.map((item, index) => {
        return(
          <Picker.Item key={index} label={item.kodePinjam} value={item.kodePinjam} />
        )
      })}   
      </Picker>
        <TextInput
          underlineColorAndroid={'#218c74'}
          value={this.state.tanggalK}
          onChangeText={tanggalK => this.setState({ tanggalK })}
          placeholder={'Tanggal Kembali'}
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
          onPress={this.sendDataKembali}
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