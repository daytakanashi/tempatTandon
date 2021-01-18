import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import firebase from '../config';

const Item = ({ nama, tempat, tahun, gambar, id, nav }) => (
    <View style={styles.container}>
        <Image
            style={{ width: 80, height: '100%'}}
            source={{
                uri: gambar,
            }}
        />
        <View style={styles.item}>
            <Text style={styles.title}>{nama}</Text>
            <Text style={styles.isi}>{tempat}</Text>
            <Text style={styles.isi}>{tahun}</Text>
        </View>
        <View>
            <TouchableOpacity onPress={() => _update({ id, nama, tempat, tahun, gambar, nav })}>
                <Ionicons name="md-create" size={36} color="orange" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => _remove({ id })}>
                <Ionicons name="md-trash" size={36} color="red" />
            </TouchableOpacity>
        </View>
    </View>
);

const _remove = async ({ id }) => {
    firebase.database().ref('tandon/' + id)
        .remove().then(() => console.log('Berhasil Hapus!'));
}

const _update = async ({ id, nama, tempat, tahun, gambar, nav }) => {

    var data = {
        nama : nama,
        tempat : tempat,
        tahun : tahun,
        gambar : gambar,
    }

    nav.navigate('editTandon', {
        tipe: 'edit',
        id: id,
        data: data
    })
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        backgroundColor: '#f9c2ff',
    },
    item: {
    },
    title: {
        fontSize: 32,
    },
    isi: {
        fontSize: 22,
    },
})

export default Item

//ini hanya percobaan