import { Image, ScrollView, StyleSheet } from 'react-native';

const Gallery = ({ images }) => {

    return (
        <ScrollView horizontal>
            {
                images.map((image, index) => {
                    return (
                        image != null ? <Image style={styles.image} source={{ uri: image }} key={index} /> : null
                    )
                })
            }

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 250,
        height: 150,
        margin: 5,
        borderRadius: 10,
        marginTop: 20,
    }
})

export default Gallery;