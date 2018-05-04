import gql from 'graphql-tag';

export const songsQuery = gql`{
     songs{
      title,
      id,
      lyrics{
        content
      }
     }
}`;


export const deleteSong = gql`
 mutation DeleteSong($id:ID){
    deleteSong(id:$id){
      id
    }
 }
`;


export const songQuery = gql`
  query SongQuery($id:ID!){
      song(id:$id){
        id,
        title,
        lyrics{
          id,
          content,
          likes
        }
      }
  }
`;
