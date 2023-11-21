import { useProductContext } from './../../../../../context/productContext';
import { useState, useEffect } from 'react';
import { View, Modal, ScrollView, Image, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import CreateProduct from './createProduct';
import PatchProduct from './patchProduct';
import WarnPopUp from '../../../../../helpers/warnPopUp';

const StoreDashboard = ({ storeId, handleModal }) => {
    const { getProductsByGym } = useProductContext();
    const [productData, setProductData] = useState();
    const [productPopup, setProductPopUp] = useState('');
    const [productId, setProductId] = useState();
    const [selectedProduct, setSelectedProduct] = useState();
    const [isLoading, setIsLoading] = useState(true);

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
        setIsLoading(true);
        const data = await getProductsByGym(storeId);
        if (data.products[0]) {
            setProductData(data.products);
            setIsLoading(false);
        }
        else {
            setTimeout(()=>{
                setIsLoading(false);
            },200)
        }
    }

    const getProductId = (productId) => {
        setProductId(productId);
        setProductPopUp("delete_product");
    }

    const deleteProduct = async () => {
        try {
            const response = await fetch(`https://ejercitatebackend-production.up.railway.app/api/products/${productId}`, { method: "DELETE" });

            const data = await response.json();
            if (data.status === "success") {
                setTimeout(() => {
                    setProductPopUp("");
                }, 200)
            }
        }
        catch (error) {
            console.error(error.message);
        }
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
                    {isLoading ? (
                        <View style={styles.loader}>
                            <ActivityIndicator size="large" color="#0f172a" />
                        </View>
                    ) : productData && productData.length > 0 ? (
                        productData.map(product => {
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
                                        <TouchableOpacity style={styles.modifyButton} onPress={() => { patchProductId(product) }}>
                                        <Image style={styles.editIcon} source={require('./../../../../../img/pen.png')}/>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.modifyButton} onPress={() => { getProductId(product._id) }}>
                                            <Image style={styles.deleteIcon} source={require('./../../../../../img/delete.png')}/>
                                        </TouchableOpacity>
                                    </View>

                                </View>

                            </TouchableOpacity>)


                        })
                    ) : (
                        <View style={styles.emptyProduct}>
                            <Image source={require('./../../../../../img/empty_box.png')} style={styles.icon} />
                            <Text style={styles.emptyText}>
                                You don't have any product on your store. Create and manage your products here.
                            </Text>
                        </View>
                    )}
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
            {
                productPopup === "delete_product" ?
                    <WarnPopUp
                        title={"Are you sure you want delete the product?"}
                        message={"By confirming you will delete this product"}
                        firstButton={deleteProduct}
                        secondButton={handlePopUp} />
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
        alignItems: "center",
        justifyContent: "center",
    },
    loader: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        marginTop: "100%",
    },
    icon: {
        width: 80,
        height: 80,
        marginBottom: 10,
    },
    emptyProduct: {
        borderWidth: 2,
        borderColor: slate,
        padding: 10,
        margin: 15,
        marginTop: 50,
        borderRadius: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
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
        marginRight: 10,
        borderRadius: 10,
        paddingLeft: 40,
        paddingRight: 40,
        paddingTop: 10,
        paddingBottom: 10,
        margin: 20,
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
        lineHeight: 25,
    },
    emptyText: {
        color: slate,
        fontWeight: "bold",
        fontSize: 17,
        paddingHorizontal: 5,
        paddingVertical: 10,
        lineHeight: 25,
        textAlign: "center",
    },
    brandText: {
        color: gray,
        fontWeight: "bold",
        fontSize: 17,
        paddingHorizontal: 5,
        paddingVertical: 5,
        textTransform: "uppercase",
    },
    modifyButton: {
      marginHorizontal:10,
      display:"flex",
      justifyContent:"center",
      alignItems:"center"
    },
    deleteIcon :{
        width: 30,
        height: 30,
        marginBottom: 10,
    },
    editIcon:{
        width: 30,
        height: 30,
        marginBottom: 10,
    },
})

export default StoreDashboard;