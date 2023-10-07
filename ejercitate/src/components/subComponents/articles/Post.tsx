import { StyleSheet, Text, Pressable, ScrollView, Image, Modal, View } from 'react-native';

const Post = ({ article, handlePostModal }) => {
    console.log(article);

    return (
        <Modal visible={true} animationType='slide'>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}>
                        {article.title}
                    </Text>
                </View>
                <View style={styles.buttonsRow}>
                    <Pressable style={styles.button} onPress={handlePostModal}>
                        <Text style={styles.whiteText}>Volver</Text>
                    </Pressable>
                </View>

            </ScrollView>
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
        fontSize: 20,
    },
    button: {
        backgroundColor: slate,
        paddingVertical: 13,
        paddingHorizontal: 90,
        margin: 20,
        borderRadius: 20,
        textAlign: "center",
    },
    buttonsRow: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 10,
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