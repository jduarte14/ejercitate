import { StyleSheet, Text, Pressable, ScrollView, Image, Modal, View } from 'react-native';
import { useState } from 'react';
import Step from './Step';
const Post = ({ article, handlePostModal }) => {
    const [stepModal, setStepModal] = useState('');
    const handleModal = (step) => {
        setStepModal(step);
    }

    return (
        <Modal visible={true} animationType='slide'>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}>
                        {article.title}
                    </Text>
                    <View style={styles.description}>
                        <Text style={styles.text}>
                            {article.content}
                        </Text>
                    </View>
                </View>
                <View style={styles.imageContainer}>
                    <ScrollView horizontal>
                        {
                            article.images.map((image, index) => {
                                return <Image key={index} source={{ uri: image }} style={styles.image} />
                            })
                        }
                    </ScrollView>
                </View>
                <View style={styles.buttonsRow}>
                    <Pressable style={styles.button} onPress={handlePostModal}>
                        <Text style={styles.whiteText}>Back</Text>
                    </Pressable>
                    <Pressable style={styles.button} onPress={()=> handleModal('1')}>
                        <Text style={styles.whiteText}>Next step</Text>
                    </Pressable>
                </View>
            </ScrollView>
            {
                stepModal ?
                    <Step stepModal={stepModal} setStepModal={setStepModal} article={article.steps} handleModal={handleModal} currentStep={parseInt(stepModal)} />
                    : null
            }
             
        </Modal>
    )
}

export default Post;

let slate = "#0f172a";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageContainer: {
        marginLeft: 15,
        marginTop: 30,
    },
    description: {
        margin: 15,
    },
    image: {
        width: 320,
        height: 170,
        borderRadius: 5,
        marginRight: 10,
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        color: slate,
        lineHeight: 28,
    },
    stepText: {
        fontSize: 25,
        fontWeight: "bold",
        color: slate,
        textAlign: "center",
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: slate,
        paddingTop: 50,
        paddingBottom: 40,
    },
    articleContainer: {
        marginTop: 50,
    },
    article: {
        width: 300,
    },
    articleTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: slate,
    },
    whiteText: {
        color: "white",
        fontWeight: 'bold',
        fontSize: 16,
    },
    button: {
        backgroundColor: slate,
        paddingVertical: 13,
        paddingHorizontal: 50,
        margin: 20,
        borderRadius: 20,
        textAlign: "center",
    },
    buttonsRow: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 50,
        marginBottom: 10,
    },
    routineContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
        padding: 10,
        borderRadius: 10,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        paddingVertical: 10,
        marginVertical: 20,
    },
    icon: {
        width: 50,
        height: 50,
        borderRadius: 100,
        marginRight: 20,
    }
});