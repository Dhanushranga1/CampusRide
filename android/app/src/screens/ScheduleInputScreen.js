import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { addSchedule } from '../services/schedule';

const ScheduleInputScreen = ({ navigation }) => {
  const [day, setDay] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const handleAddSchedule = async () => {
    try {
      await addSchedule(day, startTime, endTime);
      alert('Schedule added successfully');
      navigation.goBack();
    } catch (error) {
      alert('Failed to add schedule: ' + error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Day</Text>
      <TextInput style={styles.input} value={day} onChangeText={setDay} />
      <Text style={styles.label}>Start Time</Text>
      <TextInput style={styles.input} value={startTime} onChangeText={setStartTime} />
      <Text style={styles.label}>End Time</Text>
      <TextInput style={styles.input} value={endTime} onChangeText={setEndTime} />
      <Button title="Add Schedule" onPress={handleAddSchedule} />
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

export default ScheduleInputScreen;
