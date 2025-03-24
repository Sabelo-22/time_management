import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Modal,
  SafeAreaView,
  Alert,
} from "react-native";
import { FontAwesome, Feather } from "@expo/vector-icons";
import Ionicons from '@expo/vector-icons/Ionicons';
import ModalComp from "../components/Modal";

const DashboardView = () => {
  const [taskModalVisible, setTaskModalVisible] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  // Open modal for adding/editing task
  const openTaskModal = (task = null) => {
    setEditingTask(task);
    setTaskModalVisible(true);
  };

  // Add a new task
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
    Alert.alert("Success", "Task added successfully!");
  };

  // Update an existing task
  const updateTask = (updatedTask) => {
    setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
    Alert.alert("Success", "Task updated successfully!");
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Recently Added Tasks */}
      <Text style={styles.sectionTitle}>Notifications</Text>
      {tasks.length === 0 ? (
        <Text style={styles.noTasksText}>No tasks added yet.</Text>
      ) : (
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.taskCard}>
              {/* <Feather name="check-circle" size={20} color="green" style={styles.taskIcon} /> */}
              <Ionicons name="notifications" size={24} color="black" style={styles.taskIcon} />
              <View style={styles.taskInfo}>
                <Text style={styles.taskTitle}>{item.title}</Text>
                <Text style={styles.taskDate}>Due: {item.dueDate}</Text>
                <Text style={styles.taskDescription}>{item.description}</Text>
              </View>
              <View style={styles.actionButtons}>
                <TouchableOpacity onPress={() => openTaskModal(item)}>
                  <Feather name="edit" size={20} color="#007BFF" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => deleteTask(item.id)}>
                  <Feather name="trash" size={20} color="red" />
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      )}

      {/* Add Task Button */}
      <TouchableOpacity style={styles.addButton} onPress={() => openTaskModal()}>
        <Text style={styles.addButtonText}>+ Add Task</Text>
      </TouchableOpacity>

      {/* Task Modal */}
      <ModalComp
        modalVisible={taskModalVisible}
        setModalVisible={setTaskModalVisible}
        addTask={addTask}
        updateTask={updateTask}
        editingTask={editingTask}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#242760",
  },
  noTasksText: {
    color: "#777",
    fontStyle: "italic",
    marginBottom: 10,
  },
  taskCard: {
    backgroundColor: "#f9f9f9",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#ddd",
  },
  taskInfo: {
    flex: 1,
    marginLeft: 10,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  taskDate: {
    color: "#888",
  },
  taskDescription: {
    color: "#555",
    marginTop: 5,
  },
  taskIcon: {
    marginRight: 10,
  },
  actionButtons: {
    flexDirection: "row",
    gap: 10,
  },
  addButton: {
    backgroundColor: "#242760",
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
    alignItems: "center",
  },
  addButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default DashboardView;
