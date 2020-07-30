import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/link-context';
import GlobalStyles from './ui/GlobalStyles';
import { apiLink } from './utils/constants';

const cache = new InMemoryCache();

const link = createHttpLink({
  uri: apiLink
})

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');

  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}`: "",
    }
  }
});

const apolloClient = new ApolloClient({
  cache,
  link: authLink.concat(link)
})

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <React.StrictMode>
      <GlobalStyles />
      <App />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
