import { Link } from "expo-router";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Lab3 from "./lab_3/page";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Lab</Text>
      <Link href="./lab_3/page" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Go to Lab 3</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#F5F5F5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#3B82F6", // Tailwind 'blue-500'
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
