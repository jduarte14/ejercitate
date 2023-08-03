import React, { useState, useEffect } from 'react';
import { View, TextInput, Pressable, Text, StyleSheet, Image } from 'react-native';
import axios from 'axios';

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [userLogged, setUserLogged] = useState(false);
    
    const handleLogin = async () => {
        try {
            const url = 'https://ejercitatebackend-production.up.railway.app/auth/user/login';
            const userData = new URLSearchParams();
            userData.append("email", email.toLowerCase());
            userData.append("password", password.toLowerCase());

            const response = await axios.post(url, userData, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });

            if (response.status === 200) {
                console.log('Usuario conectado correctamente');
                setUserLogged(true);
            } else {
                setError('Credenciales incorrectas');
                console.log(response.data,'asd');
            }
        } catch (error) {
            setError('Error al obtener los datos');
            console.error('Error al obtener los datos', error.message);
        }
    };
    return (
        <View style={styles.container}>
            <View>
                <Image style={styles.logo} source={require('./../../../img/ejercitate_logo.png')} />
            </View>
            <Text style={styles.loginTitle}>
                Login
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
            <View style={styles.buttonRow}>
                <Pressable onPress={handleLogin} style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>
                </Pressable>
            </View>
            <View>
                <View style={styles.buttonRow}>
                    <Pressable style={styles.slateButton}>
                        <Text style={styles.buttonBottomText} onPress={() => navigation.navigate('Register')}>Registrarse</Text>
                    </Pressable>
                    <Pressable style={styles.slateButton} onPress={() => navigation.navigate('OwnerRegistrarion')}>
                        <Text style={styles.buttonBottomText}>
                            Registra tu gimnasio
                        </Text>
                    </Pressable>

                </View>
                <View style={styles.buttonRow}>
                    <Pressable style={styles.slateButton} onPress={() => navigation.navigate('Register')}>
                        <Text style={styles.buttonBottomText}>
                            Registrate como instructor
                        </Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
};

let slate = "#0f172a";
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
    logo: {
        width: 260,
        height: 55,
        marginBottom: 50,
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

export default Login;
