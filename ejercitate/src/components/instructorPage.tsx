import { ScrollView, View, Text, Image, Modal, Pressable } from 'react-native';
import styles from './../styles';

const InstructorPage = ({ hideInstructorPage, instructor }) => {
    const { name, mail, phone, avatar, specialty, description } = instructor;
    const { mma, boxing, bjj, pilates, weightlifting, wrestling, yoga, nutritionist, calisthenic } = specialty;


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
                    {bjj ? <View style={styles.whiteContainer}>
                        <View style={styles.sportRow}>
                            <Image style={styles.sportImage} source={require('./../img/martial-arts.png')} />
                            <Text style={styles.sportTitle}>
                                Brazilian JiuJitsu
                            </Text>
                        </View>
                    </View> : null}
                    {boxing ? <View style={styles.orangeContainer}>
                        <View style={styles.sportRow}>
                            <Image style={styles.sportImage} source={require('./../img/boxing.png')} />
                            <Text style={styles.sportTitleWhite}>
                                Boxeo
                            </Text>
                        </View>
                    </View> : null}
                    {mma ? <View style={styles.grayContainer}>
                        <View style={styles.sportRow}>
                            <Image style={styles.sportImage} source={require('./../img/mma.png')} />
                            <Text style={styles.sportTitle}>
                                Artes marciales mixtas
                            </Text>
                        </View>
                    </View> : null}
                    {pilates ? <View style={styles.whiteContainer}>
                        <View style={styles.sportRow}>
                            <Image style={styles.sportImage} source={require('./../img/pilates.png')} />
                            <Text style={styles.sportTitle}>
                                Pilates
                            </Text>
                        </View>
                    </View> : null}
                    {yoga ? <View style={styles.orangeContainer}>
                        <View style={styles.sportRow}>
                            <Image style={styles.sportImage} source={require('./../img/yoga.png')} />
                            <Text style={styles.sportTitleWhite}>
                                Yoga
                            </Text>
                        </View>
                    </View> : null}
                    {weightlifting ? <View style={styles.grayContainer}>
                        <View style={styles.sportRow}>
                            <Image style={styles.sportImage} source={require('./../img/weightlifter.png')} />
                            <Text style={styles.sportTitle}>
                                Levantamiento de pesas
                            </Text>
                        </View>
                    </View> : null}
                    {wrestling ? <View style={styles.whiteContainer}>
                        <View style={styles.sportRow}>
                            <Image style={styles.sportImage} source={require('./../img/wrestling.png')} />
                            <Text style={styles.sportTitle}>
                                Lucha Grecoromana
                            </Text>
                        </View>
                    </View> : null}
                    {nutritionist ? <View style={styles.orangeContainer}>
                        <View style={styles.sportRow}>
                            <Image style={styles.sportImage} source={require('./../img/cantina.png')} />
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
                </View>
            </ScrollView>
        </Modal>
    )
}


export default InstructorPage;