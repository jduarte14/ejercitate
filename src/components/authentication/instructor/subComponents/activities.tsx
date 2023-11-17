import { useState } from 'react';
import { View, StyleSheet, Image, ScrollView, Text, Pressable, Modal, TouchableOpacity } from 'react-native';

import InstructorInfo from './instructorInfo';

const Activities = ({ hideActivitiesModal, username, email, password, avatar, phone, name, description, setUserLog, id }) => {

    const [modal, setModal] = useState(false);
    const [scheduleModal, setScheduleModal] = useState(false);
    const [selectedSports, setSelectedSports] = useState([]);


    const showModal = () => {
        setModal(true);
    }

    const hideModal = () => {
        setModal(false)
    }

    const handleSports = (sport) => {
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
                        Select the activities you can instruct:
                    </Text>
                    <Text style={styles.subTitle}>
                        Body-building
                    </Text>
                    <ScrollView>
                        <View style={styles.sportsContainer}>
                            <ScrollView horizontal>
                                <TouchableOpacity style={[styles.sport, selectedSports.includes('weightlifting') && styles.selectedFacility
                                ]} onPress={() => handleSports('weightlifting')}>
                                    <Image style={styles.icon} source={require('./../../../../img/sports/weightlifter.png')} />
                                    <Text style={styles.text}>
                                        Weightlifting
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.sport, selectedSports.includes('calisthenic') && styles.selectedFacility
                                ]} onPress={() => handleSports('calisthenic')}>
                                    <Image style={styles.icon} source={require('./../../../../img/sports/calisthenic.png')} />
                                    <Text style={styles.text}>
                                        Calisthenic
                                    </Text>
                                </TouchableOpacity>
                            </ScrollView>
                        </View>
                        <Text style={styles.subTitle}>
                            Stretches:
                        </Text>
                        <View style={styles.sportsContainer}>
                            <ScrollView horizontal>
                                <TouchableOpacity style={[styles.sport, selectedSports.includes('yoga') && styles.selectedFacility
                                ]} onPress={() => handleSports('yoga')}>
                                    <Image style={styles.icon} source={require('./../../../../img/sports/yoga.png')} />
                                    <Text style={styles.text}>
                                        Yoga
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.sport, selectedSports.includes('pilates') && styles.selectedFacility
                                ]} onPress={() => handleSports('pilates')}>
                                    <Image style={styles.icon} source={require('./../../../../img/sports/pilates.png')} />
                                    <Text style={styles.text}>
                                        Pilates
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.sport, selectedSports.includes('calisthenic') && styles.selectedFacility
                                ]} onPress={() => handleSports('calisthenic')}>
                                    <Image style={styles.icon} source={require('./../../../../img/sports/calisthenic.png')} />
                                    <Text style={styles.text}>
                                        Calisthenic
                                    </Text>
                                </TouchableOpacity>
                            </ScrollView>

                        </View>
                        <Text style={styles.subTitle}>
                            Martial arts:
                        </Text>
                        <View style={styles.sportsContainer}>
                            <ScrollView horizontal>
                                <TouchableOpacity style={[styles.sport, selectedSports.includes('mma') && styles.selectedFacility
                                ]} onPress={() => handleSports('mma')}>
                                    <Image style={styles.icon} source={require('./../../../../img/sports/mma.png')} />
                                    <Text style={styles.text}>
                                        MMA
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.sport, selectedSports.includes('wrestling') && styles.selectedFacility
                                ]} onPress={() => handleSports('wrestling')}>
                                    <Image style={styles.icon} source={require('./../../../../img/sports/wrestling.png')} />
                                    <Text style={styles.text}>
                                        Wrestling
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.sport, selectedSports.includes('bjj') && styles.selectedFacility
                                ]} onPress={() => handleSports('bjj')}>
                                    <Image style={styles.icon} source={require('./../../../../img/sports/bjj.png')} />
                                    <Text style={styles.text}>
                                        Brazilian 
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.sport, selectedSports.includes('boxing') && styles.selectedFacility
                                ]} onPress={() => handleSports('boxing')}>
                                    <Image style={styles.icon} source={require('./../../../../img/sports/boxing.png')} />
                                    <Text style={styles.text}>
                                        Boxing
                                    </Text>
                                </TouchableOpacity>
                            </ScrollView>
                        </View>
                    </ScrollView>
                    <View style={styles.registrationRow}>
                        <Pressable style={styles.direction} onPress={hideActivitiesModal} >
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
                modal ? <InstructorInfo id={id} setUserLog={setUserLog} hideModal={hideModal} email={email} selectedSports={selectedSports} name={name} avatar={avatar} description={description} phone={phone} /> : null
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
        paddingHorizontal: 30,
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
        fontSize: 15,
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