import { StyleSheet, View, TextInput, Image, Text, Modal, Pressable, ScrollView } from "react-native";

const GymInfo = ({ setStateAddress, setStateDescription, setStateHours, setStateDays, stateDescription, stateAddress, stateHours, stateDays, handlePopUp }) => {
    return (
        <Modal  visible={true} animationType="slide">
            <ScrollView style={styles.scrollView}>
                <View style={styles.slateContainer}>
                    <View style={styles.placeHolderRow}>
                        <View style={styles.iconContainer}>
                            <Image style={styles.icon} source={require('./../../../../../img/description.png')} />
                        </View>
                        <Text style={styles.subWhiteText}>
                            Agrega la descripcion de tu gimnasio
                        </Text>
                    </View>
                    <View>
                        <TextInput style={styles.textArea}
                            placeholder="Agrega la descripcion de tu gimnasio"
                            placeholderTextColor="white"
                            numberOfLines={4}
                            value={stateDescription}
                            onChangeText={(text) => setStateDescription(text)} />
                    </View>
                </View>
                <View style={styles.slateContainer}>
                    <View style={styles.placeHolderRow}>
                        <View style={styles.iconContainer}>
                            <Image style={styles.icon} source={require('./../../../../../img/gym_location.png')} />
                        </View>
                        <Text style={styles.subWhiteText}>
                            Direccion
                        </Text>
                    </View>
                    <View>
                        <TextInput style={styles.whiteInput}
                            placeholder=""
                            placeholderTextColor="white"
                            numberOfLines={4}
                            value={stateAddress}
                            onChangeText={(text) => setStateAddress(text)} />
                    </View>
                </View>
                <View style={styles.slateContainer}>
                    <View style={styles.placeHolderRow}>
                        <View style={styles.iconContainer}>
                            <Image style={styles.icon} source={require('./../../../../../img/clock.png')} />
                        </View>
                        <Text style={styles.subWhiteText}>
                            Horarios
                        </Text>
                    </View>
                    <View style={styles.inputRow}>
                        <Text style={styles.paddedText}>
                            Dias:
                        </Text>
                        <TextInput style={styles.whiteInput}
                            placeholder="Escribe los dias de asistencia"
                            placeholderTextColor="white"
                            numberOfLines={4}
                            value={stateDays}
                            onChangeText={(text) => setStateDays(text)} />
                    </View>
                    <View style={styles.inputRow}>
                        <Text style={styles.paddedText}>
                            Horarios:
                        </Text>
                        <TextInput style={styles.whiteInput}
                            placeholder="Escribe el horario de el gimnasio"
                            placeholderTextColor="white"
                            numberOfLines={4}
                            value={stateHours}
                            onChangeText={(text) => setStateHours(text)} />
                    </View>

                </View>
            </ScrollView>
            <View style={styles.buttonRow}>
                <Pressable onPress={() => { handlePopUp('') }} style={styles.button}>
                    <Text style={styles.whiteText}>
                        Volver
                    </Text>
                </Pressable>
            </View>
        </Modal>
    )
}

let slate = "#0f172a";
let gray = "#f7f7f7";
const styles = StyleSheet.create({
    scrollView:{
        flex:1,
    },
    slateContainer: {
        backgroundColor: slate,
        borderRadius: 10,
        width: 350,
        marginTop: 10,
        marginBottom: 50,
        padding: 15,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginHorizontal:15,
    },
    input: {
        height: 60,
        margin: 12,
        padding: 15,
        borderRadius: 10,
        backgroundColor: slate,
        color: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        fontWeight: "bold",
    },
    whiteInput: {
        height: 50,
        margin: 12,
        padding: 10,
        minWidth:250,
        borderRadius: 10,
        backgroundColor: 'white',
        color: slate,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        fontWeight: "bold",
    },
    textArea: {
        height: 60,
        marginTop: 25,
        padding: 15,
        borderRadius: 10,
        backgroundColor: "white",
        color: slate,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        fontWeight: "bold",
        minHeight: 80,
        marginBottom:20,
    },
    iconContainer: {
        backgroundColor: gray,
        borderRadius: 50,
        padding: 15,
        margin: 5,
        width: 45,
        height: 45,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row"
    },
    icon: {
        width: 30,
        height: 30,
    },
    subWhiteText: {
        color: "white",
        fontSize: 15,
        fontWeight: "bold",
        marginHorizontal: 20,
    },
    placeHolderRow: {
        display: 'flex',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: slate,
        marginTop: 10,
        borderRadius: 10,
        height: 60,
        paddingLeft: 20,
        paddingRight: 20,
        marginRight:"auto",
        paddingBottom:10,
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
    paddedText:{
        fontSize: 15,
        fontWeight: "bold",
        marginHorizontal: 20,
        color:"white",
        borderRadius:5,
        marginTop:20,
        textAlign:"left"
    }
})

export default GymInfo;