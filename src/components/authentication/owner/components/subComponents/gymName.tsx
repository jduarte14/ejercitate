import React, { useState } from 'react';
import { View, TextInput, Pressable, Text, StyleSheet, Modal, Image } from 'react-native';
import Activities from './../activites';
const GymName = ({ navigation, setUserLog, hideModal, userId }) => {
    const [gymName, setGymName] = useState('');
    const [modal, setModal] = useState(false);

    const showActivitiesModal =()=>{
        setModal(true);
    }

    const hideActivitesModal =()=>{
        setModal(false);
    }

    console.log(userId);
    const handleModal = () => {
        setModal(true);
        setGymName(gymName);
    }


    return (
        <Modal animationType="slide">
            <View style={styles.container}>

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
                <View style={styles.registrationRow}>
                    <Pressable style={styles.direction} onPress={hideModal}>
                        <Image style={styles.directionIcon} source={require('./../../../../../img/prev.png')} />
                        <Text style={styles.whiteText}>Anterior</Text>
                    </Pressable>
                    <Pressable style={styles.direction} onPress={showActivitiesModal}>
                        <Text style={styles.whiteText}>Next</Text>
                        <Image style={styles.directionIcon} source={require('./../../../../../img/next.png')} />
                    </Pressable>
                </View>
            </View>
            {
                modal ? <Activities hideActivitesModal={hideActivitesModal} setUserLog={setUserLog} userId={userId}  gymName={gymName} navigation={navigation} /> : null
            }

        </Modal>
    )
}

let slate = "#0f172a";
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
        paddingBottom: 30,
    },
    buttonRow: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
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
        marginRight: 10,
        borderRadius: 10,
        paddingLeft: 40,
        paddingRight: 40,
        paddingTop: 10,
        paddingBottom: 10,
        margin:20,
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
    registrationRow: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        marginHorizontal: 20,
        width: 350,
        marginVertical: 20,
    },
    directionIcon: {
        width: 20,
        height: 20,
    },
    direction: {
        backgroundColor: slate,
        borderRadius: 30,
        height: 50,
        width: 150,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
    },
    whiteText: {
        color: "white",
        fontSize: 15,
        fontWeight: "bold"
    }
});

export default GymName;