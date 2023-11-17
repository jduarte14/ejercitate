import { useState } from 'react';
import { Modal, View, ScrollView, Text, Input, TextArea, Image, Pressable, StyleSheet, TouchableOpacity } from 'react-native';
import Step from './step';

const createRoutine = ({ handleRoutinePopUp }) => {
    const [stepModal, setStepModal] = useState();
    const [stepsObject, setStepsObject] = useState([]);
    const [postObject, setPostObject] = useState([]);
    const handleStepModal = () => {
        stepModal ? setStepModal(false) :
            setStepModal(true);
    }
    return (
        <Modal visible={true} animationType="slide">
            <View style={styles.panelControlContainer}>
                <Text style={styles.title}>
                    Create your routines
                </Text>
                <Text style={styles.subText}>
                    You have 7 steps maximum per routine
                </Text>
                <View style={styles.buttonRow}>
                    <TouchableOpacity style={styles.button} onPress={() => handleRoutinePopUp('')}>
                        <Text style={styles.whiteTextCentered}>Close</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={handleStepModal}>
                        <Text style={styles.whiteTextCentered}>Create routine</Text>
                    </TouchableOpacity>
                </View>
                {
                    stepModal ? <Step setStepsObject={setStepsObject} stepsObject={stepsObject} setPostObject={setPostObject} postObject={postObject} handleStepModal={handleStepModal}/> : null
                }

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
    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: slate,
    },
    subText: {
        fontSize: 17,
        fontWeight: "bold",
        color: slate,
        marginTop: 20,
        marginBottom: 25,
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
    whiteTextCentered: {
        fontSize: 20,
        color: 'white',
        textAlign: "center",
        fontWeight: "bold",
    },
})

export default createRoutine;