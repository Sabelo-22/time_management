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

const SignupScreen = () => {
  const navigation = useNavigation();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    region: "",
    password: "",
    confirmPassword: "",
  });

  // Handle input change
  const handleChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  // Handle Signup
  const handleSignup = () => {
    if (!form.name || !form.email || !form.phone || !form.region || !form.password || !form.confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Proceed with signup logic (e.g., Firebase authentication)
    navigation.navigate("MainApp");
  };

  return (
   
    
        <View style={styles.container}>
          <Text style={styles.title}>Create an Account</Text>

          <TextInput
            style={styles.input}
            placeholder="Full Name"
            value={form.name}
            onChangeText={(text) => handleChange("name", text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            value={form.email}
            onChangeText={(text) => handleChange("email", text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            keyboardType="phone-pad"
            value={form.phone}
            onChangeText={(text) => handleChange("phone", text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Region"
            value={form.region}
            onChangeText={(text) => handleChange("region", text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={form.password}
            onChangeText={(text) => handleChange("password", text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            secureTextEntry
            value={form.confirmPassword}
            onChangeText={(text) => handleChange("confirmPassword", text)}
          />

          <TouchableOpacity style={styles.button} onPress={handleSignup}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>

          {/* Already have an account? Navigate to Login */}
          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            style={styles.loginRedirect}
          >
            <Text style={styles.loginText}>
              Already have an account? <Text style={styles.loginLink}>Log In</Text>
            </Text>
          </TouchableOpacity>
        </View>
     
 
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  // safeArea: {
  //   flex: 1,
  //   backgroundColor: "#F8F9FA",
    
  // },
  // scrollContainer: {
  //   paddingVertical: 20,
  // },
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
    borderWidth: 1,
    // borderColor: "red",
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
  loginRedirect: {
    marginTop: 15,
  },
  loginText: {
    fontSize: 14,
    color: "#333",
  },
  loginLink: {
    color: "#242760",
    fontWeight: "bold",
  },
});
