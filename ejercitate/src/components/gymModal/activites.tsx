import { View, Text, Image } from 'react-native';
import styles from '../../styles';


const Activities = ({ sports }) => {
    const sportsList = [
        { key: 'calisthenic', label: 'Calistenia', icon: require('./../../img/sports/calisthenic.png') },
        { key: 'wrestling', label: 'Lucha grecoromana', icon: require('./../../img/sports/wrestling.png') },
        { key: 'weightlifting', label: 'Sala', icon: require('./../../img/sports/sala.png') },
        { key: 'boxing', label: 'Boxeo', icon: require('./../../img/sports/boxing.png') },
        { key: 'bjj', label: 'Brazilian Jiujitsu', icon: require('./../../img/sports/bjj.png') },
        { key: 'mma', label: 'MMA', icon: require('./../../img/sports/mma.png') },
        { key: 'pilates', label: 'Pilates', icon: require('./../../img/sports/pilates.png') },
        { key: 'yoga', label: 'Yoga', icon: require('./../../img/sports/yoga.png') },
    ];

    return (
        <View style={styles.caracContainer}>
            {sportsList.map(sport => (
                sports[sport.key] ? (
                    <View style={styles.rowText} key={sport.key}>
                        <Image style={styles.gymIcon} source={sport.icon} />
                        <Text style={styles.caracText}>{sport.label}</Text>
                    </View>
                ) : null
            ))}
        </View>
    );
}


export default Activities;