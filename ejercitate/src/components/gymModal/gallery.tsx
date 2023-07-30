import { View, ScrollView, Text, Modal, Image, Pressable } from 'react-native';
import styles from './../../styles';

const Gallery = ({ imagen, imagen2, imagen3, imagen4, imagen5 }) => {
    return (
        <>
            <ScrollView horizontal={true}>
                <Image style={styles.modalImage} source={{ uri: imagen }} />
                {
                    imagen2 ? <Image style={styles.modalImage} source={{ uri: imagen2 }} /> : null
                }
                {
                    imagen3 ? <Image style={styles.modalImage} source={{ uri: imagen3 }} /> : null
                }
                {
                    imagen4 ? <Image style={styles.modalImage} source={{ uri: imagen4 }} /> : null
                }
                {
                    imagen5 ? <Image style={styles.modalImage} source={{ uri: imagen5 }} /> : null
                }
            </ScrollView>
        </>
    )
}


export default Gallery;