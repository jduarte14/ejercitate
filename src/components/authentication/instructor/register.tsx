import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';
import { View, TextInput, Pressable, Text, StyleSheet, Image } from 'react-native';

import setLoggedSession from './../helpers/setLoggedSession';
import Description from './subComponents/description';

const Register = ({ navigation, route }) => {
    const { setUserLog } = route.params;
    
    const [modal, setModal] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [avatar, setAvatar] = useState(null);
    const [id, setId] = useState(null);
    const hideModal = () => {
        setModal(false);
    }

    const registerUser = async () => {
        try {
            const formData = await new FormData();
            formData.append("email", email.toLocaleLowerCase());
            formData.append("password", password.toLocaleLowerCase());
            formData.append("avatar", {uri:avatar,type:'image/jpeg',name:'avatar.jpg'});
            formData.append("username", username.toLocaleLowerCase());
            const url = 'https://ejercitatebackend-production.up.railway.app/auth/user';
            const response = await axios.post(url, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            const data = response.data;
            if (response.status === 200) {
                let userId = data.user._id;
                setId(userId);
                setLoggedSession(userId, 'id');
                setModal(true);
            } else {
                throw new Error(`Error ${response.status}: ${data.message}`);
            }

        } catch (error) {
            console.log('Error en la solicitud', error.message);
        }
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
                <View>
                    <Image style={styles.logo} source={require('./../../../img/ejercitate_logo.png')} />
                </View>
                <Text style={styles.loginTitle}>
                    Sign up
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
                    <Text style={styles.buttonText}> Add avatar image </Text>
                </Pressable>

                <View style={styles.buttonRow}>
                    <Pressable style={styles.button} onPress={registerUser}>
                        <Text style={styles.buttonText}>Submit</Text>
                    </Pressable>
                </View>
                <View>
                    <View style={styles.buttonRow}>
                        <Pressable style={styles.slateButton} onPress={() => navigation.navigate('Login')}>
                            <Text style={styles.buttonBottomText} >Login as gym</Text>
                        </Pressable>
                        <Pressable style={styles.slateButton} onPress={() => navigation.navigate('OwnerRegistrarion')}>
                            <Text style={styles.buttonBottomText}>
                                Sign up your gym
                            </Text>
                        </Pressable>

                    </View>
                    <View style={styles.buttonRow}>
                        <Pressable style={styles.slateButton}>
                            <Text style={styles.buttonBottomText}>
                                Sing up as a instructor
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </View>
            {
                modal ? <Description  avatar={avatar} id={id} setUserLog={setUserLog} hideModal={hideModal} username={username} email={email} password={password} /> : null
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
    buttonRow: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    container: {
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
        paddingLeft: 20,
        fontWeight: "bold",
        textTransform: "lowercase",
    },
    logo: {
        width: 260,
        height: 55,
        marginBottom: 50,
    },
    button: {
        backgroundColor: slate,
        marginRight: 10,
        borderRadius: 10,
        paddingLeft: 40,
        paddingRight: 40,
        paddingTop: 10,
        paddingBottom: 10,
        margin:20,
    },
    imageButton: {
        backgroundColor: slate,
        paddingVertical: 10,
        paddingHorizontal: 20,
        margin: 5,
        borderRadius: 20,
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

export default Register;