import React, { Component } from "react";
// @ts-ignore
import PuppieCard from "./components/PuppieCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Score from "./components/Score "

import puppies from "./puppies.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    // clickedCard: 0,
    clickedPuppies: [],
    puppies, 
    score: 0,
    totalScore: 0,
    // dataClicked: false  
  };



  buttonOnClick = id => {
    // call the shuffle function and PASS IN this.state.puppies
    this.shuffle(this.state.puppies);
    console.log(id)
    if (this.state.clickedPuppies.includes(id)){
      console.log("you lose");
      this.setState({
        score:0, 
        clickedPuppies: []
      }) 
    }else {
      this.state.clickedPuppies.push(id)
      console.log(this.state.clickedPuppies)
      // increase score 
    }
  }


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      
      <Wrapper>  
        <Navbar></Navbar>
        <Header></Header>
        <Score></Score>
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
