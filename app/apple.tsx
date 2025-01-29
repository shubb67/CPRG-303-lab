import { Link } from 'expo-router';
import { View, Text, Image } from 'react-native';

export default function AppleScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Apple</Text>
            <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg' }} 
                   style={{ width: 200, height: 200 }} />
                   <Link href="/">Back</Link>
        </View>
    );
}
