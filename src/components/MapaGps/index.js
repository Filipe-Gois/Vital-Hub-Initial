import MapView from "react-native-maps";
import { StyleSheet } from "react-native";
import { GpsBox, MapaStyle } from "./style";
import * as Location from "expo-location";
import { useEffect, useState } from "react";

const MapaGps = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.error('Permissão para acessar a localização negada');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
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
        initialCamera={{
          center: {
            latitude: 37.78825,
            longitude: -122.4324,
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
