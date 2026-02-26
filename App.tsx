import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FormScreen from './src/screens/FormScreen';
import ListScreen from './src/screens/ListScreen';
import PreviewScreen from './src/screens/PreviewScreen';

type RootStackParamList = {
  FormScreen: undefined;
  ListScreen: undefined;
  PreviewScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FormScreen">
        <Stack.Screen name="FormScreen" component={FormScreen} />
        <Stack.Screen name="ListScreen" component={ListScreen} />
        <Stack.Screen name="PreviewScreen" component={PreviewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}