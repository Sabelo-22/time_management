import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Modal,
  SafeAreaView,
} from "react-native";
import { FontAwesome, Feather } from "@expo/vector-icons";

const DashboardView = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedNotification, setSelectedNotification] = useState(null);

  // Sample notifications data
  const notifications = [
    { id: "1", title: "Project Deadline Approaching", dueDate: "March 25, 2025", details: "Your project 'Collab App' is due in 2 days. Please review the pending tasks." },
    { id: "2", title: "New Task Assigned", dueDate: "March 27, 2025", details: "You have been assigned a new task: 'Design UI Components' for the Collab App." },
    { id: "3", title: "Meeting Reminder", dueDate: "March 28, 2025", details: "Your team meeting is scheduled for March 28 at 10 AM. Don't miss it!" },
  ];

  // Sample recently added tasks data
  const recentTasks = [
    { id: "1", title: "Implement Firebase Authentication" },
    { id: "2", title: "Fix calendar bug in scheduling" },
    { id: "3", title: "Update UI for settings screen" },
  ];

  // Open modal with notification details
  const openModal = (notification) => {
    setSelectedNotification(notification);
    setModalVisible(true);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Notifications Section */}
        <Text style={styles.sectionTitle}>Notifications</Text>
        <FlatList
          data={notifications}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.notificationCard}>
              <FontAwesome name="bell" size={24} color="#242760" style={styles.bellIcon} />
              <View style={styles.notificationText}>
                <Text style={styles.notificationTitle}>{item.title}</Text>
                <Text style={styles.notificationDate}>Due: {item.dueDate}</Text>
                <TouchableOpacity onPress={() => openModal(item)}>
                  <Text style={styles.viewMoreText}>View More Details</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
        <TouchableOpacity style={styles.viewMoreButton}>
          <Text style={styles.viewMoreButtonText}>View More Notifications</Text>
        </TouchableOpacity>

        {/* Recently Added Tasks Section */}
        <Text style={styles.sectionTitle}>Recently Added Tasks</Text>
        <FlatList
          data={recentTasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.taskCard}>
              <Feather name="check-circle" size={20} color="green" style={styles.taskIcon} />
              <Text style={styles.taskText}>{item.title}</Text>
            </View>
          )}
        />

        {/* Notification Details Modal */}
        <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>{selectedNotification?.title}</Text>
              <Text style={styles.modalDate}>Due Date: {selectedNotification?.dueDate}</Text>
              <Text style={styles.modalDetails}>{selectedNotification?.details}</Text>
              <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

export default DashboardView;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F8F9FA",
  },
  container: {
    flex: 1,
    padding: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#242760",
  },
  notificationCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 3,
  },
  bellIcon: {
    marginRight: 10,
  },
  notificationText: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#242760",
  },
  notificationDate: {
    fontSize: 14,
    color: "gray",
  },
  viewMoreText: {
    color: "#007BFF",
    fontSize: 14,
    marginTop: 5,
  },
  viewMoreButton: {
    backgroundColor: "#242760",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  viewMoreButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  taskCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 12,
    borderRadius: 10,
    marginBottom: 8,
    elevation: 2,
  },
  taskIcon: {
    marginRight: 10,
  },
  taskText: {
    fontSize: 16,
    color: "#242760",
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
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#242760",
  },
  modalDate: {
    fontSize: 16,
    color: "gray",
    marginBottom: 10,
  },
  modalDetails: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: "#242760",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  closeButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
