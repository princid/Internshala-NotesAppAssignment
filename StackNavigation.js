import "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./Screens/HomeScreen";
import AddNoteScreen from "./Screens/AddNoteScreen";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function StackNavigation() {
  return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Add"
          component={AddNoteScreen}
          options={{ title: "Add Note", headerShown: true }}
        />
      </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
