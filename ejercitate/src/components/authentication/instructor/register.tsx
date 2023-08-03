import React, { useState } from 'react';
import { View, TextInput, Pressable, Text, StyleSheet } from 'react-native';

const Register = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <>
            <View style={styles.container}>
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
                <View style={styles.buttonRow}>
                    <Pressable style={styles.button} onPress={() => navigation.navigate('Register')}>
                        <Text style={styles.buttonText}>Registrarse</Text>
                    </Pressable>
                </View>
                <View>
                    <View style={styles.buttonRow}>
                        <Pressable style={styles.slateButton}onPress={() => navigation.navigate('Login')}>
                            <Text style={styles.buttonBottomText} >Logueate</Text>
                        </Pressable>
                        <Pressable style={styles.slateButton}  onPress={() => navigation.navigate('OwnerRegistration')}>
                            <Text style={styles.buttonBottomText}>
                                Registra tu gimnasio
                            </Text>
                        </Pressable>

                    </View>
                    <View style={styles.buttonRow}>
                        <Pressable style={styles.slateButton} onPress={() => navigation.navigate('InstructorRegister')}>
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

export default Register;