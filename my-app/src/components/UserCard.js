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
            <p className="login">Login:{this.props.myInfoData.login}</p>
            <p>location:{this.props.myInfoData.location}</p>
            <p>Followers:{this.props.myInfoData.Followers}</p>
            <p>Following:{this.props.myInfoData.Following}</p>
            <p>Bio:{this.props.myInfoData.Bio}</p>
            </div>
            </div>

          </Card>
            

          
            
        );
    }
}

export default UserCard;

const Card = styled.div `
    padding: 3%;
    margin: 3%;
    max-width: 300px;
    max-height: 500px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    background-color: white;
    border: 2px solid #99f2c8;
    border-radius: 3px;
    margin: 0 auto;

`;

const Image = styled.img`
   max-width: 200px;
   max-height: 200px;

`;