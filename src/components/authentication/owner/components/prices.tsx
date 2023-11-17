import { Modal, ScrollView, View, Text, StyleSheet, Image, Pressable, TextInput } from 'react-native';
import { useState } from 'react';

import GymInfo from './gymInfo';

const Prices = ({ hidePricesModal, address, description, gymName, schedules, selectedSports, selectedFacilities, images, navigation, setUserLog, userId }) => {
    const [modal, setModal] = useState(false);

    const [twoDays, setTwoDaysPrice] = useState('');
    const [threeDays, setThreeDaysPrice] = useState('');
    const [fourDays, setFourDaysPrice] = useState('');
    const [fiveDays, setFiveDaysPrice] = useState('');
    const [freePass, setFreePass] = useState('');

    const showInfoModal = () => {
        setModal(true);
    }
    const hideInfoModal = () => {
        setModal(false);
    }

    const prices = {
        twoDays,
        threeDays,
        fourDays,
        fiveDays,
        freePass,
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
                            onChangeText={setTwoDaysPrice}
                            value={twoDays}
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
                            onChangeText={setThreeDaysPrice}
                            value={threeDays}
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
                            onChangeText={setFourDaysPrice}
                            value={fourDays}
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
                            onChangeText={setFiveDaysPrice}
                            value={fiveDays}
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
                            onChangeText={setFreePass}
                            value={freePass}
                        />
                    </View>
                </View>
                <View>
                    <Text style={styles.smallText}>
                        Los precios son opcionales puedes agregar el precio por la cantidad de dias que desees.
                    </Text>
                </View>
                <View style={styles.registrationRow}>
                    <Pressable style={styles.direction} onPress={hidePricesModal}>
                        <Image style={styles.directionIcon} source={require('./../../../../img/prev.png')} />
                        <Text style={styles.whiteText}>Anterior</Text>
                    </Pressable>
                    <Pressable style={styles.direction} onPress={showInfoModal}>
                        <Text style={styles.whiteText}>Next</Text>
                        <Image style={styles.directionIcon} source={require('./../../../../img/next.png')} />
                    </Pressable>
                </View>

            </ScrollView>
            {
                modal ? <GymInfo setUserLog={setUserLog} userId={userId} navigation={navigation} hideInfoModal={hideInfoModal} address={address} images={images} description={description} prices={prices} selectedFacilities={selectedFacilities} selectedSports={selectedSports} schedules={schedules} gymName={gymName} /> : null
            }
        </Modal>
    )
}

let slate = "#0f172a";
let cyan = "#6889d5";
const styles = StyleSheet.create({
    input: {
        height: 40,
        fontWeight: "bold",
        paddingLeft: 10,
        color: "white",
        width: 300,
    },
    smallText: {
        fontSize: 14,
        fontWeight: "bold",
        color: slate,
        textAlign: "center",
        marginHorizontal: 20,
        lineHeight: 20,
    },
    pricesContainer: {
        flex: 1,
        background: 'white',
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
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