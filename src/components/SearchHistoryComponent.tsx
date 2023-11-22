import { ScrollView, View, Text, Image, Pressable } from 'react-native';
import styles from './../styles';

const SearchHistoryComponent = () => {
    return (
        <View style={styles.searchHistoryColumn}>
            <Pressable style={styles.searchHistoryDirectionFirstChild}>
                <View style={styles.mapIconContainer}>
                    <Image style={styles.mapIcon} source={require('./../img/map-black.png')} />
                </View>

                <View>
                    <Text style={styles.searchTriggerDirectionText}>
                        360 Training
                    </Text>
                    <Text style={styles.searchTriggerDirectionSubText}>
                        Av Brasil 1224
                    </Text>
                </View>
            </Pressable>
            <Pressable style={styles.searchHistoryDirection}>
                <View style={styles.mapIconContainer}>
                    <Image style={styles.mapIcon} source={require('./../img/map-black.png')} />
                </View>

                <View>
                    <Text style={styles.searchTriggerDirectionText}>
                        360 Training
                    </Text>
                    <Text style={styles.searchTriggerDirectionSubText}>
                        Av Brasil 1224
                    </Text>
                </View>
            </Pressable>
        </View>
    )
}


export default SearchHistoryComponent;