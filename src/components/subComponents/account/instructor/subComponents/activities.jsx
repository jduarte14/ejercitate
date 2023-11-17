import { StyleSheet, Image, Text, TouchableOpacity, ScrollView, Modal, View, Pressable } from "react-native";

const Activities = ({ stateActivities, handlePopUp, handleActivtiesOnPress }) => {
    console.log(stateActivities.calisthenic);


    return (
        <Modal visible={true} animationType="slide">
            <View style={styles.container}>
                <Text style={styles.subTitle}>
                    Actividades
                </Text>
                <ScrollView horizontal>
                    {
                        stateActivities.calisthenic ?
                            <TouchableOpacity style={[styles.sport, stateActivities.hasOwnProperty('meditation') && styles.selectedSport]} onPress={() => handleActivtiesOnPress('meditation')}>
                                <Image style={styles.icon} source={require('./../../../../../img/sports/meditation.png')} />
                                <Text style={styles.sportText}>
                                    Meditacion
                                </Text>
                            </TouchableOpacity> : null
                    }
                            {
                        stateActivities.wrestling ?
                            <TouchableOpacity style={[styles.sport, stateActivities.hasOwnProperty('wrestling') && styles.selectedSport]} onPress={() => handleActivtiesOnPress('meditation')}>
                                <Image style={styles.icon} source={require('./../../../../../img/sports/wrestling.png')} />
                                <Text style={styles.sportText}>
                                    Lucha grecoromana
                                </Text>
                            </TouchableOpacity> : null
                    }
                            {
                        stateActivities.boxing ?
                            <TouchableOpacity style={[styles.sport, stateActivities.hasOwnProperty('boxing') && styles.selectedSport]} onPress={() => handleActivtiesOnPress('meditation')}>
                                <Image style={styles.icon} source={require('./../../../../../img/sports/boxing.png')} />
                                <Text style={styles.sportText}>
                                    Boxeo
                                </Text>
                            </TouchableOpacity> : null
                    }
                            {
                        stateActivities.mma ?
                            <TouchableOpacity style={[styles.sport, stateActivities.hasOwnProperty('mma') && styles.selectedSport]} onPress={() => handleActivtiesOnPress('meditation')}>
                                <Image style={styles.icon} source={require('./../../../../../img/sports/mma.png')} />
                                <Text style={styles.sportText}>
                                    MMA
                                </Text>
                            </TouchableOpacity> : null
                    }
                          {
                        stateActivities.yoga ?
                            <TouchableOpacity style={[styles.sport, stateActivities.hasOwnProperty('yoga') && styles.selectedSport]} onPress={() => handleActivtiesOnPress('meditation')}>
                                <Image style={styles.icon} source={require('./../../../../../img/sports/yoga.png')} />
                                <Text style={styles.sportText}>
                                    Yoga
                                </Text>
                            </TouchableOpacity> : null
                    }
                    
                </ScrollView>
                <ScrollView horizontal>
                {
                        stateActivities.pilates ?
                            <TouchableOpacity style={[styles.sport, stateActivities.hasOwnProperty('pilates') && styles.selectedSport]} onPress={() => handleActivtiesOnPress('meditation')}>
                                <Image style={styles.icon} source={require('./../../../../../img/sports/pilates.png')} />
                                <Text style={styles.sportText}>
                                    Pilates
                                </Text>
                            </TouchableOpacity> : null
                    }
                          {
                        stateActivities.weightlifting ?
                            <TouchableOpacity style={[styles.sport, stateActivities.hasOwnProperty('weightlifting') && styles.selectedSport]} onPress={() => handleActivtiesOnPress('meditation')}>
                                <Image style={styles.icon} source={require('./../../../../../img/sports/weightlifter.png')} />
                                <Text style={styles.sportText}>
                                    Alterofilia
                                </Text>
                            </TouchableOpacity> : null
                    }
                          {
                        stateActivities.yoga ?
                            <TouchableOpacity style={[styles.sport, stateActivities.hasOwnProperty('yoga') && styles.selectedSport]} onPress={() => handleActivtiesOnPress('meditation')}>
                                <Image style={styles.icon} source={require('./../../../../../img/sports/yoga.png')} />
                                <Text style={styles.sportText}>
                                    Yoga
                                </Text>
                            </TouchableOpacity> : null
                    }
                          {
                        stateActivities.bjj?
                            <TouchableOpacity style={[styles.sport, stateActivities.hasOwnProperty('bjj') && styles.selectedSport]} onPress={() => handleActivtiesOnPress('meditation')}>
                                <Image style={styles.icon} source={require('./../../../../../img/sports/bjj.png')} />
                                <Text style={styles.sportText}>
                                    Brazilian Jiujitsu
                                </Text>
                            </TouchableOpacity> : null
                    }

                </ScrollView>
            </View>
            <View style={styles.buttonRow}>
                <Pressable onPress={() => { handlePopUp('') }} style={styles.button}>
                    <Text style={styles.whiteText}>
                        Go back
                    </Text>
                </Pressable>
                <Pressable onPress={() => { handlePopUp('') }} style={styles.button}>
                    <Text style={styles.whiteText}>
                        Confirm
                    </Text>
                </Pressable>
            </View>
        </Modal>
    )
}

let slate = "#0f172a";
let gray = "#f7f7f7";
let golden = "#FFD700";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    selectedSport: {
        borderColor: golden,
        borderWidth: 2,
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
    sportText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 14,
        paddingLeft: 10,
    },
    sport: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: slate,
        width: 150,
        borderRadius: 10,
        margin: 10,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center", 
    },
    subTitle: {
        fontWeight: "bold",
        color: slate,
        fontSize: 25,
    },
    buttonRow: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
        background: "white",
        flexDirection: "row"
    },
    whiteText: {
        fontSize: 20,
        color: 'white',
        fontWeight: "bold",
    },
    button: {
        backgroundColor: slate,
        width: 150,
        height: 50,
        borderRadius: 20,
        marginHorizontal: 5,
        display: "flex",
        marginBottom: 20,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default Activities;