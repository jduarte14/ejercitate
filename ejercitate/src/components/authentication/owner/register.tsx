import React, { useState } from 'react';
import { View, TextInput, Pressable, Text, StyleSheet } from 'react-native';
import Activities  from './components/activites';
const Register = ({ navigation }) => {
    const [gymName, setGymName] = useState('');

    const [modal, setModal] = useState(false);

    const handleModal =()=>{
        setModal(true);
        setGymName(gymName);
    }

    const closeModal =()=>{
        setModal(false);
    }


    return (
        <>
            <View style={styles.container}>
                <Text style={styles.loginTitle}>
                    Registra tu gimasio
                </Text>
                <Text style={styles.loginSubTitle}>
                    Nombre del gimnasio:
                </Text>
                <TextInput
                    placeholder="Nombre gimnasio"
                    onChangeText={setGymName}
                    value={gymName}
                    style={styles.input}
                />
                <View style={styles.buttonRow}>
                    <Pressable style={styles.button} onPress={handleModal}>
                        <Text style={styles.buttonText}>Registrar gimnasio</Text>
                    </Pressable>
                </View>
                <View>
                    <View style={styles.buttonRow}>
                        <Pressable style={styles.slateButton}>
                            <Text style={styles.buttonBottomText} onPress={() => navigation.navigate('OwnerLogin')}>Loguea tu Gimnasio</Text>
                        </Pressable>
                        <Pressable style={styles.slateButton}>
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
            {
                modal ? <Activities gymName={gymName} closeModal={closeModal}/> : null
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
        fontSize: 20,
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
        display:"flex",
        flex:1,
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