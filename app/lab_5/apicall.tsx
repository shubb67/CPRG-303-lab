import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";

const CallAPI = () => {
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
                if (!response.ok) throw new Error("Failed to fetch data");
                const data = await response.json();
                setPost(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, []);

    if (loading) return <ActivityIndicator size="large" color="#007AFF" />;
    if (error) return <Text style={styles.error}>Error: {error}</Text>;

    return (
        <View style={styles.postContainer}>
            <Text style={styles.title}>{post.title}</Text>
            <Text style={styles.body}>{post.body}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    postContainer: {
        marginTop: 20,
        padding: 15,
        backgroundColor: "#f8f9fa",
        borderRadius: 8,
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 3,
        width: "90%",
    },
    title: { fontSize: 18, fontWeight: "bold", marginBottom: 5 },
    body: { fontSize: 16, color: "#333" },
    error: { color: "red", fontSize: 16, marginTop: 10 },
});

export default CallAPI;
