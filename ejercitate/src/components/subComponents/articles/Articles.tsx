import { ScrollView, View, Text, Image, Modal, Pressable, StyleSheet } from 'react-native';
import Post from './Post';
import { useState } from 'react';

const Articles = ({ articles, hideModal }) => {
    const [selectedArticle, setSelectedArticle] = useState(null);

    const handlePostModal = (article) => {
        !selectedArticle ?setSelectedArticle(article)
        : setSelectedArticle(null);
        
        
    }

    return (
        <Modal visible={true} animationType='slide'>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}>
                        Rutinas:
                    </Text>
                    <ScrollView>
                        {
                            articles.map((article, index) => (
                                <View style={styles.article} key={index}>
                                    <Pressable onPress={() => handlePostModal(article)} style={styles.routineContainer}>
                                        {
                                            article.images[0] ?
                                                <Image source={{ uri: article.images[0] }} style={styles.icon} /> :
                                                <Image source={require('./../../../img/description.png')} style={styles.icon} />
                                        }
                                        <Text style={styles.articleTitle}>
                                            {article.title}
                                        </Text>
                                    </Pressable>
                                </View>
                            ))
                        }
                    </ScrollView>
                </View>
                <View style={styles.buttonsRow}>
                    <Pressable style={styles.button} onPress={hideModal}>
                        <Text style={styles.whiteText}>
                            Cerrar
                        </Text>
                    </Pressable>
                </View>
            </ScrollView>
            {
                selectedArticle && <Post article={selectedArticle} handlePostModal={handlePostModal} />
            }
        </Modal>
    )
}


export default Articles;

let gray = "#f6f6f6";
let slate = "#0f172a";
let golden = "#FFD700";
let orange = "#f59e0b";

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