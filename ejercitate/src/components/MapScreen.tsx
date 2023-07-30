import { useState } from 'react';
import MapView, { Marker, Overlay } from 'react-native-maps';
import { StyleSheet, View, Pressable, Text } from 'react-native';
import GymModal from './GymModal';


const MapScreen = ({ gyms, instructors }) => {
  const [gymModalVisible, setGymModalVisible] = useState(false);
  const [selectedGym, setSelectedGymId] = useState(null);
  console.log(instructors);

  const openGymModal = (gym) => {
    setSelectedGymId(gym); 
    setGymModalVisible(true);
  };

  const closeGymModal = () => {
    setGymModalVisible(false);
  };

  const markerCoordinates = {
    latitude: 37.78825,
    longitude: -122.4324,
  };

  return (
    <View style={MapStyle.container}>
      <MapView
        style={MapStyle.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {gyms.map((gym) => {
            let gymCoordinates = {
              longitude: gym.longitude,
              latitude: gym.latitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }
          return (
          
            <Marker
              key={gym.id}
              coordinate={markerCoordinates}
              onPress={() => openGymModal(gym)}
            >
              <View style={MapStyle.gymMarker}>
                <Text style={MapStyle.gymMarkerText}>{gym.name}</Text>
                <Text style={MapStyle.gymMarkerPrice}>UYU 1200</Text>
              </View>
            </Marker>
          );
        })}
      </MapView>
      {gymModalVisible && <GymModal selectedGym={selectedGym} instructors={instructors} closeGymModal={closeGymModal} />}
    </View>
  );
};

const MapStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  gymMarker: {
    padding: 6,
    backgroundColor: "white",
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,

  },
  gymMarkerText: {
    color: "black",
    fontWeight: "bold"
  },
  gymMarkerPrice: {
    color: "black"
  }
});

export default MapScreen;
