import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Animated, Easing } from "react-native";
import { BlurView } from "@react-native-community/blur";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../App";

type PermissionScreenProp = NativeStackNavigationProp<RootStackParamList, "Permission">;

const PermissionScreen = () => {
  const navigation = useNavigation<PermissionScreenProp>();

  const handleYes = () => alert("Requesting camera permission...");
  const handleNo = () => navigation.navigate("Main");

  const logoSize = useRef(new Animated.Value(150)).current; // start smaller than 300 to fit inside
  const logoX = useRef(new Animated.Value(0)).current;
  const logoY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(logoSize, {
        toValue: 80,
        duration: 600,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: false,
      }),
      Animated.timing(logoX, {
        toValue: -110, // move left inside the card
        duration: 600,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: false,
      }),
      Animated.timing(logoY, {
        toValue: -150, // move up inside the card
        duration: 600,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: false,
      }),
    ]).start();
  }, []);

  return (
    <ImageBackground
      source={require("../assets/images/HCDC1.png")}
      style={styles.container}
      resizeMode="cover"
    >
      <View style={styles.glassCard}>
        <BlurView style={StyleSheet.absoluteFill} blurType="light" blurAmount={15} />

        {/* Logo Wrapper */}
        <View style={styles.logoWrapper}>
          <Animated.Image
            source={require("../assets/images/logo1.png")}
            style={{
              width: logoSize,
              height: logoSize,
              transform: [{ translateX: logoX }, { translateY: logoY }],
            }}
            resizeMode="contain"
          />
        </View>

        {/* Permission Message */}
        <Text style={styles.permissionText}>
          CrossAR requires access to your camera in order to scan AR markers.
        </Text>

        {/* Yes / No Buttons */}
        <View style={styles.choiceContainer}>
          <TouchableOpacity style={[styles.choiceButton, styles.yes]} onPress={handleYes}>
            <Text style={styles.choiceText}>Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.choiceButton, styles.no]} onPress={handleNo}>
            <Text style={styles.choiceText}>No</Text>
          </TouchableOpacity>
        </View>
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
    position: "absolute",
    top: 160, // start somewhere near center vertically
    left: 120, // start somewhere near center horizontally
  },
  permissionText: {
    marginTop: 180,
    fontSize: 18,
    fontWeight: "600",
    color: "#FFFCFB",
    textAlign: "center",
    paddingHorizontal: 10,
  },
  choiceContainer: {
    flexDirection: "row",
    marginTop: 40,
    gap: 20,
  },
  choiceButton: {
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 12,
  },
  yes: { 
    backgroundColor: "#093FB4" 
  },
  no: { 
    backgroundColor: "#E52020" 
  },
  choiceText: { 
    color: "#fff", 
    fontWeight: "bold", 
    fontSize: 16 
  },
});

export default PermissionScreen;