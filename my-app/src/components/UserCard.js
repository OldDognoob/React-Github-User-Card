import React, {Component} from 'react';

import styled from 'styled-components';



class UserCard extends Component{
    render(){
        return(
          <Card>
              <div className="user-card">
                <Image src={this.props.myInfoData.avatar_url} />
            <div className="cardContent">
            <h2>Name:{this.props.myInfoData.name}</h2>
            {/* <p className="username">Username:{this.props.myInfoData.username} </p> */}
            <p className="login">Login: {this.props.myInfoData.login}</p>
            <p>location: {this.props.myInfoData.location}</p>
            <p>Followers: {this.props.myInfoData.followers}</p>
            <p>Following: {this.props.myInfoData.following}</p>
            <p>Bio: {this.props.myInfoData.bio}</p>
            </div>
            </div>

          </Card>
            

          
            
        );
    }
}

export default UserCard;

const Card = styled.div `
  flex-wrap: wrap;
  align-items:center;
  margin: 0 auto;
  background-color: #78ffd6;
  width: 40%;
  padding: 10px;
  display: flex;
  border-radius: 5px;
  box-shadow: 0 1px 6px -2px #000;
  margin-bottom: 20px;

`;

const Image = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 3px;
  margin-right: 20px;

`;