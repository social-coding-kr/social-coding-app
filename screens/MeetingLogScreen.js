import React from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View, Dimensions} from 'react-native';
import { WebBrowser } from 'expo';

const window = Dimensions.get('window');

export default class MeetingLogScreen extends React.Component {
  static navigationOptions = {
    title: 'MEETING LOG'
  };

  _moveContent = () => this.props.navigation.navigate('MeetingLogContent');

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <TouchableOpacity onPress={this._moveContent} style={styles.newsLetterContent}>
            <Text style={styles.newsLetterCategory}>2018.7. 28</Text>
            <Text style={styles.newsLetterTitle}>미팅로그1</Text>
          </TouchableOpacity>
          <View style={styles.newsLetterContent}>
            <Text style={styles.newsLetterCategory}>2018. 6. 25</Text>
            <Text style={styles.newsLetterTitle}>미팅로그2</Text>
          </View>
          <View style={styles.newsLetterContent}>
            <Text style={styles.newsLetterCategory}>2018. 5. 23</Text>
            <Text style={styles.newsLetterTitle}>미팅로그3</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 20,
    alignItems: 'center',
  },
  newsLetterContent: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 3,
    marginBottom: 3,
    width: window.width*0.95,
    height: window.height/5,
    backgroundColor: '#0a3155',
    borderRadius: 5
  },
  newsLetterCategory: {
    color: '#eac015',
    fontSize: 15,
    position: 'absolute',
    top: 10,
    left: 15

  },
  newsLetterTitle: {
    color: '#fff',
    fontSize: 18
  }
});
