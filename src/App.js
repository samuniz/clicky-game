import React, { Component } from "react";
// @ts-ignore
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      
      <Wrapper>  
        <Navbar></Navbar>
        <Header></Header>
        <Main>
        {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            image={friend.image}
            
          />
        ))}
        </Main>
        <Footer></Footer>
      </Wrapper>
    );
  }
}

export default App;
