import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    SafeAreaView,
    FlatList,
    TouchableOpacity,
    ScrollView,
    Icon,
} from 'react-native';
import Constants from 'expo-constants';
import Feather from 'react-native-vector-icons/Feather';

import { dataRef } from './Reference';

export default class Buku extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shouldRender: true,
            student: [],
            buku: [],
        };
    }

    componentDidMount() {
        dataRef.on('value', (snapshot) => {
            let data = snapshot.val();
            let student = Object.values(data);
            const bukuData = student.filter((item) => item.kategori === 'buku');
            this.setState({
                buku: bukuData,
            });
        });
    }

    sendData = (item) => {
        this.props.navigation.navigate('EditBuku', {
            data: item,
        });
    };

    render() {
        const { student, buku } = this.state;
        if (this.state.shouldRender) {
            return (
                <View style={styles.container}>
                    <TouchableOpacity
                        style={styles.icon}
                        onPress={() => {
                            this.props.navigation.navigate('AddBuku');
                        }}
                    >
                        <View style={styles.iconButton}>
                            <Feather
                                name="plus"
                                style={styles.topIcon}
                                size={35}
                            />
                        </View>
                    </TouchableOpacity>
                    <SafeAreaView style={styles.sade}>
                        <ScrollView>
                            {buku.length == 0 ? (
                                <Text>Tidak ada data</Text>
                            ) : (
                                buku.map((item, index) => (
                                    <TouchableOpacity
                                        key={index}
                                        onPress={() => this.sendData(item)}
                                    >
                                        <View style={styles.tblsiswa}>
                                            <Text style={styles.texttblsiswa}>
                                                {item.status +
                                                    '  |  ' +
                                                    item.kodebuku +
                                                    '   ' +
                                                    '|' +
                                                    '   ' +
                                                    item.judulbuku +
                                                    '  | Detail'}
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                ))
                            )}
                        </ScrollView>
                    </SafeAreaView>
                </View>
            );
        } else {
            return null;
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f6fa',
    },
    icon: {
        position: 'relative',
        marginLeft: 'auto',
        backgroundColor: '#f5f6fa',
        marginBottom: 20,
    },
    tblsiswa: {
        height: 50,
        backgroundColor: '#f5f6fa',
        justifyContent: 'center',
        paddingLeft: 10,
        borderColor: 'black',
        borderWidth: 3,
        marginLeft: 15,
        marginRight: 15,
    },
    sade: {
        flex: 1,
    },
    iconButton: {
        position: 'relative',
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    texttblsiswa: {
        color: '#000000',
        fontSize: 12,
    },
});
