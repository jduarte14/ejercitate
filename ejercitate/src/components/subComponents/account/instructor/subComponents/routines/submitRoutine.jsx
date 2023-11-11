import { Image, StyleSheet, Modal, ScrollView, Pressable, Text, View } from 'react-native';
const SubmitRoutine = ({ stepsObject, postObject, handleSubmitModal }) => {
    const createRoutine = async () => {
        try {
            const formData = new FormData();
            formData.append("instructor", "654517654b21ac52e378dc7a");
            formData.append("title", postObject[0].postTitle);
            formData.append("content", postObject[0].postDescription);
            formData.append("files", { uri: postObject[0].files });
            for (const key in stepsObject) {
                formData.append(`steps[step${key}][title]`, stepsObject[key].title);
                formData.append(`steps[step${key}][subTitle]`, stepsObject[key].subTitle);
                formData.append(`steps[step${key}][description]`, stepsObject[key].description);
                formData.append(`steps[step${key}][images]`, { uri: stepsObject[key].images });
            }
            const response = await fetch("https://ejercitatebackend-production.up.railway.app/api/articles/create", {
                method: "POST",
                body: formData,
            });
            const data = await response.json();
            console.log(data);
            return data;
        } catch (error) {
            console.error(error.message);
        }
    }


    return (
        <Modal visible={true} animationType='slide'>
            <ScrollView>
                <Text style={styles.title}>
                    Routine name:
                </Text>
                <Text style={styles.subTitle}>
                    {postObject[0].postTitle}
                </Text>
                <View style={styles.description}>
                    <Text style={styles.text}>
                        Description:
                    </Text>
                    <Text style={styles.text}>
                        {postObject[0].postDescription}
                    </Text>
                </View>
                <View style={styles.imageContainer}>
                    {
                        postObject[0].files ? <Image source={{ uri: postObject[0].files }} style={{
                            width: 300,
                            height: 200,
                            marginBottom: 20,
                            borderWidth: 2,
                            borderRadius: 10,
                            shadowColor: '#000',
                            borderColor: slate,
                            shadowOffset: { width: 0, height: 1 },
                            shadowOpacity: 0.3,
                            shadowRadius: 4,
                            elevation: 5,
                        }} /> : null
                    }

                </View>
                <ScrollView horizontal>
                    {
                        stepsObject[0] ? stepsObject.map((step) => {
                            return (
                                <View style={styles.stepCol}>
                                    <Text style={styles.coltTitle}>
                                        {step.title}
                                    </Text>
                                    <Text style={styles.colText}>
                                        {step.subTitle}
                                    </Text>

                                    <View style={styles.description}>
                                        <Text style={styles.colText}>
                                            {step.description}
                                        </Text>
                                    </View>
                                    <View >
                                        {step.image ?
                                            <Image source={{ uri: step.image }} style={{
                                                width: 200,
                                                height: 150,
                                                marginBottom: 20,
                                                shadowColor: '#000',
                                                shadowOffset: { width: 0, height: 1 },
                                                shadowOpacity: 0.3,
                                                shadowRadius: 4,
                                                elevation: 5,
                                            }} />
                                            : null}
                                    </View>
                                </View>
                            )
                        }) : null
                    }
                </ScrollView>
            </ScrollView>


            <View style={styles.buttonsRow}>
                <Pressable style={styles.button} onPress={createRoutine}>
                    <Text style={styles.whiteText}>Confirm</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={handleSubmitModal}>
                    <Text style={styles.whiteText}>Back</Text>
                </Pressable>
            </View>
        </Modal>
    )
}

export default SubmitRoutine;

let slate = "#0f172a";
let gray = "#f7f7f7";

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
        marginHorizontal: 40,
        marginVertical: 20,
        lineHeight: 30,
        overflow: "scroll",
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
        textAlign: "center",
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
        textAlign: "center",
    },
    subTitle: {
        fontSize: 28,
        fontWeight: "bold",
        color: slate,
        paddingTop: 10,
        paddingBottom: 10,
        textAlign: "center",
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
    stepCol: {
        display: 'flex',
        padding: 10,
        borderRadius: 10,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        backgroundColor: "#f7f7f7",
        marginHorizontal: 20,
    },
    coltTitle: {
        color: slate,
        fontWeight: "bold",
        fontSize: 22,
        textAlign: "center",
    },
    colText: {
        color: slate,
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "center",
    },
});
