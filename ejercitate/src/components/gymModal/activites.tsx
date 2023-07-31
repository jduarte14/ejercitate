import { View, Text, Image } from 'react-native';
import styles from '../../styles';


const Activities = ({ sports }) => {

    const { calisthenic, wrestling, weightlifting, yoga, pilates, boxing, bjj, mma } = sports;

    return (
        <>
            <View style={styles.caracContainer}>
                {
                    calisthenic ? <View style={styles.rowText}>
                        <Image style={styles.gymIcon} source={require('./../../img/calisthenic.png')} />
                        <Text style={styles.caracText}> Calistenia </Text>
                    </View> : null
                }
                {
                    wrestling ? <View style={styles.rowText}>
                        <Image style={styles.gymIcon} source={require('./../../img/wrestling.png')} />
                        <Text style={styles.caracText}> Lucha grecoromana </Text>
                    </View> : null
                }

                {
                    weightlifting ? <View style={styles.rowText}>
                        <Image style={styles.gymIcon} source={require('./../../img/sala.png')} />
                        <Text style={styles.caracText}> Sala </Text>
                    </View> : null
                }

                {
                    boxing ? <View style={styles.rowText}>
                        <Image style={styles.gymIcon} source={require('./../../img/boxing.png')} />
                        <Text style={styles.caracText}> Boxeo </Text>
                    </View> : null
                }

                {
                    bjj ? <View style={styles.rowText}>
                        <Image style={styles.gymIcon} source={require('./../../img/bjj.png')} />
                        <Text style={styles.caracText}> Brazilian Jiujitsu </Text>
                    </View> : null
                }

                {
                    mma ? <View style={styles.rowText}>
                        <Image style={styles.gymIcon} source={require('./../../img/mma.png')} />
                        <Text style={styles.caracText}> MMA </Text>
                    </View> : null
                }
                {
                    pilates ? <View style={styles.rowText}>
                        <Image style={styles.gymIcon} source={require('./../../img/pilates.png')} />
                        <Text style={styles.caracText}> Pilates </Text>
                    </View> : null
                }
                {
                    yoga ? <View style={styles.rowText}>
                        <Image style={styles.gymIcon} source={require('./../../img/yoga.png')} />
                        <Text style={styles.caracText}> Yoga </Text>
                    </View> : null
                }
            </View>
        </>
    )
}

export default Activities;