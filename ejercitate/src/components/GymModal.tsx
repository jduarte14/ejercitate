import { View, ScrollView, Text, Modal, Image, Pressable } from 'react-native';

import GymPrices from './GymPrices';
import { useState } from 'react';

import Instructors from './instructors';
import Reviews from './gymModal/reviews';
import Activities from './gymModal/activites';
import Schedules from './gymModal/schedules';
import Facilities from './gymModal/facilities';
import Gallery from './gymModal/gallery';
import { useInstructorContext } from './../context/instructorContext';

import styles from './../styles';

const GymModal = ({ handleGymModal, selectedGym }) => {
    const [pricesModal, setPricesModal] = useState(false);
    const [instructorModal, setInstructorModal] = useState(false);
    const { reviews, sports, schedules, facilities, prices, imagen, imagen2, imagen3, imagen4, imagen5, _id } = selectedGym;      
    const {instructors} = useInstructorContext();
 

    const handleInstructorModal = () => {
        instructorModal === true ?
            setInstructorModal(false) :
            setInstructorModal(true);
    }

    const handlePricesModal = () => {
        pricesModal === true ?
            setPricesModal(false) :
            setPricesModal(true);
    }
    return (
        <Modal visible={true} animationType="slide">
            <ScrollView style={styles.modalWrapper}>
                <View style={styles.modalContainer}>
                    <Gallery imagen={imagen} imagen2={imagen2} imagen3={imagen3} imagen4={imagen4} imagen5={imagen5} />
                    <Text style={styles.gymTitle}>
                        {selectedGym.name}
                    </Text>

                    <View style={styles.hourContainer}>
                        <Text style={styles.gymDescription}>
                            {selectedGym.description}
                        </Text>
                        <Text style={styles.directionText}>
                            Direccion:
                        </Text>
                        <View style={styles.directionInfo}>
                            <Image style={styles.gymIcon} source={require('./../img/gym_location.png')} />
                            <Text style={styles.directionSubText}>
                                {selectedGym.address}
                            </Text>
                        </View>

                    </View>
                    <Text style={styles.gymSubText}>
                        Actividades:
                    </Text>
                    {
                        sports ? <Activities sports={sports} /> : null
                    }
                    {
                        instructors != '' ?
                            <View style={styles.instructorRow}>
                                <View style={styles.instructorContainer}>
                                    <Pressable style={styles.rowPressable} onPress={handleInstructorModal}>
                                        <Image style={styles.gymIcon} source={require('./../img/entrenador.png')} />
                                        <Text style={styles.instructorText}>Instructores </Text>
                                    </Pressable>
                                </View>
                            </View>
                            : null
                    }

                    <Text style={styles.gymSubText}>
                        Servicios:
                    </Text>
                    <Facilities facilities={facilities} />
                    <Schedules schedules={schedules} />
                    {reviews ? <Reviews reviews={reviews} /> : null}
                </View>
                <View style={styles.buttonsRow}>
                    <Pressable style={styles.button} onPress={handleGymModal}>
                        <Text style={styles.buttonText}>
                            Cerrar
                        </Text>
                    </Pressable>
                    <Pressable style={styles.button} onPress={handlePricesModal}>
                        <Text style={styles.buttonText} >
                            Reservar
                        </Text>
                    </Pressable>
                </View>
                {
                    instructorModal ? <Instructors handleInstructorModal={handleInstructorModal} instructors={instructors} /> : null
                }

                {
                    pricesModal ? <GymPrices handlePricesModal={handlePricesModal} prices={prices} /> : null
                }

            </ScrollView>
        </Modal>
    )
}

export default GymModal;