import { withApollo as withApolloLib } from 'next-apollo'
import { getStaticApolloProps as getStaticApolloPropsLib } from 'lib/getStaticApolloProps'

import createApolloClient from './createApolloClient'

const client = createApolloClient()

export const withApollo = withApolloLib(client)
export const getStaticApolloProps = getStaticApolloPropsLib(client)
