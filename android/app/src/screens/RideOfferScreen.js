import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { postRideOffer } from '../services/rides';

const RideOfferScreen = ({ navigation }) => {
  const [departureTime, setDepartureTime] = useState('');
  const [routeId, setRouteId] = useState('');
  const [availableSeats, setAvailableSeats] = useState('');

  const handlePostRideOffer = async () => {
    try {
      await postRideOffer(departureTime, routeId, availableSeats);
      alert('Ride offer posted successfully');
      navigation.goBack();
    } catch (error) {
      alert('Failed to post ride offer: ' + error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Departure Time</Text>
      <TextInput style={styles.input} value={departureTime} onChangeText={setDepartureTime} />
      <Text style={styles.label}>Route ID</Text>
      <TextInput style={styles.input} value={routeId} onChangeText={setRouteId} />
      <Text style={styles.label}>Available Seats</Text>
      <TextInput style={styles.input} value={availableSeats} onChangeText={setAvailableSeats} />
      <Button title="Post Ride Offer" onPress={handlePostRideOffer} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  label: {
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});

export default RideOfferScreen;
