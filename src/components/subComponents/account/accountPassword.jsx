import { View, ScrollView, Image, Text, TextInput, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import { useState } from 'react';

const AccountPassword = ({ handleUserModal, setUserPassword, userPassword, patchData }) => {
    const [prevPassword, setPrevPassword] = useState('');
    return (
        <Modal visible={true} animationType='slide'>
            <View style={styles.container}>
                <Text style={styles.title}>
                    Add a new password
                </Text>
                <TextInput
                    placeholder="Add you email"
                    onChangeText={setPrevPassword}
                    value={prevPassword}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Confirm your new email"
                    onChangeText={setUserPassword}
                    value={userPassword}
                    style={styles.input}
                />
                {
                    prevPassword != '' ? <Text style={styles.text}>
                        {
                            prevPassword === userPassword ? "Passwords are matching" : "Password are not matching"
                        }
                    </Text> : null
                }

            </View>
            <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.button} onPress={() => handleUserModal('')}>
                    <Text style={styles.whiteTextCentered}>Close</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={patchData}>
                    <Text style={styles.whiteTextCentered}>Confirm</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    )
}

let slate = "#0f172a";
let gray = "#f7f7f7";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 25,
        textAlign: "center",
        fontWeight: "bold",
        marginBottom: 20,
        marginTop: 20,
    },
    text: {
        color: slate,
        fontWeight: "bold",
        fontSize: 17,
        paddingLeft: 10,
        paddingTop: 10,
    },
    buttonRow: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    input: {
        width: 310,
        height: 55,
        borderWidth: 2,
        borderColor: slate,
        borderRadius: 25,
        paddingHorizontal: 10,
        marginBottom: 15,
        textTransform:"lowercase",
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
    button: {
        backgroundColor: slate,
        width: 150,
        height: 50,
        borderRadius: 20,
        marginHorizontal: 15,
        display: "flex",
        marginBottom: 20,
        justifyContent: "center",
    },
})
export default AccountPassword;