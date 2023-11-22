import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useGymContext } from '../context/gymContext';


const screenWidth = Dimensions.get('window').width;
const Posts = () => {
    const { gyms } = useGymContext();

    return (
        <>
            {
                gyms ? <>
                    <Text style={styles.postsTitle}> Gyms near you </Text>
                    <ScrollView horizontal>
                        <TouchableOpacity style={styles.gymContainer}>

                            {
                                gyms[0].imagen ? <Image style={styles.gymImages} source={{ uri: gyms[0].imagen }} /> : null
                            }
                            {
                                gyms[0].name ? <Text style={styles.gymName}>{gyms[0].name}</Text> : null
                            }
                            {
                                gyms[0].description ? <Text style={styles.gymDescription}>{gyms[0].description}</Text> : null
                            }

                        </TouchableOpacity>
                        <TouchableOpacity style={styles.gymContainer}>
                            <Image style={styles.gymImages} source={require('./../img/gym_image.jpg')} />
                            {
                                gyms[0].name ? <Text style={styles.gymName}>{gyms[0].name}</Text> : null
                            }

                            {
                                gyms[0].description ? <Text style={styles.gymDescription}>{gyms[0].description}</Text> : null
                            }
                        </TouchableOpacity>

                    </ScrollView>
                </> : <Text style={styles.title}>Loading.. </Text>
            }

        </>

    )
}

let slate = "#0f172a";
const styles = StyleSheet.create({
    title: {
        fontWeight: "bold",
        color: "black",
        fontSize: 20,
        paddingLeft: 10,
    },
    postsTitle: {
        color: slate,
        fontSize: 20,
        paddingTop: 10,
        fontWeight: "bold",
        paddingLeft: 10,
        paddingBottom: 5,
    },
    gymImages: {
        width: screenWidth / 1.7,
        height: 110,
    },
    gymName: {
        color: "black",
        fontWeight: "bold",
        fontSize: 18,
        paddingTop: 5,
    },
    gymDescription: {
        color: "black",
        fontWeight: "bold",
        fontSize: 15,
        lineHeight: 22,
        paddingBottom: 15,
    },
    gymContainer: {
        height: 200,
        margin: 5,
        backgroundColor: "white",
        padding: 10,
        borderRadius: 5,
        display: "flex",
    },
})

export default Posts;