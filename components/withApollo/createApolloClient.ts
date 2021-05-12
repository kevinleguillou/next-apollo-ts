import { ApolloClient, InMemoryCache } from '@apollo/client'

export default function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    uri: 'https://graphql-weather-api.herokuapp.com',
    cache: new InMemoryCache()
  })
}
