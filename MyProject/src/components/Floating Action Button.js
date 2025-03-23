import {Alert, Modal, Pressable, Text, TouchableOpacity, View} from "react-native";
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import React, {useState} from "react";
import ModalComp from "./Modal";

export default function FloatingActionBtn() {
    const [modalVisible, setModalVisible] = useState(false);
    return(
        <View>
            <ModalComp modalVisible={modalVisible} setModalVisible={setModalVisible}/>
            <TouchableOpacity style={styles.fab} onPress={()=>setModalVisible(true)}>
                <Icon name="add" size={30} color="white" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    fab: {
        top: -25,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(36, 39, 96, 1)',
        width: 60,
        height: 60,
        borderRadius: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3.5,
        elevation: 5,
    },
});