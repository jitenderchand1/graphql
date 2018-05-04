import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { songQuery } from '../queries';
class LyricCreate extends Component{
  state = {
    lyricValue: ""
  }

  onHandleSubmit = (e)=> {
    e.preventDefault();
    const { id } = this.props;
    this.props.mutate({
      variables:{
        songId:id,
        content:this.state.lyricValue
      }
    }).then(()=>{
      this.setState({
        lyricValue:""
      })
    })
  }

  render(){
    return(
      <form onSubmit={this.onHandleSubmit}>
        <label> Add a Lyrics</label>
        <input type="text" value={this.state.lyricValue} onChange={(e)=>this.setState({lyricValue: e.target.value})} />
      </form>
    )
  }
}

const mutation = gql`
  mutation AddLyricToSong($content:String, $songId: ID!){
      addLyricToSong(content:$content, songId: $songId){
        id,
        lyrics{
          id,
          content
        }
      }
  }
`;

export default graphql(mutation)(LyricCreate);