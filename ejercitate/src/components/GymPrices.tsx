import React, { useState } from 'react';
import { Modal, ScrollView, View, Text, Pressable, StyleSheet } from 'react-native';
import styles from './../styles';

const GymPrices = ({ hidePricesModal }) => {
  const [selectedId, setSelectedId] = useState(null);

  const handlePress = (id, plan, value) => {
    setSelectedId(id);
    console.log(plan,value);
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

        <Pressable style={priceContainer(1).priceContainer} onPress={() => handlePress(1, 'Asistencia 3 dias', 1200)}>
          <Text style={styles.priceDeal}>Asistencia 3 dias</Text>
          <Text style={styles.checkoutPrice}>1200</Text>
        </Pressable>
        <Pressable style={priceContainer(2).priceContainer} onPress={() => handlePress(2, 'Asistencia 3 dias', 1200)}>
          <Text style={styles.priceDeal}>Asistencia 3 dias</Text>
          <Text style={styles.checkoutPrice}>1200</Text>
        </Pressable>
        <Pressable style={priceContainer(3).priceContainer} onPress={() => handlePress(3, 'Pase libre', 1800)}>
          <Text style={styles.priceDeal}>Pase libre</Text>
          <Text style={styles.checkoutPrice}>1800</Text>
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
