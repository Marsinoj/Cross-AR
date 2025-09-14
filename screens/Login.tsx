import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { BlurView } from "@react-native-community/blur";

type LoginScreenProp = NativeStackNavigationProp<RootStackParamList, "Login">;

const LoginScreen = () => {
  const navigation = useNavigation<LoginScreenProp>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (!email.endsWith("@hcdc.edu.ph")) {
      Alert.alert("Access Denied", "Only HCDC student accounts are allowed.");
      return;
    }

    if (!email || !password) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }

    navigation.replace("Signup");
  };

  return (
    <ImageBackground
      source={require("../assets/images/HCDC1.png")}
      style={styles.container}
    >
      <View style={styles.glassCard}>
        <BlurView style={StyleSheet.absoluteFill} blurType="light" blurAmount={-2} />

        <Text style={styles.title}>Student Login</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#666"
          value={email}
          onChangeText={setEmail}
        />

        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Password"
            placeholderTextColor="#666"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={styles.toggleButton}
          >
            <Text style={{ 
                color: "#E52020", 
                fontWeight: "bold" 
            }}>
              {showPassword ? "Hide" : "Show"}
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
          <Text style={styles.link}>Don’t have an account? Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  glassCard: {
    width: 320,
    padding: 25,
    borderRadius: 30,
    overflow: "hidden",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 15,
  },
  input: {
    width: "100%",
    padding: 12,
    marginBottom: 15,
    borderRadius: 10,
    backgroundColor: "#fff",
    color: "#000",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom: 15,
    borderRadius: 10,
    backgroundColor: "#fff",
    paddingRight: 10,
  },
  passwordInput: {
    flex: 1,
    padding: 12,
    color: "#000",
  },
  toggleButton: {
    marginLeft: 8,
  },
  button: {
    width: "100%",
    padding: 14,
    backgroundColor: "#E52020",
    borderRadius: 15,
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
  link: {
    color: "#fff",
    marginTop: 10,
  },
});

export default LoginScreen;
