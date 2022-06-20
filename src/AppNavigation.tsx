import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../src/screens/Home';
import { MovieDetails } from './screens/MovieDetails';

const Stack = createNativeStackNavigator();

export function AppNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="MovieDetails" component={MovieDetails} />
    </Stack.Navigator>
  )
}