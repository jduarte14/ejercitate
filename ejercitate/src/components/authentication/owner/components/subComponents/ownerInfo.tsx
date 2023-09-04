import React, { useState } from 'react';
import { View, TextInput, Pressable, Text, StyleSheet, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';

//Helper
import setLoggedSession from './../../../helpers/setLoggedSession';
import GymName from './gymName';

const OwnerInfo = ({setUserLog, navigation}) => {
    const [modal, setModal] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [avatar, setAvatar] = useState(null);
    const [userId, setUserId] = useState(null);

    const registerUser = async () => {
        try {
            const formData = await new FormData();
            formData.append("email", email);
            formData.append("password", password);
            formData.append("avatar", { uri: avatar, type: 'image/jpeg', name: 'avatar.jpg' });
            formData.append("username", username);
            const url = 'https://ejercitatebackend-production.up.railway.app/auth/user';
            const response = await axios.post(url, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            const data = response.data;
            if (response.status === 200) {
                const id = data.user._id;
                setUserId(id);
                setLoggedSession(userId, 'id');
                setModal(true);
            } else {
                throw new Error(`Error ${response.status}: ${data.message}`);
            }

        } catch (error) {
            console.log('Error en la solicitud', error.message);
        }
    }

    const hideModal =()=>{
        setModal(false);
    }

    const pickImage = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [3, 4],
                quality: 1,
            });

            if (!result.canceled) {
                setAvatar(result.assets[0].uri);
            }
        } catch (error) {
            console.log('Error picking an image', error);
        }
    };
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.loginSubTitle}>
                    Registra tu usuario dueno de gimnasio:
                </Text>
                <TextInput
                    placeholder="Username"
                    onChangeText={setUsername}
                    value={username}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Email"
                    onChangeText={setEmail}
                    value={email}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Password"
                    secureTextEntry
                    onChangeText={setPassword}
                    value={password}
                    style={styles.input}
                />
                {avatar && <Image source={{ uri: avatar }} style={{ width: 100, height: 100, marginBottom: 20, borderRadius: 200, borderWidth: 2, borderColor: slate, }} />}
                <Pressable style={styles.imageButton} onPress={pickImage}>
                    <Text style={styles.buttonText}> Agrega tu avatar </Text>
                </Pressable>
                <View style={styles.buttonRow}>
                    <Pressable style={styles.button} onPress={registerUser}>
                        <Text style={styles.buttonText}>Siguente</Text>
                    </Pressable>
                </View>
            </View>
            {
                modal ? <GymName setUserLog={setUserLog} hideModal={hideModal} userId={userId} navigation={navigation}/> : null
            }

        </>
    )
}

let gray = "#f6f6f6";
let slate = "#0f172a";
let golden = "#FFD700";
let orange = "#f59e0b";

const styles = StyleSheet.create({
    loginTitle: {
        fontSize: 30,
        fontWeight: "bold",
        color: slate,
        paddingBottom: 30,
    },
    loginSubTitle: {
        fontSize: 28,
        fontWeight: "bold",
        color: slate,
        paddingHorizontal:50,
        paddingVertical:50,
        textAlign:"center"
    },
    buttonRow: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    imageButton: {
        backgroundColor: slate,
        paddingVertical: 10,
        paddingHorizontal: 20,
        margin: 5,
        borderRadius: 20,
    },
    container: {
        display: "flex",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: 310,
        height: 55,
        borderWidth: 2,
        borderColor: slate,
        borderRadius: 25,
        paddingHorizontal: 10,
        marginBottom: 15,
    },
    button: {
        backgroundColor: slate,
        paddingVertical: 10,
        paddingHorizontal: 20,
        margin: 20,
        borderRadius: 20,
        width: 300,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        paddingLeft: 5,
        paddingRight: 5,
        textAlign: 'center',
    },
    buttonBottomText: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
        paddingLeft: 5,
        paddingRight: 5,
        textAlign: 'center',
    },
    slateButton: {
        backgroundColor: slate,
        paddingVertical: 10,
        paddingHorizontal: 20,
        margin: 5,
        borderRadius: 20,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        height: 40,
    },
});

export default OwnerInfo;