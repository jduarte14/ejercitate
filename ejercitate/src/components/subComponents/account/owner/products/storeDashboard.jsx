import { useProductContext } from './../../../../../context/productContext';
import { useState, useEffect } from 'react';
import { View, Modal, ScrollView, Image, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import CreateProduct from './createProduct';
import PatchProduct from './patchProduct';

const StoreDashboard = ({ storeId, handleModal }) => {
    const { getProductsByGym } = useProductContext();
    const [productData, setProductData] = useState();
    const [productPopup, setProductPopUp] = useState('');
    const [selectedProduct, setSelectedProduct] = useState();

    const handlePopUp = (type) => {
        switch (type) {
            case "create_product":
                setProductPopUp(type);
                break;
            case "patch_product":
                setProductPopUp(type);
                break;
            case "delete_product":
                setProductPopUp(type);
                break;
            default: setProductPopUp('');
        }
    }

    const getId = async () => {
        const data = await getProductsByGym(storeId);
        setProductData(data.products);
    }

    const patchProductId = (product) => {
         setSelectedProduct(product) 
        handlePopUp("patch_product");
    }


    useEffect(() => {
        getId();
    }, [])
    return (
        <Modal visible={true} animationType='slide'>
            <ScrollView>
                <View style={styles.container}>
                    {
                        productData ? productData.map(product => {
                            return (<TouchableOpacity key={product._id} style={styles.panelRow}>
                                <Image style={styles.icon} source={{ uri: product.image }} />
                                <View>
                                    <View style={styles.productRow}>
                                        <Text style={styles.subText}>
                                            {product.name}
                                        </Text>
                                        <Text style={styles.subText}>
                                            ${product.price}
                                        </Text>
                                    </View>
                                    <View style={styles.productRow}>
                                        <Text style={styles.brandText}>
                                            {product.brand}
                                        </Text>
                                        <Text style={styles.modifyButton} onPress={() => { patchProductId(product) }}>
                                            Modify
                                        </Text>
                                    </View>

                                </View>

                            </TouchableOpacity>)


                        }) : null
                    }
                </View>
            </ScrollView>
            <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.button} onPress={() => { handlePopUp("create_product") }}>
                    <Text style={styles.whiteTextCentered}>Create product</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleModal('')} style={styles.button}>
                    <Text style={styles.whiteTextCentered}>Close</Text>
                </TouchableOpacity>
            </View>
            {
                productPopup === "create_product" ? <CreateProduct storeId={storeId} handleModal={handleModal} /> : null
            }
            {
                productPopup === "patch_product" && selectedProduct ? <PatchProduct storeId={storeId} selectedProduct={selectedProduct} handleModal={handleModal} /> : null
            }
            {}
        </Modal>
    )
}
let slate = "#0f172a";
let gray = "#4b5563";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    productRow: {
        alignItems: "center",
        flexDirection: "row",
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
    panelRow: {
        backgroundColor: "white",
        paddingVertical: 15,
        paddingLeft: 10,
        marginTop: 20,
        borderRadius: 10,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: 350,
        marginBottom: 10,
    },
    icon: {
        width: 95,
        height: 95,
    },
    subText: {
        color: slate,
        fontWeight: "bold",
        fontSize: 17,
        paddingHorizontal: 5,
        paddingVertical: 5,
    },
    brandText: {
        color: gray,
        fontWeight: "bold",
        fontSize: 17,
        paddingHorizontal: 5,
        paddingVertical: 5,
    },
    modifyButton: {
        color: gray,
        fontWeight: "bold",
        fontSize: 17,
        paddingHorizontal: 8,
        paddingTop: 7,
        paddingBottom: 6,
        borderWidth: 2,
        borderColor: gray,
        borderRadius: 10,
        textAlign: "center",
        marginLeft: "auto",
        marginTop: 5,
    },
})

export default StoreDashboard;