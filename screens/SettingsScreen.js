import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions
} from 'react-native';
import { WebBrowser } from 'expo';
import FlipToggle from 'react-native-flip-toggle-button'

import { MonoText } from '../components/StyledText';

const window = Dimensions.get('window');

export default class NewsLetterScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSwitchOn: false
    };
  }
  static navigationOptions = {
    title: 'SETTING'
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.rowDirection}>
          <Text style={styles.textLabel}>PUSH 알림</Text>
          <FlipToggle
            style={styles.flipToggle}
            value={this.state.isSwitchOn}
            buttonWidth={50}
            buttonHeight={25}
            buttonRadius={50}
            buttonOnColor={'#e2e2e2'}
            buttonOffColor={'#e2e2e2'}
            sliderOnColor={'#198aea'}
            sliderOffColor={'#198aea'}
            onToggle={(value) => {
              this.setState({ isSwitchOn: value });
            }}
            onToggleLongPress={() => {
              console.log('Long Press');
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  rowDirection: {
    flexDirection: 'row',
    margin: 20
  },
  textLabel: {
    fontSize: 20,
    height: 25,
    marginRight: 10,
    fontWeight: "200",
    color: '#4d4d4d'

  },
  flipToggle: {

  }
});
