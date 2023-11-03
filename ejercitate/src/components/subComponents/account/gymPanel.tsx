import { StyleSheet, Image, Modal, View, Text, TouchableOpacity, Pressable } from "react-native";
import { useState } from 'react';
import GymModify from './subComponents/GymModify';
import InstructorList from "./subComponents/instructorsList";
const GymPanel = ({ hideGymModal, owner, gymInstructors }) => {
    const { name } = owner;
    const [modalVisible, setModalVisible] = useState('');

    const handleModal = (type) => {
        switch (type) {
            case "instructorsPage":
                setModalVisible(type)
                break;
            case "gymModify":
                setModalVisible(type);
                break;
            default: setModalVisible('');
        }
    }
    return (
        <Modal visible={true} animationType="slide">
            <View style={styles.panelControlContainer}>
                <Text style={styles.title}>
                    {name}
                </Text>

                <Pressable style={styles.panelRow} onPress={() => handleModal('gymModify')}>
                    <Image style={styles.icon} source={require('./../../../img/gym_location.png')} />
                    <Text style={styles.subText}>
                        Modificar Gimnasio
                    </Text>
                </Pressable>
                <Pressable style={styles.panelRow} onPress={() => handleModal('instructorsPage')}>
                    <Image style={styles.icon} source={require('./../../../img/gym_avatar.png')} />
                    <Text style={styles.subText}>
                        Gestionar instructores
                    </Text>
                </Pressable>
                <Pressable style={styles.panelRow}>
                    <Image style={styles.icon} source={require('./../../../img/debit-card.png')} />
                    <Text style={styles.subText}>
                        Configuracion de pagos
                    </Text>
                </Pressable>
            </View>
            {
                modalVisible === "gymModify" ? <GymModify gym={owner} handleModal={handleModal} /> : null
            }
            {
                modalVisible === "instructorsPage" ? <InstructorList instructors={gymInstructors} handleModal={handleModal}/> : null
            }
            <View style={styles.buttonRow}>
                <TouchableOpacity onPress={hideGymModal} style={styles.button}>
                    <Text style={styles.whiteTextCentered}>Cerrar</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    )
}
let slate = "#0f172a";
const styles = StyleSheet.create({
    panelControlContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        color: slate,
    },
    title: {
        fontSize: 30,
        color: slate,
        fontWeight: 'bold',
        paddingBottom: 50,
    },
    whiteText: {
        fontSize: 20,
        color: 'white',
        fontWeight: "bold",
    },
    whiteTextCentered: {
        fontSize: 20,
        color: 'white',
        textAlign: "center",
        fontWeight: "bold",
    },
    buttonRow: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: slate,
        width: 200,
        height: 50,
        borderRadius: 20,
        marginHorizontal: 20,
        display: "flex",
        marginBottom: 20,
        justifyContent: "center",
    },
    buttonsContainer: {
        padding: 20,
    },
    panelRow: {
        backgroundColor: "white",
        paddingVertical: 15,
        paddingLeft: 10,
        marginTop: 20,
        borderRadius: 10,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: 350,
    },
    icon: {
        width: 35,
        height: 35,
    },
    subText: {
        color: slate,
        fontWeight: "bold",
        fontSize: 17,
        paddingLeft: 10,
        paddingTop: 10,
        paddingBottom: 10,
    },
});

export default GymPanel;