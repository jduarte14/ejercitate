import {View, Text, ScrollView, Image, StyleSheet} from 'react-native';

const Prices =({pricesData})=>{
    const { fiveDays, fourDays, freePass, threeDays, twoDays } = pricesData;

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
                                fiveDays ?
                                    (<View style={styles.prices}>
                                        <Image style={styles.icon} source={require('./../../../../../img/coin.png')} />
                                        <Text style={styles.whiteText}>
                                            {fiveDays} UYU
                                        </Text>
                                    </View>) : null
                            }
                            {
                                fourDays ?
                                    (<View style={styles.prices}>
                                        <Image style={styles.icon} source={require('./../../../../../img/coin.png')} />
                                        <Text style={styles.whiteText}>
                                            {fourDays} UYU
                                        </Text>
                                    </View>) : null
                            }
                            {
                                threeDays ?
                                    (<View style={styles.prices}>
                                        <Image style={styles.icon} source={require('./../../../../../img/coin.png')} />
                                        <Text style={styles.whiteText}>
                                            {threeDays} UYU
                                        </Text>
                                    </View>) : null
                            }
                            {
                                twoDays ?
                                    (<View style={styles.prices}>
                                        <Image style={styles.icon} source={require('./../../../../../img/coin.png')} />
                                        <Text style={styles.whiteText}> {twoDays} UYU </Text>
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
        paddingLeft: 10,
        paddingHorizontal:10,
    },
})

export default Prices;