import {
  withApollo as withApolloLib,
  getStaticApolloProps as getStaticApolloPropsLib
} from 'next-apollo'

import createApolloClient from './createApolloClient'

const client = createApolloClient()

export const withApollo = withApolloLib(client)
export const getStaticApolloProps = getStaticApolloPropsLib(client)
