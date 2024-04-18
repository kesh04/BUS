import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';

const Map = () => {
    return (
        <View style={styles.container}>
        <MapView style={styles.map} />
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      map: {
        width: '100%',
        height: '100%',
      },
})

export default Map;
