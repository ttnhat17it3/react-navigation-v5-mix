import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Alert,
  Modal,
} from 'react-native';
import {TouchableHighlight, TouchableOpacity} from 'react-native';
import flatListData from '../data/flatListData';
import detailCourse from '../data/detailCourse';
import NavigationContainer from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import test_data from '../data/test_data';
import listCourse from '../data/listCourse';
import WebView from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

const FlatListItem = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'mediumseagreen'}}>
      <Text>{this.props.item.name}</Text>
      <Text>{this.props.item.description}</Text>
    </View>
  );
};

const DetailItem = ({navigation, route}) => {
  return <Text>Ahihi</Text>;
};

const Stack = createStackNavigator();

const DetailsScreen = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <FlatList
        data={listCourse}
        renderItem={({item, index}) => {
          return (
            <View>
              <TouchableHighlight
                onPress={() => {
                  console.log(index);
                  setModalVisible(true);
                }}>
                <View style={{flex: 1, flexDirection: 'column'}}>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      backgroundColor: '#EEF5F9',
                    }}>
                    <Image
                      source={{uri: item.cover_image}}
                      style={{width: 100, height: 100, margin: 5}}
                    />
                    <View style={{flex: 1, flexDirection: 'column'}}>
                      <Text
                        style={{padding: 10, fontWeight: 'bold', fontSize: 15}}>
                        {item.title}
                      </Text>
                      {/* <Text style={styles.flatListItem}>{item.description}</Text> */}
                      {/* for (let val in item.rating) {
                      <Icon name="ios-star" color={'#FFB22B'} size={20} style={{padding: 10}}/>
                    } */}
                      <Text style={{padding: 10}}>
                        <Icon
                          name="ios-people"
                          size={20}
                          style={{padding: 10}}
                        />
                        {item.learner_count}/{item.max_quantity}
                      </Text>
                    </View>
                  </View>
                  <View style={{height: 1, backgroundColor: 'black'}} />
                </View>
              </TouchableHighlight>
              <Modal
                visible={modalVisible}
                // animationType="slide"
                onRequestClose={() => {
                  // Alert.alert("Cancel?");
                  setModalVisible(!modalVisible);
                }}
                style={{width: 100, height: 200}}>
                <View style={{flex: 1}}>
                  <ScrollView>
                    <Image
                      source={{
                        uri:
                          'https://cdn.lynda.com/course/653258/653258-636550011735261816-16x9.jpg',
                      }}
                      style={{height: 200, resizeMode: 'stretch'}}
                    />
                    <Text
                      style={{padding: 5, fontSize: 20, fontWeight: 'bold'}}>
                      Introduction about Spring Boot 2.1
                    </Text>
                    <Text
                      style={{padding: 5, fontSize: 17, fontWeight: 'italic'}}>
                      DESCRIPTION
                    </Text>
                    <Text style={{padding: 5, fontSize: 17}}>
                      Introduction about Spring Boot 2.1
                    </Text>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={{padding: 10}}>
                        <Icon
                          name="ios-people"
                          size={20}
                          style={{padding: 10}}
                        />
                        <Text>28/30</Text>
                      </Text>
                      <Text style={{padding: 10}}>
                        <Icon name="ios-home" size={20} style={{padding: 10}} />
                        <Text>3B</Text>
                      </Text>
                      <Text style={{padding: 10}}>
                        <Icon
                          name="ios-star"
                          size={20}
                          color={'#FFB22B'}
                          style={{padding: 10}}
                        />
                        <Icon
                          name="ios-star-half"
                          size={20}
                          color={'#FFB22B'}
                          style={{padding: 10}}
                        />
                      </Text>
                    </View>
                    <View style={{height: 1, color: 'black'}} />
                    <View style={{}}>
                      <Text
                        style={{
                          padding: 5,
                          fontSize: 17,
                          fontWeight: 'italic',
                        }}>
                        CONTENT
                      </Text>
                      <Text style={{padding: 5}}>
                        Spring Boot makes it easy to create stand-alone,
                        production-grade Spring based Applications that you can
                        'just run'. We take an opinionated view of the Spring
                        platform and third-party libraries so you can get
                        started with minimum fuss. Most Spring Boot applications
                        need very little Spring configuration.
                      </Text>
                    </View>
                    <View>
                      <Text
                        style={{
                          padding: 5,
                          fontSize: 17,
                          fontWeight: 'italic',
                        }}>
                        INSTRUCTORS
                      </Text>
                      <View style={{flexDirection: 'row', flex: 1, padding: 5}}>
                        <View>
                          <Image source={require('../src/images/user32.png')} />
                        </View>
                        <View style={{flexDirection: 'column'}}>
                          <Text Text>Tran Gia Hoa</Text>
                          <Text Text>Engineer</Text>
                        </View>
                      </View>
                      <View style={{flexDirection: 'row', padding: 5, flex: 1}}>
                        <View>
                          <Image source={require('../src/images/user32.png')} />
                        </View>
                        <View style={{flexDirection: 'column'}}>
                          <Text Text>Tang Truong Tuan</Text>
                          <Text Text>Engineer</Text>
                        </View>
                      </View>
                      <Image />
                    </View>
                  </ScrollView>
                </View>
                <TouchableOpacity
                  style={{...styles.openButton, backgroundColor: '#2196F3'}}
                  onPress={() => {
                    console.log(index);
                    Alert.alert('Success');
                    setModalVisible(!modalVisible);
                  }}>
                  <Text style={styles.textStyle}>JOIN</Text>
                </TouchableOpacity>
              </Modal>
            </View>
          );
        }}
      />
      {/* <Text>Details Screen</Text>
      <Button
          title="Go to details screen...again"
          onPress={() => navigation.push("Details")}
      />
      <Button
          title="Go to home"
          onPress={() => navigation.navigate("Home")}
      />
      <Button
          title="Go back"
          onPress={() => navigation.goBack()}
      /> */}
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
  },
  flatListItem: {
    padding: 10,
    fontSize: 13,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 10,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    fontWeight: 'bold',
    paddingBottom: 10,
    textAlign: 'center',
    color: 'white',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
