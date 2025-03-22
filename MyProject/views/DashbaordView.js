import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function DashboardView() {
  return (
    <View style={styles.container}>
      <Text>Dashboard View</Text>
       <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
