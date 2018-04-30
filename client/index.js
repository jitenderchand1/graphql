import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import App from './component/App';
import SongList from './component/SongList';
import SongCreate from './component/SongCreate';
import SongDetail from './component/SongDetail';
import { hashHistory , Route, Router, IndexRoute } from 'react-router';
import style from './style/style.css'
const client =  new ApolloClient({});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route component={App} path="/">
          <IndexRoute component={SongList} />
          <Route path="songs/new" component={SongCreate} />
          <Route path="songs/:id" component={SongDetail} />
        </Route>
      </Router>
    </ApolloProvider>
  )
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
