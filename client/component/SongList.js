import React, {Component} from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import { songsQuery, deleteSong } from '../queries';

class SongList extends Component{

  onSongDelete = (id)=> {
    this.props.mutate({
      variables: {id}
    }).then(()=>{
      this.props.data.refetch();
    })
  }

  render(){
    if(this.props.data.loading){
      return <div>Loading</div>
    }

    return(
      <div>
        <ul className="collection">
          {
            this.props.data.songs.map(({id,title}, index) => {
              return(
                <li className="collection-item" key={index}>
                  {title}
                  <i className="material-icons" onClick={()=>this.onSongDelete(id)}>delete</i>
                </li>
              )
            })
          }
        </ul>
        <Link to="/songs/new" className="btn-floating btn-large red right">
          <i className="material-icons">add</i>
        </Link>
      </div>
    )
  }
}

SongList.propTypes = {
  data: PropTypes.object,
}

SongList.defaultProps = {
  data:{}
}

export default graphql(deleteSong)(graphql(songsQuery)(SongList));