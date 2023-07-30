import { View, ScrollView, Text, Modal, Image, Pressable } from 'react-native';

import GymPrices from './GymPrices';
import { useState } from 'react';
import styles from './../styles';

import Instructors from './instructors';
import Reviews from './gymModal/reviews';
import Activities from './gymModal/activites';
import Schedules from './gymModal/schedules';
import Facilities from './gymModal/facilities';
import Gallery from './gymModal/gallery';

const GymModal = ({ closeGymModal, selectedGym, instructors }) => {
    const [pricesModal, setPricesModal] = useState(false);
    const [instructorModal, setInstructorModal] = useState(false);
    const { reviews, sports, schedules, facilities, prices, imagen, imagen2,imagen3,imagen4,imagen5, _id } = selectedGym;

    const selectedInstructors = instructors.filter(instructor => instructor.gym === _id);

    
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
                    <Gallery imagen={imagen} imagen2={imagen2} imagen3={imagen3} imagen4={imagen4} imagen5={imagen5}/>
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
                            <Image style={styles.gymIcon} source={require('./../img/weightlifter.png')} />
                            <Text style={styles.directionSubText}>
                                {selectedGym.address}
                            </Text>
                        </View>

                    </View>
                    <Text style={styles.gymSubText}>
                        Actividades:
                    </Text>
                    {
                        sports ?
                            <Activities sports={sports} />
                            : null
                    }
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
                    <Facilities facilities={facilities}/>

                    <Schedules schedules={schedules} />
                    {reviews ? <Reviews reviews={reviews} /> : null}
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
                    instructorModal ? <Instructors hideInstructorModal={hideInstructorModal} instructors={selectedInstructors}  /> : null
                }

                {
                    pricesModal ? <GymPrices hidePricesModal={hidePricesModal} prices={prices} /> : null
                }

            </ScrollView>
        </Modal>
    )
}

export default GymModal;