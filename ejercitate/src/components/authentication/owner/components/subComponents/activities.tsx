import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const Activites = ({ selectedSports }) => {
    console.log(selectedSports);

    return (
          <View>
            <Text style={styles.text}>
                Actividades:
            </Text>
            <View>
                {
                    selectedSports.map((item, index) => {
                        return <View style={styles.prices}>
                            <Text style={styles.whiteText} key={index}>
                                {item}
                            </Text>
                        </View>
                    })
                }
            </View>
        </View>

    )
}

let slate = "#0f172a";
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
    text: {
        color: slate,
        fontSize: 22,
        fontWeight: "bold",
        paddingLeft: 20,
    },
})

export default Activites;