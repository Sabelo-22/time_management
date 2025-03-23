import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Modal,
  TextInput,
  SafeAreaView,
} from "react-native";
import { Calendar } from "react-native-calendars";
import { Feather } from "@expo/vector-icons";

const CalendarScreen = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [tasks, setTasks] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [taskText, setTaskText] = useState("");

  // Select a date
  const onDayPress = (day) => {
    setSelectedDate(day.dateString);
  };

  // Add a task to selected date
  const addTask = () => {
    if (!taskText) {
      alert("Please enter a task!");
      return;
    }

    setTasks((prevTasks) => ({
      ...prevTasks,
      [selectedDate]: prevTasks[selectedDate]
        ? [...prevTasks[selectedDate], taskText]
        : [taskText],
    }));

    setTaskText("");
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Calendar */}
        <Calendar
          onDayPress={onDayPress}
          markedDates={{
            [selectedDate]: { selected: true, selectedColor: "#242760" },
          }}
          theme={{
            selectedDayBackgroundColor: "#242760",
            todayTextColor: "#242760",
            arrowColor: "#242760",
          }}
        />

        {/* Selected Date Header */}
        <Text style={styles.dateTitle}>
          {selectedDate ? `Tasks for ${selectedDate}` : "Select a date"}
        </Text>

        {/* Task List */}
        {tasks[selectedDate]?.length > 0 ? (
          <FlatList
            data={tasks[selectedDate]}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.taskItem}>
                <Feather name="check-circle" size={20} color="green" />
                <Text style={styles.taskText}>{item}</Text>
              </View>
            )}
          />
        ) : (
          <Text style={styles.noTasksText}>No tasks added for this date.</Text>
        )}

        {/* Add Task Button */}
        {selectedDate && (
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.addButtonText}>+ Add Task</Text>
          </TouchableOpacity>
        )}

        {/* Task Modal */}
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Add Task for {selectedDate}</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter task"
                value={taskText}
                onChangeText={setTaskText}
              />
              <TouchableOpacity style={styles.saveButton} onPress={addTask}>
                <Text style={styles.saveButtonText}>Save Task</Text>
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
      </View>
    </SafeAreaView>
  );
};

export default CalendarScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F8F9FA",
  },
  container: {
    flex: 1,
    padding: 20,
  },
  dateTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#242760",
    marginVertical: 10,
  },
  noTasksText: {
    color: "gray",
    textAlign: "center",
    marginTop: 10,
  },
  taskItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    marginBottom: 8,
    elevation: 2,
  },
  taskText: {
    fontSize: 16,
    color: "#242760",
    marginLeft: 10,
  },
  addButton: {
    backgroundColor: "#242760",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  addButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
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
