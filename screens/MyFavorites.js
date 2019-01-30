import React, { Component } from 'react';
import { WebView, Text, View, ScrollView } from 'react-native';
import { Container, Content, Header } from "native-base";
import { NavigationActions } from "react-navigation";
import API from "../utils/API";
import BookCard from '../components/BookCard';

export default class MyFavorites extends Component {

  state ={
    books: []
  }
  
  componentDidMount(){
    this.props.navigation.addListener('willFocus', (route) => { //tab changed });
    API.getUser()
    .then(res => {
      this.getBooks(res.data.user._id)
    })
  })
  }

  bookDetail = (bookObj) => {
    const navigateAction = NavigationActions.navigate({
      routeName: "BookDetail",
      params: { data: bookObj }
    });
    this.props.navigation.dispatch(navigateAction);
    // this.props.navigation.goBack();
  }
  

  getBooks = (id) => {
    API.getUserBooks(id)
    .then(res => this.setState({books: res.data.book}))
  }

  render() {
    return (
      <Container>
        <Content>
          <ScrollView>

         {this.state.books.map(book => {
          return (
             <BookCard key={book.id} data={book} bookDetail={this.bookDetail}/>
          )}
         )}
        </ScrollView>
        </Content>
      </Container>
      
    );
  }
}