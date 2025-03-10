import React, { useState, useEffect } from "react";
import {
  Button,
  StyleSheet,
  Text,
  SafeAreaView,
  ImageBackground,
  Image,
  Modal,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";

export default function HomeScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [annonces, setAnnonces] = useState([]);
  const [user, setUser] = useState({ token: "token" });

  const fetchAnnonces = async () => {
    try {
      const response = await fetch("http://localhost:3000/annonces");
      const data = await response.json();
      if (data.result) {
        setAnnonces(data.data);
      } else {
        console.error(
          "Erreur lors de la récupération des annonces:",
          data.error
        );
      }
    } catch (error) {
      console.error("Erreur lors de la récupération des annonces:", error);
    }
  };

  const openModal = () => {
    fetchAnnonces();
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../assets/public/Image/image36.jpg")}
        style={styles.image}
      >
        <Image
          style={styles.logo}
          source={require("../assets/public/logoh.png")}
        />
        <Text style={styles.text}>
          Vous avez la possibilité de louer une piscine privée partout en France
        </Text>
        <TouchableOpacity style={styles.button} onPress={openModal}>
          <Text>AnnonceCard</Text>
        </TouchableOpacity>
      </ImageBackground>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Toutes les annonces</Text>
            <FlatList
              data={annonces}
              keyExtractor={(item) => item._id}
              renderItem={({ item }) => (
                <View style={styles.annonceItem}>
                  <Text style={styles.annonceTitle}>{item.titre}</Text>
                  <Text style={styles.annonceDescription}>
                    {item.description}
                  </Text>
                </View>
              )}
            />
            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              <Text style={styles.closeButtonText}>Fermer</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: 20,
    marginBottom: 20,
  },
  text: {
    color: "#FFF",
    fontSize: 19,
    textAlign: "center",
    marginTop: 100,
    marginStart: 5,
    marginEnd: 5,
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#007BFF",
    borderRadius: 5,
    marginTop: 160,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "#FFF",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  annonceItem: {
    marginBottom: 10,
  },
  annonceTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  annonceDescription: {
    fontSize: 14,
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#FF0000",
    borderRadius: 5,
  },
  closeButtonText: {
    color: "#FFF",
    fontSize: 16,
  },
});
