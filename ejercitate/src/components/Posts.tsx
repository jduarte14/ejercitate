import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import styles from './../styles';

const Posts = ({ gyms }) => {
    return (
        <>
            {
                gyms ? <>
                    <Text style={styles.postsTitle}> Gimnasios </Text>
                    <ScrollView horizontal>
                        <TouchableOpacity style={styles.gymContainer}>
                            
                            {
                                gyms[0].imagen ? <Image style={styles.gymImages} source={{ uri: gyms[0].imagen }} /> : null
                            }
                            {
                                gyms[0].name ? <Text style={styles.gymName}>{gyms[0].name}</Text> : null
                            }
                            {
                                gyms[0].shortDescription ? <Text style={styles.gymDescription}>{gyms[0].shortDescription}</Text> : null
                            }

                        </TouchableOpacity>
                        <TouchableOpacity style={styles.gymContainer}>
                            <Image style={styles.gymImages} source={require('./../img/gym_image.jpg')} />
                            {
                                gyms[0].name ? <Text style={styles.gymName}>{gyms[0].name}</Text> : null
                            }

                            {
                                gyms[0].shortDescription ? <Text style={styles.gymDescription}>{gyms[0].shortDescription}</Text> : null
                            }
                        </TouchableOpacity>

                    </ScrollView>
                </> : <Text style={styles.title}>Cargando.. </Text>
            }

        </>

    )
}
export default Posts;