import React from 'react'
import { Text , View, } from 'react-native';
import { createAppContainer } from 'react-navigation'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import Siswa from './ScreenData/Siswa';
import Buku from './ScreenData/Buku';
import Peminjaman from './ScreenData/Peminjaman';
import Pengembalian from './ScreenData/Pengembalian';
import Laporan from './ScreenData/Laporan';

const TabNavigator = createMaterialTopTabNavigator({
    Siswa: Siswa,
    Buku: Buku,
    Peminjaman: Peminjaman,
    Pengembalian: Pengembalian,
    Laporan: Laporan,
});

export default createAppContainer(TabNavigator);