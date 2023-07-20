import SearchHistoryComponent from './SearchHistoryComponent';

import { Text, View, Image, Pressable } from 'react-native';
import styles from './../styles';

const SearchTrigger = ({ showMapBox }) => {
    return (
        <>
            <View style={styles.searchTriggerContainer}>
                <Pressable style={styles.searchTriggerWrapper} onPress={showMapBox}>
                    <Image style={styles.loupeImage} source={require('./../img/loupe.png')} />
                    <Text style={styles.searchTriggerText}>
                        Busca tu gimnasio
                    </Text>
                </Pressable>
            </View>
            <SearchHistoryComponent />
        </>
    )
}


export default SearchTrigger;