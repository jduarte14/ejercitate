import { useState } from 'react';
import { View, StyleSheet, Image, ScrollView, Text, Pressable, Modal, TouchableOpacity } from 'react-native';
import Facilities from './facilities';

const Activities = ({  gymName, navigation, setUserLog, hideActivitesModal, userId }) => {

    const [modal, setModal] = useState(false);
    const [selectedSports, setSelectedSports] = useState([]);

    const showFacilitiesModal = () => {
        setModal(true);
    }

    const hideFacilitiesModal = () => {
        setModal(false);
    }

    const handlePress = (sport) => {
        if (selectedSports.includes(sport)) {
            setSelectedSports(selectedSports.filter(item => item !== sport));
        } else {
            setSelectedSports([...selectedSports, sport]);
        }
    };




    return (
        <>
            <Modal animationType="slide">
                <View style={styles.container}>
                    <Text style={styles.title}>
                        Selecciona las actividades de tu Gimnasio:
                    </Text>
                    <Text style={styles.subTitle}>
                        Artes marciales
                    </Text>
                    <ScrollView>
                        <View style={styles.sportsContainer}>
                            <ScrollView horizontal>
                                <TouchableOpacity style={[styles.sport, selectedSports.includes('bjj') && styles.selectedSport
                                ]} onPress={() => handlePress('bjj')}>
                                    <Image style={styles.icon} source={require('./../../../../img/sports/bjj.png')} />
                                    <Text style={styles.text}>
                                        Brazilian JiuJitsu
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.sport, selectedSports.includes('mma') && styles.selectedSport
                                ]} onPress={() => handlePress('mma')}>
                                    <Image style={styles.icon} source={require('./../../../../img/sports/mma.png')} />
                                    <Text style={styles.text}>
                                        MMA
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.sport, selectedSports.includes('boxing') && styles.selectedSport
                                ]} onPress={() => handlePress('boxing')}>
                                    <Image style={styles.icon} source={require('./../../../../img/sports/boxing.png')} />
                                    <Text style={styles.text}>
                                        Boxeo
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.sport, selectedSports.includes('wrestling') && styles.selectedSport
                                ]} onPress={() => handlePress('wrestling')}>
                                    <Image style={styles.icon} source={require('./../../../../img/sports/wrestling.png')} />
                                    <Text style={styles.text}>
                                        Lucha Grecoromana
                                    </Text>
                                </TouchableOpacity>
                            </ScrollView>

                        </View>
                        <Text style={styles.subTitle}>
                            Actividades fisicas:
                        </Text>
                        <View style={styles.sportsContainer}>
                            <ScrollView horizontal>
                                <TouchableOpacity style={[styles.sport, selectedSports.includes('weightlifting') && styles.selectedSport
                                ]} onPress={() => handlePress('weightlifting')}>
                                    <Image style={styles.icon} source={require('./../../../../img/sports/weightlifter.png')} />
                                    <Text style={styles.text}>
                                        Sala
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.sport, selectedSports.includes('calisthenic') && styles.selectedSport
                                ]} onPress={() => handlePress('calisthenic')}>
                                    <Image style={styles.icon} source={require('./../../../../img/sports/calisthenic.png')} />
                                    <Text style={styles.text}>
                                        Calistenia
                                    </Text>
                                </TouchableOpacity>
                            </ScrollView>

                        </View>
                        <Text style={styles.subTitle}>
                            Actividades fisicas:
                        </Text>
                        <View style={styles.sportsContainer}>
                            <ScrollView horizontal>
                                <TouchableOpacity style={[styles.sport, selectedSports.includes('yoga') && styles.selectedSport
                                ]} onPress={() => handlePress('yoga')}>
                                    <Image style={styles.icon} source={require('./../../../../img/sports/yoga.png')} />
                                    <Text style={styles.text}>
                                        Yoga
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.sport, selectedSports.includes('pilates') && styles.selectedSport
                                ]} onPress={() => handlePress('pilates')}>
                                    <Image style={styles.icon} source={require('./../../../../img/sports/pilates.png')} />
                                    <Text style={styles.text}>
                                        Pilates
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.sport, selectedSports.includes('meditation') && styles.selectedSport
                                ]} onPress={() => handlePress('meditation')}>
                                    <Image style={styles.icon} source={require('./../../../../img/sports/meditation.png')} />
                                    <Text style={styles.text}>
                                        Meditacion
                                    </Text>
                                </TouchableOpacity>
                            </ScrollView>

                        </View>
                    </ScrollView>
                    <View style={styles.registrationRow}>
                        <Pressable style={styles.direction} onPress={hideActivitesModal}>
                            <Image style={styles.directionIcon} source={require('./../../../../img/prev.png')} />
                            <Text style={styles.whiteText}>Anterior</Text>
                        </Pressable>
                        <Pressable style={styles.direction} onPress={showFacilitiesModal}>
                            <Text style={styles.whiteText}>Next</Text>
                            <Image style={styles.directionIcon} source={require('./../../../../img/next.png')} />
                        </Pressable>
                    </View>
                </View>
            </Modal>
            {
                modal ? <Facilities setUserLog={setUserLog} userId={userId} hideFacilitiesModal={hideFacilitiesModal} selectedSports={selectedSports} gymName={gymName} navigation={navigation} /> : null
            }
        </>
    )
}

let slate = "#0f172a";
let golden = "#FFD700";

const styles = StyleSheet.create({
    selectedSport: {
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


export default Activities;