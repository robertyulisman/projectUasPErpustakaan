import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    Picker,
    ScrollView,
} from 'react-native';
import { dataRef } from './Reference';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import Table from '../components/Table';
import TableBottom from '../components/TableBottom';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class AddSiswa extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tanggalawal: '',
            tanggalakhir: '',
            kategori: 'laporan',
            kembali: [],
            showData: false,
        };
    }

    componentDidMount() {
        dataRef.on('value', (snapshot) => {
            let data = snapshot.val();
            let student = Object.values(data);
            const kembaliData = student.filter(
                (item) => item.kategori === 'kembali',
            );
            this.setState({
                kembali: kembaliData,
            });
        });
    }

    sendDataLaporan = () => {
        alert('Laporan Berhasil Di Tambahkan!');
        const newDataLaporan = {
            tanggalawal: this.state.tanggalawal.trim(),
            tanggalakhir: this.state.tanggalakhir.trim(),
            kategori: this.state.kategori.trim(),
        };
        const db_Laporan = dataRef.push(newDataLaporan);
        const key = db_Laporan.key;
        dataRef.child(key).update({ key: key });
    };

    render() {
        const { kembali, showData } = this.state;
        // console.warn('data', kembali);
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Sistem Rekapitulasi</Text>
                <Text
                    style={{
                        fontSize: 18,
                        fontWeight: 'bold',
                        textAlign: 'center',
                        marginBottom: 30,
                        paddingHorizontal: 20,
                    }}
                >
                    Laporan Perpustakaan
                </Text>
                {/* <View style={{ flexDirection: 'row' }}>
                    <Picker
                        style={styles.input}
                        selectedValue={this.state.tanggalawal}
                        mode="dropdown"
                        // style={{backgroundColor: 'red'}}h
                        onValueChange={(itemValue, itemIndex) => {
                            console.log('ini value', itemValue);
                            this.setState({ tanggalawal: itemValue });
                        }}
                    >
                        <Picker.Item label="Pilih Tanggal Awal" />
                        {kembali.map((item, index) => {
                            return (
                                <Picker.Item
                                    key={index}
                                    label={item.tanggalK}
                                    value={item.tanggalK}
                                />
                            );
                        })}
                    </Picker>
                    <Picker
                        style={styles.input}
                        selectedValue={this.state.tanggalakhir}
                        mode="dropdown"
                        onValueChange={(itemValue, itemIndex) => {
                            console.log('ini value', itemValue);
                            this.setState({ tanggalakhir: itemValue });
                        }}
                    >
                        <Picker.Item label="Pilih Tanggal Akhir" />
                        {kembali.map((item, index) => {
                            return (
                                <Picker.Item
                                    key={index}
                                    label={item.tanggalK}
                                    value={item.tanggalK}
                                />
                            );
                        })}
                    </Picker>

                    <View style={{ margin: 3 }}>
                        <Button
                            color="#218c74"
                            title="Submit"
                            onPress={this.sendDataLaporan}
                        />
                    </View>
                </View> */}
                <TouchableOpacity
                    onPress={
                        showData
                            ? () => {
                                  this.setState({ showData: false });
                              }
                            : () => {
                                  this.setState({ showData: true });
                              }
                    }
                    style={{
                        paddingHorizontal: 20,
                        backgroundColor: showData ? 'orange' : '#218c74',
                        alignSelf: 'center',
                    }}
                >
                    <Text
                        style={{
                            color: 'white',
                            textAlign: 'center',
                            marginVertical: 10,
                        }}
                    >
                        {showData ? 'Sembunyikan Data' : 'Tampilkan Data'}
                    </Text>
                </TouchableOpacity>

                {/* data laporan */}
                {showData && (
                    <ScrollView horizontal style={{ paddingVertical: 10 }}>
                        <View>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    marginHorizontal: 10,
                                }}
                            >
                                <Table width={100} title="NAMA" />
                                <Table width={100} title="NISN" />
                                <Table width={200} title="KODE PENGEMBALIAN" />
                                <Table width={100} title="KODE BUKU" />
                                <Table width={100} title="TGL PINJAM" />
                                <Table width={100} title="TGL KEMBALI" />
                                <Table right width={120} title="DENDA" />
                            </View>

                            {kembali.length > 0 ? (
                                kembali.map((item, index) => {
                                    return (
                                        <View
                                            style={{
                                                flexDirection: 'row',
                                                marginHorizontal: 10,
                                            }}
                                        >
                                            <TableBottom
                                                left
                                                width={100}
                                                title={
                                                    item.namasiswapengembalian ===
                                                    ''
                                                        ? '-'
                                                        : item.namasiswapengembalian
                                                }
                                            />
                                            <TableBottom
                                                width={100}
                                                title={
                                                    item.nispengembalian === ''
                                                        ? '-'
                                                        : item.nispengembalian
                                                }
                                            />
                                            <TableBottom
                                                width={200}
                                                title={
                                                    item.kodePK === ''
                                                        ? '-'
                                                        : item.kodePK
                                                }
                                            />
                                            <TableBottom
                                                width={100}
                                                title={
                                                    item.kodebukupengembalian ===
                                                    ''
                                                        ? '-'
                                                        : item.kodebukupengembalian
                                                }
                                            />
                                            <TableBottom
                                                width={100}
                                                title={
                                                    item.tanggalP === ''
                                                        ? '-'
                                                        : item.tanggalP
                                                }
                                            />
                                            <TableBottom
                                                width={100}
                                                title={
                                                    item.tanggalK === ''
                                                        ? '-'
                                                        : item.tanggalK
                                                }
                                            />
                                            <TableBottom
                                                width={120}
                                                title={
                                                    item.denda === ''
                                                        ? 'tidak ada denda'
                                                        : item.denda
                                                }
                                            />
                                        </View>
                                    );
                                })
                            ) : (
                                <View
                                    style={{
                                        marginHorizontal: 10,
                                        paddingVertical: 50,
                                        borderLeftWidth: 1,
                                        borderBottomWidth: 1,
                                        borderRightWidth: 1,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderColor: '#218c74',
                                    }}
                                >
                                    <Text>Tidak ada Data</Text>
                                </View>
                            )}
                        </View>
                    </ScrollView>
                )}
                {/* <Button title="create pdf" onPress={this.createPDF} /> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f6fa',
        // alignItems: 'center',
    },
    header: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingHorizontal: 20,
        marginTop: 20,
    },
    input: {
        // width: 200,
        flex: 1,
        height: 44,
        padding: 10,
        marginBottom: 10,
    },
    button: {
        flexDirection: 'row',
    },
});
