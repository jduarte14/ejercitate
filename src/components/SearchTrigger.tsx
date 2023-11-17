import SearchHistoryComponent from './SearchHistoryComponent';

import { Text, View, Image, Pressable } from 'react-native';
import styles from './../styles';

const SearchTrigger = ({ handleMapBox }) => {
    return (
        <>
            <View style={styles.searchTriggerContainer}>
                <Pressable style={styles.searchTriggerWrapper} onPress={handleMapBox}>
                    <Image style={styles.loupeImage} source={require('./../img/loupe.png')} />
                    <Text style={styles.searchTriggerText}>
                        Search your gym
                    </Text>
                </Pressable>
            </View>
            <SearchHistoryComponent />
        </>
    )
}


export default SearchTrigger;