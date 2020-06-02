import * as React from 'react';
import { StyleSheet, Button, View, ActivityIndicator } from 'react-native';
import { NavigationContainer, 
          DrawerActions,
          DefaultTheme as NavigationDefaultTheme,
          DarkTheme as NavigationDarkTheme,
          } 
          from '@react-navigation/native';
import {  useTheme,
          Drawer,
          Text,                 
          Provider as PaperProvider,
          DefaultTheme as PaperDefaultTheme,
          DarkTheme as PaperDarkTheme ,
          TouchableRipple, Switch
           } 
          from 'react-native-paper'
import { createDrawerNavigator,  
          DrawerContentScrollView,
          DrawerItemList,
          DrawerItem } 
          from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

//Icon Bottom
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';  

//Screen Drawer
import Home from './Screen/Home'
import Login from './Screen/Login'
import Setting from './Screen/Setting'

// Screen Bottom
import Siswa from './ScreenData/Siswa'
import Buku from './ScreenData/Buku'
import Peminjaman from './ScreenData/Peminjaman'
import Pengembalian from './ScreenData/Pengembalian'
import Laporan from './ScreenData/Laporan'
import { AuthContext } from './Context'

export function DrawerContent(props) {
  const { colors } = useTheme();
  const paperTheme = useTheme();
  const { toggleTheme } = React.useContext(AuthContext);
  return(
    <View style={{flex: 1}}>
    <DrawerContentScrollView {...props}>
    <Drawer.Section style={styles.drawerSection}>
      <DrawerItemList {...props} />
    </Drawer.Section>
    <Drawer.Section title="Mode">
      <TouchableRipple onPress={() => {toggleTheme()}}>
        <View style={styles.preference}>
          <Text>Dark Navigasi</Text>
            <View pointerEvents="none">
              <Feather name="moon" color={colors.text} size={23} value={paperTheme.dark}/>
            </View>
          </View>
        </TouchableRipple>
    </Drawer.Section>
    </DrawerContentScrollView>
    <Drawer.Section style={styles.bottomDrawerSection}>
     <Drawer.Item 
     label="Log-Out"
     icon={()=> <Feather color={colors.text} size={23} name="log-out"/>}
      />
    </Drawer.Section>
    </View>
  )
}

const styles = StyleSheet.create({
  drawerSection: {
    marginTop: 15
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
    fontSize: 12
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16
  }
});
