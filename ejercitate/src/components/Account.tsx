import React from 'react';
import { useRoute } from '@react-navigation/native';
import { View, Text, ScrollView, StyleSheet, Image, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';
import BottomBar from './../components/bottomBar';
import GymPanel from './../components/subComponents/account/gymPanel';
import InstructorPanel from './subComponents/account/instructorPanel';

const Account = ({ route, navigation }) => {
    const [instructorPanelModal, setInstructorPanel] = useState(false);
    const [user, setUserInfo] = useState('');
    const [owner, setOwner] = useState(false);
    const [instructor, setInstructor] = useState(false);
    const [gymModal, setGymModal] = useState(false);

    const { setUserLog } = route.params;    
    
    const showInstructorModal = () => {
        setInstructorPanel(true);
    }
    const hideInstructorModal = () => {
        setInstructorPanel(false);
    }

    const hideGymModal=()=>{
        setGymModal(false);
    }

    const showGymModal =()=>{
        setGymModal(true);
    }

    const handleUserData = async () => {
        try {
            const id = (await AsyncStorage.getItem('id'));
            if (!id) {
                return;
            }
            const urlId = id.replace(/"/g, "");
            let url = `https://ejercitatebackend-production.up.railway.app/auth/user/${urlId}`;

            const response = await fetch(url);
            if (response.status === 200) {
                const data = await response.json();
                console.log(data);
                
                const userInfo = data['user_found'];
                setUserInfo(userInfo);
                const {gym, instructor} = data;
                
                if(instructor) {
                    setInstructor(instructor);           
                }
                if(gym){
                    setOwner(gym);                  
                }
            }   
            else {
                console.error("Hubo un error con la peticion");
            }
        }
        catch (error) {
            console.error("Falta informacion del usuario");
        }
    }

    const handleLogout = async () => {
        try {
            await AsyncStorage.clear();
            setUserLog(false);
        }
        catch (error) {
            console.error('Error al eliminar el elemento:', error);
        }
    }
    
    useEffect(() => {
        handleUserData();
    }, [])

    return (
        <View style={styles.container}>
            <ScrollView style={styles.settingsContainer}>
                <View style={styles.settingsWrapper}>
                    {user ? (
                        <>
                            <View style={styles.settingsRow}>
                                {
                                    user.avatar ? < Image source={{ uri: user.avatar }} style={styles.avatarImage} /> :
                                        <Image source={require('./../img/avatar.png')} style={styles.avatarImage} />
                                }

                                <View style={styles.userInfo}>
                                    <Text style={styles.text}>{user.username}</Text>
                                    <Text style={styles.email}>{user.email}</Text>
                                </View>
                            </View>
                            <View style={styles.buttonsContainer}>
                                <Pressable style={styles.buttonRow}>
                                    <Image style={styles.icon} source={require('./../img/mail.png')} />
                                    <Text style={styles.subText}>
                                        Cambiar Email
                                    </Text>
                                </Pressable>
                                <Pressable style={styles.buttonRow}>
                                    <Image style={styles.icon} source={require('./../img/password.png')} />
                                    <Text style={styles.subText}>
                                        Cambiar contrasena
                                    </Text>
                                </Pressable>
                                <Pressable style={styles.buttonRow}>
                                    <Image style={styles.icon} source={require('./../img/avatar.png')} />
                                    <Text style={styles.subText}>
                                        Cambiar Avatar
                                    </Text>
                                </Pressable>
                                <Pressable style={styles.buttonRow}>
                                    <Image style={styles.icon} source={require('./../img/debit-card.png')} />
                                    <Text style={styles.subText}>
                                        Configuracion de pagos
                                    </Text>
                                </Pressable>
                                {instructor ?
                                    (
                                        <Pressable style={styles.buttonRow} onPress={showInstructorModal}>
                                            <Image style={styles.icon} source={require('./../img/entrenador.png')} />
                                            <Text style={styles.subText}>
                                                Panel de instructor
                                            </Text>
                                        </Pressable>
                                    ) : null}
                                { owner ?
                                    (
                                        <Pressable style={styles.buttonRow} onPress={showGymModal}>
                                            <Image style={styles.icon} source={require('./../img/entrenador.png')} />
                                            <Text style={styles.subText}>
                                                Panel del gimnasio
                                            </Text>
                                        </Pressable>
                                    ) : null}
                            </View>
                            <Pressable style={styles.logoutContainer} onPress={handleLogout}>
                                <Text style={styles.logoutText}>
                                    Cerrar sesión
                                </Text>
                            </Pressable>

                        </>) :
                        (<Text style={styles.text}>Cargando...</Text>)}
                </View>

            </ScrollView>
            <BottomBar navigation={navigation} />
            {
                instructorPanelModal ? <InstructorPanel instructor={instructor} hideInstructorModal={hideInstructorModal} /> : null
            }
            {
                gymModal ? <GymPanel owner={owner} hideGymModal={hideGymModal} /> : null
            }

        </View>
    )
}
let slate = "#0f172a";
let gray = "#f7f7f7";
let red = "#dc2626";
let solidGray = "#d6d3d1";
const styles = StyleSheet.create({
    container: {
        backgroundColor: gray,
        flex: 1,
    },
    logoutContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        borderTopWidth: 2,
        borderColor: solidGray,
        marginTop: 35,
        marginHorizontal: 20,

    },
    settingsContainer: {
        padding: 10,
        borderRadius: 20,
        backgroundColor: gray,
        flex: 1,
    },
    settingsRow: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
        padding: 10,
        borderRadius: 10,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    icon: {
        width: 35,
        height: 35,
    },
    userInfo: {
        display: "flex",
        alignItems: "center",
        paddingLeft: 10,
    },
    settingsWrapper: {
        padding: 10,
        paddingTop: 30,
        flex: 1,
    },
    text: {
        color: slate,
        fontWeight: "bold",
        fontSize: 20,
        paddingLeft: 10,
        paddingTop: 10,
        textTransform: "uppercase"
    },
    email: {
        color: slate,
        fontWeight: "bold",
        fontSize: 20,
        paddingLeft: 10,
        paddingTop: 10,
    },
    subText: {
        color: slate,
        fontWeight: "bold",
        fontSize: 17,
        paddingLeft: 10,
        paddingTop: 10,
        paddingBottom: 10,
    },
    logoutText: {
        color: "#52525b",
        fontWeight: "bold",
        fontSize: 17,
        paddingLeft: 10,
        paddingTop: 10,
        paddingBottom: 10,
        textAlign: "center"
    },
    avatarImage: {
        width: 130,
        height: 130,
        borderRadius: 100,
        borderWidth: 3,
        borderColor: slate,
    },
    buttonRow: {
        backgroundColor: "white",
        paddingVertical: 15,
        paddingLeft: 10,
        marginTop: 20,
        borderRadius: 10,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    buttonsContainer: {
        padding: 20,
    }
});

export default Account;
