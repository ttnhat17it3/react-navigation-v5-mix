import React, {Component} from 'react';
import { View, Text, Button, StyleSheet, FlatList, Image } from 'react-native';
import flatListData from '../data/flatListData';

const FlatListItem = () => {
    return (
      <View style={{
        flex: 1,
        backgroundColor: 'mediumseagreen'
      }}>
        <Text>{this.props.item.name}</Text>
        <Text>{this.props.item.description}</Text>
      </View>
    );
}

export default DetailItem;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    // alignItems: 'center', 
    justifyContent: 'center'
  },
  flatListItem: {
    color: 'white',
    padding: 10,
    fontSize: 16
  },
});
