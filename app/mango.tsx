import { View, Text, Image, Pressable } from 'react-native';
import { Link, useRouter } from 'expo-router';

export default function MangoScreen() {
    const router = useRouter();
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Mango</Text>
            <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Hapus_Mango.jpg' }} 
                   style={{ width: 200, height: 200 }} />
                <Link href="/">Back</Link>
        </View>
    );
}
