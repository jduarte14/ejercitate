import React, { useState } from 'react';
import { View, TextInput, Pressable, Text, StyleSheet, Image, Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
const Register = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [image, setImage] = useState(null);

    const pickImage = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });

            if (!result.canceled) {
                setImage(result.assets[0].uri);
            }
        } catch (error) {
            console.log('Error picking an image', error);
        }
    };

    const registerUser = async ()=>{
        const formData = new FormData();
        formData.append("email", email);
        formData.append("password", password);
        formData.append("avatar", image);
        
        try {
            let url = 'https://ejercitatebackend-production.up.railway.app/auth/user/';
            const response = await fetch(url, {
                method:"POST",
                body: formData.toString(),
                headers: {
                    'Content-Type': 'application/json',
                  },
            });
           

            if(response.ok) {
                const data = await response.json();
                console.log('Datos enviados:', data);
            }
            else {
                const errorData = await response.json();
                throw new Error(`Error ${response.status}: ${errorData.message}`);
            }

        }
        catch(error){
            console.log(error.message);
        }
    }

    return (
        <>
            <View style={styles.container}>
            <View>
                <Image style={styles.logo} source={require('./../../../img/ejercitate_logo.png')} />
            </View>
                <Text style={styles.loginTitle}>
                    Registrate
                </Text>
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
                {image && <Image source={{ uri: image }} style={{ width: 100, height: 100,marginBottom:20, borderRadius:200,borderWidth:2,borderColor:slate,}} />}
                <Pressable style={styles.imageButton} onPress={pickImage}>
                        <Text style={styles.buttonText}> Agrega tu avatar </Text>
                    </Pressable>

                <View style={styles.buttonRow}>
                    <Pressable style={styles.button} onPress={registerUser}>
                        <Text style={styles.buttonText}>Registrarse</Text>
                    </Pressable>
                </View>
                <View>
                    <View style={styles.buttonRow}>
                        <Pressable style={styles.slateButton} onPress={() => navigation.navigate('Login')}>
                            <Text style={styles.buttonBottomText} >Loguea tu gimnasio</Text>
                        </Pressable>
                        <Pressable style={styles.slateButton} onPress={() => navigation.navigate('OwnerRegistrarion')}>
                            <Text style={styles.buttonBottomText}>
                                Registra tu gimnasio
                            </Text>
                        </Pressable>

                    </View>
                    <View style={styles.buttonRow}>
                        <Pressable style={styles.slateButton}>
                            <Text style={styles.buttonBottomText}>
                                Registrate como instructor
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </View>
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
        paddingLeft:20,
        fontWeight:"bold"
    },
    logo: {
        width: 260,
        height: 55,
        marginBottom: 50,
    },
    button: {
        backgroundColor: slate,
        paddingVertical: 10,
        paddingHorizontal: 20,
        margin: 20,
        borderRadius: 20,
        width: 300,
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