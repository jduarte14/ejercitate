import { Modal, Image, ScrollView, View, Pressable, Text, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';

const ProductCard = ({ selectedProduct, handleProductPopUp }) => {
    const [productImages, setProductImages] = useState([]);
    const {
        _id,
        brand,
        category,
        subCategory,
        description,
        characteristics,
        name,
        price,
        image,
        image2,
        image3,
        image4,
        image5
    } = selectedProduct;

    useEffect(() => {
        setProductImages([...productImages, image, image2, image3, image4, image5].filter(Boolean));

    }, [])
    return (
        <Modal visible={true} animationType="slide">
            <View style={styles.categoryRow}>
                <View style={styles.category}>
                    <Text>{category}</Text>
                </View>
                <View style={styles.next}>
                    <Image style={styles.ico} source={require('./../../../img/next_black.png')}/>
                </View>
                <View style={styles.category}>
                    <Text>{subCategory}</Text>
                </View>
            </View>
            <View style={styles.gallery} key={_id}>
                <ScrollView horizontal>
                    {
                        productImages ?
                            productImages.map(image => {
                                return (<Image source={{ uri: image }} style={styles.image} />)
                            })
                            : null
                    }
                </ScrollView>
            </View>
            <View style={styles.container}>
                <ScrollView>
                    <Text style={styles.title}>
                        {name}
                    </Text>
                    <Text style={styles.text}>
                        Brand: {brand}
                    </Text>
                    <Text style={styles.text}>
                        ${price}
                    </Text>
                    <View style={styles.descriptionInfo}>
                        <Text style={styles.subText}>
                            {description}
                        </Text>
                        <Text style={styles.subText}>
                            {characteristics}
                        </Text>
                    </View>
                </ScrollView>
            </View>

            <View style={styles.buttonsRow}>
                <Pressable style={styles.button} onPress={handleProductPopUp}>
                    <Text style={styles.buttonText}>Back</Text>
                </Pressable>
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Buy</Text>
                </Pressable>
            </View>
        </Modal>
    )
}

let gray = "#f6f6f6";
let slateGray ="#e2e8f0";
let slate = "#0f172a";
let golden = "#FFD700";
let orange = "#f59e0b";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    gallery: {
        paddingBottom: 50,
    },
    title: {
        fontSize: 35,
        fontWeight: "bold",
        color: slate,
    },
    subText: {
        color: slate,
        fontSize: 18,
    },
    categoryRow:{
        display:'flex',
        flexDirection:"row",
    },
    category:{
        marginHorizontal:10,
        paddingLeft:10,
        paddingRight:10,
        paddingTop:5,
        paddingVertical:5,
        height:40,
        backgroundColor:slateGray,
        marginVertical:10,
        borderRadius:10,
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
    },
    categoryText :{
        padding:10,
        color:slate,
        fontWeight:"bold",
    },
    text: {
        color: slate,
        fontWeight: "bold",
        fontSize: 20,
        paddingTop: 5,
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 5,
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
    buttonText: {
        fontWeight: "bold",
        color: "white",
        fontSize: 18,
        textAlign: "center",
    },
    descriptionInfo: {
        marginTop: 20,
        backgroundColor: gray,
        borderWidth: 2,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    next:{
        display:"flex",
        justifyContent:"center"
    },
    ico:{
        width:10,
        height:15,
    }
})

export default ProductCard;