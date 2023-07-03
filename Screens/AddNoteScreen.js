import { Alert, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';



export default function AddNoteScreen() {
    const navigation = useNavigation();

    const [input1Value, setInput1Value] = useState("");
    const [input2Value, setInput2Value] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input1}
        placeholder="Title"
        value={input1Value}
        onChangeText={setInput1Value}
      />
      <TextInput
        style={styles.input2}
        placeholder="Body"
        value={input2Value}
        onChangeText={setInput2Value}
      />
      <Pressable
        style={styles.button}
        onPress={() => navigation.popToTop(Alert.alert("Added"))}
      >
        <Text style={styles.buttonText}>Add</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input1: {
    width: "100%",
    height: 40,
    borderRadius: 6,
    marginBottom: 16,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    elevation: 6,
  },
  input2: {
    width: "100%",
    height: 100,
    borderRadius: 6,
    marginBottom: 16,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    elevation: 6,
  },
  button: {
    backgroundColor: "red",
    borderRadius: 6,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: "100%",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  successText: {
    marginTop: 16,
    color: "green",
    fontSize: 16,
    fontWeight: "bold",
  },
});