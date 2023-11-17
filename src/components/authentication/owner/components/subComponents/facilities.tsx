import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const Facilities = ({ selectedFacilities }) => {
    return (
        <View>

            <Text style={styles.text}>
                Facilidades:
            </Text>
            {
                selectedFacilities.map((item, index) => {
                    return <View style={styles.prices}>
                        <Text style={styles.whiteText} key={index}>
                            {item}
                        </Text>
                    </View>
                })
            }
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
        paddingLeft: 10,
        paddingHorizontal:10,
    },
})

export default Facilities;