import { Modal, ScrollView, View, Text, StyleSheet, Image, Pressable, TextInput } from 'react-native';
import { useState } from 'react';

import BranchInfo from './branchInfo';


const Schedules = ({ hideModal }) => {
    const [branchInfoModal, setBranchInfoModal] = useState(false);

    const showInfoModal = () => {
        setBranchInfoModal(true);
    }

    const hideInfoModal = () => {
        setBranchInfoModal(false);
    }

    return (
        <Modal animationType='slide'>
            <ScrollView>
                <View style={styles.container}>
                    <View>
                        <Text style={styles.title}>
                            Que dias va a estar abierto tu gimnasio?
                        </Text>
                    </View>
                    <View style={styles.scheduleContainer}>
                        <View style={styles.schedule}>
                            <Image style={styles.icon} source={require('./../../../../img/calendar.png')} />
                            <Text style={styles.whiteText}>
                                Lunes
                            </Text>
                        </View>
                        <View style={styles.schedule}>
                            <Image style={styles.icon} source={require('./../../../../img/calendar.png')} />
                            <Text style={styles.whiteText}>
                                Martes
                            </Text>
                        </View>
                        <View style={styles.schedule}>
                            <Image style={styles.icon} source={require('./../../../../img/calendar.png')} />
                            <Text style={styles.whiteText}>
                                Miercoles
                            </Text>
                        </View>
                        <View style={styles.schedule}>
                            <Image style={styles.icon} source={require('./../../../../img/calendar.png')} />
                            <Text style={styles.whiteText}>
                                Jueves
                            </Text>
                        </View>
                        <View style={styles.schedule}>
                            <Image style={styles.icon} source={require('./../../../../img/calendar.png')} />
                            <Text style={styles.whiteText}>
                                Viernes
                            </Text>
                        </View>
                        <View style={styles.schedule}>
                            <Image style={styles.icon} source={require('./../../../../img/calendar.png')} />
                            <Text style={styles.whiteText}>
                                Sabado
                            </Text>
                        </View>
                    </View>

                </View>
                <Text style={styles.text}>
                    Horario de apertura:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="useless placeholder"
                    keyboardType="numeric"
                    placeholderTextColor="white"
                />
                <Text style={styles.text}>
                    Horario de cierre:
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder="useless placeholder"
                    keyboardType="numeric"
                    placeholderTextColor="white"
                />

            </ScrollView>
            <View style={styles.registrationRow}>
                <Pressable style={styles.direction} onPress={hideModal}>
                    <Image style={styles.directionIcon} source={require('./../../../../img/prev.png')} />
                    <Text style={styles.arrowText}>Anterior</Text>
                </Pressable>
                <Pressable style={styles.direction} onPress={showInfoModal}>
                    <Text style={styles.arrowText}>Siguiente</Text>
                    <Image style={styles.directionIcon} source={require('./../../../../img/next.png')} />
                </Pressable>
            </View>
            {
                branchInfoModal ? <BranchInfo hideInfoModal={hideInfoModal} /> : null
            }

        </Modal>
    )
}


let slate = "#0f172a";
let gray = "#f7f7f7";
let red = "#dc2626";
let solidGray = "#d6d3d1";
let cyan = "#6889d5";
const styles = StyleSheet.create({
    input: {
        height: 60,
        margin: 12,
        padding: 15,
        borderRadius:10,
        backgroundColor:cyan,
        color:'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    container: {
        flex: 1,
        background: 'white',
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
    },
    scheduleContainer: {
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        flexWrap: "wrap"
    },
    schedule: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: cyan,
        width: 170,
        borderRadius: 10,
        margin: 10,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 25,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    text: {
        color: slate,
        fontSize: 22,
        fontWeight: "bold",
        paddingLeft: 20,
    },
    arrowText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        paddingLeft: 20,
    },
    title: {
        color: slate,
        fontSize: 28,
        fontWeight: "bold",
        textAlign: "center",
        paddingTop: 20,
        paddingBottom: 30,
        marginHorizontal: 10,
    },
    subTitle: {
        color: slate,
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "center",
        paddingTop: 10,
    },
    icon: {
        width: 30,
        height: 30,
        marginRight: 10,
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
        fontSize: 18,
        fontWeight: "bold"
    }
});


export default Schedules;