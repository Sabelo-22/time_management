import React, {useState} from 'react';
import { Modal, StyleSheet, Text, Pressable, View} from 'react-native';

export default function ModalComp({modalVisible, setModalVisible}) {
    return(
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Hello World!</Text>
                    <View>
                        <Pressable
                            style={[styles.buttonSave, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.textStyleSave}>Save Task</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.buttonCancel, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}>
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
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    modalView: {
        height:750,
        width:356,
        marginTop: 70,
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        justifyContent:'space-between',
        shadowColor: '#000',
        shadowOffset: {
            width: 2,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    buttonCancel: {
        padding: 10,
        elevation: 2,
        marginBottom:10,
        backgroundColor:"none",
        borderRadius: 5,
        borderStyle:'solid',
        borderWidth:1,
        borderColor:'rgba(36, 39, 96, 1)',
        color:'rgba(36, 39, 96, 1)'
    },
    buttonSave: {
        padding: 10,
        elevation: 2,
        marginBottom:10,
        borderRadius: 5,
        backgroundColor:"rgba(36, 39, 96, 1)",
    },
    textStyleCancel: {
        color:'rgba(36, 39, 96, 1)',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    textStyleSave: {
            color:'white',
            fontWeight: 'bold',
            textAlign: 'center',
        },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});
