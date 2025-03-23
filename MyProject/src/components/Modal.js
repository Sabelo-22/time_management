import React, { useState, useEffect } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TextInput,
} from "react-native";

export default function ModalComp({
  modalVisible,
  setModalVisible,
  addTask,
  editingTask,
  updateTask,
}) {
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [description, setDescription] = useState("");

  // Pre-fill inputs if editing a task
  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDueDate(editingTask.dueDate);
      setDescription(editingTask.description);
    } else {
      setTitle("");
      setDueDate("");
      setDescription("");
    }
  }, [editingTask]);

  // Handles saving or updating a task
  const handleSave = () => {
    if (!title || !dueDate || !description) {
      alert("Please fill in all fields.");
      return;
    }

    const newTask = {
      id: editingTask ? editingTask.id : Date.now().toString(),
      title,
      dueDate,
      description,
    };

    if (editingTask) {
      updateTask(newTask);
    } else {
      addTask(newTask);
    }

    setModalVisible(false);
  };

  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>
            {editingTask ? "Edit Task" : "Add New Task"}
          </Text>

          {/* Task Title Input */}
          <TextInput
            style={styles.input}
            placeholder="Enter task title"
            placeholderTextColor={"#ccc"}
            value={title}
            onChangeText={setTitle}
          />

          {/* Due Date Input */}
          <TextInput
            style={styles.input}
            placeholder="Enter due date (e.g. March 25, 2025)"
            placeholderTextColor={"#ccc"}
            value={dueDate}
            onChangeText={setDueDate}
          />

          {/* Description Input */}
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Enter task description"
            placeholderTextColor={"#ccc"}
            value={description}
            onChangeText={setDescription}
            multiline
          />

          <View style={styles.buttonContainer}>
            {/* Save / Update Button */}
            <Pressable style={styles.buttonSave} onPress={handleSave}>
              <Text style={styles.textStyleSave}>
                {editingTask ? "Update Task" : "Save Task"}
              </Text>
            </Pressable>

            {/* Cancel Button */}
            <Pressable
              style={styles.buttonCancel}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.textStyleCancel}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalView: {
    width: "90%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    elevation: 5,
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
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 10,
  },
  buttonCancel: {
    flex: 1,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#242760",
    alignItems: "center",
    marginLeft: 10,
  },
  buttonSave: {
    flex: 1,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#242760",
    alignItems: "center",
  },
  textStyleCancel: {
    color: "#242760",
    fontWeight: "bold",
  },
  textStyleSave: {
    color: "white",
    fontWeight: "bold",
  },
});
