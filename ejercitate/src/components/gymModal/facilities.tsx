import { View, Text, Image } from 'react-native';
import styles from './../../styles';

const Facilities = ({ facilities }) => {
    const { canteen, lockers, pingpong, showers } = facilities;

    return (
        <View style={styles.caracContainer}>
            {
                canteen ?
                    <View style={styles.grayRowText}>
                        <Image style={styles.gymIcon} source={require('./../../img/ducha.png')} />
                        <Text style={styles.caracBlackText}>Duchas </Text>
                    </View>

                    : null
            }
            {
                lockers ?
                    <View style={styles.grayRowText}>
                        <Image style={styles.gymIcon} source={require('./../../img/casilleros.png')} />
                        <Text style={styles.caracBlackText}>Casilleros </Text>
                    </View>

                    : null
            }
            {
                pingpong ?
                    <View style={styles.grayRowText}>
                        <Image style={styles.gymIcon} source={require('./../../img/ping-pong.png')} />
                        <Text style={styles.caracBlackText}>Ping pong </Text>
                    </View>

                    : null
            }
            {
                showers ?
                    <View style={styles.grayRowText}>
                        <Image style={styles.gymIcon} source={require('./../../img/cantina.png')} />
                        <Text style={styles.caracBlackText}>Cantina </Text>
                    </View>

                    : null
            }
        </View>
    )
}

export default Facilities;