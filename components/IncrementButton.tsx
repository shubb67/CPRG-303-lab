import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

type Props = {
  increment: () => void;
};

const IncrementButton = ({ increment }: Props) => {
  return (
    <TouchableOpacity onPress={increment} style={styles.button}>
      <Text style={styles.text}>Increment</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#22C55E", // Tailwind 'green-500'
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 10,
    alignItems: "center",
  },
  text: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default IncrementButton;
