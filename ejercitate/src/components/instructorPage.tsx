import { ScrollView, View, Text, Image, Modal, Pressable } from 'react-native';
import styles from './../styles';
import Articles from './subComponents/articles/Articles';
import { useState } from 'react';

const InstructorPage = ({ hideInstructorPage, instructor }) => {
    const { name, mail, phone, avatar, specialty, description, articles } = instructor;
    const { calisthenic, weightlifting, boxing, bjj, mma, pilates, yoga, wrestling, nutritionist } = specialty;
    const [modal, setModal] = useState(false);
    const showModal = () => {
        setModal(true);
    }

    const hideModal = () => {
        setModal(false);
    }

    return (
        <Modal visible={true} animationType="slide">
            <ScrollView>
                <View style={styles.instructorCard}>
                    <View style={styles.instructorAvatarRow}>
                        <Image style={styles.coachAvatar} source={{ uri: avatar }} />
                        <Text style={styles.whiteInstructorTitle}> {name} </Text>
                    </View>

                    <Text style={styles.whiteSubInstructorText}>
                        {description}
                    </Text>

                    {calisthenic  ? <View style={styles.whiteContainer}>
                        <View style={styles.sportRow}>
                            <Image style={styles.sportImage} source={require('./../img/sports/calisthenic.png')} />
                            <Text style={styles.sportTitle}>
                                Calistenia
                            </Text>
                        </View>
                    </View> : null}
                    {mma  ? <View style={styles.whiteContainer}>
                        <View style={styles.sportRow}>
                            <Image style={styles.sportImage} source={require('./../img/sports/mma.png')} />
                            <Text style={styles.sportTitle}>
                                MMA
                            </Text>
                        </View>
                    </View> : null}
                    {bjj  ? <View style={styles.whiteContainer}>
                        <View style={styles.sportRow}>
                            <Image style={styles.sportImage} source={require('./../img/sports/bjj.png')} />
                            <Text style={styles.sportTitle}>
                                Brazilian JiuJitsu
                            </Text>
                        </View>
                    </View> : null}
                    {boxing  ? <View style={styles.orangeContainer}>
                        <View style={styles.sportRow}>
                            <Image style={styles.sportImage} source={require('./../img/sports/boxing.png')} />
                            <Text style={styles.sportTitleWhite}>
                                Boxeo
                            </Text>
                        </View>
                    </View> : null}

                    {pilates ? <View style={styles.whiteContainer}>
                        <View style={styles.sportRow}>
                            <Image style={styles.sportImage} source={require('./../img/sports/pilates.png')} />
                            <Text style={styles.sportTitle}>
                                Pilates
                            </Text>
                        </View>
                    </View> : null}
                    {yoga  ? <View style={styles.orangeContainer}>
                        <View style={styles.sportRow}>
                            <Image style={styles.sportImage} source={require('./../img/sports/yoga.png')} />
                            <Text style={styles.sportTitleWhite}>
                                Yoga
                            </Text>
                        </View>
                    </View> : null}
                    {weightlifting  ? <View style={styles.grayContainer}>
                        <View style={styles.sportRow}>
                            <Image style={styles.sportImage} source={require('./../img/sports/weightlifter.png')} />
                            <Text style={styles.sportTitle}>
                                Levantamiento de pesas
                            </Text>
                        </View>
                    </View> : null}
                    {wrestling  ? <View style={styles.whiteContainer}>
                        <View style={styles.sportRow}>
                            <Image style={styles.sportImage} source={require('./../img/sports/wrestling.png')} />
                            <Text style={styles.sportTitle}>
                                Lucha Grecoromana
                            </Text>
                        </View>
                    </View> : null}
                    {nutritionist ? <View style={styles.orangeContainer}>
                        <View style={styles.sportRow}>
                            <Image style={styles.sportImage} source={require('./../img/facilities/cantina.png')} />
                            <Text style={styles.sportTitleWhite}>
                                Nutricionista
                            </Text>
                        </View>
                    </View> : null}

                    <View style={styles.contactCard}>
                        <View style={styles.row}>
                            <Image style={styles.contactIcon} source={require('./../img/mail.png')} />
                            <Text style={styles.whitePhoneText}> {mail}</Text>
                        </View>
                        <View style={styles.row}>
                            <Image style={styles.contactIcon} source={require('./../img/whatsapp.png')} />
                            <Text style={styles.whitePhoneText}> {phone} </Text>
                        </View>
                    </View>

                </View>

                <View style={styles.buttonsRow}>
                    <Pressable style={styles.button} onPress={hideInstructorPage}>
                        <Text style={styles.buttonText}>
                            Cerrar
                        </Text>
                    </Pressable>
                    {
                        articles[0] ? <Pressable style={styles.button} onPress={showModal}>
                            <Text style={styles.buttonText}>
                                Ver rutinas
                            </Text>
                        </Pressable> : null
                    }
                </View>
            </ScrollView>
            {
                modal ? <Articles hideModal={hideModal} articles={articles} /> : null
            }
        </Modal>
    )
}


export default InstructorPage;