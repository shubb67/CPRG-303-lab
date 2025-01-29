import { View, Text } from 'react-native';
import FruitList from '../components/FruitList';

export default function Index() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ textAlign: 'center', fontSize: 24, marginBottom: 20 }}>Welcome to the App!</Text>
            <FruitList />
        </View>
    );
}
