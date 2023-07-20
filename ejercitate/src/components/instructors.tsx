import { ScrollView, Pressable, Image, Text, View, Modal } from 'react-native';
import { useState } from 'react';

import styles from './../styles';

import InstructorPage from './instructorPage';

const Instructors = ({ hideInstructorModal }) => {
    const [instructorPage, setInstructorPage] = useState(false);
    const showInstructorPage = () => {
        setInstructorPage(true);
    }

    const hideInstructorPage = () => {
        setInstructorPage(false);
    }

    return (
        <>

            <Modal visible={true} animationType="slide">
                <ScrollView style={styles.modalWrapper}>
                    <View style={styles.singleInstructorContainer}>
                        <Image style={styles.trainerAvatar} source={require("./../img/entrenador.png")} />
                        <View>
                            <Text style={styles.whiteText}> Albert Morales </Text>
                            <Text style={styles.whitePhoneText}>099 999 999</Text>
                        </View>

                        <View>
                            <Pressable style={styles.instructorBtn} onPress={showInstructorPage}>
                                <Text style={styles.whitePhoneText}> Ver mas </Text>
                            </Pressable>
                        </View>
                    </View>
                    <View style={styles.singleInstructorContainer}>
                        <Image style={styles.trainerAvatar} source={require("./../img/entrenador.png")} />
                        <View>
                            <Text style={styles.whiteText}> Albert Morales </Text>
                            <Text style={styles.whitePhoneText}>099 999 999</Text>
                        </View>

                        <View>
                            <Pressable style={styles.instructorBtn}  onPress={showInstructorPage} >
                                <Text style={styles.whitePhoneText}> Ver mas </Text> 
                            </Pressable>
                        </View>
                    </View>
                    <View style={styles.singleInstructorContainer}>
                        <Image style={styles.trainerAvatar} source={require("./../img/entrenador.png")} />
                        <View>
                            <Text style={styles.whiteText}> Albert Morales </Text>
                            <Text style={styles.whitePhoneText}>099 999 999</Text>
                        </View>

                        <View>
                            <Pressable style={styles.instructorBtn}  onPress={showInstructorPage}>
                                <Text style={styles.whitePhoneText}> Ver mas </Text>
                            </Pressable>
                        </View>
                    </View>
                    <View style={styles.singleInstructorContainer}>
                        <Image style={styles.trainerAvatar} source={require("./../img/entrenador.png")} />
                        <View>
                            <Text style={styles.whiteText}> Albert Morales </Text>
                            <Text style={styles.whitePhoneText}>099 999 999</Text>
                        </View>

                        <View>
                            <Pressable style={styles.instructorBtn}  onPress={showInstructorPage}>
                                <Text style={styles.whitePhoneText}> Ver mas </Text>
                            </Pressable>
                        </View>
                    </View>
                    <View style={styles.buttonsRow}>
                        <Pressable style={styles.button} onPress={hideInstructorModal}>
                            <Text style={styles.buttonText}>
                                Cerrar
                            </Text>
                        </Pressable>
                    </View>
                </ScrollView>

            </Modal>
            {
                instructorPage ?
                    <InstructorPage hideInstructorPage={hideInstructorPage}/> : null
            }

        </>


    )
}


export default Instructors;