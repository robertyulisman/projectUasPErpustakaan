import * as React from 'react';
import {
    StyleSheet,
    Button,
    View,
    TouchableOpacity,
    ActivityIndicator,
} from 'react-native';
import {
    useTheme,
    NavigationContainer,
    DrawerActions,
    DefaultTheme as NavigationDefaultTheme,
    DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';
import {
    Drawer,
    Text,
    Switch,
    Provider as PaperProvider,
    DefaultTheme as PaperDefaultTheme,
    DarkTheme as PaperDarkTheme,
} from 'react-native-paper';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';

import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

//Icon Bottom
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//Screen Drawer
import { DrawerContent } from './DrawerContent';
import Home from './Screen/Home';
import Login from './Screen/Login';
import Register from './Screen/Register';
import Logout from './Screen/Logout';
import Setting from './Screen/Setting';
import DD from './Screen/DD';

//Screen Data
import AddSiswa from './ScreenData/Data/AddSiswa';
import EditSiswa from './ScreenData/Data/EditSiswa';
import AddBuku from './ScreenData/Data/AddBuku';
import EditBuku from './ScreenData/Data/EditBuku';
import AddPinjam from './ScreenData/Data/AddPinjam';
import EditPinjam from './ScreenData/Data/EditPinjam';
import AddKembali from './ScreenData/Data/AddKembali';
import EditKembali from './ScreenData/Data/EditKembali';

// Screen Bottom
import Siswa from './ScreenData/Siswa';
import Buku from './ScreenData/Buku';
import Peminjaman from './ScreenData/Peminjaman';
import Pengembalian from './ScreenData/Pengembalian';
import Laporan from './ScreenData/Laporan';
import { AuthContext } from './Context';

const Tabs = createMaterialBottomTabNavigator();
function BottomTabs() {
    return (
        <Tabs.Navigator>
            <Tabs.Screen
                name="Siswa"
                component={SiswaScreen}
                options={{
                    tabBarLabel: 'Siswa',
                    tabBarIcon: ({ color }) => (
                        <Feather name="user" size={23} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="Buku"
                component={BukuScreen}
                options={{
                    tabBarLabel: 'Buku',
                    tabBarIcon: (tintColor) => (
                        <Feather
                            name="book"
                            size={23}
                            color={tintColor.color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="Pinjam"
                component={PeminjamanScreen}
                options={{
                    tabBarLabel: 'Pinjam',
                    tabBarIcon: (tintColor) => (
                        <Feather
                            name="package"
                            size={23}
                            color={tintColor.color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="Kembali"
                component={PengembalianScreen}
                options={{
                    tabBarLabel: 'Kembali',
                    tabBarIcon: (tintColor) => (
                        <MaterialCommunityIcons
                            name="arrow-collapse-down"
                            size={23}
                            color={tintColor.color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="Laporan"
                component={LaporanScreen}
                options={{
                    tabBarLabel: 'Laporan',
                    tabBarIcon: (tintColor) => (
                        <Feather
                            name="alert-circle"
                            size={23}
                            color={tintColor.color}
                        />
                    ),
                }}
            />
        </Tabs.Navigator>
    );
}

const RootStack = createStackNavigator();

// stack navigator HOME
const HomeScreen = ({ navigation }) => {
    const { colors } = useTheme();
    const theme = useTheme();
    return (
        <RootStack.Navigator
            screenOptions={{
                headerTitle: null,
                headerLeft: () => (
                    <TouchableOpacity
                        onPress={() =>
                            navigation.dispatch(DrawerActions.toggleDrawer())
                        }
                    >
                        <View>
                            <Feather
                                name="menu"
                                size={35}
                                style={{ color: colors.text, marginLeft: 20 }}
                            />
                        </View>
                    </TouchableOpacity>
                ),
            }}
        >
            <RootStack.Screen name="Home" component={Home} />
        </RootStack.Navigator>
    );
};

const SiswaScreen = ({ navigation }) => {
    const { colors } = useTheme();
    const theme = useTheme();
    return (
        <RootStack.Navigator>
            <RootStack.Screen
                name="Siswa"
                component={Siswa}
                options={{
                    headerTitle: null,
                    headerLeft: () => (
                        <TouchableOpacity
                            onPress={() =>
                                navigation.dispatch(
                                    DrawerActions.toggleDrawer(),
                                )
                            }
                        >
                            <View>
                                <Feather
                                    name="menu"
                                    size={35}
                                    style={{ color: colors.text }}
                                />
                            </View>
                        </TouchableOpacity>
                    ),
                }}
            />
            <RootStack.Screen
                name="AddSiswa"
                component={AddSiswa}
                options={{
                    headerTitle: null,
                }}
            />
            <RootStack.Screen
                name="EditSiswa"
                component={EditSiswa}
                options={{
                    headerTitle: null,
                }}
            />
        </RootStack.Navigator>
    );
};

const BukuScreen = ({ navigation }) => {
    const { colors } = useTheme();
    const theme = useTheme();
    return (
        <RootStack.Navigator>
            <RootStack.Screen
                name="Buku"
                component={Buku}
                options={{
                    headerTitle: null,
                    headerLeft: () => (
                        <TouchableOpacity
                            onPress={() =>
                                navigation.dispatch(
                                    DrawerActions.toggleDrawer(),
                                )
                            }
                        >
                            <View>
                                <Feather
                                    name="menu"
                                    size={35}
                                    style={{ color: colors.text }}
                                />
                            </View>
                        </TouchableOpacity>
                    ),
                }}
            />
            <RootStack.Screen
                name="AddBuku"
                component={AddBuku}
                options={{
                    headerTitle: null,
                }}
            />
            <RootStack.Screen
                name="EditBuku"
                component={EditBuku}
                options={{
                    headerTitle: null,
                }}
            />
        </RootStack.Navigator>
    );
};

const PeminjamanScreen = ({ navigation }) => {
    const { colors } = useTheme();
    const theme = useTheme();
    return (
        <RootStack.Navigator>
            <RootStack.Screen
                name="Peminjaman"
                component={Peminjaman}
                options={{
                    headerTitle: null,
                    headerLeft: () => (
                        <TouchableOpacity
                            onPress={() =>
                                navigation.dispatch(
                                    DrawerActions.toggleDrawer(),
                                )
                            }
                        >
                            <View>
                                <Feather
                                    name="menu"
                                    size={35}
                                    style={{ color: colors.text }}
                                />
                            </View>
                        </TouchableOpacity>
                    ),
                }}
            />
            <RootStack.Screen
                name="AddPinjam"
                component={AddPinjam}
                options={{
                    headerTitle: null,
                }}
            />
            <RootStack.Screen
                name="EditPinjam"
                component={EditPinjam}
                options={{
                    headerTitle: null,
                }}
            />
        </RootStack.Navigator>
    );
};

const PengembalianScreen = ({ navigation }) => {
    const { colors } = useTheme();
    const theme = useTheme();
    return (
        <RootStack.Navigator>
            <RootStack.Screen
                name="Pengembalian"
                component={Pengembalian}
                options={{
                    headerTitle: null,
                    headerLeft: () => (
                        <TouchableOpacity
                            onPress={() =>
                                navigation.dispatch(
                                    DrawerActions.toggleDrawer(),
                                )
                            }
                        >
                            <View>
                                <Feather
                                    name="menu"
                                    size={35}
                                    style={{ color: colors.text }}
                                />
                            </View>
                        </TouchableOpacity>
                    ),
                }}
            />
            <RootStack.Screen
                name="AddKembali"
                component={AddKembali}
                options={{
                    headerTitle: null,
                }}
            />
            <RootStack.Screen
                name="EditKembali"
                component={EditKembali}
                options={{
                    headerTitle: null,
                }}
            />
        </RootStack.Navigator>
    );
};

const LaporanScreen = ({ navigation }) => {
    const { colors } = useTheme();
    const theme = useTheme();
    return (
        <RootStack.Navigator>
            <RootStack.Screen
                name="Laporan"
                component={Laporan}
                options={{
                    headerTitle: null,
                    headerLeft: () => (
                        <TouchableOpacity
                            onPress={() =>
                                navigation.dispatch(
                                    DrawerActions.toggleDrawer(),
                                )
                            }
                        >
                            <View>
                                <Feather
                                    name="menu"
                                    size={35}
                                    style={{ color: colors.text }}
                                />
                            </View>
                        </TouchableOpacity>
                    ),
                }}
            />
        </RootStack.Navigator>
    );
};

// stack navigator LOGIN
const LoginScreen = ({ navigation }) => {
    const { colors } = useTheme();
    const theme = useTheme();
    return (
        <RootStack.Navigator>
            <RootStack.Screen
                name="Login"
                component={Login}
                options={{
                    headerTitle: null,
                    headerLeft: () => (
                        <TouchableOpacity
                            onPress={() =>
                                navigation.dispatch(
                                    DrawerActions.toggleDrawer(),
                                )
                            }
                        >
                            <View>
                                <Feather
                                    name="menu"
                                    size={35}
                                    style={{ color: colors.text }}
                                />
                            </View>
                        </TouchableOpacity>
                    ),
                }}
            />
            <RootStack.Screen
                name="Register"
                component={Register}
                options={{
                    headerTitle: null,
                }}
            />
        </RootStack.Navigator>
    );
};

const SettingScreen = ({ navigation }) => {
    return (
        <RootStack.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: '#d2dae2' },
                headerTitle: null,
                headerLeft: () => (
                    <TouchableOpacity
                        onPress={() =>
                            navigation.dispatch(DrawerActions.toggleDrawer())
                        }
                    >
                        <View>
                            <Feather name="menu" size={35} />
                        </View>
                    </TouchableOpacity>
                ),
            }}
        >
            <RootStack.Screen name="Setting" component={Setting} />
        </RootStack.Navigator>
    );
};

const LogoutScreen = ({ navigation }) => {
    return (
        <RootStack.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: '#f1f2f6' },
                headerTitle: null,
                headerLeft: () => (
                    <TouchableOpacity
                        onPress={() =>
                            navigation.dispatch(DrawerActions.toggleDrawer())
                        }
                    >
                        <View>
                            <Feather name="menu" size={35} />
                        </View>
                    </TouchableOpacity>
                ),
            }}
        >
            <RootStack.Screen name="Setting" component={Logout} />
        </RootStack.Navigator>
    );
};

const AppDrawer = createDrawerNavigator();

const App = () => {
    const [isLoading, setIsLoading] = React.useState(true);

    const [isDarkTheme, setIsDarkTheme] = React.useState(false);
    const authContext = React.useMemo(
        () => ({
            toggleTheme: () => {
                setIsDarkTheme((isDarkTheme) => !isDarkTheme);
            },
        }),
        [],
    );

    const CustomDefaultTheme = {
        ...NavigationDefaultTheme,
        ...PaperDarkTheme,
        colors: {
            ...NavigationDefaultTheme.colors,
            ...PaperDefaultTheme.colors,
            background: '#ffffff',
            text: '#000000',
        },
    };

    const CustomDarkTheme = {
        ...NavigationDarkTheme,
        ...PaperDarkTheme,
        colors: {
            ...NavigationDarkTheme.colors,
            ...PaperDarkTheme.colors,
            background: '#000000',
            text: '#ffffff',
        },
    };

    const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

    React.useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    }, []);

    if (isLoading) {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <ActivityIndicator size={32} />
            </View>
        );
    }

    return (
        <PaperProvider theme={theme}>
            <AuthContext.Provider value={authContext}>
                <NavigationContainer theme={theme}>
                    <AppDrawer.Navigator
                        initialRouteName="HomeScreen"
                        overlayColor="#f1f2f6"
                        drawerType="slide"
                        drawerContent={(props) => <DrawerContent {...props} />}
                    >
                        <AppDrawer.Screen
                            name="Home"
                            component={HomeScreen}
                            options={{
                                drawerIcon: (tintColor) => (
                                    <Feather
                                        name="home"
                                        size={23}
                                        color={tintColor.color}
                                    />
                                ),
                            }}
                        />
                        <AppDrawer.Screen
                            name="Data"
                            component={BottomTabs}
                            options={{
                                drawerIcon: (tintColor) => (
                                    <Feather
                                        name="database"
                                        size={23}
                                        color={tintColor.color}
                                    />
                                ),
                            }}
                        />
                        <AppDrawer.Screen
                            name="Log-in"
                            component={LoginScreen}
                            options={{
                                drawerIcon: (tintColor) => (
                                    <Feather
                                        name="log-in"
                                        size={23}
                                        color={tintColor.color}
                                    />
                                ),
                            }}
                        />

                        <AppDrawer.Screen
                            name="Setting"
                            component={DD}
                            options={{
                                drawerIcon: (tintColor) => (
                                    <Feather
                                        name="settings"
                                        size={23}
                                        color={tintColor.color}
                                    />
                                ),
                            }}
                        />
                    </AppDrawer.Navigator>
                </NavigationContainer>
            </AuthContext.Provider>
        </PaperProvider>
    );
};

export default App;
