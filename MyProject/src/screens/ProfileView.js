import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  Modal,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const ProfileScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [user, setUser] = useState({
    name: "Wild Kid",
    email: "srm@gmail.com",
    phone: "0687779999",
    address: "5 help Street, Johannesburg, SA",
    gender: "Male",
    dob: "January 1, 2003",
    region: "Johannesburg, SA",
    bio: "Software Engineer | Traveler",
    image: "https://imgs.search.brave.com/GTciTfNisqdPU0yVTnpyoDolBSpKYl9K6y6H7BOjDlg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjAx/MzkxNTc2NC9waG90/by91c2VyLWljb24t/aW4tZmxhdC1zdHls/ZS5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9UEotMnZvUWZh/Q3hhZUNsdzZYYlVz/QkNaT3NTTjlIVWVC/SUg1Qk82VmRScz0",
  });

  const [editedUser, setEditedUser] = useState(user);

  const handleSave = () => {
    setUser(editedUser);
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          {/* Profile Header */}
          <View style={styles.profileHeader}>
            <Image source={{ uri: user.image }} style={styles.profileImage} />
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.email}>{user.email}</Text>
          </View>

          {/* Personal Information */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Personal Information</Text>
            <ProfileItem label="Date of Birth" value={user.dob} />
            <ProfileItem label="Gender" value={user.gender} />
            <ProfileItem label="Region" value={user.region} />
            <ProfileItem label="Bio" value={user.bio} />
          </View>

          {/* Contact Information */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Contact Information</Text>
            <ProfileItem label="Phone Number" value={user.phone} />
            <ProfileItem label="Address" value={user.address} />
          </View>

          {/* Edit Profile Button */}
          <TouchableOpacity
            style={styles.editButton}
            onPress={() => setModalVisible(true)}
          >
            <Feather name="edit" size={20} color="white" />
            <Text style={styles.editButtonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Edit Profile Modal */}
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Edit Profile</Text>

            <TextInput
              style={styles.input}
              placeholder="Full Name"
              value={editedUser.name}
              onChangeText={(text) =>
                setEditedUser({ ...editedUser, name: text })
              }
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={editedUser.email}
              onChangeText={(text) =>
                setEditedUser({ ...editedUser, email: text })
              }
            />
            <TextInput
              style={styles.input}
              placeholder="Phone Number"
              value={editedUser.phone}
              onChangeText={(text) =>
                setEditedUser({ ...editedUser, phone: text })
              }
            />
            <TextInput
              style={styles.input}
              placeholder="Address"
              value={editedUser.address}
              onChangeText={(text) =>
                setEditedUser({ ...editedUser, address: text })
              }
            />
            <TextInput
              style={styles.input}
              placeholder="Date of Birth"
              value={editedUser.dob}
              onChangeText={(text) =>
                setEditedUser({ ...editedUser, dob: text })
              }
            />
            <TextInput
              style={styles.input}
              placeholder="Gender"
              value={editedUser.gender}
              onChangeText={(text) =>
                setEditedUser({ ...editedUser, gender: text })
              }
            />
            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="Bio"
              value={editedUser.bio}
              onChangeText={(text) =>
                setEditedUser({ ...editedUser, bio: text })
              }
              multiline
            />

            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
              <Text style={styles.saveButtonText}>Save Changes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};


const ProfileItem = ({ label, value }) => (
  <View style={styles.profileItem}>
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
);

export default ProfileScreen;

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
    alignItems: "center",
    padding: 20,
  },
  profileHeader: {
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#242760",
  },
  email: {
    fontSize: 16,
    color: "gray",
  },
  section: {
    width: "100%",
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#242760",
    marginBottom: 10,
  },
  profileItem: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginBottom: 8,
    elevation: 2,
  },
  label: {
    fontSize: 14,
    color: "gray",
  },
  value: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#242760",
  },
  editButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#242760",
    padding: 12,
    borderRadius: 10,
    marginTop: 20,
  },
  editButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#242760",
  },
  input: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10,
  },
  textArea: {
    height: 80,
  },
  saveButton: {
    backgroundColor: "#242760",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  saveButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  cancelButton: {
    borderWidth: 1,
    borderColor: "#242760",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  cancelButtonText: {
    color: "#242760",
    fontSize: 16,
    fontWeight: "bold",
  },
});
