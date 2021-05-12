import { withApollo as withApolloLib } from 'next-apollo'

import createApolloClient from './createApolloClient'

export const withApollo = withApolloLib(createApolloClient())
