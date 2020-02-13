import React, {Component} from 'react';

import axios from 'axios';

import FollowerCard from './components/FollowerCard';
import UserCard from './components/UserCard';


import './App.css';

class App extends Component {
  constructor(){
    console.log('constructor Invoked!');
    super();
    this.state={
     friendFollowers:[],
     myInfoData: [],
    }
  }

  // Phase 1 Mounting

  componentDidMount(){
    axios.get('https://api.github.com/users/OldDognoob')
    .then(response =>{
     console.log(response.data)
     this.setState({myInfoData: response.data})
    })
    .catch(error =>{
      console.log(error)
    })

    axios.get('https://api.github.com/users/OldDognoob/followers')
    .then(response =>{
      console.log(response.data)
      this.setState({friendFollowers: response.data})
    })
    .catch(error =>{
      console.log(error)
    })

  }
 
  render(){
    console.log("Render Invoked!");
    return(
      <div className="App">
        <UserCard myInfoData={this.state.myInfoData}/>
        <h1>My Followers</h1>
        {this.state.friendFollowers.map((friend, index)=>{
          return<FollowerCard friend={friend} key={index}/>
        })}
      </div>
    )
  }
}  

export default App;