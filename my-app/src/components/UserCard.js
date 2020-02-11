import React, {Component} from 'react';

// import styled from 'styled-components';



class UserCard extends Component{
    render(){
        return(
          
            <div className="card">
                <image src={this.props.myInfoData.avatar_url} />
            <div className="cardContent">
            <h2>name:{this.props.myInfoData.name}</h2>
            <h3>username:{this.props.myInfoData.username} login:{this.props.myInfoData.login}</h3>
            <p>location:{this.props.myInfoData.location}</p>
            <p>Followers:{this.props.myInfoData.Followers}</p>
            <p>Following:{this.props.myInfoData.Following}</p>
            <p>Bio:{this.props.myInfoData.Bio}</p>
            </div>
               
            </div>

          
            
        );
    }
}

export default UserCard;

