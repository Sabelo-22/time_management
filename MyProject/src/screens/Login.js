import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle Login
  const handleLogin = () => {
    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    // Proceed with login logic (e.g., Firebase authentication)
    navigation.navigate("MainApp");
  };

  return (
   
        <View style={styles.container}>
            <Text style={styles.title}>WELCOME BACK</Text>
          <Text style={styles.title}>Log In</Text>

          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>

          {/* Don't have an account? Navigate to Signup */}
          <TouchableOpacity
            onPress={() => navigation.navigate("Signup")}
            style={styles.signupRedirect}
          >
            <Text style={styles.signupText}>
              Don't have an account? <Text style={styles.signupLink}>Sign Up</Text>
            </Text>
          </TouchableOpacity>
        </View>

  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F8F9FA",
  },
  scrollContainer: {
    paddingVertical: 20,
  },
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
      justifyContent:"center",
    alignItems:"center"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#242760",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    padding: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 12,
    backgroundColor: "white",
  },
  button: {
    width: "100%",
    backgroundColor: "#242760",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  signupRedirect: {
    marginTop: 15,
  },
  signupText: {
    fontSize: 14,
    color: "#333",
  },
  signupLink: {
    color: "#242760",
    fontWeight: "bold",
  },
});
