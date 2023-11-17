import { Modal, ScrollView, View, Text, StyleSheet, Image, Pressable } from 'react-native';

const Logistics = ({ gymName, address, description }) => {
    return (
        <View style={styles.description}>
            <Text style={styles.title}>
                Esto son todos los datos de tu gimnasio:
            </Text>
            <View style={styles.gymInfo}>
                <Text style={styles.subTitle}>
                    Nombre:   {gymName}
                </Text>
                <View>
                    <Text style={styles.subTitle}>
                        {address}
                    </Text>
                </View>


                <Text style={styles.subTitle}>
                    Descripcion:
                </Text>
                <Text style={styles.subTitle}>
                    {description}
                </Text>

            </View>

        </View>


    )
}

export default Logistics;


let slate = "#0f172a";
let gray = "#f7f7f7";
let red = "#dc2626";
let golden = "#FFD700";
let cyan = "#6889d5";

const styles = StyleSheet.create({
    description: {
        backgroundColor: gray,
        padding: 10,
        marginVertical: 15,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 3,
    },
    text: {
        color: slate,
        fontSize: 18,
        fontWeight: "bold",
        paddingLeft: 20,
    },
    title: {
        color: slate,
        fontSize: 26,
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
        marginHorizontal: 10,
    },
    gymInfo: {
        padding: 20,
        marginHorizontal: 20,
    }
});