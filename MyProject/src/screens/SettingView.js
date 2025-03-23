import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

export default function SettingsView() {
    return (
        <SafeAreaView  style={styles.safeArea}>
            <StatusBar style="auto"  />
            <View style={styles.container}>
                <Text>Settings View</Text>
                <StatusBar style="auto" />
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