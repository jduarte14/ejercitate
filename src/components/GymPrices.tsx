import React, { useState } from 'react';
import { Modal, ScrollView, View, Text, Pressable, StyleSheet } from 'react-native';
import styles from './../styles';

const GymPrices = ({ handlePricesModal, prices }) => {
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
        <Text style={styles.upperTitle}>Set a price:</Text>


        {
          twoDays ?
            <Pressable style={priceContainer(1).priceContainer} onPress={() => handlePress(1, 'Asistencia 2 dias', { twoDays })}>
              <Text style={styles.priceDeal}>Attendance 2 days</Text>
              <Text style={styles.checkoutPrice}>{twoDays}</Text>
            </Pressable> : null
        }

        {
          threeDays ?
            <Pressable style={priceContainer(2).priceContainer} onPress={() => handlePress(2, 'Asistencia 3 dias', { threeDays })}>
              <Text style={styles.priceDeal}>Attendance 3 days</Text>
              <Text style={styles.checkoutPrice}>{threeDays}</Text>
            </Pressable>
            : null
        }
          {
          fourDays ?
            <Pressable style={priceContainer(3).priceContainer} onPress={() => handlePress(3, 'Asistencia 4 dias', { fourDays })}>
              <Text style={styles.priceDeal}>Attendance 4 days</Text>
              <Text style={styles.checkoutPrice}>{fourDays}</Text>
            </Pressable>
            : null
        }
          {
          fiveDays ?
            <Pressable style={priceContainer(4).priceContainer} onPress={() => handlePress(4, 'Asistencia 5 dias', { fiveDays })}>
              <Text style={styles.priceDeal}>Attendance 5 days</Text>
              <Text style={styles.checkoutPrice}>{fiveDays}</Text>
            </Pressable>
            : null
        }
        {
          freePass ?
            <Pressable style={priceContainer(5).priceContainer} onPress={() => handlePress(5, 'Pase libre', { freePass })}>
              <Text style={styles.priceDeal}>Free pass</Text>
              <Text style={styles.checkoutPrice}>{freePass}</Text>
            </Pressable> : null
        }

      </ScrollView>
      <View style={styles.buttonsRow}>
        <Pressable style={styles.button} onPress={handlePricesModal}>
          <Text style={styles.buttonText}>Go back</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={handlePricesModal}>
          <Text style={styles.buttonText}>Reserve</Text>
        </Pressable>
      </View>
    </Modal>
  );
};

export default GymPrices;
