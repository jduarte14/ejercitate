import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import styles from './../styles';

const Posts = () => {
    return (
        <>
         <Text style={styles.title}> Gimnasios </Text>
            <ScrollView horizontal>
               
                <TouchableOpacity style={styles.gymContainer}>
                    <Image style={styles.gymImages} source={require('./../img/gym_image.jpg')} />
                    <Text style={styles.gymName}>360 Training</Text>
                    <Text style={styles.gymDescription}>Calistenia, Gimnasia olimpica</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.gymContainer}>
                    <Image style={styles.gymImages} source={require('./../img/gym_image.jpg')} />
                    <Text style={styles.gymName}>360 Training</Text>
                    <Text style={styles.gymDescription}>Calistenia, Gimnasia olimpica</Text>
                </TouchableOpacity>
            </ScrollView>
            <Text style={styles.title}> Artes marciales </Text>
            <ScrollView horizontal>
               
                <TouchableOpacity style={styles.gymContainer}>
                    <Image style={styles.gymImages} source={require('./../img/gym_image.jpg')} />
                    <Text style={styles.gymName}>360 Training</Text>
                    <Text style={styles.gymDescription}>Calistenia, Gimnasia olimpica</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.gymContainer}>
                    <Image style={styles.gymImages} source={require('./../img/gym_image.jpg')} />
                    <Text style={styles.gymName}>360 Training</Text>
                    <Text style={styles.gymDescription}>Calistenia, Gimnasia olimpica</Text>
                </TouchableOpacity>
            </ScrollView>
        </>

    )
}
export default Posts;