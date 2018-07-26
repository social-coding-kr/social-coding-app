import React from 'react';
import { StyleSheet, View, Dimensions, WebView } from 'react-native';

const window = Dimensions.get('window');

export default class MeetingLogContentScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <WebView
          source = {{ uri: 'http://socialcoding.epizy.com/newsletter/4.html?i=1' }}
        />
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
    paddingTop: 50,
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
    fontSize: 20
  }
});
