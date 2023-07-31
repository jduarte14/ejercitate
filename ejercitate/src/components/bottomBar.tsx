import styles from '../styles';
import { View, Text, ScrollView, Image, Pressable } from 'react-native';

const BottomBar = ({navigation,instructors}) => {

    
    return (
        <>
            <View style={styles.bottomBarRow}>
                <Pressable style={styles.bottomBarIconContainer}  onPress={() => navigation.navigate('Home')}>
                    <Image style={styles.bottomBarIcon} source={require('./../img/weight_icon.png')} />
                    <Text style={styles.bottomBarText}>
                        Gimnasios
                    </Text>
                </Pressable>
                <Pressable style={styles.bottomBarIconContainer} onPress={() => navigation.navigate('Instructores')}>
                    <Image style={styles.bottomBarIcon} source={require('./../img/entrenador-card.png')} />
                    <Text style={styles.bottomBarText}>
                        Instructores
                    </Text>
                </Pressable>
            </View>
        </>
    )
}

export default BottomBar;