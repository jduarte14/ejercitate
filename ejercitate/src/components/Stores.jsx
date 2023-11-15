import { Modal, View, Text, Image, Pressable, StyleSheet, TextInput, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import { useProductContext } from '../context/productContext';
import BottomBar from './bottomBar';
import ProductCard from './subComponents/products/productCard';
const Stores = ({ navigation }) => {
    const { products, setProduct } = useProductContext();
    const [filteredProducts, setFilteredProducts] = useState();
    const [selectedProduct, setSelectedProduct] = useState();
    const [productPopUp, setSelectedPopUp] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    const getSelectedProduct = (productData) => {
        setSelectedProduct(productData);
        handleProductPopUp();
    }

    const handleProductPopUp = () => {
        productPopUp ? setSelectedPopUp(false) : setSelectedPopUp(true);
    }

    useEffect(() => {
        const filtered = products.filter(products =>
            products.name.toLowerCase().includes(searchValue.toLowerCase())
        );
        setFilteredProducts(filtered);
    }, [products, searchValue]);
    return (
        <Modal visible={true} animationType="slide">
            <View style={styles.searchTriggerContainer}>
                <Pressable style={styles.searchTriggerWrapper}>
                    <Image style={styles.loupeImage} source={require('./../img/loupe.png')} />
                    <TextInput
                        placeholder="Search for a product"
                        placeholderTextColor={slate}
                        style={styles.searchTriggerText}
                        value={searchValue}
                        onChangeText={setSearchValue}
                    />
                </Pressable>
            </View>
            <ScrollView style={styles.modalWrapper}>
                {filteredProducts ? filteredProducts.map(product => {
                    return (
                        <View style={styles.productRowContainer} key={product._id}>
                            <View style={styles.productRowWrapper}>
                                <Image style={styles.productImage} source={{ uri: product.image }} />
                                <View>
                                    <Text style={styles.text}>{product.name} </Text>
                                    <Text style={styles.subText}>{product.brand}</Text>
                                </View>
                            </View>
                            <View>
                                <Pressable style={styles.productBtn} onPress={() => { getSelectedProduct(product) }} >
                                    <Text style={styles.slatePhoneText}> See more </Text>
                                </Pressable>
                            </View>
                        </View>
                    );
                }) : null}
            </ScrollView>
            <BottomBar navigation={navigation} />
            {
                productPopUp ? <ProductCard selectedProduct={selectedProduct} handleProductPopUp={handleProductPopUp} /> : null
            }
        </Modal>
    )
}

let gray = "#f6f6f6";
let slate = "#0f172a";
let golden = "#FFD700";
let orange = "#f59e0b";

const styles = StyleSheet.create({
    text: {
        fontWeight: "bold",
        color: slate,
        fontSize: 20,
    },
    slatePhoneText: {
        fontWeight: "bold",
        color: slate,
        fontSize: 13,
    },

    subText: {
        fontSize: 14,
        fontWeight: "bold",
        color: slate,
        textTransform: "uppercase"
    },
    productImage: {
        width: 60,
        height: 60,
        marginRight: 10,
        borderRadius: 100,
        borderColor: slate,
        borderWidth: 2,
    },
    productBtn: {
        backgroundColor: gray,
        borderRadius: 10,
        padding: 10,
        borderWidth: 2,
        borderColor: slate,
        marginLeft: 30,
    },
    productRowContainer: {
        display: "flex",
        paddingRight: 5,
        flexDirection: "row",
        paddingLeft: 10,
        marginBottom: 10,
        marginTop: 10,
        alignItems: "center",
        backgroundColor: gray,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 10,
        padding: 10,
        borderWidth: 2,
        borderColor: gray,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    productRowWrapper: {
        display: "flex",
        paddingRight: 5,
        flexDirection: "row",
        width: 200,
    },
    buttonsRow: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 10,
        marginBottom: 10,
        zIndex: 3,
    },
    button: {
        backgroundColor: slate,
        marginRight: 10,
        borderRadius: 10,
        paddingLeft: 40,
        paddingRight: 40,
        paddingTop: 10,
        paddingBottom: 10,

    },
    singleButton: {
        backgroundColor: slate,
        marginRight: 10,
        borderRadius: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
        width: 300,

    },
    buttonText: {
        fontWeight: "bold",
        color: "white",
        fontSize: 18,
        textAlign: "center",
    },
    searchTriggerContainer: {
        margin: 10,
        borderRadius: 100,
    },
    searchTriggerWrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        backgroundColor: "#e5e7eb",
        borderRadius: 100,
        marginTop: 30,
    },
    searchTriggerText: {
        color: 'black',
        fontWeight: "bold",
        fontSize: 20,
    },
    loupeImage: {
        width: 28,
        height: 28,
        position: 'absolute',
        left: 30,
    },
})
export default Stores;