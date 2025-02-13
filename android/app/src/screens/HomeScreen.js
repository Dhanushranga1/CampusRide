import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { signOut } from '../services/auth';

const HomeScreen = ({ navigation }) => {
  const handleLogout = async () => {
    try {
      await signOut();
      navigation.navigate('Login');
    } catch (error) {
      alert('Logout failed: ' + error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to CampusRide!</Text>
      <Button title="Add Schedule" onPress={() => navigation.navigate('ScheduleInput')} />
      <Button title="Post Ride Offer" onPress={() => navigation.navigate('RideOffer')} />
      <Button title="Search Rides" onPress={() => navigation.navigate('RideSearch')} />
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default HomeScreen;
