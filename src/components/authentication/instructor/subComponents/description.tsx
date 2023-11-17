import { Modal, ScrollView, View, Text, StyleSheet, Image, Pressable, TextInput } from 'react-native';
import { useState } from 'react';

import Activities from './activities';

const Description = ({ hideModal, username, email, password, avatar, setUserLog, id }) => {
    const [description, setDescription] = useState('');
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');

    const [activitiesModal, setActivitesModal] = useState(false);

    const showActivitiesModal = () => {
        setActivitesModal(true)
    }
    const hideActivitiesModal = () => {
        setActivitesModal(false)
    }

    return (
        <>
            <Modal animationType='slide'>
                <ScrollView>
                    <View style={styles.container}>
                        <View style={styles.slateContainer}>
                            <View style={styles.placeHolderRow}>
                                <View style={styles.iconContainer}>
                                    <Image style={styles.icon} source={require('./../../../../img/entrenador-card.png')} />
                                </View>
                                <TextInput style={styles.minTextArea}
                                    placeholder="Add name"
                                    placeholderTextColor="white"
                                    onChangeText={setName}
                                    value={name} />
                            </View>
                        </View>
                        <View style={styles.slateContainer}>
                            <View style={styles.placeHolderRow}>
                                <View style={styles.iconContainer}>
                                    <Image style={styles.icon} source={require('./../../../../img/description.png')} />
                                </View>
                                <Text style={styles.subWhiteText}>
                                    Describete como instructor:
                                </Text>
                            </View>

                            <View>
                                <TextInput style={styles.textArea}
                                    placeholder="Add description"
                                    placeholderTextColor="white"
                                    onChangeText={setDescription}
                                    value={description}
                                    numberOfLines={4} />
                            </View>
                        </View>
                        <View style={styles.slateContainer}>
                            <View style={styles.placeHolderRow}>
                                <View style={styles.iconContainer}>
                                    <Image style={styles.icon} source={require('./../../../../img/whatsapp.png')} />
                                </View>
                                <TextInput style={styles.minTextArea}
                                    placeholder="Add phone"
                                    placeholderTextColor="white"
                                    onChangeText={setPhone}
                                    value={phone}
                                    keyboardType="numeric" />
                            </View>
                        </View>


                    </View>
                </ScrollView>
                <View style={styles.registrationRow}>
                    <Pressable style={styles.direction} onPress={hideModal}>
                        <Image style={styles.directionIcon} source={require('./../../../../img/prev.png')} />
                        <Text style={styles.whiteText}>Previous</Text>
                    </Pressable>
                    <Pressable style={styles.direction} onPress={showActivitiesModal} >
                        <Text style={styles.whiteText}>Next</Text>
                        <Image style={styles.directionIcon} source={require('./../../../../img/next.png')} />
                    </Pressable>
                </View>
            </Modal>
            {
                activitiesModal ? <Activities avatar={avatar} id={id} setUserLog={setUserLog} hideActivitiesModal={hideActivitiesModal} name={name} description={description} username={username} email={email} password={password} avatar={avatar} phone={phone} /> : null
            }

        </>
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
    minTextArea: {
        height: 60,
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
        width: 220,
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
        textAlign: "center",
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
        fontSize: 14,
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
        paddingHorizontal: 30,
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
        padding: 20,
    }
});


export default Description;