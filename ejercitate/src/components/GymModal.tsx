import { View, ScrollView, Text, Modal, Image, Pressable } from 'react-native';

import GymPrices from './GymPrices';
import { useState } from 'react';
import styles from './../styles';
import Instructors from './instructors';

const GymModal = ({ closeGymModal, selectedGym }) => {

    const [pricesModal, setPricesModal] = useState(false);
    const [instructorModal, setInstructorModal] = useState(false);

    const showInstructorModal = () => {
        setInstructorModal(true);
    }

    const hideInstructorModal = () => {
        setInstructorModal(false);
    }

    const showPricesModal = () => {
        setPricesModal(true);
    }

    const hidePricesModal = () => {
        setPricesModal(false);
    }

    return (
        <Modal visible={true} animationType="slide">
            <ScrollView style={styles.modalWrapper}>

                <View style={styles.modalContainer}>
                    <ScrollView horizontal={true}>
                        <Image style={styles.modalImage} source={{ uri: selectedGym.imagen }} />
                        {
                            selectedGym.imagen2 ? <Image style={styles.modalImage} source={{ uri: selectedGym.imagen2 }} /> : null
                        }
                        {
                            selectedGym.imagen3 ? <Image style={styles.modalImage} source={{ uri: selectedGym.imagen3 }} /> : null
                        }
                        {
                            selectedGym.imagen4 ? <Image style={styles.modalImage} source={{ uri: selectedGym.imagen4 }} /> : null
                        }
                        {
                            selectedGym.imagen5 ? <Image style={styles.modalImage} source={{ uri: selectedGym.imagen5 }} /> : null
                        }
                    </ScrollView>
                    <Text style={styles.gymTitle}>
                        {selectedGym.name}
                    </Text>
                    <View style={styles.hourContainer}>
                        <Text style={styles.directionText}>
                            Direccion:
                        </Text>
                        <View style={styles.directionInfo}>
                            <Image style={styles.gymIcon} source={require('./../img/weightlifter.png')} />
                            <Text style={styles.directionSubText}>
                                {selectedGym.address}
                            </Text>
                        </View>

                    </View>
                    <Text style={styles.gymSubText}>
                        Actividades:
                    </Text>
                    <View style={styles.caracContainer}>
                        {
                            selectedGym.weightlifting ? <View style={styles.rowText}>
                                <Image style={styles.gymIcon} source={require('./../img/sala.png')} />
                                <Text style={styles.caracText}>Musculacion </Text>
                            </View> : null
                        }
                        {
                            selectedGym.weightlifting ?
                                <View style={styles.rowText}>
                                    <Image style={styles.gymIcon} source={require('./../img/weightlifter.png')} />
                                    <Text style={styles.caracText}>Alterofilia </Text>
                                </View> : null
                        }
                        {
                            selectedGym.dance ? <View style={styles.rowText}>
                                <Image style={styles.gymIcon} source={require('./../img/dancing.png')} />
                                <Text style={styles.caracText}>Danza </Text>
                            </View> : null
                        }
                        {
                            selectedGym.yoga ? <View style={styles.rowText}>
                                <Image style={styles.gymIcon} source={require('./../img/yoga.png')} />
                                <Text style={styles.caracText}>Yoga </Text>
                            </View> : null
                        }
                        {
                            selectedGym.pilates ? <View style={styles.rowText}>
                                <Image style={styles.gymIcon} source={require('./../img/pilates.png')} />
                                <Text style={styles.caracText}>Pilates </Text>
                            </View> : null
                        }



                    </View>

                    <View style={styles.instructorRow}>
                        <View style={styles.instructorContainer}>
                            <Pressable style={styles.rowPressable} onPress={showInstructorModal}>
                                <Image style={styles.gymIcon} source={require('./../img/entrenador.png')} />
                                <Text style={styles.instructorText}>Instructores </Text>
                            </Pressable>
                        </View>
                    </View>

                    <Text style={styles.gymSubText}>
                        Servicios:
                    </Text>
                    <View style={styles.caracContainer}>
                        {
                            selectedGym.showers ? <View style={styles.grayRowText}>
                                <Image style={styles.gymIcon} source={require('./../img/ducha.png')} />
                                <Text style={styles.caracBlackText}>Duchas </Text>
                            </View> : null
                        }
                        {
                            selectedGym.lockers ? <View style={styles.grayRowText}>
                                <Image style={styles.gymIcon} source={require('./../img/casilleros.png')} />
                                <Text style={styles.caracBlackText}>Casilleros </Text>
                            </View> : null
                        }
                        {
                            selectedGym.canteen ? <View style={styles.grayRowText}>
                                <Image style={styles.gymIcon} source={require('./../img/cantina.png')} />
                                <Text style={styles.caracBlackText}>Cantina </Text>
                            </View> : null
                        }
                        {
                            selectedGym.pingpong ? <View style={styles.grayRowText}>
                                <Image style={styles.gymIcon} source={require('./../img/ping-pong.png')} />
                                <Text style={styles.caracBlackText}>Ping pong </Text>
                            </View> : null
                        }

                    </View>
                    <View style={styles.hourContainer}>
                        <Text style={styles.scheduleText}>
                            Horarios
                        </Text>
                        <Text style={styles.scheduleSubText}>
                            {selectedGym.schedules}
                        </Text>
                        <Text style={styles.scheduleNumber}>
                            {selectedGym.hours}
                        </Text>
                    </View>

                    <View style={styles.reviewContainer}>
                        <View style={styles.userReview}>
                            <Text style={styles.reviewDate}>
                                Julio 10, 2023
                            </Text>

                            <Text style={styles.reviewTitle}>
                                Carlos:
                            </Text>
                            <View style={styles.starsContainer}>
                                <Image style={styles.star} source={require('./../img/star.png')} />
                                <Image style={styles.star} source={require('./../img/star.png')} />
                                <Image style={styles.star} source={require('./../img/star.png')} />
                                <Image style={styles.star} source={require('./../img/star.png')} />
                                <Image style={styles.star} source={require('./../img/star.png')} />
                            </View>
                            <Text style={styles.reviewText}>
                                Muy buenas instalaciones e instructores y lo mejor es el horario!!
                            </Text>
                        </View>
                        <View style={styles.userReview}>
                            <Text style={styles.reviewDate}>
                                Julio 10, 2023
                            </Text>

                            <Text style={styles.reviewTitle}>
                                Carlos:
                            </Text>
                            <View style={styles.starsContainer}>
                                <Image style={styles.star} source={require('./../img/star.png')} />
                                <Image style={styles.star} source={require('./../img/star.png')} />
                                <Image style={styles.star} source={require('./../img/star.png')} />
                                <Image style={styles.star} source={require('./../img/star.png')} />
                                <Image style={styles.star} source={require('./../img/star.png')} />
                            </View>
                            <Text style={styles.reviewText}>
                                Muy buenas instalaciones e instructores y lo mejor es el horario!!
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.buttonsRow}>
                    <Pressable style={styles.button} onPress={closeGymModal}>
                        <Text style={styles.buttonText}>
                            Cerrar
                        </Text>
                    </Pressable>
                    <Pressable style={styles.button} onPress={showPricesModal}>
                        <Text style={styles.buttonText} >
                            Reservar
                        </Text>
                    </Pressable>
                </View>
                {
                    instructorModal ? <Instructors hideInstructorModal={hideInstructorModal} /> : null
                }

                {
                    pricesModal ? <GymPrices hidePricesModal={hidePricesModal} selectedGym={selectedGym} /> : null
                }

            </ScrollView>
        </Modal>
    )
}

export default GymModal;