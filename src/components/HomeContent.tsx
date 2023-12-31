import styles from '../styles';
import { View, ScrollView } from 'react-native';
import { useState } from 'react';
import Categories from './Categories';
import Posts from './Posts';
import MapGym from './MapGym';
import SearchTrigger from './SearchTrigger';
import BottomBar from './bottomBar';
const HomeContent = ({ navigation }) => {
    const [mapComponent, setMapComponent] = useState(false);

    const handleMapBox = () => {
        mapComponent ? setMapComponent(false) :
            setMapComponent(true);
    }

    return (
        <View style={styles.homeContainer}>
            <ScrollView>
                {
                    mapComponent ? <MapGym handleMapBox={handleMapBox} /> : null
                }
                <SearchTrigger handleMapBox={handleMapBox} />
                <Categories />
                <Posts />

            </ScrollView>
            <BottomBar navigation={navigation} />
        </View>
    )
}


export default HomeContent;