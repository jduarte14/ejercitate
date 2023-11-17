import { Modal, View, ScrollView, Text, Input, TextArea, Image, Pressable, StyleSheet, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import CreateRoutine from './routines/createRoutine';
import { useInstructorContext } from './../../../../../context/instructorContext';
const RoutinesPanel = ({ handlePopUp, instructor }) => {
    const { handleSingleInstructor } = useInstructorContext();
    const [routinesPopUp, setRoutinePopUp] = useState('');
    const [articles, setArticlesById] = useState();

    const handleRoutinePopUp = (type) => {
        switch (type) {
            case "create":
                !routinesPopUp ? setRoutinePopUp('create') : setRoutinePopUp('');
                break;
            case "patch":
                !routinesPopUp ? setRoutinePopUp('patch') : setRoutinePopUp('');
                break;
            case "delete":
                !routinesPopUp ? setRoutinePopUp('delete') : setRoutinePopUp('');
                break;
            default:
                setRoutinePopUp('');
                break;
        }
    }

    const getId = async () => {
        try {
            const response = await handleSingleInstructor(instructor._id);
            setArticlesById(response.instructor['articles']);
        } catch (error) {
            console.error("Error al realizar la petición:", error.message);
        }
    }

    useEffect(() => {
        getId();
    }, [])

    return (
        <Modal visible={true} animationType="slide">
            <View style={styles.panelControlContainer}>
                <Text style={styles.title}>
                    Gestiona tus rutinas
                </Text>
                <Pressable style={styles.panelRow} onPress={() => handleRoutinePopUp("create") }>
                    <Image style={styles.icon} source={require('./../../../../../img/pen.png')} />
                    <Text style={styles.subText}>
                        Crear rutinas
                    </Text>
                </Pressable>
                <Pressable style={styles.panelRow}>
                    <Image style={styles.icon} source={require('./../../../../../img/edit_list.png')} />
                    <Text style={styles.subText}>
                        Editar rutinas
                    </Text>
                </Pressable>
            </View>
            <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.button} onPress={() => handlePopUp('')}>
                    <Text style={styles.whiteTextCentered}>Cerrar</Text>
                </TouchableOpacity>
            </View>
            {
                routinesPopUp === "create" ? <CreateRoutine handleRoutinePopUp={handleRoutinePopUp} /> : null
            }
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
        width: 30,
        height: 30,
    },
    subText: {
        color: slate,
        fontWeight: "bold",
        fontSize: 17,
        paddingLeft: 10,
        paddingTop: 10,
        paddingBottom: 10,
    },
})

export default RoutinesPanel;