import { Modal, ScrollView, View, Text, StyleSheet, Image, Pressable, TextInput } from 'react-native';
import axios from 'axios';
//Helper
import setLoggedSession from './../../helpers/setLoggedSession';

const InstructorInfo = ({ hideModal, email, phone, selectedSports, description, name,avatar, id, setUserLog }) => {
    const sendData = async () => {
        try {
            const url = 'https://ejercitatebackend-production.up.railway.app/api/instructors';
            const userData = new FormData();
            userData.append("name", name);
            userData.append("phone", phone);
            userData.append("email", email);
            userData.append("description", description);
            userData.append('userId', id);
            userData.append("avatar", {uri:avatar,type:'image/jpeg',name:'avatar.jpg'});
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
                let instructorId = data.instructor.id;
                setUserLog(true);
                setLoggedSession(instructorId, 'instructorId');
                setLoggedSession(id, 'id');
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
                    <Text style={styles.whiteText}>Previous</Text>
                </Pressable>
                <Pressable style={styles.direction} onPress={sendData}>
                    <Text style={styles.whiteText}>Confirm</Text>
                    <Image style={styles.directionIcon} source={require('./../../../../img/next.png')} />
                </Pressable>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 5,
        paddingVertical: 50,
    },
    infoCol: {
        display: "flex",
    },
    subTitle: {
        color: "#0f172a",
        fontSize: 22,
        fontWeight: "bold",
        paddingTop: 10,
    },
    imageContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
        gap: 20,
    },
    image: {
        width: 150,
        height: 150,
        margin: 5,
        borderRadius: 100,
        marginTop: 20,
    },
    registrationRow: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        marginHorizontal: 20,
        width: 350,
        marginVertical: 20,
    },
    direction: {
        backgroundColor: "#0f172a",
        borderRadius: 30,
        height: 50,
        width: 150,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
    },
    whiteText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },
    directionIcon: {
        width: 20,
        height: 20,
    },
});


export default InstructorInfo;