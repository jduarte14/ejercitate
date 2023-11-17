import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { Modal, View, ScrollView, Text, Input, TextArea, TextInput, Image, Pressable, StyleSheet, TouchableOpacity } from 'react-native';
import SubmitRoutine from './submitRoutine';

const Step = ({ setStepsObject, stepsObject, postObject, setPostObject, handleStepModal }) => {
    const [submitModal, setSubmitModal] = useState(false);
    const [stepIndex, setStepIndex] = useState(0);
    const [title, setTitle] = useState('');
    const [subTitle, setSubTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');

    const [post, setPost] = useState(false);
    const [postTitle, setPostTitle] = useState('');
    const [postSubTitle, setPostSubTitle] = useState('');
    const [postDescription, setPostDescription] = useState('');
    const [postImage, setPostImage] = useState('');

    const handleSubmitModal = () => {
        submitModal ? setSubmitModal(false) :
            setSubmitModal(true);
    }

    const pickImage = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });

            if (!result.canceled) {
                if (post) {
                    setImage(result.assets[0].uri);
                } else {
                    setPostImage(result.assets[0].uri);
                }
            }
        } catch (error) {
            console.log('Error picking an image', error);
        }
    };

    const addStep = () => {
        const newStep = {
            title,
            subTitle,
            description,
            image: image,
        };

        const newPost = {
            postTitle,
            postSubTitle,
            postDescription,
            files: postImage,
        }

        if (post) {
            if (stepsObject.length <= 7) {
                setStepsObject(prevSteps => [...prevSteps, newStep]);
            }
            setTitle('');
            setSubTitle('');
            setDescription('')
            setImage('');
        } else {
            setPostObject(prevPosts => [...prevPosts, newPost]);
            setPostTitle('');
            setPostSubTitle('');
            setPostDescription('')
            setPostImage('');
            setPost(true);
        }
    };


    const handleStep = (event) => {
        if (event === "next") {
            setStepIndex(prevStep => prevStep + 1);
            if (stepIndex < 7) {
                addStep();

            }
        }
        else if (event === "prev") {
            setStepIndex(prevStep => prevStep - 1);
        }
    }

    return (
        <Modal visible={true} animationType='slide' style={styles.modalContainer}>
            <Pressable onPress={handleStepModal} style={styles.close}>
                <Image style={styles.icon} source={require("./../../../../../../img/cross.png")} />
            </Pressable>
            <ScrollView>

                <View style={styles.container}>
                    <Text style={styles.title}>
                        {
                            post ? `Describe the step: ${stepIndex}` :
                                "Describe the routine:"
                        }
                    </Text>
                    <View style={styles.placeHolderRow}>
                        <View style={styles.iconContainer}>
                            <Image style={styles.icon} source={require('./../../../../../../img/notes.png')} />
                        </View>
                        {
                            post ? <TextInput
                                style={styles.input}
                                placeholder="Step title"
                                placeholderTextColor="white"
                                onChangeText={setTitle}
                            /> : <TextInput
                                style={styles.input}
                                placeholder="Routine title"
                                placeholderTextColor="white"
                                onChangeText={setPostTitle}
                            />
                        }
                    </View>
                    <View style={styles.placeHolderRow}>
                        <View style={styles.iconContainer}>
                            <Image style={styles.icon} source={require('./../../../../../../img/notes.png')} />
                        </View>
                        {
                            post ? <TextInput
                                style={styles.input}
                                placeholder="Step subtitle"
                                placeholderTextColor="white"
                                onChangeText={setSubTitle}
                            /> : <TextInput
                                style={styles.input}
                                placeholder="Routine subtitle"
                                placeholderTextColor="white"
                                onChangeText={setPostSubTitle}
                            />
                        }
                    </View>
                    <View style={styles.placeHolderRow}>
                        <View style={styles.iconContainer}>
                            <Image style={styles.icon} source={require('./../../../../../../img/notes.png')} />
                        </View>
                        {post ? <TextInput
                            style={styles.minTextArea}
                            placeholder="Step description"
                            placeholderTextColor="white"
                            numberOfLines={10}
                            multiline={true}
                            onChangeText={setDescription}
                        /> :
                            <TextInput
                                style={styles.minTextArea}
                                placeholder="Routine description"
                                placeholderTextColor="white"
                                numberOfLines={10}
                                multiline={true}
                                onChangeText={setPostDescription}
                            />}
                    </View>
                    <Pressable style={styles.imageButton} onPress={pickImage}>
                        <Text style={styles.whiteText}> Add step Image </Text>
                    </Pressable>
                    {image && <Image source={{ uri: image }} style={{ width: 100, height: 100, marginBottom: 20, borderRadius: 200, borderWidth: 2, borderColor: slate, }} />}
                    {postImage && <Image source={{ uri: postImage }} style={{ width: 100, height: 100, marginBottom: 20, borderRadius: 200, borderWidth: 2, borderColor: slate, }} />}

                    {
                        stepIndex >= 7 ? <Text style={styles.text}>
                            You cannot add more steps
                        </Text> : <Text style={styles.text}>You can add up to 7 steps</Text>
                    }
                </View>


            </ScrollView>
            <View style={styles.buttonsRow}>
                <Pressable style={styles.button} onPress={() => { handleStep('prev') }}>
                    <Image style={styles.icon} source={require("./../../../../../../img/prev.png")} />
                </Pressable>
                <Pressable style={styles.button} onPress={handleSubmitModal}>
                    <Text style={styles.whiteText}>Confirm</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => { handleStep('next') }}>
                    <Image style={styles.icon} source={require("./../../../../../../img/next.png")} />
                </Pressable>
            </View>
            {
                submitModal ? <SubmitRoutine stepsObject={stepsObject} postObject={postObject} handleSubmitModal={handleSubmitModal} /> : null
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
    modalContainer: {
        position: "relative"
    },
    imageButton: {
        backgroundColor: slate,
        paddingVertical: 10,
        paddingHorizontal: 20,
        margin: 5,
        borderRadius: 20,
    },
    whiteText: {
        color: "white",
        fontWeight: 'bold',
        fontSize: 16,
    },
    icon: {
        width: 25,
        height: 25,
        zIndex: 2,
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
        marginTop: 5,
        marginBottom: 10,
        background: "white",
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
        paddingTop: 20,
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
    close: {
        backgroundColor: slate,
        borderRadius: 100,
        marginLeft: "auto",
        width: 50,
        height: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: 5,
    }
});

export default Step;