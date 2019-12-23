import React, { Component } from "react";
// @ts-ignore
import PuppieCard from "./components/PuppieCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import puppies from "./puppies.json";

class App extends Component {
  state = {
    // clickedCard: 0,
    clickedPuppies: [],
    puppies, 
    score: 0,
    totalScore: 0,
    // dataClicked: false  
  };
  
  shuffle = array => {
    array.sort(function(a, b){return 0.5 - Math.random()});
    this.setState({
      puppies: array
    })
  }


  buttonOnClick = id => {
    // call the shuffle function and PASS IN this.state.puppies
    this.shuffle(this.state.puppies);
    // console.log(id)
    if (this.state.clickedPuppies.includes(id)){
      console.log("you lose");
      this.setState({
        score:0, 
        clickedPuppies: []
      }) 
    }else {
      // this.state.score;
      console.log(this.state.score)
      this.state.clickedPuppies.push(id)
      this.setState ({
        score: this.state.score + 1
      })
      // console.log(this.state.clickedPuppies);
  }

  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  // @ts-ignore
  render(){
    return (
      
      <Wrapper>  
        <Navbar score = {this.state.score}>
        </Navbar>
        <Header></Header>
         
    
        <Main>
        {this.state.puppies.map(puppie => (
          <PuppieCard
            id={puppie.id}
            key={puppie.id}
            image={puppie.image} 
            clickFunction={this.buttonOnClick}
          />
        ))}
        </Main>
        <Footer></Footer>
      </Wrapper>
    );
  }
}


export default App;
