import {View, Text, ScrollView, Image, StyleSheet} from 'react-native';

const Prices =({pricesData})=>{
    const { fiveDaysPrice, fourDaysPrice, freePass, threeDaysPrice, twoDaysPrice } = pricesData;

    return (
        <>
            <View>
                        <Text style={styles.text}>
                            Precios:
                        </Text>
                        <ScrollView horizontal>
                            {
                                freePass ?
                                    (<View style={styles.prices}>
                                        <Image style={styles.icon} source={require('./../../../../../img/coin.png')} />
                                        <Text style={styles.whiteText}>
                                            {freePass} UYU
                                        </Text>
                                    </View>) : null
                            }
                            {
                                fiveDaysPrice ?
                                    (<View style={styles.prices}>
                                        <Image style={styles.icon} source={require('./../../../../../img/coin.png')} />
                                        <Text style={styles.whiteText}>
                                            {fiveDaysPrice} UYU
                                        </Text>
                                    </View>) : null
                            }
                            {
                                fourDaysPrice ?
                                    (<View style={styles.prices}>
                                        <Image style={styles.icon} source={require('./../../../../../img/coin.png')} />
                                        <Text style={styles.whiteText}>
                                            {fourDaysPrice} UYU
                                        </Text>
                                    </View>) : null
                            }
                            {
                                threeDaysPrice ?
                                    (<View style={styles.prices}>
                                        <Image style={styles.icon} source={require('./../../../../../img/coin.png')} />
                                        <Text style={styles.whiteText}>
                                            {threeDaysPrice} UYU
                                        </Text>
                                    </View>) : null
                            }
                            {
                                twoDaysPrice ?
                                    (<View style={styles.prices}>
                                        <Image style={styles.icon} source={require('./../../../../../img/coin.png')} />
                                        <Text style={styles.whiteText}> {twoDaysPrice} UYU </Text>
                                    </View>) : null
                            }

                        </ScrollView>
                    </View>
        </>
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
        paddingLeft: 20,
    },
})

export default Prices;