import React from 'react';
import { useRoute } from '@react-navigation/native';
import { View, Text, ScrollView, StyleSheet, Image, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';
import BottomBar from './../components/bottomBar';

const Account = ({ navigation }) => {

    const [user, setUserInfo] = useState('');

    const handleUserData = async () => {
        try {
            const id = (await AsyncStorage.getItem('id'));
            const urlId = id.replace(/"/g, "");
            let url = `https://ejercitatebackend-production.up.railway.app/auth/user/${urlId}`;

            const response = await fetch(url);
            if (response.status === 200) {
                const data = await response.json();
                const userInfo = data['user_found'];
                setUserInfo(userInfo);


            }
            else {
                console.error("Hubo un error con la peticion");
            }

        }
        catch (error) {
            console.error("Falta informacion del usuario");
        }
    }

    useEffect(() => {
        handleUserData();
    }, [])

    return (
        <ScrollView style={styles.settingsContainer}>
            <View style={styles.settingsWrapper}>
                {user ? (
                    <>
                    <View style={styles.settingsRow}>
                        <Image source={{ uri: user.avatar }} style={styles.avatarImage} />
                        <View style={styles.userInfo}>
                            <Text style={styles.text}>{user.username}</Text>
                            <Text style={styles.text}>{user.email}</Text>
                        </View>
                    </View>
                    <View style={styles.buttonsContainer}>
                    <Pressable style={styles.buttonRow}>
                        <Image style={styles.icon} source={require('./../img/mail.png')}/>
                            <Text style={styles.subText}>
                                Cambiar Email
                            </Text>
                        </Pressable>
                        <Pressable style={styles.buttonRow}>
                        <Image style={styles.icon} source={require('./../img/password.png')}/>
                            <Text style={styles.subText}>
                                Cambiar contrasena
                            </Text>
                        </Pressable>
                        <Pressable style={styles.buttonRow}>
                        <Image style={styles.icon} source={require('./../img/avatar.png')}/>
                            <Text style={styles.subText}>
                                Cambiar Avatar
                            </Text>
                        </Pressable>
                    </View>
                   
                    </>) :
                    (<Text style={styles.text}>Cargando...</Text>)}
            </View>
            <BottomBar  navigation={navigation} />
        </ScrollView>
    )
}
let slate = "#0f172a";
const styles = StyleSheet.create({
    settingsContainer: {
        padding: 10,
        borderRadius: 20,
        backgroundColor: "#f7f7f7",
        flex:1,
    },
    settingsRow: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    icon:{
        width:35,
        height:35,
    },
    userInfo:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        paddingLeft:10,
    },
    settingsWrapper: {
        padding: 10,
        paddingTop:30,
        flex:1,
    },
    text: {
        color: slate,
        fontWeight: "bold",
        fontSize: 20,
        paddingLeft: 10,
        paddingTop: 10,
        textTransform:"uppercase"
    },
    subText: {
        color: slate,
        fontWeight: "bold",
        fontSize: 17,
        paddingLeft: 10,
        paddingTop: 10,
        paddingBottom:10,
    },
    avatarImage: {
        width: 130,
        height: 130,
        borderRadius: 100,
        borderWidth:4,
        borderColor:slate,
        elevation: 5,
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 }, 
        shadowOpacity: 0.3, 
        shadowRadius: 4,
    },
    buttonRow:{
        backgroundColor:"white",
        paddingVertical:15,
        paddingLeft:10,
        marginTop:20,
        borderRadius:10,
        elevation: 3,
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 }, 
        shadowOpacity: 0.3, 
        shadowRadius: 4,
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
    },
    buttonsContainer:{
        padding:20,
    }
});

export default Account;
