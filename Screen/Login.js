import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    TouchableOpacity,
    TextInput,
    AsyncStorage,
} from 'react-native';
import { useTheme } from '@react-navigation/native';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(false);

    React.useEffect(() => {
        console.warn('oke');
    });

    const onSubmit = async () => {
        const emailStorage = await AsyncStorage.getItem('email');
        const passwordStorage = await AsyncStorage.getItem('password');
        if (email === emailStorage && password === passwordStorage) {
            const token = new Date().getTime();
            alert('berhasil');
            AsyncStorage.setItem('token', token);
            console.log('token', token);
            setIsLogin(true);
        } else {
            alert('email dan password salah');
        }
        setEmail('');
        setPassword('');
    };

    const handleLogOut = () => {
        AsyncStorage.removeItem('token');
        setIsLogin(false);
    };

    useEffect(() => {
        getToken();
    });

    const getToken = async () => {
        const token = await AsyncStorage.getItem('token');
        console.log('token', token);
        if (token === null) {
            setIsLogin(false);
        } else {
            setIsLogin(true);
        }
    };

    return (
        <View style={styles.container}>
            {isLogin ? (
                <View>
                    <Text style={{ textAlign: 'center', marginTop: 20 }}>
                        anda sudah login, silahkan logout
                    </Text>
                    <TouchableOpacity
                        onPress={handleLogOut}
                        style={{
                            backgroundColor: 'blue',
                            paddingHorizontal: 20,
                            paddingVertical: 10,
                            marginTop: 10,
                        }}
                    >
                        <Text style={{ color: 'white' }}>Logout</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <View style={styles.container}>
                    <Text style={styles.header}>HALAMAN LOGIN</Text>
                    <View
                        style={{
                            marginHorizontal: 20,
                            paddingVertical: 20,
                        }}
                    >
                        <Text>Email</Text>
                        <TextInput
                            underlineColorAndroid={'#218c74'}
                            style={styles.input}
                            placeholder="Email"
                            onChangeText={(email) => setEmail(email)}
                            value={email}
                        />
                        <Text>Password</Text>
                        <TextInput
                            underlineColorAndroid={'#218c74'}
                            style={styles.input}
                            placeholder="Password"
                            secureTextEntry
                            onChangeText={(password) => setPassword(password)}
                            value={password}
                        />
                    </View>
                    <TouchableOpacity
                        onPress={onSubmit}
                        style={{
                            backgroundColor: 'green',
                            paddingHorizontal: 20,
                            paddingVertical: 10,
                            marginTop: 10,
                            marginBottom: 20,
                        }}
                    >
                        <Text style={{ color: 'white' }}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Register')}
                    >
                        <Text style={{ color: '#000000' }}>Daftar</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#f5f6fa',
    },
    input: {
        width: 200,
        height: 44,
        padding: 10,
        marginBottom: 10,
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 30,
    },
});
