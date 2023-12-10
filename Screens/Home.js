import { Text, View, StyleSheet, Button, TouchableOpacity, Alert, Modal, Pressable } from 'react-native'
import React, { PureComponent, useState } from 'react'

// Using documentation as guide for custom Alert: https://reactnative.dev/docs/modal
// And button colour change (pressable) https://reactnative.dev/docs/pressable
// Sound: https://freesound.org/people/InspectorJ/sounds/411088/
  

const IAmRich = () => {

  const [modalVisible, setModalVisible] = useState(false);

    return (
      <View style={styles.container}>
      
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>

        <View style={[styles.container, styles.dim]}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>You Are Rich</Text>
            
            <Pressable
              style={({pressed}) => [
                styles.button, styles.buttonClose,
                {
                  backgroundColor : pressed ? '#C73B2A' : '#F54833'
                }]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      {/*<Pressable
              style={({pressed}) => [
                {
                  backgroundColor : pressed ? 'rgb(210, 230, 255)' : 'white',
                },                  
                  styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Close</Text>
              </Pressable>*/}

      <Pressable
        style={({pressed}) => [
          styles.button, styles.buttonOpen, 
          {
            backgroundColor : pressed ? '#0095B6' : '#00BCE5',
          }]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Press Me</Text>
      </Pressable>
      
      </View>
    );
};

export default IAmRich;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: '#F5FCFF',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 60,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    //backgroundColor: "#00ABDD",

    borderRadius: 20,
    paddingVertical: 18,
    paddingHorizontal: 20
  },
  buttonClose: {
    //backgroundColor: '#2196F3',
    backgroundColor: '#F54833',

    borderRadius: 18,
    paddingVertical: 12,
    paddingHorizontal: 14
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 20,
    padding: 10,
    fontWeight: 'bold',
  },
  dim: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    height: '100%',
  }
});
