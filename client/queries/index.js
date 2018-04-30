import gql from 'graphql-tag';

export const songsQuery = gql`{
     songs{
      title,
      id,
      lyrics{
        content
      }
     }
}`


export const deleteSong = gql`
 mutation DeleteSong($id:ID){
    deleteSong(id:$id){
      id
    }
 }
`