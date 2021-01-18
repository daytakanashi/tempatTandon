import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { Beranda, Tandon, TandonTambah } from '../screens'

const Stack = createStackNavigator();

function Routes() {
    return (
        <>
            <Stack.Navigator>
                {/* <Stack.Screen
                    name="beranda"
                    component={Beranda}
                    options={{ title: 'Beranda' }}
                /> */}
                <Stack.Screen
                    name="tandon"
                    component={Tandon}
                    options={({ navigation: { navigate } }) => ({
                        title: 'Nama Tandon',
                        headerRight: () => (
                            <TouchableOpacity
                                onPress={() => navigate('editTandon', {
                                    tipe: 'add',
                                })}
                                style={{ padding: 10, justifyContent: 'flex-end' }}
                            >
                                <Ionicons name="md-add-circle" size={40} color="skyblue" />
                            </TouchableOpacity>
                        ),
                    })}
                />
                <Stack.Screen
                    name="editTandon"
                    component={TandonTambah}
                    options={{ title: 'Tambah Tandon' }}
                />
            </Stack.Navigator>
        </>
    );
}

export default Routes;