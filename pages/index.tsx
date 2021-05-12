import { gql, useQuery } from '@apollo/client'
import { withApollo } from 'components/withApollo'
import getStaticApolloProps from 'lib/getStaticApolloProps'

const QUERY = gql`
  query Weather {
    getCityByName(name: "Tokyo") {
      name
      weather {
        temperature {
          actual
          min
          max
        }
      }
    }
  }
`

function PostsPage() {
  const { data } = useQuery(QUERY)

  const result = data?.getCityByName
  if (!result) {
    return <div>Loading...</div>
  }
  return <pre>{JSON.stringify(data, null, 2)}</pre>
}

export default withApollo({ ssr: false })(PostsPage)

export const getStaticProps = getStaticApolloProps(PostsPage, {
  revalidate: 10
})
