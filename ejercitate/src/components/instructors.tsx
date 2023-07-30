import { ScrollView, Pressable, Image, Text, View, Modal } from 'react-native';
import { useState } from 'react';

import styles from './../styles';

import InstructorPage from './instructorPage';

const Instructors = ({ hideInstructorModal, instructors }) => {
    const [instructorPage, setInstructorPage] = useState(false);
    const [selectedInstructor, setSelectedInstructor] = useState(null);

    const showInstructorPage = (instructorId) => {
        setSelectedInstructor(instructors.find(instructor => instructor._id === instructorId));
        setInstructorPage(true);
    }

    const hideInstructorPage = () => {
        setInstructorPage(false);
    }

    return (
        <>
            <Modal visible={true} animationType="slide">
                <ScrollView style={styles.modalWrapper}>
                    {instructors.map((instructor, index) => {
                        const { _id, name, phone, avatar } = instructor;
                        return (
                            <View style={styles.singleInstructorContainer} key={index}>
                                <Image style={styles.trainerAvatar} source={{uri:avatar}} />
                                <View>
                                    <Text style={styles.whiteText}>{name} </Text>
                                    <Text style={styles.whitePhoneText}>{phone}</Text>
                                </View>

                                <View>
                                    <Pressable style={styles.instructorBtn} onPress={() => showInstructorPage(_id)}>
                                        <Text style={styles.whitePhoneText}> Ver mas </Text>
                                    </Pressable>
                                </View>
                            </View>
                        );
                    })}
                    <View style={styles.buttonsRow}>
                        <Pressable style={styles.button} onPress={hideInstructorModal}>
                            <Text style={styles.buttonText}>
                                Cerrar
                            </Text>
                        </Pressable>
                    </View>
                </ScrollView>
            </Modal>
            {instructorPage ? <InstructorPage hideInstructorPage={hideInstructorPage} instructor={selectedInstructor} /> : null}
        </>
    );
}

export default Instructors;