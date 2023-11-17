import { View, ScrollView, Image, Text, TextInput, StyleSheet, Modal, TouchableOpacity } from 'react-native';

const AccountPayment = ({ handleUserModal }) => {
    return (
        <Modal visible={true} animationType='slide'>
            <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.button} onPress={() => handleUserModal('')}>
                    <Text style={styles.whiteTextCentered}>Close</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleUserModal('')}>
                    <Text style={styles.whiteTextCentered}>Close</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    )
}

let slate = "#0f172a";
let gray = "#f7f7f7";
const styles = StyleSheet.create({
    container: {
        backgroundColor: gray,
        flex: 1,
    },
    whiteText: {
        fontSize: 20,
        color: 'white',
        fontWeight: "bold",
    },
    whiteTextCentered: {
        fontSize: 20,
        color: 'white',
        textAlign: "center",
        fontWeight: "bold",
    },
    buttonRow: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: slate,
        width: 200,
        height: 50,
        borderRadius: 20,
        marginHorizontal: 20,
        display: "flex",
        marginBottom: 20,
        justifyContent: "center",
    },
})
export default AccountPayment;