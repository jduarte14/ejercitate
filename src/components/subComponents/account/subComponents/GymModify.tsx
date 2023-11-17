import { StyleSheet, Image, Modal, View, Text, TouchableOpacity, TextInput, Pressable, ScrollView, Alert } from "react-native";
import { useState, useEffect } from 'react';

import Activities from './modifyComponents/Activities';
import GymInfo from './modifyComponents/GymInfo';
import Gallery from './modifyComponents/Gallery';
import Prices from './modifyComponents/Prices';

import { fetchHelper } from "../../../authentication/helpers/fetchHelper";

const GymModify = ({ gym, handleModal }) => {
    const { address, description, facilities, imagen, imagen2, imagen3, imagen4, imagen5, prices, schedules, sports } = gym;
    const { days, hours } = schedules;
    const [popup, setPopUp] = useState('');
    const [stateAddress, setStateAddress] = useState(address);
    const [stateDescription, setStateDescription] = useState(description);
    const [stateDays, setStateDays] = useState(days);
    const [stateHours, setStateHours] = useState(hours);
    const [statePrices, setStatePrices] = useState({
        fiveDays: prices.fiveDays || '',
        fourDays: prices.fourDays || '',
        freePass: prices.freePass || '',
        threeDays: prices.threeDays || '',
        twoDays: prices.twoDays || '',
    });


    const handlePriceChange = (priceType, value) => {
        setStatePrices(prevPrices => ({
            ...prevPrices,
            [priceType]: value
        }));
    };

    const handlePopUp = (type) => {
        switch (type) {
            case "info":
                !popup ? setPopUp('info') : setPopUp('');
                break;
            case "activities":
                !popup ? setPopUp('activities') : setPopUp('');
                break;
            case "gallery":
                !popup ? setPopUp('gallery') : setPopUp('');
                break;
            case "prices":
                !popup ? setPopUp('prices') : setPopUp('');
                break;
            default:
                setPopUp('');
                break;
        }
    }
    const [selectedSports, setSelectedSports] = useState(sports);
    const [selectedFacilities, setSelectedFacilities] = useState(facilities);
    const [images, setImages] = useState(Array(5).fill(null));


    const handleSportsOnPress = (sport) => {
        setSelectedSports(prevSports => {
            const updatedSports = { ...prevSports };
            if (updatedSports[sport]) {
                delete updatedSports[sport];
            } else {
                updatedSports[sport] = true;
            }
            return updatedSports;
        });
    };


    const handleFacilitiesOnPress = (facility) => {
        setSelectedFacilities(prevFacilities => {
            const updatedFacilities = { ...prevFacilities };
            if (updatedFacilities[facility]) {
                delete updatedFacilities[facility];
            } else {
                updatedFacilities[facility] = true;
            }
            return updatedFacilities;
        });
    }
    const createFormData = () => {
        const gymData = new FormData();
        gymData.append("name", gym.name);
        gymData.append("description", stateDescription);
        gymData.append("address", stateAddress);
        gymData.append("schedules[days]", stateDays);
        gymData.append("schedules[hours]", stateHours);
        if (selectedFacilities) {
            Object.keys(selectedFacilities).forEach(facility => {
                gymData[`facilities[${facility}]`] = "true";
            });
        }
        if (selectedSports) {
            Object.keys(selectedSports).forEach(sport => {

                gymData[`sports[${sport}]`] = "true";
            });
        }
        if (statePrices) {
            Object.keys(statePrices).forEach((priceType, value) => {
                gymData.append(`prices[${priceType}]`, `UYU ${value}`)
            })
        }
        images[0] ? gymData.append("imagen", images[0]) : gymData.append("imagen", imagen);
        images[1] ? gymData.append("imagen", images[1]) : gymData.append("imagen", imagen2);
        images[2] ? gymData.append("imagen", images[2]) : gymData.append("imagen", imagen3);
        images[3] ? gymData.append("imagen", images[3]) : gymData.append("imagen", imagen4);
        images[4] ? gymData.append("imagen", images[4]) : gymData.append("imagen", imagen5);
        return gymData;
    }


    const submitEdition = async () => {
        try {
            const response = await fetchHelper(`https://ejercitatebackend-production.up.railway.app/api/gyms/${gym._id}`, "PUT", createFormData());
            if(response.ok){
                Alert.alert(
                    'Se ha modificado el gimnasio',
                    '',
                    [
                      {
                        text: 'Se ha modificado el gimnasio',
                      },
                    ],
                  );
            }
        }
        catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        createFormData()
    }, [])

    return (
        <Modal visible={true} animationType="slide">
            <ScrollView>
                <View style={styles.panelControlContainer}>
                    <Text style={styles.title}>
                        {gym.name}
                    </Text>
                    <Pressable style={styles.panelRow} onPress={() => { handlePopUp('info') }}>
                        <Image style={styles.icon} source={require('./../../../../img/description.png')} />
                        <Text style={styles.subText}>
                           Modify descriptions and logistics
                        </Text>
                    </Pressable>
                    <Pressable style={styles.panelRow} onPress={() => { handlePopUp('prices') }}>
                        <Image style={styles.icon} source={require('./../../../../img/debit-card.png')} />
                        <Text style={styles.subText}>
                            Modify prices
                        </Text>
                    </Pressable>
                    <Pressable style={styles.panelRow} onPress={() => { handlePopUp('gallery') }}>
                        <Image style={styles.icon} source={require('./../../../../img/gallery.png')} />
                        <Text style={styles.subText}>
                            Modify images
                        </Text>
                    </Pressable>
                    <Pressable style={styles.panelRow} onPress={() => { handlePopUp('activities') }}>
                        <Image style={styles.icon} source={require('./../../../../img/settings.png')} />
                        <Text style={styles.subText}>
                            Modify facilities and activities
                        </Text>
                    </Pressable>

                    {
                        popup === "info" ?
                            <GymInfo
                                setStateAddress={setStateAddress}
                                setStateDescription={setStateDescription}
                                setStateDays={setStateDays}
                                setStateHours={setStateHours}
                                stateAddress={stateAddress}
                                stateDescription={stateDescription}
                                stateDays={stateDays}
                                stateHours={stateHours}
                                handlePopUp={handlePopUp}
                            /> : null
                    }

                    {
                        popup === "activities" ?
                            <Activities
                                handleSportsOnPress={handleSportsOnPress}
                                handleFacilitiesOnPress={handleFacilitiesOnPress}
                                selectedSports={selectedSports}
                                selectedFacilities={selectedFacilities}
                                handlePopUp={handlePopUp} />
                            : null
                    }
                </View>
                {
                    popup === "prices" ? <Prices statePrices={statePrices} handlePriceChange={handlePriceChange} setStatePrices={setStatePrices} handlePopUp={handlePopUp} /> : null
                }

                {
                    popup === "gallery" ?
                        <Gallery
                            images={images}
                            imagen1={imagen}
                            imagen2={imagen2}
                            imagen3={imagen3}
                            imagen4={imagen4}
                            imagen5={imagen5}
                            setImages={setImages}
                            handlePopUp={handlePopUp} /> : null
                }
            </ScrollView>

            <View style={styles.buttonRow}>
                <Pressable onPress={()=> handleModal('')} style={styles.button}>
                    <Text style={styles.whiteText}>
                        Volver
                    </Text>
                </Pressable>
                <Pressable style={styles.button} onPress={submitEdition} >
                    <Text style={styles.whiteText}>
                        Confirmar
                    </Text>
                </Pressable>
            </View>


        </Modal>
    )
}

let slate = "#0f172a";
let gray = "#f7f7f7";
let golden = "#FFD700";
const styles = StyleSheet.create({
    panelControlContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
    },
    text: {
        fontSize: 20,
        color: slate,
    },
    title: {
        fontSize: 30,
        color: slate,
        fontWeight: 'bold',
        paddingBottom: 50,
        paddingTop:50,
    },
    subTitle: {
        fontSize: 25,
        color: slate,
        fontWeight: "bold",
        paddingBottom: 5,
    },
    whiteTextCentered: {
        fontSize: 20,
        color: 'white',
        textAlign: "center",
        fontWeight: "bold",
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
    panelRow: {
        backgroundColor: "white",
        paddingVertical: 15,
        paddingLeft: 10,
        marginTop: 20,
        borderRadius: 10,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: 350,
    },
    icon: {
        width: 35,
        height: 35,
    },
    subText: {
        color: slate,
        fontWeight: "bold",
        fontSize: 17,
        paddingLeft: 10,
        paddingTop: 10,
        paddingBottom: 10,
    },

});
export default GymModify;