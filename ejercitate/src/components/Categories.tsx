
import { View, Text, ScrollView, Image } from 'react-native';
import styles from './../styles';

const Categories = () => {
    return (
        <View style={styles.categoriesContainer}>
            <View style={styles.category}>
                <Image style={styles.categoryImg} source={require('./../img/gym_avatar.png')} />
                <Text style={styles.categoryText}>Traditional gym</Text>
            </View>
            <View style={styles.category}>
                <Image style={styles.categoryImg} source={require('./../img/sports/calisthenic.png')} />
                <Text style={styles.categoryText}>Calisthenic</Text>
            </View>
            <View style={styles.category}>
                <Image style={styles.categoryImg} source={require('./../img/sports/martial-arts.png')} />
                <Text style={styles.categoryText}>MMA</Text>
            </View>
            <View style={styles.category}>
                <Image style={styles.categoryImg} source={require('./../img/sports/crossfit.png')} />
                <Text style={styles.categoryText}>Crossfit</Text>
            </View>
        </View>
    )
}

export default Categories;