import React, { useState } from 'react';
import { Modal, ScrollView, View, Text, Pressable, StyleSheet } from 'react-native';
import styles from './../styles';

const GymPrices = ({ hidePricesModal, prices }) => {
  const [selectedId, setSelectedId] = useState(null);
  const { freePass, twoDays, threeDays, fourDays, fiveDays } = prices;
  const handlePress = (id, plan, value) => {
    setSelectedId(id);
    console.log(id,plan, value);
    
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


        {
          twoDays ?
            <Pressable style={priceContainer(1).priceContainer} onPress={() => handlePress(1, 'Asistencia 2 dias', { twoDays })}>
              <Text style={styles.priceDeal}>Asistencia 2 dias</Text>
              <Text style={styles.checkoutPrice}>{twoDays}</Text>
            </Pressable> : null
        }

        {
          threeDays ?
            <Pressable style={priceContainer(2).priceContainer} onPress={() => handlePress(2, 'Asistencia 3 dias', { threeDays })}>
              <Text style={styles.priceDeal}>Asistencia 3 dias</Text>
              <Text style={styles.checkoutPrice}>{threeDays}</Text>
            </Pressable>
            : null
        }
          {
          fourDays ?
            <Pressable style={priceContainer(3).priceContainer} onPress={() => handlePress(3, 'Asistencia 4 dias', { fourDays })}>
              <Text style={styles.priceDeal}>Asistencia 4 dias</Text>
              <Text style={styles.checkoutPrice}>{threeDays}</Text>
            </Pressable>
            : null
        }
          {
          fiveDays ?
            <Pressable style={priceContainer(4).priceContainer} onPress={() => handlePress(4, 'Asistencia 5 dias', { fiveDays })}>
              <Text style={styles.priceDeal}>Asistencia 5 dias</Text>
              <Text style={styles.checkoutPrice}>{fiveDays}</Text>
            </Pressable>
            : null
        }
        {
          freePass ?
            <Pressable style={priceContainer(5).priceContainer} onPress={() => handlePress(5, 'Pase libre', { freePass })}>
              <Text style={styles.priceDeal}>Pase libre</Text>
              <Text style={styles.checkoutPrice}>{freePass}</Text>
            </Pressable> : null
        }

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
