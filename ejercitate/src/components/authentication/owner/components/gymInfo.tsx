import { Modal, ScrollView, View, Text, StyleSheet, Image, Pressable } from 'react-native';

import Activities from './subComponents/activities';
import Prices from './subComponents/prices';
import Facilities from './subComponents/facilities';
import Logistics from './subComponents/logistics';
import Gallery from './subComponents/gallery';

const GymInfo = ({ hideInfoModal, prices, selectedSports, selectedFacilities, schedules, gymName, address, description, images }) => {

    const gym = {
        prices,
        selectedSports,
        selectedFacilities,
        schedules,
        gymName,
        address,
        description,
        imagen: images[0],
        imagen2: images[1],
        imagen3: images[2],
        imagen4: images[3],
        imagen5: images[4]
    }
    console.log(gym);
    let pricesData = gym.prices;

    const sendData = async () => {
        const formData = new FormData();

        formData.append("prices", prices);
        formData.append("sports", selectedSports);
        formData.append("schedules", schedules);
        formData.append("name", gymName);
        formData.append("description", description);
        formData.append("address", address);
        formData.append("imagen", images[0]);
        formData.append("imagen2", images[1]);
        formData.append("imagen3", images[2]);
        formData.append("imagen4", images[3]);
        formData.append("imagen5", images[5]);

        try {
            let url = 'https://ejercitatebackend-production.up.railway.app/api/gyms';
            const response = await fetch(url, {
                method: "POST",
                body: formData,
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            const data = await response.json();
            if (response.ok) {
                console.log('El gimnasio ha sido creado');
            }
            else {
                console.error("Hubo un problema con el registro del gimnasio");
            }
        }
        catch (error) {
            console.error(error.message);
        }

    }

    return (
        <Modal animationType='slide'>
            <ScrollView>
                <View style={styles.container}>
                    <Logistics gymName={gymName} address={address} description={description} />
                    <Activities selectedSports={selectedSports} />
                    <Facilities selectedFacilities={selectedFacilities} />
                    <Prices pricesData={pricesData} />
                    <Gallery images={images} />
                </View>
                <View style={styles.registrationRow}>
                    <Pressable style={styles.direction} onPress={hideInfoModal}>
                        <Image style={styles.directionIcon} source={require('./../../../../img/prev.png')} />
                        <Text style={styles.whiteText}>Anterior</Text>
                    </Pressable>
                    <Pressable style={styles.direction} onPress={sendData}>
                        <Text style={styles.whiteText}>Confirmar</Text>
                        <Image style={styles.directionIcon} source={require('./../../../../img/next.png')} />
                    </Pressable>
                </View>
            </ScrollView>
        </Modal >
    )
}

let slate = "#0f172a";
let gray = "#f7f7f7";
let red = "#dc2626";
let golden = "#FFD700";
let cyan = "#6889d5";

const styles = StyleSheet.create({
    input: {
        height: 60,
        margin: 12,
        padding: 15,
        borderRadius: 10,
        backgroundColor: slate,
        color: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        fontWeight: "bold",
    },
    textArea: {
        height: 60,
        marginTop: 25,
        padding: 15,
        borderRadius: 10,
        backgroundColor: slate,
        color: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        fontWeight: "bold",
        minHeight: 250,
    },
    container: {
        background: 'white',
        paddingHorizontal: 5,
        paddingVertical: 50,
        marginHorizontal: 20,
    },
    scheduleContainer: {
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        flexWrap: "wrap"
    },
    text: {
        color: slate,
        fontSize: 22,
        fontWeight: "bold",
        paddingLeft: 20,
    },
    title: {
        color: slate,
        fontSize: 28,
        fontWeight: "bold",
        textAlign: "center",
        paddingTop: 20,
        paddingBottom: 30,
        marginHorizontal: 10,
    },
    subTitle: {
        color: slate,
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "center",
        paddingTop: 10,
    },
    icon: {
        width: 25,
        height: 25,
    },
    registrationRow: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        marginHorizontal: 20,
        width: 350,
        marginVertical: 20,
    },
    directionIcon: {
        width: 20,
        height: 20,
    },
    direction: {
        backgroundColor: slate,
        borderRadius: 30,
        height: 50,
        width: 150,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
    },
    save: {
        backgroundColor: slate,
        borderRadius: 30,
        height: 50,
        marginHorizontal: 50,
        marginTop: 30,
        alignItems: "center",
        justifyContent: "center",
    },
    prices: {
        backgroundColor: cyan,
        height: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 5,
        margin: 5,
        borderRadius: 10,
        borderColor: golden,
        borderWidth: 2,
        flexDirection: "row",
    },
    whiteText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        paddingHorizontal: 10,
    },
    subWhiteText: {
        color: "white",
        fontSize: 13,
        fontWeight: "bold",
        marginHorizontal: 20,
    },
    placeHolderRow: {
        display: 'flex',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: slate,
        marginTop: 10,
        borderRadius: 10,
        height: 60,
        paddingLeft: 20,
        paddingRight: 20,
    },
    iconContainer: {
        backgroundColor: gray,
        borderRadius: 100,
        width: 40,
        height: 40,
        display: "flex",
        justifyContent: "center",
        alignItems: 'center'
    },
    slateContainer: {
        backgroundColor: slate,
        borderRadius: 10,
        marginTop: 20,
        padding: 10,
    },
    gymInfo: {
        padding: 20,
        marginHorizontal: 20,
    }
});

export default GymInfo;