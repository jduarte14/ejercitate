import { View, ScrollView, Text, Modal, Image, Pressable } from 'react-native';
import styles from './../../styles';

const Schedules = ({ schedules }) => {
    const {days, hours} = schedules;
    return (
        <View style={styles.hourContainer}>
            <Text style={styles.scheduleText}>
                Horarios
            </Text>
            <Text style={styles.scheduleSubText}>
                {days}
            </Text>
            <Text style={styles.scheduleNumber}>
                {hours}
            </Text>
        </View>
    )
}

export default Schedules;