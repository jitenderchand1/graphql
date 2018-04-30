import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link, hashHistory } from 'react-router';
import { songsQuery } from '../queries';

class SongCreate extends Component{

  state ={
    songTitle:""
  }
  handleOnChange = (e)=> {
    this.setState({
      songTitle: e.target.value
    })
  }
  onSubmit = e => {
    e.preventDefault();
    this.props.mutate({
      variables:{
        title:this.state.songTitle
      },
      refetchQueries:[{query:songsQuery}]
    }).then(()=>{
      hashHistory.push('/');
    })
  }

  render(){
    return(
      <div>
        <Link to="/">
          back
        </Link>
        <h3>Create New Song</h3>
        <label>Song Title</label>
        <form onSubmit={this.onSubmit}>
          <input type="text" value={this.state.songTitle} name="" onChange={this.handleOnChange} />
        </form>
      </div>
    )
  }
}

const mutation = gql`
  mutation AddSong($title:String){
    addSong(title:$title){
      title
    }
  }
`;

export default graphql(mutation)(SongCreate);