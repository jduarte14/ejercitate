import { Modal, ScrollView, View, Text, StyleSheet, Image, Pressable, TextInput } from 'react-native';
import { useState } from 'react';

import GymInfo from './gymInfo';

const Prices = ({ hidePricesModal }) => {
    const [modal, setModal] = useState(false);

    const showInfoModal = () => {
        setModal(true);
    }
    const hideInfoModal = () => {
        setModal(false);
    }

    return (
        <Modal animationType='slide'>
            <ScrollView>
                <View style={styles.pricesContainer}>
                    <Text style={styles.title}>
                        Agrega los precios a los dias de asistencia
                    </Text>
                    <View style={styles.pricesRow}>
                        <Image style={styles.icon} source={require('./../../../../img/calendar.png')} />
                        <Text style={styles.whiteText}>
                            Dos dias
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Agregar precio"
                            placeholderTextColor="white"
                        />
                    </View>
                    <View style={styles.pricesRow}>
                        <Image style={styles.icon} source={require('./../../../../img/calendar.png')} />
                        <Text style={styles.whiteText}>
                            Tres dias
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Agregar precio"
                            placeholderTextColor="white"
                        />
                    </View>
                    <View style={styles.pricesRow}>
                        <Image style={styles.icon} source={require('./../../../../img/calendar.png')} />
                        <Text style={styles.whiteText}>
                            Cuatro dias
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Agregar precio"
                            placeholderTextColor="white"
                        />
                    </View>
                    <View style={styles.pricesRow}>
                        <Image style={styles.icon} source={require('./../../../../img/calendar.png')} />
                        <Text style={styles.whiteText}>
                            Cinco dias
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Agregar precio"
                            placeholderTextColor="white"
                        />
                    </View>
                    <View style={styles.pricesRow}>
                        <Image style={styles.icon} source={require('./../../../../img/calendar.png')} />
                        <Text style={styles.whiteText}>
                            Seis dias
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Agregar precio"
                            placeholderTextColor="white"
                        />
                    </View>
                    <View style={styles.pricesRow}>
                        <Image style={styles.icon} source={require('./../../../../img/calendar.png')} />
                        <Text style={styles.whiteText}>
                            Pase libre
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Agregar precio"
                            placeholderTextColor="white"
                        />
                    </View>
                </View>
                <View style={styles.registrationRow}>
                    <Pressable style={styles.direction} onPress={hidePricesModal}>
                        <Image style={styles.directionIcon} source={require('./../../../../img/prev.png')} />
                        <Text style={styles.whiteText}>Anterior</Text>
                    </Pressable>
                    <Pressable style={styles.direction} onPress={showInfoModal}>
                        <Text style={styles.whiteText}>Siguiente</Text>
                        <Image style={styles.directionIcon} source={require('./../../../../img/next.png')} />
                    </Pressable>
                </View>
            </ScrollView>
            {
                modal ? <GymInfo hideInfoModal={hideInfoModal} /> : null
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
        height: 40,
        fontWeight: "bold",
        paddingLeft: 10,
        color: "white",
    },
    pricesContainer: {
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
    pricesRow: {
        display: "flex",
        paddingVertical: 15,
        borderRadius: 10,
        paddingLeft: 20,
        flexDirection: "row",
        marginHorizontal: 20,
        width: 350,
        marginVertical: 20,
        backgroundColor: cyan,
        alignItems: "center",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
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
    },
    registrationRow: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        marginHorizontal: 20,
        width: 350,
        marginVertical: 20,
    },
});

export default Prices;