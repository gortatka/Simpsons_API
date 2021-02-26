import './App.css';
import axios from 'axios';
import React from "react";
import QuoteCard from "./components/QuoteCard";



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    
      quoter: "",
      image: "",
      character:""
    };
    this.getEmployee = this.getEmployee.bind(this);
  }
  getEmployee() {
    // Send the request
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes?count=6')
      // Extract the DATA from the received response
      .then(response =>{
        console.log(response);
         this.setState({quote:response.data[0].quote,image:response.data[0].image, character:response.data[0].character })
         
       } 
      )}
   
  

  render() {
    return (
      <div className="App">
        <QuoteCard quote={this.state.quote} image={this.state.image} character={this.state.character}  />
        <button type="button" onClick={this.getEmployee}>Get quote</button>
      </div>
    );
  }
}


export default App;
