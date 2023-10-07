import { View, Text, ScrollView, Image, StyleSheet, Modal, Pressable } from 'react-native';

const Prices = ({ setStatePrices, statePrices, handlePopUp }) => {
    const { fiveDays, fourDays, freePass, threeDays, twoDays } = statePrices;
    return (
        <Modal visible={true} animationType="slide">
            <View>
                <Text style={styles.text}>
                    Precios:
                </Text>
                <ScrollView horizontal>
                    {
                        !freePass ?
                            null : (<View style={styles.prices}>
                                <Image style={styles.icon} source={require('./../../../../../img/coin.png')} />
                                <Text style={styles.whiteText}>
                                    {freePass} UYU
                                </Text>
                            </View>)
                    }
                    {
                        !fiveDays ?
                            null : (<View style={styles.prices}>
                                <Image style={styles.icon} source={require('./../../../../../img/coin.png')} />
                                <Text style={styles.whiteText}>
                                    {fiveDays} UYU
                                </Text>
                            </View>)
                    }
                    {
                        !fourDays ?
                            null : (<View style={styles.prices}>
                                <Image style={styles.icon} source={require('./../../../../../img/coin.png')} />
                                <Text style={styles.whiteText}>
                                    {fourDays} UYU
                                </Text>
                            </View>)
                    }
                    {
                        !threeDays ?
                            null : (<View style={styles.prices}>
                                <Image style={styles.icon} source={require('./../../../../../img/coin.png')} />
                                <Text style={styles.whiteText}>
                                    {threeDays} UYU
                                </Text>
                            </View>)
                    }
                    {
                        !twoDays ?
                            null : (<View style={styles.prices}>
                                <Image style={styles.icon} source={require('./../../../../../img/coin.png')} />
                                <Text style={styles.whiteText}> {twoDays} UYU </Text>
                            </View>)
                    }
                </ScrollView>
                <View style={styles.buttonRow}>
                    <Pressable onPress={() => { handlePopUp('') }} style={styles.button}>
                        <Text style={styles.whiteText}>
                            Volver
                        </Text>
                    </Pressable>
                </View>

            </View>
        </Modal>
    )
}

let slate = "#0f172a";
let gray = "#f7f7f7";
let red = "#dc2626";
let golden = "#FFD700";
let cyan = "#6889d5";

const styles = StyleSheet.create({
    prices: {
        backgroundColor: cyan,
        height: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 5,
        margin: 5,
        borderRadius: 10,
        borderColor: golden,
        borderWidth: 2,
        flexDirection: "row",
    },
    whiteText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        paddingHorizontal: 10,
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
    icon: {
        width: 25,
        height: 25,
    },
    text: {
        color: slate,
        fontSize: 22,
        fontWeight: "bold",
        paddingLeft: 10,
        paddingHorizontal: 10,
        textAlign: "center"
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
})

export default Prices;