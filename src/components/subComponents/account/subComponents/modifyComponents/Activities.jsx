import { StyleSheet, Image, Text, TouchableOpacity, ScrollView, Modal, View, Pressable } from "react-native";

const Activities = ({ selectedFacilities, selectedSports, handleSportsOnPress, handleFacilitiesOnPress, handlePopUp }) => {
  

    return (
        <Modal visible={true} animationType="slide">
            <View style={styles.container}>
                <Text style={styles.subTitle}>
                    Activities:
                </Text>
                <ScrollView horizontal>
                    <TouchableOpacity style={[styles.sport, selectedSports.hasOwnProperty('meditation') && styles.selectedSport
                    ]} onPress={() => handleSportsOnPress('meditation')}>
                        <Image style={styles.icon} source={require('./../../../../../img/sports/meditation.png')} />
                        <Text style={styles.sportText}>
                            Meditation
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.sport, selectedSports.hasOwnProperty('calisthenic') && styles.selectedSport
                    ]} onPress={() => handleSportsOnPress('calisthenic')}>
                        <Image style={styles.icon} source={require('./../../../../../img/sports/calisthenic.png')} />
                        <Text style={styles.sportText}>
                            Calisthenic
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.sport, selectedSports.hasOwnProperty('pilates') && styles.selectedSport
                    ]} onPress={() => handleSportsOnPress('pilates')}>
                        <Image style={styles.icon} source={require('./../../../../../img/sports/pilates.png')} />
                        <Text style={styles.sportText}>
                            Pilates
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.sport, selectedSports.hasOwnProperty('boxing') && styles.selectedSport
                    ]} onPress={() => handleSportsOnPress('boxing')}>
                        <Image style={styles.icon} source={require('./../../../../../img/sports/boxing.png')} />
                        <Text style={styles.sportText}>
                            Boxing
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.sport, selectedSports.hasOwnProperty('bjj') && styles.selectedSport
                    ]} onPress={() => handleSportsOnPress('bjj')}>
                        <Image style={styles.icon} source={require('./../../../../../img/sports/bjj.png')} />
                        <Text style={styles.sportText}>
                            Brazilian Jiujitsu
                        </Text>
                    </TouchableOpacity>
                </ScrollView>
                <ScrollView horizontal>
                <TouchableOpacity style={[styles.sport, selectedSports.hasOwnProperty('mma') && styles.selectedSport
                    ]} onPress={() => handleSportsOnPress('mma')}>
                        <Image style={styles.icon} source={require('./../../../../../img/sports/mma.png')} />
                        <Text style={styles.sportText}>
                            MMA
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.sport, selectedSports.hasOwnProperty('wrestling') && styles.selectedSport
                    ]} onPress={() => handleSportsOnPress('wrestling')}>
                        <Image style={styles.icon} source={require('./../../../../../img/sports/wrestling.png')} />
                        <Text style={styles.sportText}>
                            Wrestling
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.sport, selectedSports.hasOwnProperty('weightlifting') && styles.selectedSport
                    ]} onPress={() => handleSportsOnPress('weightlifting')}>
                        <Image style={styles.icon} source={require('./../../../../../img/sports/weightlifter.png')} />
                        <Text style={styles.sportText}>
                            Weightlifting
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.sport, selectedSports.hasOwnProperty('yoga') && styles.selectedSport
                    ]} onPress={() => handleSportsOnPress('yoga')}>
                        <Image style={styles.icon} source={require('./../../../../../img/sports/yoga.png')} />
                        <Text style={styles.sportText}>
                            Yoga
                        </Text>
                    </TouchableOpacity>
                </ScrollView>
                <Text style={styles.subTitle}>
                    Facilities:
                </Text>
                <ScrollView horizontal style={styles.ScrollView}>
                    <TouchableOpacity onPress={() => handleFacilitiesOnPress('showers')} style={[styles.sport, selectedFacilities.hasOwnProperty('showers') && styles.selectedSport]}>
                        <Image style={styles.icon} source={require('./../../../../../img/facilities/ducha.png')} />
                        <Text style={styles.sportText}>
                            Showers
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleFacilitiesOnPress('lockers')} style={[styles.sport, selectedFacilities.hasOwnProperty('lockers') && styles.selectedSport]}>
                        <Image style={styles.icon} source={require('./../../../../../img/facilities/casilleros.png')} />
                        <Text style={styles.sportText}>
                            Lockers
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleFacilitiesOnPress('canteen')} style={[styles.sport, selectedFacilities.hasOwnProperty('canteen') && styles.selectedSport]}>
                        <Image style={styles.icon} source={require('./../../../../../img/facilities/cantina.png')} />
                        <Text style={styles.sportText}>
                            Canteen
                        </Text>
                    </TouchableOpacity>
                  
                </ScrollView>
                <ScrollView horizontal>
                <TouchableOpacity onPress={() => handleFacilitiesOnPress('pingpong')} style={[styles.sport, selectedFacilities.hasOwnProperty('pingpong') && styles.selectedSport]}>
                        <Image style={styles.icon} source={require('./../../../../../img/facilities/ping-pong.png')} />
                        <Text style={styles.sportText}>
                            Pingpong
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleFacilitiesOnPress('spa')} style={[styles.sport, selectedFacilities.hasOwnProperty('spa') && styles.selectedSport]}>
                        <Image style={styles.icon} source={require('./../../../../../img/facilities/sauna.png')} />
                        <Text style={styles.sportText}>
                            Spa
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleFacilitiesOnPress('sauna')} style={[styles.sport, selectedFacilities.hasOwnProperty('sauna') && styles.selectedSport]}>
                        <Image style={styles.icon} source={require('./../../../../../img/facilities/spa.png')} />
                        <Text style={styles.sportText}>
                            Sauna
                        </Text>
                    </TouchableOpacity>
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
    scrollView: {
        height: 11,
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
        marginTop: 25,
    },
    subTitle: {
        fontWeight: "bold",
        color: slate,
        fontSize: 25,
        paddingTop:65,
        paddingBottom:30,
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