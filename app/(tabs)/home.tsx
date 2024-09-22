import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import FormContainer from "@/components/Login/FormContainer";
import { LinearGradient } from "expo-linear-gradient";
import { BackgroundColor1, BackgroundColor2 } from "@/constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Header from "@/components/Home/header";
import Body from "@/components/Home/body";
import Feather from "@expo/vector-icons/Feather";
import { mainBackgroundColor } from "@/constants/Colors";

export default function Home() {
  return (
    <View style={styles.mainContainer}>
      <Header/>
      <Body/>
    </View>
  );
}

// Estilos para el componente
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: mainBackgroundColor,
  },
});
