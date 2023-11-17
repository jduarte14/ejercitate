import React, { useState, useEffect } from 'react';
import { Text, View, Image, StyleSheet, ScrollView, Modal, Pressable } from 'react-native';
import InstructorPage from '../../../instructorPage';
const InstructorList = ({ instructors, handleModal, navigation }) => {
    const [selectedInstructor,setSelectedInstructor] = useState();
    const [instructorModal, setInstructorModal] = useState(false);

    const showInstructorPage = (instructorId) => {
        setSelectedInstructor(instructors.find(instructor => instructor._id === instructorId));
        instructorModal ? setInstructorModal(false) : setInstructorModal(true);
    }
    return (
        <Modal visible={true} animationType="slide">
            <View style={instructorStyle.container}>
                <ScrollView>
                    <Text style={instructorStyle.title}>
                        Instructors on your gym:
                    </Text>
                    {instructors.length > 0 ? (
                        instructors.map((instructor, index) => {
                            const { name, phone, avatar, _id } = instructor;
                            return (
                                <View style={instructorStyle.instructorRowContainer} key={index}>
                                    {
                                        avatar ? <Image source={{ uri: avatar }} style={instructorStyle.instructorAvatar} /> : <Image source={require('./../../../../img/avatar.png')} style={instructorStyle.instructorAvatar} />
                                    }

                                    <View style={instructorStyle.instructorInfoRow}>
                                        <Text style={instructorStyle.instructorText}>{name}</Text>
                                        <Text style={instructorStyle.instructorText}>{phone}</Text>
                                    </View>
                                    <Text style={instructorStyle.instructorShowText} onPress={() => showInstructorPage(_id)}>See more</Text>
                                </View>
                            );
                        })
                    ) : (
                        <Text style={instructorStyle.charginText}>Loading...</Text>
                    )}

                    {
                        instructorModal ? <InstructorPage instructor={selectedInstructor} hideInstructorPage={showInstructorPage}/>: null
                    }

                </ScrollView>
                <View style={instructorStyle.buttonRow}>
                    <Pressable onPress={() => handleModal('')} style={instructorStyle.button}>
                        <Text style={instructorStyle.whiteText}>
                            Go back
                        </Text>
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate('navigate')} style={instructorStyle.button}>
                        <Text style={instructorStyle.whiteText}>
                            Hire
                        </Text>
                    </Pressable>
                </View>

            </View>
        </Modal>

    )
}

let gray = "#f6f6f6";
let slate = "#0f172a";

const instructorStyle = StyleSheet.create({
    container: {
        flex: 1,
    },
    title:{
        fontSize:25,
        textAlign:"center",
        fontWeight:"bold",
        marginBottom:20,
        marginTop:20,
    },
    instructorRowContainer: {
        display: "flex",
        paddingRight: 5,
        flexDirection: "row",
        paddingLeft: 20,
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
    instructorText: {
        fontWeight: "bold",
        fontSize: 18,
        color: slate,
    },
    instructorShowText: {
        fontWeight: "bold",
        fontSize: 15,
        color: slate,
        borderColor: slate,
        borderRadius: 10,
        borderWidth: 1.5,
        padding: 10,
        textAlign: "center",
    },
    charginText: {
        fontWeight: "bold",
        fontSize: 20,
        color: slate,
        paddingLeft: 45,
        paddingTop: 20,
    },
    instructorAvatar: {
        width: 60,
        height: 60,
        borderRadius: 100,
    },
    instructorInfoRow: {
        paddingLeft: 13,
        width: 150,
    },
    buttonRow: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
        background: "white",
        flexDirection: "row"
    },
    whiteText: {
        fontSize: 20,
        color: 'white',
        fontWeight: "bold",
    },
    button: {
        backgroundColor: slate,
        width: 150,
        height: 50,
        borderRadius: 20,
        marginHorizontal: 5,
        display: "flex",
        marginBottom: 20,
        justifyContent: "center",
        alignItems: "center",
    },
})

export default InstructorList