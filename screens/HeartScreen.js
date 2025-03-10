import { Button, StyleSheet, Text, View } from "react-native";

export default function HeartScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Heart Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // occupe tout l'espace disponible
    justifyContent: "center", // centre verticalement
    alignItems: "center", // centre horizontalement
  },
});
