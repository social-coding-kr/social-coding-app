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

const window = Dimensions.get('window');

const REQUEST_URL  = 'https://public-api.wordpress.com/wp/v2/sites/socialcoding2015.wordpress.com/posts/?categories=103';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
    this.fetchData = this.fetchData.bind(this);
  }

  getInitialState() {
    return {
      // Card is initially set to null so that the loading message shows.
      card: null,
    };
  }
  static navigationOptions = {
    header: null,
  };

  componentDidMount() {
    this.fetchData();
  }

  // This is where the magic happens! Fetches the data from our API and updates the application state.
  fetchData() {
    this.setState({
      // We'll also set card to null when loading new cards so that the loading message shows.
      card: null,
    });
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        // this.setState() will cause the new data to be applied to the UI that is created by the `render` function below.
        this.setState({
          card: { pic: responseData[0].title.rendered }
        });
      })
      .done();
  }
  render() {
    if ( !this.state.card ) {
      return this.renderLoadingView();
    }
    return this.renderCard();
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Wait for it...
        </Text>
      </View>
    );
  }

  renderCard() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.newsLetterContent}>
            <Text style={styles.newsLetterCategory}>사회 이슈</Text>
            <Text style={styles.newsLetterTitle}>{this.state.card.pic}</Text>
          </View>
          <View style={styles.newsLetterContent}>
            <Text style={styles.newsLetterCategory}>IT & 노동</Text>
            <Text style={styles.newsLetterTitle}>{this.state.card.pic}</Text>
          </View>
          <View style={styles.newsLetterContent}>
            <Text style={styles.newsLetterCategory}>세계 뉴스</Text>
            <Text style={styles.newsLetterTitle}>{this.state.card.pic}</Text>
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
    fontSize: 18
  }
});
