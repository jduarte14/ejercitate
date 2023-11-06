import { useState } from 'react';
import { Modal, View, ScrollView, Text, Input, TextArea, TextInput, Image, Pressable, StyleSheet, TouchableOpacity } from 'react-native';

const Step = () => {
    const [stepIndex, setStepIndex] = useState(1);
    const [title, setTitle] = useState('');
    const [subTitle, setSubTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [stepsObject, setStepsObject] = useState({
        1: {
            title: '',
            stepTitle: '',
            description: '',
            image: '',
        },
        2: {
            title: '',
            stepTitle: '',
            description: '',
            image: '',
        },
        3: {
            title: '',
            stepTitle: '',
            description: '',
            image: '',
        },
        4: {
            title: '',
            stepTitle: '',
            description: '',
            image: '',
        },
        5: {
            title: '',
            stepTitle: '',
            description: '',
            image: '',
        },
        6: {
            title: '',
            stepTitle: '',
            description: '',
            image: '',
        },
        7: {
            title: '',
            stepTitle: '',
            description: '',
            image: '',
        }
    });



    const addStep = (field, value) => {
        setStepsObject(prevState => {
            return {
                ...prevState,
                [stepIndex]: {
                    ...prevState[stepIndex],
                    [field]: value
                }
            };
        });
    }

    const handleStep = (event) => {
        if (event === "next") {
            setStepIndex(prevStep => prevStep + 1);
            if (stepIndex < 7) {
                addStep(title, subTitle, description, image);
                console.log(stepsObject);
            }
        }
        else if (event === "prev") {
            setStepIndex(prevStep => prevStep - 1);
        }
    }

    return (
        <Modal visible={true} animationType='slide'>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}>
                        Step one information:
                        {stepIndex}
                    </Text>
                    <View style={styles.placeHolderRow}>
                        <View style={styles.iconContainer}>
                            <Image style={styles.icon} source={require('./../../../../../../img/notes.png')} />
                        </View>
                        <TextInput
                            style={styles.input}
                            placeholder="Step title"
                            placeholderTextColor="white"
                            onChangeText={setTitle}
                        />
                    </View>
                    <View style={styles.placeHolderRow}>
                        <View style={styles.iconContainer}>
                            <Image style={styles.icon} source={require('./../../../../../../img/notes.png')} />
                        </View>
                        <TextInput
                            style={styles.input}
                            placeholder="Step subtitle"
                            placeholderTextColor="white"
                            onChangeText={setSubTitle}
                        />
                    </View>
                    <View style={styles.placeHolderRow}>
                        <View style={styles.iconContainer}>
                            <Image style={styles.icon} source={require('./../../../../../../img/notes.png')} />
                        </View>
                        <TextInput
                            style={styles.minTextArea}
                            placeholder="Step description"
                            placeholderTextColor="white"
                            numberOfLines={10}
                            multiline={true}
                            onChangeText={setDescription}
                        />
                    </View>
                    <View style={styles.placeHolderRow}>
                        <View style={styles.iconContainer}>
                            <Image style={styles.icon} source={require('./../../../../../../img/notes.png')} />
                        </View>
                        <TextInput
                            style={styles.input}
                            placeholder="Add step image"
                            placeholderTextColor="white"
                        />
                    </View>
                </View>
            </ScrollView>
            <View style={styles.buttonsRow}>
                <Pressable style={styles.button} onPress={() => { handleStep('prev') }}>
                    <Image style={styles.icon} source={require("./../../../../../../img/prev.png")} />
                </Pressable>
                <Pressable style={styles.button}>
                    <Text style={styles.whiteText}>Confirm</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => { handleStep('next') }}>
                    <Image style={styles.icon} source={require("./../../../../../../img/next.png")} />
                </Pressable>
            </View>
        </Modal>
    )
}

let slate = "#0f172a";
let gray = "#f7f7f7";
let red = "#dc2626";
let solidGray = "#d6d3d1";
let cyan = "#6889d5";

const styles = StyleSheet.create({
    whiteText: {
        color: "white",
        fontWeight: 'bold',
        fontSize: 16,
    },
    icon: {
        width: 25,
        height: 25,
    },
    button: {
        backgroundColor: slate,
        paddingVertical: 13,
        paddingHorizontal: 40,
        margin: 5,
        borderRadius: 20,
        textAlign: "center",
    },
    buttonsRow: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginTop:5,
        marginBottom: 10,
        background:"white",
    },
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
    subTitle: {
        fontSize: 25,
        fontWeight: "bold",
        color: slate,
        paddingTop: 50,
        paddingBottom: 40,
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
        minWidth: 200,
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
    placeHolderRow: {
        display: 'flex',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: slate,
        marginTop: 10,
        borderRadius: 10,
        position: "relative",
        paddingLeft: 20,
        paddingRight: 20,
        width: 350,
    },
    minTextArea: {
        height: 150,
        paddingHorizontal: 25,
        borderRadius: 10,
        backgroundColor: slate,
        color: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        fontWeight: "bold",
        width: 220,

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
        position: "absolute",
        left: 15,
    },
});

export default Step;