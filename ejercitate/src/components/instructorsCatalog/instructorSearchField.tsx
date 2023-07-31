import React, { useState } from 'react';
import { View, Image, Pressable, TextInput } from 'react-native';
import styles from './../../styles';
import InstructorList from './instructorList';

const InstructorSearchTrigger = ({ instructors }) => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <>
      <View style={styles.searchTriggerContainer}>
        <Pressable style={styles.searchTriggerWrapper}>
          <Image style={styles.loupeImage} source={require('./../../img/loupe.png')} />
          <TextInput
            placeholder="Busca un instructor"
            placeholderTextColor='#0f172a'
            style={styles.searchTriggerText}
            value={searchValue}
            onChangeText={setSearchValue}
          />
        </Pressable>
      </View>
      <InstructorList instructors={instructors} searchValue={searchValue} />
    </>
  )
}

export default InstructorSearchTrigger;
