import { Modal, ScrollView, View, Text, StyleSheet, Image, Pressable, TextInput } from 'react-native';
import { useState } from 'react';

import Prices from './prices';

const BranchInfo = ({ hideInfoModal }) => {

    const [pricesModal, setPricesModal] = useState(false);

    const showPricesModal =()=>{
        setPricesModal(true);
    }

    const hidePricesModal =()=>{
        setPricesModal(false);
    }

    return (
        <Modal animationType='slide'>
            <ScrollView>
                <View style={styles.container}>
                    <View>
                        <View style={styles.placeHolderRow}>
                            <View style={styles.iconContainer}>
                                <Image style={styles.icon} source={require('./../../../../img/gym_location.png')} />
                            </View>
                            <TextInput
                                style={styles.input}
                                placeholder="Agrega la direccion de tu gimnasio"
                                placeholderTextColor="white"
                            />
                        </View>

                    </View>
                    <View style={styles.slateContainer}>
                        <View style={styles.placeHolderRow}>
                            <View style={styles.iconContainer}>
                                <Image style={styles.icon} source={require('./../../../../img/description.png')} />
                            </View>
                            <Text style={styles.subWhiteText}>
                                Agrega la descripcion de tu gimnasio
                            </Text>
                        </View>
                        <View>
                            <TextInput style={styles.textArea}
                                placeholder="Agrega la descripcion de tu gimnasio"
                                placeholderTextColor="white"
                                numberOfLines={4} />
                        </View>

                    </View>

                </View>
                <Pressable style={styles.save}>
                    <Text style={styles.whiteText}>
                        Guardar
                    </Text>
                </Pressable>
            </ScrollView>
            <View style={styles.registrationRow}>
                <Pressable style={styles.direction} onPress={hideInfoModal}>
                    <Image style={styles.directionIcon} source={require('./../../../../img/prev.png')} />
                    <Text style={styles.whiteText}>Anterior</Text>
                </Pressable>
                <Pressable style={styles.direction} onPress={showPricesModal}>
                    <Text style={styles.whiteText}>Siguiente</Text>
                    <Image style={styles.directionIcon} source={require('./../../../../img/next.png')} />
                </Pressable>
            </View>
            {
                pricesModal ? <Prices hidePricesModal={hidePricesModal} />:null
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
    textArea: {
        height: 60,
        marginTop: 25,
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
        minHeight: 250,
    },
    container: {
        flex: 1,
        background: 'white',
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        paddingHorizontal: 5,
        paddingVertical: 50,
    },
    scheduleContainer: {
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        flexWrap: "wrap"
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
        width: 25,
        height: 25,
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
    save: {
        backgroundColor: slate,
        borderRadius: 30,
        height: 50,
        marginHorizontal: 50,
        marginTop: 30,
        alignItems: "center",
        justifyContent: "center",
    },
    whiteText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold"
    },
    subWhiteText: {
        color: "white",
        fontSize: 13,
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
    },
    iconContainer: {
        backgroundColor: gray,
        borderRadius: 100,
        width: 40,
        height: 40,
        display: "flex",
        justifyContent: "center",
        alignItems: 'center'
    },
    slateContainer: {
        backgroundColor: slate,
        borderRadius: 10,
        marginTop: 20,
        padding: 10,
    }
});


export default BranchInfo;