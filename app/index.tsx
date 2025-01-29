import { View, Text } from 'react-native';
import { fruits } from '../components/FruitList';

export default function Index() {
    return (
           <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ textAlign: 'center' }}>Welcome to the App!</Text>
        
            {fruits.map((fruit) => (
                <Text key={fruit}>{fruit}</Text>
            ))}
        </View>
    );
}
