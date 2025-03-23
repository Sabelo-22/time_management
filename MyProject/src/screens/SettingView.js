import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const SettingsScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <Text style={styles.headerTitle}>Settings</Text>

          {/* Account */}
          <Text style={styles.sectionTitle}>Account</Text>
          <SettingsItem icon="user" text="Edit Profile" />
          <SettingsItem icon="lock" text="Security" />
          <SettingsItem icon="bell" text="Notifications" />
          <SettingsItem icon="shield" text="Privacy" />

          {/* Support & About  */}
          <Text style={styles.sectionTitle}>Support & About</Text>
          <SettingsItem icon="help-circle" text="Help and Support" />
          <SettingsItem icon="file-text" text="Terms and Policies" />

          {/* Cache & Cellular  */}
          <Text style={styles.sectionTitle}>Cache & Cellular</Text>
          <SettingsItem icon="trash-2" text="Free up Space" />
          <SettingsItem icon="wifi" text="Data Saver" />

          {/* Actions  */}
          <Text style={styles.sectionTitle}>Actions</Text>
          <SettingsItem icon="alert-triangle" text="Report a Problem" />
          <SettingsItem icon="user-plus" text="Add Account" />
          <SettingsItem icon="log-out" text="Log Out" isLogout={true} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const SettingsItem = ({ icon, text, isLogout }) => (
  <TouchableOpacity style={[styles.item, isLogout && styles.logout]}>
    <Feather name={icon} size={22} color={isLogout ? "red" : "#242760"} />
    <Text style={[styles.itemText, isLogout && styles.logoutText]}>{text}</Text>
  </TouchableOpacity>
);

export default SettingsScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F8F9FA",
  },
  scrollContainer: {
    paddingBottom: 20, 
  },
  container: {
    flex: 1,
    padding: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#242760",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    color: "#242760",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginBottom: 8,
    elevation: 2,
  },
  itemText: {
    fontSize: 16,
    color: "#242760",
    marginLeft: 10,
  },
  logout: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "red",
  },
  logoutText: {
    color: "red",
  },
});
