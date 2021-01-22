import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ProfileScreen = () => {
  return (
    <View>
      <View>
        <View style={styles.background}>
          <ImageBackground
            style={styles.background}
            source={require('../src/images/background_profile.jpg')}>
            <Image
              source={require('../src/images/user64.png')}
              style={styles.avatarImage}
            />
            <Text
              style={{
                color: 'white',
                fontSize: 20,
                fontWeight: 'bold',
                marginTop: 20,
              }}>
              Admin
            </Text>
          </ImageBackground>
        </View>
        <View style={{padding: 10}}>
          <Text>
            <Icon name="ios-person" style={styles.iconInfo} size={20} />
            <Text style={styles.titleInfo}>Username</Text>
          </Text>
          <Text style={styles.infomation}>admin</Text>
        </View>
        <View style={{padding: 10}}>
          <Text>
            <Icon name="ios-mail" style={styles.iconInfo} size={20} />
            <Text style={styles.titleInfo}>Email</Text>
          </Text>
          <Text style={styles.infomation}>admin@admin.com</Text>
        </View>
        <View style={{padding: 10}}>
          <Text>
            <Icon name="ios-phone-portrait" style={styles.iconInfo} size={20} />
            <Text style={styles.titleInfo}>Phone</Text>
          </Text>
          <Text style={styles.infomation}>0123456789</Text>
        </View>
        <View style={{padding: 10}}>
          <Text>
            <Icon name="ios-home" style={styles.iconInfo} size={20} />
            <Text style={styles.titleInfo}>Address</Text>
          </Text>
          <Text style={styles.infomation}>412 Hung Vuong</Text>
        </View>
        {/* <Text>Profile Screen</Text>
        <Button
          title="Click Here"
          onPress={() => alert('Button Clicked!')}
        /> */}
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  background: {
    alignItems: 'center',
    // flex: 1,
    width: windowWidth,
    height: 200,
  },
  avatarImage: {
    marginTop: 50,
    width: 50,
    height: 50,
  },
  iconInfo: {},
});
