import React, {Component} from 'react';


import styled from 'styled-components';


class FollowerCard extends Component{
    render(){
        return(
            <Card>
                 <div className="follower-card">
                <Image src={this.props.friend.avatar_url}/>
                <div className="followerContent">
                    <h2>Name:{this.props.friend.name}</h2>
                    {/* <h3 className="username">Username:{this.props.friend.username}</h3>  */}
                    <h3 className="login">Login:{this.props.friend.login}</h3>
                    <p>profile:{this.props.friend.profile}</p>
                    <p>id:{this.props.friend.id}</p>     
                </div>
            </div>
            </Card>
           
        );
    }
}

export default FollowerCard;

const Card = styled.div`
  padding: 3%;
  margin: 3%;
  max-width: 300px;
  max-height: 500px;
  display: flex;
  flex-wrap: wrap;
  align-items:center;
  margin: 0 auto;
 
  background-color: #78ffd6;
  border: 1px solid #d1d5da;
  border-radius: 3px;
`;

const Image = styled.img`
   max-width: 200px;
   max-height: 200px;

`;