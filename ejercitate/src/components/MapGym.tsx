
import React from 'react';
import { useState, useEffect } from 'react';
import SearchBox from './SearchBox';
import { View, Text, TouchableOpacity, Pressable, Modal } from 'react-native';
import styles from './../styles';
import MapScreen from './MapScreen';
import { useGymContext } from './../context/gymContext';
const MapGym = ({ handleMapBox }) => {

    const { gyms, setGyms } = useGymContext();
    
    return (
        <Modal visible={true} animationType="slide">
            <SearchBox />
            {
                gyms ? <MapScreen gyms={gyms} /> : null
            }

            <View style={styles.buttonsRow}>
                <Pressable style={styles.singleButton} onPress={handleMapBox}>
                    <Text style={styles.buttonText} >
                        Volver
                    </Text>
                </Pressable>
            </View>
        </Modal>


    )
}



export default MapGym;