import { View, StyleSheet, Text, Modal, ScrollView, Image, Pressable } from 'react-native';
import { useState, useEffect } from 'react';

const Step = ({ article, handleModal, currentStep, stepModal, setStepModal }) => {
    const [selectedStep, setSelectedStep] = useState(article[`step${currentStep}`]);
    const { title, subTitle, description, images } = selectedStep;
    let nextStep = currentStep + 1;
    let stringedStep = nextStep.toString();

    useEffect(() => {
        setSelectedStep(article[`step${currentStep}`]);
    }, [currentStep, article]);

    const goToNextStep = () => {
        const nextStep = currentStep + 1;
        const nextArticle = article[`step${nextStep}`];


        handleModal(nextStep.toString());
        if (!nextArticle) {
            handleModal('');
        }
    }

    const goToPrevStep = () => {
        const prevStep = currentStep - 1;
        if (currentStep > 1) {
            handleModal(prevStep.toString());
        }
    }

    return (
        <Modal visible={true} animationType='slide'>
            <View style={styles.container}>
                <Text style={styles.title}>
                    {title}
                </Text>
                {
                    subTitle ? <Text style={styles.subTitle}>
                        {subTitle}
                    </Text> : null
                }

                <View style={styles.description}>
                    <Text style={styles.text}>
                        {description}
                    </Text>
                </View>

                <ScrollView style={styles.imageContainer} horizontal>
                    {
                        images ? images.map((image, index) => {
                            return <Image key={index} source={{ uri: image }} style={styles.image} />
                        }) : null
                    }
                </ScrollView>
            </View>
            <View style={styles.buttonsRow}>
                {
                    currentStep > 1 ? <Pressable style={styles.button} onPress={goToPrevStep}>
                        <Image style={styles.icon} source={require("./../../../img/prev.png")} />
                    </Pressable> : <Pressable style={styles.button} onPress={() => handleModal('')}>
                        <Image style={styles.icon} source={require("./../../../img/prev.png")} />
                    </Pressable>
                }

                <Pressable style={styles.button} onPress={goToNextStep}>
                    <Image style={styles.icon} source={require("./../../../img/next.png")} />
                </Pressable>
            </View>
            {
                stepModal === nextStep ?
                    <Step stepModal={stepModal} setStepModal={setStepModal} article={article.steps} handleModal={() => handleModal(stringedStep)} currentStep={nextStep} />
                    : null
            }
        </Modal>
    )
}

let slate = "#0f172a";

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
});

export default Step;