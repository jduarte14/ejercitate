import styles from '../styles';
import { View, Text, Image, Pressable } from 'react-native';

const BottomBar = ({navigation}) => {
    return (
        <>
            <View style={styles.bottomBarRow}>
                <Pressable style={styles.bottomBarIconContainer}  onPress={() => navigation.navigate('Home')}>
                    <Image style={styles.bottomBarIcon} source={require('./../img/sports/weight_icon.png')} />
                    <Text style={styles.bottomBarText}>
                        Gyms
                    </Text>
                </Pressable>
                <Pressable style={styles.bottomBarIconContainer} onPress={() => navigation.navigate('Instructores')}>
                    <Image style={styles.bottomBarIcon} source={require('./../img/entrenador-card.png')} />
                    <Text style={styles.bottomBarText}>
                        Instructors
                    </Text>
                </Pressable>
                <Pressable style={styles.bottomBarIconContainer} onPress={() => navigation.navigate('Stores')}>
                    <Image style={styles.bottomBarIcon} source={require('./../img/cart.png')} />
                    <Text style={styles.bottomBarText}>
                        Stores
                    </Text>
                </Pressable>
                <Pressable style={styles.bottomBarIconContainer} onPress={() => navigation.navigate('Account')}>
                    <Image style={styles.bottomBarIcon} source={require('./../img/user.png')} />
                    <Text style={styles.bottomBarText}>
                        Account
                    </Text>
                </Pressable>
            </View>
        </>
    )
}

export default BottomBar;