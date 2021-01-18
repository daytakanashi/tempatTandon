import React, { useState, useEffect } from 'react'
import { Text, StyleSheet, View, TextInput, TouchableOpacity } from 'react-native'
import firebase from '../../config';

function form({ route }) {
    const { tipe, id, data } = route.params;
    const [button, setButton] = useState('')
    const [nama, setNama] = useState('')
    const [tempat, setTempat] = useState('')
    const [tahun, setTahun] = useState('')
    const [gambar, setGambar] = useState('')

    const _proses = () => {
        if (tipe === 'add') {
            _simpan()
        } else (
            _update()
        )
    }

    useEffect(() => {
        if (tipe === 'edit') {
            setNama(data.nama);
            setTempat(data.tempat);
            setTahun(data.tahun);
            setGambar(data.gambar);
            
            setButton('Update')
        } else {
            setButton('Simpan')
        }
    }, [])

    const _simpan = async () => {
        var postListRef = firebase.database().ref('tandon');
        var newPostRef = postListRef.push();
        newPostRef.set({
            nama: nama,
            tempat: tempat,
            tahun: tahun,
            gambar: gambar,
        })
            .then(() => console.log('Data berhasil disimpan'))
            .catch((err) => console.log(err));

        setNama('');
        setTempat('');
        setTahun('');
        setGambar('');
    }

    const _update = async () => {
        var postListRef = firebase.database().ref('tandon/' + id);
        postListRef.update({
            nama: nama,
            tempat: tempat,
            tahun: tahun,
            gambar: gambar,
        })
            .then(() => console.log('Data berhasil diubah'))
            .catch((err) => console.log(err));

    }

    return (
        <View style={styles.container}>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => setGambar(text)}
                value={gambar}
                placeholder="Masukkan Nama"
                style={styles.input}
            />
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => setNama(text)}
                value={nama}
                placeholder="Masukkan Nama"
                style={styles.input}
            />
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => setTempat(text)}
                value={tempat}
                placeholder="Masukkan Tempat"
                style={styles.input}
            />
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => setTahun(text)}
                value={tahun}
                placeholder="Masukkan Tahun"
                style={styles.input}
            />
            <TouchableOpacity
                onPress={() => _proses()}
                style={styles.btn}
            >
                <Text style={{ fontWeight: 'bold' }}>{button}</Text>
            </TouchableOpacity>
        </View>
    )
}
export default form;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    input: {
        width: "80%",
        height: 40,
        borderWidth: 1,
        marginTop: 10,
        padding: 5
    },
    btn: {
        marginTop: 10,
        width: "80%",
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'salmon'
    }
})
