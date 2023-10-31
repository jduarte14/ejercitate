import { useState } from 'react';
import { StyleSheet, Image, Modal, View, Text, TouchableOpacity, Pressable } from "react-native";
import Activities from './subComponents/activities';
import Clients from './subComponents/clients';
import Description from './subComponents/description';
import Routines from './subComponents/routines';


const InstructorPanel = ({ hideInstructorModal, instructor }) => {
    const { name, phone, specialty, email } = instructor;
    console.log(instructor);
    const [popup, setPopUp] = useState('');
    const [stateDescription, setStateDescription] = useState('');
    const [stateActivities, setStateActivities] = useState(specialty);
    const [stateRoutines, setStateRoutines] = useState([]);
    
    const handleActivtiesOnPress = (activity) => {
        setStateActivities(prevActivity => {
            const updatedActivity = { ...prevActivity };
            if (updatedActivity[activity]) {
                delete updatedActivity[activity];
            } else {
                updatedActivity[activity] = true;
            }
            return updatedActivity;
        });
    };
   
    const handlePopUp = (type) => {
        switch (type) {
            case "description":
                !popup ? setPopUp('description') : setPopUp('');
                break;
            case "routines":
                !popup ? setPopUp('routines') : setPopUp('');
                break;
            case "clients":
                !popup ? setPopUp('clients') : setPopUp('');
                break;
            case "activities":
                !popup ? setPopUp('activities') : setPopUp('');
                break;
            default:
                setPopUp('');
                break;
        }
    }

    return (
        <Modal visible={true} animationType="slide">
            <View style={styles.panelControlContainer}>
                <Text style={styles.title}>
                    {name}
                </Text>

                <Pressable style={styles.panelRow}>
                    <Image style={styles.icon} source={require('./../../../../img/notes.png')} />
                    <Text style={styles.subText}>
                        Gestionar rutinas
                    </Text>
                </Pressable>
                <Pressable style={styles.panelRow}>
                    <Image style={styles.icon} source={require('./../../../../img/avatar.png')} />
                    <Text style={styles.subText}>
                        Gestionar clientes
                    </Text>
                </Pressable>
                <Pressable style={styles.panelRow} onPress={()=> handlePopUp('activities')}>
                    <Image style={styles.icon} source={require('./../../../../img/sports/crossfit.png')} />
                    <Text style={styles.subText}>
                        Gestiona tus actividades
                    </Text>
                </Pressable>
                <Pressable style={styles.panelRow} onPress={() => handlePopUp('description')}>
                    <Image style={styles.icon} source={require('./../../../../img/notes.png')} />
                    <Text style={styles.subText}>
                        Edita tu descripcion
                    </Text>
                </Pressable>
            </View>
            <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.button} onPress={hideInstructorModal}>
                    <Text style={styles.whiteTextCentered}>Cerrar</Text>
                </TouchableOpacity>
            </View>
            {
                popup === 'activities' ? <Activities handlePopUp={handlePopUp} setStateActivities={setStateActivities} stateActivities={stateActivities} handleActivtiesOnPress={handleActivtiesOnPress} /> : null
            }
            {
                popup === 'description' ? <Description handlePopUp={handlePopUp} description={stateDescription} setDescription={setStateDescription} /> : null
            }
            {
                popup === 'routines' ? <Routines /> : null
            }
            {
                popup === 'clients' ? <Clients /> : null
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

export default InstructorPanel;