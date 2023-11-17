import { useState } from 'react';
import { View, StyleSheet, Image, ScrollView, Text, Pressable, Modal, TouchableOpacity } from 'react-native';
import Schedules from './schedules';
const Facilities = ({ hideFacilitiesModal, gymName, selectedSports, navigation, setUserLog, userId }) => {
    const [scheduleModal, setScheduleModal] = useState(false);
    const [selectedFacilities, setSelectedFacilities] = useState([]);

    const handleFacilities = (facility) => {
        if (selectedFacilities.includes(facility)) {
            setSelectedFacilities(selectedFacilities.filter(item => item !== facility));
        } else {
            setSelectedFacilities([...selectedFacilities, facility]);
        }
    };
    
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
                            <TouchableOpacity style={[styles.sport, selectedFacilities.includes('canteen') && styles.selectedFacility
                                ]} onPress={() => handleFacilities('canteen')}>
                                    <Image style={styles.icon} source={require('./../../../../img/facilities/cantina.png')} />
                                    <Text style={styles.text}>
                                        Cantina
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.sport, selectedFacilities.includes('lockers') && styles.selectedFacility
                                ]} onPress={() => handleFacilities('lockers')}>
                                    <Image style={styles.icon} source={require('./../../../../img/facilities/casilleros.png')} />
                                    <Text style={styles.text}>
                                        Casilleros
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.sport, selectedFacilities.includes('showers') && styles.selectedFacility
                                ]} onPress={() => handleFacilities('showers')}>
                                    <Image style={styles.icon} source={require('./../../../../img/facilities/ducha.png')} />
                                    <Text style={styles.text}>
                                        Ducha
                                    </Text>
                                </TouchableOpacity>
                            </ScrollView>

                        </View>
                        <Text style={styles.subTitle}>
                            Actividades fisicas:
                        </Text>
                        <View style={styles.sportsContainer}>
                            <ScrollView horizontal>
                                <TouchableOpacity style={[styles.sport, selectedFacilities.includes('pingpong') && styles.selectedFacility
                                ]} onPress={() => handleFacilities('pingpong')}>
                                    <Image style={styles.icon} source={require('./../../../../img/facilities/ping-pong.png')} />
                                    <Text style={styles.text}>
                                        Ping pong
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.sport, selectedFacilities.includes('sauna') && styles.selectedFacility
                                ]} onPress={() => handleFacilities('sauna')}>
                                    <Image style={styles.icon} source={require('./../../../../img/facilities/sauna.png')} />
                                    <Text style={styles.text}>
                                        Sauna
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.sport, selectedFacilities.includes('spa') && styles.selectedFacility
                                ]} onPress={() => handleFacilities('spa')}>
                                    <Image style={styles.icon} source={require('./../../../../img/facilities/spa.png')} />
                                    <Text style={styles.text}>
                                        Spa
                                    </Text>
                                </TouchableOpacity>
                            </ScrollView>
                        </View>
                        <Text style={styles.subTitle}>
                            Actividades fisicas:
                        </Text>
                        <View style={styles.sportsContainer}>
                            <ScrollView horizontal>
                                <TouchableOpacity style={[styles.sport, selectedFacilities.includes('pingpong') && styles.selectedFacility
                                ]} onPress={() => handleFacilities(' Ping pong')}>
                                    <Image style={styles.icon} source={require('./../../../../img/facilities/ping-pong.png')} />
                                    <Text style={styles.text}>
                                        Ping pong
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.sport, selectedFacilities.includes('sauna') && styles.selectedFacility
                                ]} onPress={() => handleFacilities('sauna')}>
                                    <Image style={styles.icon} source={require('./../../../../img/facilities/sauna.png')} />
                                    <Text style={styles.text}>
                                        Sauna
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.sport, selectedFacilities.includes('spa') && styles.selectedFacility
                                ]} onPress={() => handleFacilities('spa')}>
                                    <Image style={styles.icon} source={require('./../../../../img/facilities/spa.png')} />
                                    <Text style={styles.text}>
                                        Spa
                                    </Text>
                                </TouchableOpacity>
                            </ScrollView>
                        </View>
                    </ScrollView>
                    <View style={styles.registrationRow}>
                        <Pressable style={styles.direction} onPress={hideFacilitiesModal}>
                            <Image style={styles.directionIcon} source={require('./../../../../img/prev.png')} />
                            <Text style={styles.whiteText}>Anterior</Text>
                        </Pressable>
                        <Pressable style={styles.direction} onPress={showModal}>
                            <Text style={styles.whiteText}>Next</Text>
                            <Image style={styles.directionIcon} source={require('./../../../../img/next.png')} />
                        </Pressable>
                    </View>
                </View>
            </Modal>
            {
                scheduleModal ? <Schedules userId={userId} setUserLog={setUserLog} hideModal={hideModal} gymName={gymName} selectedSports={selectedSports} selectedFacilities={selectedFacilities} navigation={navigation}/> : null
            }
 
        </>
    )
}


let slate = "#0f172a";
let golden = "#FFD700";
const styles = StyleSheet.create({
    selectedFacility: {
        borderColor: golden,
        borderWidth: 2,
    },
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
        width: 155,
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