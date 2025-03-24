import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Modal,
  SafeAreaView,
  TextInput,
} from "react-native";
import { FontAwesome, Feather } from "@expo/vector-icons";

const DashboardView = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [taskModalVisible, setTaskModalVisible] = useState(false);
  const [selectedNotification, setSelectedNotification] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDueDate, setTaskDueDate] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const notifications = [
    { id: "1", title: "Project Deadline Approaching", dueDate: "March 25, 2025", details: "Your project 'Collab App' is due in 2 days. Please review the pending tasks." },
    { id: "2", title: "New Task Assigned", dueDate: "March 27, 2025", details: "You have been assigned a new task: 'Design UI Components' for the Collab App." },
    { id: "3", title: "Meeting Reminder", dueDate: "March 28, 2025", details: "Your team meeting is scheduled for March 28 at 10 AM. Don't miss it!" },
  ];

  const openModal = (notification) => {
    setSelectedNotification(notification);
    setModalVisible(true);
  };

  const openTaskModal = (task = null) => {
    if (task) {
      setEditingTask(task);
      setTaskTitle(task.title);
      setTaskDueDate(task.dueDate);
      setTaskDescription(task.description);
    } else {
      setEditingTask(null);
      setTaskTitle("");
      setTaskDueDate("");
      setTaskDescription("");
    }
    setTaskModalVisible(true);
  };

  const handleSaveTask = () => {
    if (!taskTitle || !taskDueDate || !taskDescription) {
      alert("Please fill all fields");
      return;
    }

    if (editingTask) {
      setTasks(tasks.map(task => (task.id === editingTask.id ? { id: task.id, title: taskTitle, dueDate: taskDueDate, description: taskDescription } : task)));
    } else {
      setTasks([...tasks, { id: Date.now().toString(), title: taskTitle, dueDate: taskDueDate, description: taskDescription }]);
    }

    setTaskModalVisible(false);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
 
      <View style={styles.container}>
        {/* Notifications */}
        <Text style={styles.sectionTitle}>Notifications</Text>
        <View>
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
        </View>
       
        <TouchableOpacity style={styles.viewMoreButton}>
          <Text style={styles.viewMoreButtonText}>View More Notifications</Text>
        </TouchableOpacity>

        {/* Recently Added Tasks */}
        <Text style={styles.sectionTitle}>Recently Added Tasks</Text>
        {tasks.length === 0 ? (
          <Text style={styles.noTasksText}>No tasks added yet.</Text>
        ) : (
          <FlatList
            data={tasks}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.taskCard}>
                <Feather name="check-circle" size={20} color="green" style={styles.taskIcon} />
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

        <TouchableOpacity style={styles.addButton} onPress={() => openTaskModal()}>
          <Text style={styles.addButtonText}>+ Add Task</Text>
        </TouchableOpacity>

        <Modal animationType="slide" transparent={true} visible={taskModalVisible}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>{editingTask ? "Edit Task" : "Add New Task"}</Text>
              <TextInput style={styles.input} placeholder="Task Title" value={taskTitle} onChangeText={setTaskTitle} />
              <TextInput style={styles.input} placeholder="Due Date" value={taskDueDate} onChangeText={setTaskDueDate} />
              <TextInput style={[styles.input, styles.textArea]} placeholder="Description" value={taskDescription} onChangeText={setTaskDescription} multiline />
              <TouchableOpacity style={styles.saveButton} onPress={handleSaveTask}>
                <Text style={styles.closeButtonText}>{editingTask ? "Update Task" : "Save Task"}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.closeButton} onPress={() => setTaskModalVisible(false)}>
                <Text style={styles.closeButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
   
  );
};

export default DashboardView;

const styles = StyleSheet.create({
 
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "red",
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
