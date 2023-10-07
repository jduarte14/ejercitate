import { StyleSheet, View, Text, Pressable, Modal } from "react-native";

const Gallery = ({ images, pickImage, removeImage, handlePopUp }) => {
    return (
        <Modal  visible={true} animationType="slide">
            <View style={styles.imageContainer}>
                {images.map((image, index) => (
                    <View key={index} style={styles.imagePreviewContainer}>
                        {image && (
                            <Image source={{ uri: image }} style={styles.imagePreview} />
                        )}
                        <Pressable
                            style={styles.imageButton} onPress={() => pickImage(index)}>
                            <Text style={styles.buttonText}>Imagen {index + 1}</Text>

                        </Pressable>
                        <Pressable style={styles.removeImageButton} onPress={() => removeImage(index)}>
                            <Text style={styles.removeButtonText}>X</Text>
                        </Pressable>
                    </View>

                ))}
            </View>
            <View style={styles.buttonRow}>
                <Pressable onPress={()=> {handlePopUp('')}} style={styles.button}>
                    <Text style={styles.whiteText}>
                        Volver
                    </Text>
                </Pressable>
            </View>

        </Modal>
    )

}

let slate = "#0f172a";

const styles = StyleSheet.create({
    imageContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
        display: "flex",
        flexWrap: "wrap",
        gap: 20,
    },
    imagePreviewContainer: {
        alignItems: 'center',
        position: "relative",
    },
    imagePreview: {
        width: 100,
        height: 100,
        marginBottom: 10,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#0f172a',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        paddingLeft: 5,
        paddingRight: 5,
        textAlign: 'center',
    },
    removeImageButton: {
        backgroundColor: '#dc2626',
        width: 23,
        height: 23,
        marginTop: 5,
        borderRadius: 50,
        position: "absolute",
        top: 0,
        right: 5,
        borderWidth: 2,
        borderColor: "white",
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1,
    },
    removeButtonText: {
        color: 'white',
        fontSize: 11,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    imageButton: {
        backgroundColor: slate,
        paddingVertical: 15,
        paddingHorizontal: 28,
        margin: 5,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    buttonRow: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
        background: "white",
        flexDirection: "row"
    },
    whiteText: {
        fontSize: 20,
        color: 'white',
        fontWeight: "bold",
    },
    button: {
        backgroundColor: slate,
        width: 150,
        height: 50,
        borderRadius: 20,
        marginHorizontal: 5,
        display: "flex",
        marginBottom: 20,
        justifyContent: "center",
        alignItems: "center",
    },
})

export default Gallery;