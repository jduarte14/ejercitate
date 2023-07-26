import styles from '../styles';
import { View, Text, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import Categories from './Categories';
import Posts from './Posts';
import MapGym from './MapGym';
import SearchTrigger from './SearchTrigger';

const HomeContent = () => {

    const [gyms, setGymsData] = useState('');

    const fetchGyms = async () => {
        const getUrl = `https://ejercitatebackend-production.up.railway.app/api/gyms`;
        try{
            const response = await fetch(getUrl);
            const data = await response.json();
            if (response.ok) {
                const gymsData = data.gyms;
                setGymsData(gymsData);
            }
        }
        catch(error) {
            throw new Error (error.message);
        }
    }

    const [mapComponent, setMapComponent] = useState(false);

    const showMapBox = () => {
        setMapComponent(true);
    }

    const hideMap = () => {
        setMapComponent(false);
    }

    useEffect(() => {
        fetchGyms();
    }, []);

    return (
        <View style={styles.homeContainer}>
            <ScrollView>
                {
                    mapComponent ? <MapGym hideMap={hideMap} gyms={gyms} /> : null
                }
                <SearchTrigger showMapBox={showMapBox} />
                <Categories />
                <Posts />
            </ScrollView>
        </View>
    )
}


export default HomeContent;