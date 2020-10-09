import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { render } from 'react-dom';
import PostData from './components/PostData';

export default class App extends Component {
  state = {
    posts: []
  }

  componentDidMount = () => {
    this.getPosts();
  }
  getPosts() {
    const API = 'https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=';
    const KEY = 'NW5NTz4JGugzUdGmK4k5EOMGgjLoVluf';
    const URL = API + KEY;

    return fetch(URL)
    .then((response) => response.json())
    .then((datas) => {
      this.setState({posts: datas}, ()=>{

        console.log(this.state.posts.results);
      })
      // return json.movies;
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render() {

    return (
      <View style={styles.container}>

        <FlatList 
            data= {this.state.posts.results}
            keyExtractor = {(item) => (this.state.posts.results.indexOf(item)).toString()}
            renderItem= {({item})=>(
            <PostData post={item} />
            )}
        />


      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
