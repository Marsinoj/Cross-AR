import React from "react";
import { 
  View, Text, StyleSheet, ImageBackground, TouchableOpacity 
} from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { BlurView } from "@react-native-community/blur";
import { RootStackParamList } from "../App";
import { useNavigation } from "@react-navigation/native";

type MainScreenProp = NativeStackNavigationProp<RootStackParamList, "Main">;

const MainScreen = () => {
  const navigation = useNavigation<MainScreenProp>();

  const handleStart = () => {
    navigation.navigate("Permission"); // 👉 go to PermissionScreen
  };

  return (
    <ImageBackground
      source={require("../assets/images/HCDC1.png")} 
      style={styles.container}
      resizeMode="cover"
    >
      <View style={styles.glassCard}>
        <BlurView style={StyleSheet.absoluteFill} blurType="light" blurAmount={15} />

        {/* Logo */}
        <View style={styles.logoWrapper}>
          <ImageBackground 
            source={require("../assets/images/logo1.png")} 
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        {/* Get Started Button */}
        <TouchableOpacity style={styles.button} onPress={handleStart}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  glassCard: {
    width: 320,
    height: 500,
    padding: 25,
    borderRadius: 30,
    overflow: "hidden",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    borderWidth: 0,
    borderColor: "rgba(0, 0, 0, 0.4)",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  logoWrapper: { 
    marginBottom: 10,
  },
  logo: { 
    width: 385, 
    height: 340, 
  },
  button: {
    marginTop: 1,
    paddingVertical: 14,
    paddingHorizontal: 40,
    backgroundColor: "#E52020",
    borderRadius: 15,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
});

export default MainScreen;
