import { ScrollView, Modal, View, Text, Image, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import WarnPopUp from '../../../../../helpers/warnPopUp';

const PatchProduct = ({ handleModal, storeId, selectedProduct }) => {
    const [name, setName] = useState(selectedProduct.name);
    const [description, setDescription] = useState(selectedProduct.description);
    const [shortDescription, setShortDescription] = useState(selectedProduct.shortDescription);
    const [brand, setBrand] = useState(selectedProduct.brand);
    const [price, setPrice] = useState(selectedProduct.price.toString());
    const [category, setCategory] = useState(selectedProduct.category);
    const [subCategory, setSubCategory] = useState(selectedProduct.subCategory);
    const [characteristics, setCharacteristics] = useState(selectedProduct.characteristics);
    const [images, setImages] = useState([]);
    const [popup, setPopUp] = useState(false);

    const handlePopUp = () => {
        popup ? setPopUp(false) : setPopUp(true);
    }

    useEffect(() => {
        const cleanedImages = [
            selectedProduct.image,
            selectedProduct.image2,
            selectedProduct.image3,
            selectedProduct.image4,
            selectedProduct.image5
        ].filter(Boolean);

        setImages(cleanedImages);
    }, [selectedProduct]);

    const patchProduct = async () => {
        try {
            const productData = new FormData();
            productData.append("name", name.toLocaleLowerCase());
            productData.append("description", description.toLocaleLowerCase());
            productData.append("shortDescription", shortDescription.toLocaleLowerCase());
            productData.append("brand", brand.toLocaleLowerCase());
            productData.append("price", Number(price));
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
            let url = `https://ejercitatebackend-production.up.railway.app/api/products/${selectedProduct._id}`;
            const response = await fetch(url, {
                method: "PATCH",
                body: productData,
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.log(error.message);
        }
    };



    const pickImage = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 2],
                quality: 1,
            });

            if (!result.cancelled) {
                setImages([...images, result.uri]);
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

    return (
        <Modal visible={true} animationType='slide'>
            <Text style={styles.title}>
                Modify the product
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
                            keyboardType="numeric"
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
                                                image ? <Image key={index} source={{ uri: image }} style={{ width: 100, height: 100, marginBottom: 20, borderRadius: 10 }} /> : null
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
                <TouchableOpacity style={styles.button} onPress={handlePopUp}>
                    <Text style={styles.whiteTextCentered}>Confirm product</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleModal('')} style={styles.button}>
                    <Text style={styles.whiteTextCentered}>Close</Text>
                </TouchableOpacity>
            </View>
            {
                popup ? <WarnPopUp title={"Confirm changes"} message={"By confirming the changes will be applied on the product"} firstButton={patchProduct} secondButton={handlePopUp} /> : null
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

export default PatchProduct;