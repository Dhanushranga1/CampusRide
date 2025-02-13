import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { getMatchingRoutes } from '../services/matching';

const RideSearchScreen = () => {
  const [matchingRoutes, setMatchingRoutes] = useState([]);

  useEffect(() => {
    // Example data, ideally should be from user input
    const day = 'Monday';
    const startTime = '08:00';
    const endTime = '09:00';
    const userId = 'example-user-id'; // This should come from authenticated user

    const fetchMatchingRoutes = async () => {
      try {
        const routes = await getMatchingRoutes(userId, day, startTime, endTime);
        setMatchingRoutes(routes);
      } catch (error) {
        alert('Failed to fetch matching routes: ' + error.message);
      }
    };

    fetchMatchingRoutes();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Matching Rides</Text>
      {matchingRoutes.length === 0 ? (
        <Text>No matching rides found.</Text>
      ) : (
        matchingRoutes.map((route) => (
          <View key={route.route_id} style={styles.route}>
            <Text>Route ID: {route.route_id}</Text>
            <Text>Departure Time: {route.departure_time}</Text>
            <Button title="Book" onPress={() => {/* Handle booking logic */}} />
          </View>
        ))
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  route: {
    marginBottom: 16,
  },
});

export default RideSearchScreen;
