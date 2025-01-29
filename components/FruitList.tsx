import { View, Text, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

const fruits = [
    { name: "Apple", route: "/apple" },
    { name: "Orange", route: "/orange" },
    { name: "Mango", route: "/mango" }
];

export default function FruitList() {
    const router = useRouter();

    return (
        <View>
            {fruits.map((fruit) => (
                <Pressable key={fruit.name} onPress={() => router.push(fruit.route)}>
                    <Text style={{ textAlign: 'center', fontSize: 20, margin: 10 }}>{fruit.name}</Text>
                </Pressable>
            ))}
        </View>
    );
}
