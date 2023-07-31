import { ScrollView, View, Text, Image } from 'react-native';
import { useState, useEffect } from 'react';

import BottomBar from './../bottomBar';
import InstrucetorSearchTrigger from './instructorSearchField';
import styles from './../../styles';


const InstructorsCatalog = ({ navigation }) => {
    const [instructors, setInstructorsData] = useState('');

    const fetchInstructors = async () => {
        const getInstructorUrl = `https://ejercitatebackend-production.up.railway.app/api/instructors/`

        try {
            const response = await fetch(getInstructorUrl);
            const data = await response.json();
            if (response.ok) {
                const instructorData = data.instructors;
                console.log(instructorData, 'prueba');

                setInstructorsData(instructorData);
            }
        }
        catch (error) {
            throw new Error(error.message);
        }
    }

    useEffect(() => {
        fetchInstructors();
    }, [])


    return (
        <>
            <InstrucetorSearchTrigger instructors={instructors} />
            <BottomBar navigation={navigation} instructors={instructors} />
        </>

    )
}


export default InstructorsCatalog;