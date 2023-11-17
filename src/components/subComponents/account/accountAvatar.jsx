import * as ImagePicker from 'expo-image-picker';
import { View, ScrollView, Image, Text, TextInput, StyleSheet, Modal, TouchableOpacity } from 'react-native';

const AccountAvatar = ({ handleUserModal, patchData, setUserAvatar, userAvatar, prevAvatar }) => {
    const pickImage = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 4],
                quality: 1,
            });

            if (!result.canceled) {
                setUserAvatar(result.assets[0].uri);
            }
        } catch (error) {
            console.log('Error picking an image', error);
        }
    };

    const removeImage = () => {
        userAvatar ? setUserAvatar(null) : null;
    };

    return (
        <Modal visible={true} animationType='slide'>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Text style={styles.title}>
                        Change your avatar image
                    </Text>
                    <View style={styles.imagePreviewContainer}>
                        {userAvatar ? (
                            <Image style={styles.imagePreview} source={{ uri: userAvatar }} />
                        ) : <Image style={styles.imagePreview} source={{ uri: prevAvatar }} />}
                        <TouchableOpacity style={styles.imageButton} onPress={pickImage}>
                            <Text style={styles.buttonText}>Image </Text>

                        </TouchableOpacity>
                        <TouchableOpacity style={styles.removeImageButton} onPress={() => removeImage()}>
                            <Text style={styles.removeButtonText}>X</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
            <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.button} onPress={() => handleUserModal('')}>
                    <Text style={styles.whiteTextCentered}>Close</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={patchData}>
                    <Text style={styles.whiteTextCentered}>Confirm</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    )
}

let slate = "#0f172a";
let gray = "#f7f7f7";
const styles = StyleSheet.create({
    imagePreview: {
        width: 130,
        height: 130,
        marginBottom: 20,
        borderRadius: 200,
        borderWidth: 2,
        borderColor: slate,
    },
    container: {
        backgroundColor: gray,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontWeight: "bold",
        fontSize: 25,
        textAlign: "center",
        marginBottom: 30,
        marginTop: 50,
    },
    whiteText: {
        fontSize: 20,
        color: 'white',
        fontWeight: "bold",
    },
    whiteTextCentered: {
        fontSize: 20,
        color: 'white',
        textAlign: "center",
        fontWeight: "bold",
    },
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
    buttonRow: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "row",
    },
    button: {
        backgroundColor: slate,
        width: 170,
        height: 50,
        borderRadius: 20,
        marginHorizontal: 5,
        display: "flex",
        marginBottom: 20,
        justifyContent: "center",
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        paddingLeft: 5,
        paddingRight: 5,
        textAlign: 'center',
    },
    imageButton: {
        backgroundColor: slate,
        paddingVertical: 10,
        paddingHorizontal: 20,
        margin: 5,
        borderRadius: 20,
        width: 150,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
    },
    removeImageButton: {
        backgroundColor: '#dc2626',
        width: 30,
        height: 30,
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
})
export default AccountAvatar;