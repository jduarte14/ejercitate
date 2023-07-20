import styles from '../styles';
import { View, Text, ScrollView } from 'react-native';
import {useState} from 'react';
import Categories from './Categories';
import Posts from './Posts';
import MapGym from './MapGym';
import SearchTrigger from './SearchTrigger';

const HomeContent = () => {

    const [mapComponent, setMapComponent] = useState(false);
    
    const showMapBox =()=>{
        setMapComponent(true);
    }

    const hideMap=()=>{
        setMapComponent(false);
    }

    return (
        <View style={styles.homeContainer}>
            <ScrollView>
                {
                    mapComponent ? <MapGym hideMap={hideMap}/> :null
                }
                <SearchTrigger showMapBox={showMapBox}/>
                <Categories />
                <Posts />
            </ScrollView>
        </View>
    )
}


export default HomeContent;