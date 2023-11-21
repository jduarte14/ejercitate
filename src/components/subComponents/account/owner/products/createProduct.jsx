import { ScrollView, Modal, View, Text, Image, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import WarnPopUp from '../../../../../helpers/warnPopUp';
const CreateProduct = ({ handleModal, storeId }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [shortDescription, setShortDescription] = useState('');
    const [brand, setBrand] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [subCategory, setSubCategory] = useState('');
    const [characteristics, setCharacteristics] = useState('');
    const [images, setImages] = useState([]);
    const [popup, setPopUp] = useState('');

    const handlePopUp = (type) => {
        switch (type) {
            case "confirmProduct":
                setPopUp('confirmProduct');
                break;
            case "emptyValue":
                setPopUp('emptyValue');
                break;
            case '':
                setPopUp('');
                break;
        }
    }

    const postProduct = async () => {
        try {
            const productData = new FormData();
            productData.append("name", name.toLocaleLowerCase());
            productData.append("description", description.toLocaleLowerCase());
            productData.append("shortDescription", shortDescription.toLocaleLowerCase());
            productData.append("brand", brand.toLocaleLowerCase());
            productData.append("price", price.toLocaleLowerCase());
            productData.append("category", category.toLocaleLowerCase());
            productData.append("subCategory", subCategory.toLocaleLowerCase());
            productData.append("characteristics", characteristics.toLocaleLowerCase());
            productData.append("gymId", storeId);
            images[0] ? productData.append("image", { uri: images[0], type: 'image/jpeg', name: "image.jpg" }) : null;
            images[1] ? productData.append("image2", { uri: images[1], type: 'image/jpeg', name: "image.jpg" }) : null;
            images[2] ? productData.append("image3", { uri: images[2], type: 'image/jpeg', name: "image.jpg" }) : null;
            images[3] ? productData.append("image4", { uri: images[3], type: 'image/jpeg', name: "image.jpg" }) : null;
            images[4] ? productData.append("image5", { uri: images[4], type: 'image/jpeg', name: "image.jpg" }) : null;
            images[5] ? productData.append("image6", { uri: images[5], type: 'image/jpeg', name: "image.jpg" }) : null;

            let url = "https://ejercitatebackend-production.up.railway.app/api/products";
            const response = await fetch(url, {
                method: "POST",
                body: productData,
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            const data = await response.json();
            setTimeout(() => {
                handlePopUp('');
                handleModal('');
            })
        } catch (error) {
            console.log(error.message);
        }
    };


    const removeImage = (index) => {
        const updatedImages = [...images];
        updatedImages[index] = null;
        setImages(updatedImages);
    };

    const pickImage = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 2],
                quality: 1,
            });

            if (!result.canceled && result.assets && result.assets.length > 0) {
                setImages([...images, result.assets[0].uri]);
            }

        } catch (error) {
            console.log('Error picking an image', error);
        }
    };

    return (
        <Modal visible={true} animationType='slide'>
            <Text style={styles.title}>
                Create your product
            </Text>
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.container}>
                        <TextInput
                            placeholder="Add product name"
                            onChangeText={setName}
                            value={name}
                            style={styles.input}
                        />
                        <TextInput
                            placeholder="Add description"
                            onChangeText={setDescription}
                            value={description}
                            style={styles.input}
                        />
                        <TextInput
                            placeholder="Add short description"
                            onChangeText={setShortDescription}
                            value={shortDescription}
                            style={styles.input}
                        />
                        <TextInput
                            placeholder="Add product brand"
                            onChangeText={setBrand}
                            value={brand}
                            style={styles.input}
                        />
                        <TextInput
                            placeholder="Add product price"
                            onChangeText={setPrice}
                            value={price}
                            style={styles.input}
                        />
                        <TextInput
                            placeholder="Add category"
                            onChangeText={setCategory}
                            value={category}
                            style={styles.input}
                        />
                        <TextInput
                            placeholder="Add subCategory"
                            onChangeText={setSubCategory}
                            value={subCategory}
                            style={styles.input}
                        />
                        <TextInput
                            placeholder="Add characteristics"
                            onChangeText={setCharacteristics}
                            value={characteristics}
                            style={styles.input}
                        />
                    </View>
                    <View style={styles.container}>
                        <TouchableOpacity onPress={pickImage} style={styles.button}>
                            <Text style={styles.whiteTextCentered}>Add Image</Text>
                        </TouchableOpacity>
                        <ScrollView horizontal>
                            {
                                images.map((image, index) => {
                                    return (
                                        <View>
                                            {
                                                image ? <Image key={index} source={{ uri: image }} style={{ width: 200, height: 100, marginBottom: 20, marginRight:10, borderRadius: 10 }} /> : null
                                            }

                                            {image ?
                                                <TouchableOpacity style={styles.removeImageButton} onPress={() => removeImage(index)}>
                                                    <Text style={styles.removeButtonText}>X</Text>
                                                </TouchableOpacity> : null
                                            }

                                        </View>
                                    )
                                })
                            }
                        </ScrollView>
                    </View>
                </ScrollView>

            </View>

            <View style={styles.buttonRow}>
                {
                    name === '' || description === '' || price === '' || brand === '' || !images[0] ?
                        <TouchableOpacity style={styles.button} onPress={() => handlePopUp("emptyValue")}>
                            <Text style={styles.whiteTextCentered}>Confirm product</Text>
                        </TouchableOpacity> :
                        <TouchableOpacity style={styles.button} onPress={() => handlePopUp("confirmProduct")}>
                            <Text style={styles.whiteTextCentered}>Confirm product</Text>
                        </TouchableOpacity>
                }
                <TouchableOpacity onPress={() => handleModal('')} style={styles.button}>
                    <Text style={styles.whiteTextCentered}>Close</Text>
                </TouchableOpacity>
            </View>
            {
                popup === "confirmProduct" ?
                    <WarnPopUp
                        title={"You want to confirm your product"}
                        message={"By confirming you wil show your product on the store"}
                        firstButton={postProduct}
                        secondButton={() => { handlePopUp('') }} />
                    : null
            }
            {
                popup === "emptyValue" ?
                    <WarnPopUp
                        title={"Empty values"}
                        message={"You need to fill the empty values"}
                        secondButton={() => { handlePopUp('') }} />
                    : null
            }

        </Modal>
    )
}

let slate = "#0f172a";
let gray = "#4b5563";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        justifyContent: "center",
    },
    buttonRow: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "row",
    },
    button: {
        backgroundColor: slate,
        width: 160,
        height: 50,
        borderRadius: 20,
        marginHorizontal: 20,
        display: "flex",
        marginBottom: 20,
        justifyContent: "center",
    },
    whiteTextCentered: {
        fontSize: 18,
        color: 'white',
        textAlign: "center",
        fontWeight: "bold",
    },
    input: {
        width: 310,
        height: 55,
        borderWidth: 2,
        borderColor: slate,
        borderRadius: 25,
        paddingHorizontal: 10,
        marginBottom: 15,
    },
    title: {
        fontWeight: "bold",
        color: slate,
        fontSize: 25,
        textAlign: "center",
        paddingBottom: 20,
        paddingTop: 20,
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
})

export default CreateProduct;