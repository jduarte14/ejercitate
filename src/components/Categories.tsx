import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const Categories = () => {
    return (
        <View style={styles.categoriesContainer}>
            <View style={styles.category}>
                <Image style={styles.categoryImg} source={require('./../img/gym_avatar.png')} />
                <Text style={styles.categoryText}>Gym</Text>
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

let gray = "#f6f6f6";
const styles = StyleSheet.create({
    categoriesContainer: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 10,
    },
    category: {
        backgroundColor: "white",
        borderRadius: 5,
        paddingHorizontal: 20,
        paddingVertical: 20,
        width:screenWidth/2.3,
        margin: 10,
        padding: 15,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    categoryImg: {
        width: 50,
        height: 50,
        marginRight: 8,
        backgroundColor: gray,
        borderRadius: 100,
        padding: 5,
    },
    categoryText: {
        color: "black",
        fontWeight: "bold",
        fontSize: 18,
    },
})


export default Categories;