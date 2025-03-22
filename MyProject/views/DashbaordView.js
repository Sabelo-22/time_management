import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

export default function DashboardView() {
  return (
      <SafeAreaView  style={styles.safeArea}>
        <StatusBar style="auto"/>
        <View style={styles.container}>
          <Text style={styles.pageHeading}>Dashboard</Text>

        </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:40,
    paddingLeft:30
  },
  safeArea:{
    flex:1,
    backgroundColor: '#fff',
  },
  pageHeading:{
    fontSize:34,
    fontWeight:"bold",
    color:'3A3A3A',
  }
});
