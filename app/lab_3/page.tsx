"use client";

import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import IncrementButton from "../../components/IncrementButton";
import DecrementButton from "../../components/DecrementButton";

const Lab3 = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>Counter: {count}</Text>
      <View style={styles.buttonContainer}>
        <IncrementButton increment={increment} />
        <DecrementButton decrement={decrement} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  counterText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 10,
  },
});

export default Lab3;
