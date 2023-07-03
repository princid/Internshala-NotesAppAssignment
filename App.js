import "react-native-gesture-handler";
import { SafeAreaView, StyleSheet, View } from "react-native";
import HomeScreen from "./Screens/HomeScreen";
import StackNavigation from "./StackNavigation";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    // <SafeAreaView>
    //   <HomeScreen/>
    //   <StackNavigation />
    //   <StatusBar style="auto" />
    // </SafeAreaView>

    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
