
import { View, Text, ScrollView, Image } from 'react-native';
import styles from './../styles';

const Categories = () => {
    return (
        <View style={styles.categoriesContainer}>
            <View style={styles.category}>
                <Image style={styles.categoryImg} source={require('./../img/gym_avatar.png')} />
                <Text style={styles.categoryText}>Gimnasio tradicional</Text>
            </View>
            <View style={styles.category}>
                <Image style={styles.categoryImg} source={require('./../img/gym_avatar.png')} />
                <Text style={styles.categoryText}>Gimnasio tradicional</Text>
            </View>
            <View style={styles.category}>
                <Image style={styles.categoryImg} source={require('./../img/gym_avatar.png')} />
                <Text style={styles.categoryText}>Gimnasio tradicional</Text>
            </View>
            <View style={styles.category}>
                <Image style={styles.categoryImg} source={require('./../img/gym_avatar.png')} />
                <Text style={styles.categoryText}>Gimnasio tradicional</Text>
            </View>
        </View>
    )
}

export default Categories;