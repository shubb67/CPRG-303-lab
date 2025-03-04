import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import CallAPI from "./apicall"; // Import CallAPI component

const App = () => {
    const [showPost, setShowPost] = useState(false); // Toggle state

    return (
        <View style={styles.container}>
            <Text style={styles.welcomeText}>Welcome to my App</Text>

            <Button 
                title={showPost ? "Hide Data" : "Show Data"} 
                onPress={() => setShowPost(prev => !prev)} 
                color="#007AFF"
            />

            {showPost && <CallAPI />}
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" },
    welcomeText: { fontSize: 22, fontWeight: "bold", marginBottom: 15 },
    input: { width: "80%", padding: 10, borderWidth: 1, borderRadius: 5, marginBottom: 15, borderColor: "#ccc" },
});

export default App;
