import styles from '../styles';
import { View, Text, ScrollView, Image } from 'react-native';

const BottomBar = () => {
    return (
        <>
            <View style={styles.bottomBarRow}>
                <View style={styles.bottomBarIconContainer}>
                    <Image style={styles.bottomBarIcon} source={require('./../img/weight_icon.png')} />
                    <Text style={styles.bottomBarText}>
                        Gimnasios
                    </Text>
                </View>
                <View style={styles.bottomBarIconContainer}>
                    <Image style={styles.bottomBarIcon} source={require('./../img/entrenador-card.png')} />
                    <Text style={styles.bottomBarText}>
                        Instructores
                    </Text>
                </View>
            </View>
        </>
    )
}

export default BottomBar;