
import React from 'react';
import { useState, useEffect } from 'react';
import SearchBox from './SearchBox';
import { View, Text, TouchableOpacity, Pressable, Modal } from 'react-native';
import styles from './../styles';
import MapScreen from './MapScreen';

const MapGym = ({ hideMap, gyms, instructors }) => {


    return (


        <Modal visible={true} animationType="slide">
            <SearchBox />
            {
                gyms ? <MapScreen gyms={gyms} instructors={instructors} /> : null
            }

            <View style={styles.buttonsRow}>
                <Pressable style={styles.singleButton} onPress={hideMap}>
                    <Text style={styles.buttonText} >
                        Volver
                    </Text>
                </Pressable>
            </View>
        </Modal>


    )
}



export default MapGym;