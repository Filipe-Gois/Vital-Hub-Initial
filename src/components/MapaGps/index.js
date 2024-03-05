import MapView from "react-native-maps";
import { StyleSheet } from "react-native";
import { GpsBox, MapaStyle } from "./style";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
  LocationObject,
} from "expo-location";

import { useEffect, useState } from "react";

const MapaGps = () => {
  const [location, setLocation] = useState(null);

  const requestLocationPermissions = async () => {
    const { granted } = await requestForegroundPermissionsAsync();

    const currentPosition = await getCurrentPositionAsync();

    if (granted) {
      // const currentPosition = await getCurrentPositionAsync();
      setLocation(currentPosition);
    }
  };

  useEffect(() => {
    requestLocationPermissions();
  }, []);

  return (
    <GpsBox>
      <MapaStyle
        // initialCamera={{
        //   center: {
        //     latitude: location.latitude,
        //     longitude: location.longitude,
        //   },
        //   pitch: 1000,
        //   heading: 0,
        //   altitude: location.altitude,
        //   zoom: 16,
        // }}

        // initialRegion={{
        //   latitude: location.coords.latitude,
        //   longitude: location.coords.longitude,
        //   latitudeDelta: 0.005,
        // }}
        initialCamera={{
          center: {
            latitude: -23.6151099,
            longitude: -46.5709332,
          },
          pitch: 0,
          heading: 0,
          altitude: 1000,
          zoom: 16,
        }}
      />
    </GpsBox>
  );
};

export default MapaGps;
