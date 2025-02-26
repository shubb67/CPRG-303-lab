import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import vacationDestinations, { VacationDestination } from '../../constants/list_items';

export default function Lab4() {
  const [selectedDestinations, setSelectedDestinations] = useState<number[]>([]);

  const toggleSelection = (id: number) => {
    setSelectedDestinations((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((selectedId) => selectedId !== id)
        : [...prevSelected, id]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lab 4</Text>
      <Text style={styles.subtitle}>Choose Your Vacation Destination</Text>

      <FlatList
        data={vacationDestinations}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity 
            onPress={() => toggleSelection(item.id)} 
            style={[
              styles.destinationItem,
              selectedDestinations.includes(item.id) && styles.selectedItem
            ]}
          >
            <Text style={styles.destinationText}>
                {item.location}  {item.average_yearly_temperature} - ${item.price}  {selectedDestinations.includes(item.id) ?  "✅": ""} 
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5', // Light background
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    paddingTop: 20,
    marginBottom: 10,
    textAlign: 'center',
    color: '#333',
  },
  subtitle: {
    fontSize: 20,
    marginBottom: 15,
    textAlign: 'center',
    color: '#555',
  },
  destinationItem: {
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
    backgroundColor: '#ffffff', // White cards
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  selectedItem: {
    backgroundColor: '#c8e6c9',
  },
  destinationText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
  },
});
