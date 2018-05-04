import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import  LyricCreate  from './LyricCreate';
import  LyricsList  from './LyricsList';
import { songQuery } from '../queries';

class SongDetail extends Component{
  render(){
    const { song } = this.props.data;
    if(!song){
        return <div>Loading song</div>
    }
    return(
      <div>
        <Link to="/">Back</Link>
        <h2>{song.title}</h2>
        <LyricsList lyrics={song.lyrics} />
        <LyricCreate id={this.props.params.id} />
      </div>
    )
  }
}

export default graphql(songQuery,{
  options:(props)=>{
    return {variables: {id:props.params.id}}
  }
})(SongDetail);