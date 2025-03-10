import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../my-app-Projet/screens/HomeScreen.js";
import ProfileScreen from "../my-app-Projet/screens/ProfileScreen.js";
import SearchScreen from "../my-app-Projet/screens/SearchScreen.js";
import HeartScreen from "../my-app-Projet/screens/HeartScreen.js";

import FontAwesome from "react-native-vector-icons/FontAwesome";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName = "";

            if (route.name === "Home") {
              iconName = "home";
            } else if (route.name === "Profile") {
              iconName = "user";
            } else if (route.name === "Search") {
              iconName = "search";
            } else if (route.name === "Heart") {
              iconName = "heart";
            }

            return <FontAwesome name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#2196f3",
          tabBarInactiveTintColor: "gray",
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Heart" component={HeartScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
