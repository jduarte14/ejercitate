import styles from '../styles';
import { View, Text, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import Categories from './Categories';
import Posts from './Posts';
import MapGym from './MapGym';
import SearchTrigger from './SearchTrigger';
import BottomBar from './bottomBar';

const HomeContent = ({ navigation }) => {

    const [gyms, setGymsData] = useState('');
    const [instructors, setInstructorsData] = useState('');
    const [mapComponent, setMapComponent] = useState(false);

    const fetchGyms = async () => {
        const getUrl = `https://ejercitatebackend-production.up.railway.app/api/gyms`;
        try {
            const response = await fetch(getUrl);
            const data = await response.json();
            if (response.ok) {
                const gymsData = data.gyms;
                setGymsData(gymsData);
            }
        }
        catch (error) {
            throw new Error(error.message);
        }
    }

    const fetchInstructors = async () => {
        const getInstructorUrl = `https://ejercitatebackend-production.up.railway.app/api/instructors/`

        try {
            const response = await fetch(getInstructorUrl);
            const data = await response.json();
            if (response.ok) {
                const instructorData = data.instructors;
                setInstructorsData(instructorData);
            }
        }
        catch (error) {
            throw new Error(error.message);
        }
    }

    const showMapBox = () => {
        setMapComponent(true);
    }

    const hideMap = () => {
        setMapComponent(false);
    }

    useEffect(() => {
        fetchGyms();
        fetchInstructors();
    }, []);

    return (
        <View style={styles.homeContainer}>
            <ScrollView>
                {
                    mapComponent ? <MapGym hideMap={hideMap} gyms={gyms} instructors={instructors} /> : null
                }
                <SearchTrigger showMapBox={showMapBox} />
                <Categories />
                <Posts gyms={gyms} />
                <BottomBar navigation={navigation} instructors={instructors} />
            </ScrollView>
        </View>
    )
}


export default HomeContent;