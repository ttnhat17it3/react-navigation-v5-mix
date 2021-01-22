import React, {Component, useState} from 'react';
import { View, Text, Button, StyleSheet, FlatList, Image, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import flatListData from '../data/flatListData';
import NavigationContainer from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

var screen = Dimensions.get('window');

class ModalDetail extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <Modal
                style={{
                    justifyContent: "center",
                    width: screen.width - 80,
                    height: 280
                }}
                position="center"
                backdrop={true}
                onClosed={() => {
                    alert("Modal closed!");
                }}
            >
                <Text>Information</Text>

            </Modal>
        );
    }
}

export default ModalDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    // alignItems: 'center', 
    justifyContent: 'center'
  },
  centerViewed: {

  }
});
