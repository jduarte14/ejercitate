import { ScrollView, View, Text, Image, Modal, Pressable } from 'react-native';
import styles from './../styles';

const InstructorPage = ({ hideInstructorPage, instructor }) => {
    const {name,mail,phone,avatar,specialty} = instructor;
    
    return (
        <Modal visible={true} animationType="slide">
            <ScrollView>
                <View style={styles.instructorCard}>
                    <View style={styles.instructorAvatarRow}>
                        <Image  style={styles.coachAvatar} source={{uri:avatar}}/>
                    <Text style={styles.whiteInstructorTitle}> {name} </Text>
                    </View>
           
                    <Text style={styles.whiteSubInstructorText}>
                        Alberto Morales es un instructor experimentado en Brazilian JiuJitsu, 
                        Pilates y nutrición. Con su amplia experiencia en estas disciplinas,
                         Alberto ha ayudado a numerosas personas a alcanzar sus objetivos de salud y bienestar.
                    </Text>
                    <View style={styles.whiteContainer}>
                        <View style={styles.sportRow}>
                            <Image style={styles.sportImage} source={require('./../img/martial-arts.png')} />
                            <Text style={styles.sportTitle}>
                                Brazilian JiuJitsu
                            </Text>
                        </View>
                    </View>
                    <View style={styles.orangeContainer}>
                        <View style={styles.sportRow}>
                            <Image style={styles.sportImage} source={require('./../img/cantina.png')} />
                            <Text style={styles.sportTitleWhite}>
                                Nutricionista
                            </Text>
                        </View>
                    </View>
                    <View style={styles.grayContainer}>
                        <View style={styles.sportRow}>
                            <Image style={styles.sportImage} source={require('./../img/pilates.png')} />
                            <Text style={styles.sportTitle}>
                                Pilates
                            </Text>
                        </View>
                    </View>
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