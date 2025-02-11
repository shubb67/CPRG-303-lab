import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

type Props = {
  decrement: () => void;
};

const DecrementButton = ({ decrement }: Props) => {
  return (
    <TouchableOpacity onPress={decrement} style={styles.button}>
      <Text style={styles.text}>Decrement</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#EF4444", // Tailwind 'red-500'
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

export default DecrementButton;
