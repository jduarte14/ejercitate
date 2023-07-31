import { Text, View, Image, Pressable } from 'react-native';
import styles from './../../styles';

import InstructorList from './instructorList';

const InstrucetorSearchTrigger = ({instructors}) => {
    return (
        <>
            <View style={styles.searchTriggerContainer}>
                <Pressable style={styles.searchTriggerWrapper}>
                    <Image style={styles.loupeImage} source={require('./../../img/loupe.png')} />
                    <Text style={styles.searchTriggerText}>
                        Busca tu instructor
                    </Text>
                </Pressable>
            </View>
            <InstructorList instructors={instructors}/>
        </>
    )
}


export default InstrucetorSearchTrigger;