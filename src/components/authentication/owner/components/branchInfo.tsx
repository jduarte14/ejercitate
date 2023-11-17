import { Modal, ScrollView, View, Text, StyleSheet, Image, Pressable, TextInput } from 'react-native';
import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import Prices from './prices';

const BranchInfo = ({ hideInfoModal, gymName, selectedFacilities, selectedSports, schedules, navigation, setUserLog, userId }) => {
    const [description, setDescription] = useState('');
    const [address, setAddress] = useState('');
    const [pricesModal, setPricesModal] = useState(false);

    const [images, setImages] = useState(Array(5).fill(null));

    const pickImage = async (index) => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });

            if (!result.cancelled) {
                const updatedImages = [...images];
                updatedImages[index] = result.assets[0].uri;
                setImages(updatedImages);
            }
        } catch (error) {
            console.log('Error picking an image', error);
        }
    };

    const removeImage = (index) => {
        const updatedImages = [...images];
        updatedImages[index] = null;
        setImages(updatedImages);
    };



    const showPricesModal = () => {
        setPricesModal(true);
    }

    const hidePricesModal = () => {
        setPricesModal(false);
    }

    return (
        <Modal animationType='slide'>
            <ScrollView>
                <View style={styles.container}>
                    <View>
                        <View style={styles.placeHolderRow}>
                            <View style={styles.iconContainer}>
                                <Image style={styles.icon} source={require('./../../../../img/gym_location.png')} />
                            </View>
                            <TextInput
                                style={styles.input}
                                onChangeText={setAddress}
                                value={address}
                                placeholder="Agrega la direccion de tu gimnasio"
                                placeholderTextColor="white"
                            />
                        </View>

                    </View>
                    <View style={styles.slateContainer}>
                        <View style={styles.placeHolderRow}>
                            <View style={styles.iconContainer}>
                                <Image style={styles.icon} source={require('./../../../../img/description.png')} />
                            </View>
                            <Text style={styles.subWhiteText}>
                                Agrega la descripcion de tu gimnasio
                            </Text>
                        </View>
                        <View>
                            <TextInput style={styles.textArea}
                                placeholder="Agrega la descripcion de tu gimnasio"
                                placeholderTextColor="white"
                                onChangeText={setDescription}
                                value={description}
                                numberOfLines={4} />
                        </View>
                    </View>
                    <Text style={styles.smallText}>
                        Arma la galeria de imagenes de tu gimnasio:
                    </Text>
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

                </View>
            </ScrollView>
            <View style={styles.registrationRow}>
                <Pressable style={styles.direction} onPress={hideInfoModal}>
                    <Image style={styles.directionIcon} source={require('./../../../../img/prev.png')} />
                    <Text style={styles.whiteText}>Anterior</Text>
                </Pressable>
                <Pressable style={styles.direction} onPress={showPricesModal}>
                    <Text style={styles.whiteText}>Next</Text>
                    <Image style={styles.directionIcon} source={require('./../../../../img/next.png')} />
                </Pressable>
            </View>
            {
                pricesModal ? <Prices setUserLog={setUserLog} userId={userId} navigation={navigation} hidePricesModal={hidePricesModal} images={images} address={address} description={description} gymName={gymName} selectedFacilities={selectedFacilities} selectedSports={selectedSports} schedules={schedules} /> : null
            }
        </Modal>
    )
}


let slate = "#0f172a";
let gray = "#f7f7f7";
let red = "#dc2626";
let solidGray = "#d6d3d1";
let cyan = "#6889d5";
const styles = StyleSheet.create({
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
    smallText: {
        fontSize: 17,
        fontWeight: "bold",
        color: slate,
        paddingVertical: 10,
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
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        paddingLeft: 5,
        paddingRight: 5,
        textAlign: 'center',
    },
    input: {
        height: 60,
        margin: 12,
        padding: 15,
        borderRadius: 10,
        backgroundColor: slate,
        color: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        fontWeight: "bold",
    },
    textArea: {
        height: 60,
        marginTop: 25,
        padding: 15,
        borderRadius: 10,
        backgroundColor: slate,
        color: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        fontWeight: "bold",
        minHeight: 250,
    },
    container: {
        flex: 1,
        background: 'white',
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        paddingHorizontal: 5,
        paddingVertical: 50,
    },
    icon: {
        width: 25,
        height: 25,
    },
    registrationRow: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        marginHorizontal: 20,
        width: 350,
        marginVertical: 20,
    },
    directionIcon: {
        width: 20,
        height: 20,
    },
    direction: {
        backgroundColor: slate,
        borderRadius: 30,
        height: 50,
        width: 150,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
    },
    whiteText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold"
    },
    subWhiteText: {
        color: "white",
        fontSize: 13,
        fontWeight: "bold",
        marginHorizontal: 20,
    },
    placeHolderRow: {
        display: 'flex',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: slate,
        marginTop: 10,
        borderRadius: 10,
        height: 60,
        paddingLeft: 20,
        paddingRight: 20,
        width: 350,
    },
    iconContainer: {
        backgroundColor: gray,
        borderRadius: 50,
        padding: 15,
        margin: 5,
        width: 45,
        height: 45,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    slateContainer: {
        backgroundColor: slate,
        borderRadius: 10,
        width: 350,
        marginTop: 10,
        marginBottom: 50,
        padding: 15,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
});


export default BranchInfo;