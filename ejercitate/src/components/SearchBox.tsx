import styles from './../styles';
import { View, TextInput, Pressable, Text, TouchableOpacity } from 'react-native';
import { useState } from 'react';

const SearchBox = () => {


    return (
        <TouchableOpacity style={styles.searchContainer}>
            <TextInput
                style={styles.searchBar}
                placeholder="Busca tu gimnasio"
                placeholderTextColor="black"

            />
            <Pressable style={styles.searchBtn} >
                <Text style={styles.searchText}>Buscar</Text>
            </Pressable>
        </TouchableOpacity>
    )
}

export default SearchBox;