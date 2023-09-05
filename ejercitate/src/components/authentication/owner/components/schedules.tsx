import { Modal, ScrollView, View, Text, StyleSheet, Image, Pressable, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';

import BranchInfo from './branchInfo';

const Schedules = ({ hideModal, selectedFacilities, selectedSports, gymName, navigation, setUserLog, userId }) => {
    const [branchInfoModal, setBranchInfoModal] = useState(false);
    const [selectedStartDay, setSelectedStartDay] = useState(null);
    const [selectedEndDay, setSelectedEndDay] = useState(null);

    const [startHour, setSelectedStartHour] = useState(null);
    const [endHour, setSelectedEndHour] = useState(null);

    const handleDayPress = (day) => {
        if (!selectedStartDay) {
            setSelectedStartDay(day);
        } else if (!selectedEndDay) {
            setSelectedEndDay(day);
        } else {
            setSelectedStartDay(day);
            setSelectedEndDay(null);
        }
    }

    const isDaySelected = (day) => {
        return day === selectedStartDay || day === selectedEndDay
    }

    const isDayInRange = (day) => {
        if (selectedStartDay && selectedEndDay) {
            const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
            const startIndex = days.indexOf(selectedStartDay);
            const endIndex = days.indexOf(selectedEndDay);
            const dayIndex = days.indexOf(day);
            return dayIndex > startIndex && dayIndex < endIndex;
        }
        return false;
    }

    const isHourSelected = (hour) => {
        return hour === startHour || hour === endHour;
    }

    const handleStartHour = (hour) => {
        if (startHour === hour) {
            setSelectedStartHour(null); 
        } else {
            setSelectedStartHour(hour);
        }
    }

    const handleFinishHour = (hour) => {
        if (endHour === hour) {
            setSelectedEndHour(null);
        } else {
            setSelectedEndHour(hour);
        }
    }

    const showInfoModal = () => {
        setBranchInfoModal(true);
    }

    const hideInfoModal = () => {
        setBranchInfoModal(false);
    }

    const days = `${selectedStartDay} a ${selectedEndDay}`;
    const hours = `De ${startHour} a ${endHour}`;

    const schedules ={
        days,
        hours
    }

    console.log(schedules);
    

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
                        {['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'].map(day => (
                            <Pressable
                                key={day}
                                style={[
                                    styles.schedule,
                                    isDaySelected(day) && { borderWidth: 2, borderColor: golden },
                                    isDayInRange(day) && { opacity: 0.6 }
                                ]}
                                onPress={() => handleDayPress(day)}
                            >
                                <Image style={styles.icon} source={require('./../../../../img/calendar.png')} />
                                <Text style={styles.whiteText}>
                                    {day}
                                </Text>
                            </Pressable>
                        ))}
                    </View>

                </View>
                <Text style={styles.text}>
                    Agregar horarios:
                </Text>
                <Text style={styles.text}>
                    Apertura:
                </Text>
                <ScrollView horizontal>
                    {['9:00', '9:30', '10:00', '10:30', '11:00', '11:30',
                        '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
                        '15:00', '15:30', '16:00', '16:30', '17:00', '17:30',
                        '18:00', '18:30', '19:00', '19:30', '20:00', '20:30',
                        '21:00', '21:30', '22:00', '22:30', '23:00', '23:30',
                        '00:00'].map(hour => (
                            <Pressable
                                key={hour}
                                style={[styles.schedule, isHourSelected(hour) && { borderWidth: 2, borderColor: golden }]} onPress={() => handleStartHour(hour)}>
                                <Image style={styles.icon} source={require('./../../../../img/calendar.png')} />
                                <Text style={styles.whiteText}>
                                    {hour}
                                </Text>
                            </Pressable>
                        ))}
                </ScrollView>
                <Text style={styles.text}>
                    Cierre:
                </Text>
                <ScrollView horizontal>
                    {
                        ["00:00", "23:30", "23:00", "22:30", "22:00", "21:30",
                            "21:00", "20:30", "20:00", "19:30", "19:00", "18:30",
                            "18:00", "17:30", "17:00", "16:30", "16:00", "15:30",
                            "15:00", "14:30", "14:00", "13:30", "13:00", "12:30",
                            "12:00", "11:30", "11:00", "10:30", "10:00", "9:30", "9:00"].map(hour => (
                                <TouchableOpacity
                                    key={hour}
                                    style={[styles.schedule, isHourSelected(hour) && { borderWidth: 2, borderColor: golden }]}
                                    onPress={() => handleFinishHour(hour)}>
                                    <Image style={styles.icon} source={require('./../../../../img/calendar.png')} />
                                    <Text style={styles.whiteText}>
                                        {hour}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                </ScrollView>
                <View style={styles.hours}>
                    {
                        selectedStartDay && selectedEndDay ? <Text style={styles.title}> {selectedStartDay} a {selectedEndDay}</Text> : null
                    }
                    {
                        startHour && endHour ? <Text style={styles.title}>De {startHour} a {endHour} </Text> : null
                    }
                </View>

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
                branchInfoModal ? <BranchInfo userId={userId} setUserLog={setUserLog} navigation={navigation} hideInfoModal={hideInfoModal} selectedFacilities={selectedFacilities} gymName={gymName} selectedSports={selectedSports} schedules={schedules} /> : null
            }

        </Modal>
    )
}


let slate = "#0f172a";
let cyan = "#6889d5";
let golden = "#FFD700";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        background: 'white',
        justifyContent: "center",
        alignItems: "center",
    },
    scheduleContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
    },
    schedule: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: cyan,
        width: 170,
        borderRadius: 10,
        margin: 10,
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
    icon: {
        width: 30,
        height: 30,
        marginRight: 10,
    },
    registrationRow: {
        flexDirection: "row",
        justifyContent: "space-between",
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
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
    },
    whiteText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold"
    },
});


export default Schedules;