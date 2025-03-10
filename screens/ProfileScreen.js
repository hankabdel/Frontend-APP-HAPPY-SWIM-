import {
  Button,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
} from "react-native";

export default function ProfileScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../assets/public/Image/image36.jpg")}
        style={styles.image}
      >
        <Text style={styles.text}>Profile Screen</Text>
        <Button
          title="s'inscrire"
          onPress={() => navigation.navigate("Signup")}
        />
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // occupe tout l'espace disponible
    justifyContent: "center", // centre verticalement
    alignItems: "center", // centre horizontalement
  },
  text: {
    marginBottom: 20, // ajoute un espace entre le texte et le bouton
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
