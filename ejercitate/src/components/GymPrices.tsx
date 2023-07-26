import React, { useState } from 'react';
import { Modal, ScrollView, View, Text, Pressable, StyleSheet } from 'react-native';
import styles from './../styles';

const GymPrices = ({ hidePricesModal,selectedGym }) => {
  const [selectedId, setSelectedId] = useState(null);
  const {freePass,threeDays,twoDays} = selectedGym;
  const handlePress = (id, plan, value) => {
    setSelectedId(id);
  };

  const priceContainer = (id) => {
    return StyleSheet.create({
      priceContainer: {
        padding: 10,
        backgroundColor: '#0f172a',
        borderColor: selectedId === id ? '#fde047' : 'white',
        borderWidth: 4,
        borderRadius: 10,
        marginTop: 10,
        margin: 10,
      },
    });
  };

  return (
    <Modal visible={true} animationType="slide">
      <ScrollView>
        <Text style={styles.upperTitle}>Selecciona la tarifa:</Text>

        <Pressable style={priceContainer(1).priceContainer} onPress={() => handlePress(1, 'Asistencia 3 dias', {twoDays})}>
          <Text style={styles.priceDeal}>Asistencia 3 dias</Text>
          <Text style={styles.checkoutPrice}>{twoDays}</Text>
        </Pressable>
        <Pressable style={priceContainer(2).priceContainer} onPress={() => handlePress(2, 'Asistencia 3 dias', {threeDays})}>
          <Text style={styles.priceDeal}>Asistencia 3 dias</Text>
          <Text style={styles.checkoutPrice}>{threeDays}</Text>
        </Pressable>
        <Pressable style={priceContainer(3).priceContainer} onPress={() => handlePress(3, 'Pase libre', {freePass})}>
          <Text style={styles.priceDeal}>Pase libre</Text>
          <Text style={styles.checkoutPrice}>{freePass}</Text>
        </Pressable>
      </ScrollView>
      <View style={styles.buttonsRow}>
        <Pressable style={styles.button} onPress={hidePricesModal}>
          <Text style={styles.buttonText}>Volver</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={hidePricesModal}>
          <Text style={styles.buttonText}>Reservar</Text>
        </Pressable>
      </View>
    </Modal>
  );
};

export default GymPrices;
