import { Modal, ScrollView, View, Text, StyleSheet, Image, Pressable, TextInput } from 'react-native';
import axios from 'axios';
import { useState } from 'react';

const InstructorInfo = ({ hideModal, username, email, password, avatar, phone,selectedSports, description, name }) => {
    const sendData = async () => {
        try {
            const url = 'http://192.168.1.2:4900/api/instructors';
            const userData = new FormData();
            userData.append("name", name);
            userData.append("phone", phone);
            userData.append("email", email);
            userData.append("avatar", { uri: avatar, type: 'image/jpeg', name: 'avatar.jpg' });
            userData.append("description", description);
            userData.append("username", username);
            userData.append("password", password);
            for (const specialty of selectedSports) {
                userData.append(`specialty[${specialty}]`, "true");
            }
            const response = await axios.post(url, userData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            const data = response.data;
            if (response.status === 200) {
                console.log(data);

            } else {
                console.error('Falta un campo');
            }
        }
        catch (error) {
            console.error(error.message);
        }
    }
    return (
        <Modal animationType='slide'>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.infoCol}>
                        <Text style={styles.subTitle}>
                            {username}
                        </Text>
                        <Text style={styles.subTitle}>
                            {username}
                        </Text>
                        <Text style={styles.subTitle}>
                            {email}
                        </Text>
                        <Text style={styles.subTitle}>
                            {phone}
                        </Text>
                    </View>
                    <View style={styles.imageContainer}>
                        <Image source={{ uri: avatar }} style={styles.image} />
                    </View>
                </View>
            </ScrollView>
            <View style={styles.registrationRow}>
                <Pressable style={styles.direction} onPress={hideModal} >
                    <Image style={styles.directionIcon} source={require('./../../../../img/prev.png')} />
                    <Text style={styles.whiteText}>Anterior</Text>
                </Pressable>
                <Pressable style={styles.direction} onPress={sendData}>
                    <Text style={styles.whiteText}>Confirmar</Text>
                    <Image style={styles.directionIcon} source={require('./../../../../img/next.png')} />
                </Pressable>
            </View>
        </Modal>
    )
}


let slate = "#0f172a";
let gray = "#f7f7f7";
let red = "#dc2626";
let solidGray = "#d6d3d1";
let cyan = "#6889d5";
const styles = StyleSheet.create({
    removeImageButton: {
        backgroundColor: '#dc2626',
        width: 23,
        height: 23,
        marginTop: 5,
        borderRadius: 50,
        position: "absolute",
        top: 0,
        right: 5,
        borderWidth: 2,
        borderColor: "white",
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1,
    },
    removeButtonText: {
        color: 'white',
        fontSize: 11,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    imageContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
        display: "flex",
        flexWrap: "wrap",
        gap: 20,
    },
    imagePreviewContainer: {
        alignItems: 'center',
        position: "relative",
    },
    imagePreview: {
        width: 100,
        height: 100,
        marginBottom: 10,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#0f172a',
    },
    smallText: {
        fontSize: 17,
        fontWeight: "bold",
        color: slate,
        paddingVertical: 10,
    },
    imageButton: {
        backgroundColor: slate,
        paddingVertical: 15,
        paddingHorizontal: 28,
        margin: 5,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        paddingLeft: 5,
        paddingRight: 5,
        textAlign: 'center',
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
    },
    image: {
        width: 150,
        height: 150,
        margin: 5,
        borderRadius: 100,
        marginTop: 20,
    },
    infoCol: {
        display: "flex",
    }
});


export default InstructorInfo;