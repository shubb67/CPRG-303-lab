import { View, Text, Image,  } from 'react-native';
import { Link } from 'expo-router';

export default function OrangeScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Orange</Text>
            <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/c/c4/Orange-Fruit-Pieces.jpg' }} 
                   style={{ width: 200, height: 200 }} />
        <Link href="/">Back</Link>
        </View>
    );
}
