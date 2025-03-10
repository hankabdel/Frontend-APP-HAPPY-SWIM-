import { Button, StyleSheet, Text, View } from "react-native";

export default function SearchScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Search Screen</Text>
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
