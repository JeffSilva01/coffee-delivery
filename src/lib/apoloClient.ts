import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://graphql.datocms.com/',
  cache: new InMemoryCache(),
  headers: {
    Authorization: 'Bearer 41e380bef14bb9e3db47d18d0b494c',
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})
