import React from 'react';
import { useRoute } from '@react-navigation/native';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';

const Account = () => {

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
        <ScrollView>
            <View>
                {user ? (
                    <View style={styles.settingsContainer}>
                         <Image source={{ uri: user.avatar }} style={styles.avatarImage} />
                        <Text style={styles.text}>{user.username}</Text>
                        <Text style={styles.text}>{user.email}</Text>
                    </View>) :
                    (<Text style={styles.text}>Cargando...</Text>)}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    settingsContainer: {
        padding: 10,
        borderRadius: 20,
        backgroundColor: "#f7f7f7",
    },
    userInfo: {

    },
    text: {
        color: "red",
        fontWeight: "bold",
        fontSize: 20,
    },
    avatarImage: {
        width: 150,
        height: 150,
        borderRadius: 100,
    }
});

export default Account;
