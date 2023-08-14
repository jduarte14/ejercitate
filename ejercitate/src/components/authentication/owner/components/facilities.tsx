import { useState } from 'react';
import { View, StyleSheet, Image, ScrollView, Text, Pressable, Modal } from 'react-native';
import Schedules from './schedules';
const Facilities = ({ hideFacilitiesModal }) => {
    const [scheduleModal, setScheduleModal] = useState(false);

    const showModal = () => {
        setScheduleModal(true);
    }

    const hideModal = () => {
        setScheduleModal(false);
    }

    return (
        <>
            <Modal animationType="slide">
                <View style={styles.container}>
                    <Text style={styles.title}>
                        Selecciona las facilidades de tu Gimnasio:
                    </Text>
                    <Text style={styles.subTitle}>
                        Artes marciales
                    </Text>
                    <ScrollView>
                        <View style={styles.sportsContainer}>
                            <ScrollView horizontal>
                                <View style={styles.sport}>
                                    <Image style={styles.icon} source={require('./../../../../img/facilities/cantina.png')} />
                                    <Text style={styles.text}>
                                        Cantina
                                    </Text>
                                </View>
                                <View style={styles.sport}>
                                    <Image style={styles.icon} source={require('./../../../../img/facilities/casilleros.png')} />
                                    <Text style={styles.text}>
                                        Casilleros
                                    </Text>
                                </View>
                                <View style={styles.sport}>
                                    <Image style={styles.icon} source={require('./../../../../img/facilities/ducha.png')} />
                                    <Text style={styles.text}>
                                        Ducha
                                    </Text>
                                </View>
                            </ScrollView>

                        </View>
                        <Text style={styles.subTitle}>
                            Actividades fisicas:
                        </Text>
                        <View style={styles.sportsContainer}>
                            <ScrollView horizontal>
                                <View style={styles.sport}>
                                    <Image style={styles.icon} source={require('./../../../../img/facilities/ping-pong.png')} />
                                    <Text style={styles.text}>
                                        Ping pong
                                    </Text>
                                </View>
                                <View style={styles.sport}>
                                    <Image style={styles.icon} source={require('./../../../../img/facilities/sauna.png')} />
                                    <Text style={styles.text}>
                                        Sauna
                                    </Text>
                                </View>
                                <View style={styles.sport}>
                                    <Image style={styles.icon} source={require('./../../../../img/facilities/spa.png')} />
                                    <Text style={styles.text}>
                                        Spa
                                    </Text>
                                </View>
                            </ScrollView>
                        </View>
                        <Text style={styles.subTitle}>
                            Actividades fisicas:
                        </Text>
                        <View style={styles.sportsContainer}>
                            <ScrollView horizontal>
                                <View style={styles.sport}>
                                    <Image style={styles.icon} source={require('./../../../../img/facilities/ping-pong.png')} />
                                    <Text style={styles.text}>
                                        Ping pong
                                    </Text>
                                </View>
                                <View style={styles.sport}>
                                    <Image style={styles.icon} source={require('./../../../../img/facilities/sauna.png')} />
                                    <Text style={styles.text}>
                                        Sauna
                                    </Text>
                                </View>
                                <View style={styles.sport}>
                                    <Image style={styles.icon} source={require('./../../../../img/facilities/spa.png')} />
                                    <Text style={styles.text}>
                                        Spa
                                    </Text>
                                </View>
                            </ScrollView>
                        </View>
                    </ScrollView>
                    <View style={styles.registrationRow}>
                        <Pressable style={styles.direction} onPress={hideFacilitiesModal}>
                            <Image style={styles.directionIcon} source={require('./../../../../img/prev.png')} />
                            <Text style={styles.whiteText}>Anterior</Text>
                        </Pressable>
                        <Pressable style={styles.direction} onPress={showModal}>
                            <Text style={styles.whiteText}>Siguiente</Text>
                            <Image style={styles.directionIcon} source={require('./../../../../img/next.png')} />
                        </Pressable>
                    </View>
                </View>
            </Modal>
            {
                scheduleModal ? <Schedules hideModal={hideModal} /> : null
            }

        </>
    )
}

let slate = "#0f172a";
let gray = "#f7f7f7";
let red = "#dc2626";
let solidGray = "#d6d3d1";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        background: 'white',
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
    },
    sportsContainer: {
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    },
    sport: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: slate,
        width: 170,
        borderRadius: 10,
        margin: 10,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 25,
    },
    text: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold"
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
        width: 40,
        height: 40,
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
        fontSize: 15,
        fontWeight: "bold"
    }
});


export default Facilities;