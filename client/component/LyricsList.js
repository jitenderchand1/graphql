import React, { Component } from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';


class LyricsDetail extends Component{
  onLike = (id)=> {
    this.props.mutate({
      variables:{id}
    })
  }
  render(){
    return(
      <ul className="collection">
        {this.props.lyrics.map(({id, content, likes}, index)=>{
          return(
            <li key={index} className="collection-item">
              {content}
              <i className="material-icons" onClick={()=>this.onLike(id)}>thumb_up</i>
              {likes}
            </li>
          )
        })}
      </ul>
    )
  }
}

const mutation = gql`
mutation LikeLyric($id:ID){
 	likeLyric(id:$id){
    id,
    likes
  } 
}
`;


export default graphql(mutation)(LyricsDetail);