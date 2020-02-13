import React, {Component} from 'react';


import styled from 'styled-components';


class FollowerCard extends Component{
    render(){
        return(
            <Card>
                 <div className="follower-card">
                <Image src={this.props.friend.avatar_url}/>
                <div className="followerContent">
                    <h3 className="username">Username:{this.props.friend.login}</h3>    
                </div>
            </div>
            </Card>
           
        );
    }
}

export default FollowerCard;

const Card = styled.div`
 
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
  width: 150px;
  height: 150px;
  border-radius: 3px;
  margin-right: 20px;
`;