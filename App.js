import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomePage from "./src/App/HomePage";
import NewsPage from "./src/App/NewsPage";
import { Provider } from "react-redux";
import { store } from "./src/redux/newsStore";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="HomePage"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="HomePage" component={HomePage} />
          <Stack.Screen name="NewsPage" component={NewsPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
