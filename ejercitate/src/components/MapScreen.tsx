import {useState} from 'react';
import MapView, { Marker, Overlay } from 'react-native-maps';
import { StyleSheet, View, Pressable, Text } from 'react-native';
import GymModal from './GymModal';

const MapScreen = () => {

  const [gymModal, setGymModal] = useState(false);

  const openGymModal = () => {
    setGymModal(true);
    console.log("clicked");
  }

  const closeGymModal = () => {
    setGymModal(false);
  }

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
        <Marker
          coordinate={markerCoordinates}
          onPress={openGymModal}
        >
          <Pressable style={MapStyle.gymMarker} >
            <View>

              <Text style={MapStyle.gymMarkerText}>
                Lo de los viejos
              </Text>
              <Text style={MapStyle.gymMarkerPrice}>
                UYU 1200
              </Text>
            </View>
          </Pressable>

        </Marker>

      </MapView>
      {
        gymModal ? <GymModal closeGymModal={closeGymModal} /> : null
      }
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
    padding: 5,
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
