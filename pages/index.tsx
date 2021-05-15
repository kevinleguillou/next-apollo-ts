import { withApollo, getStaticApolloProps } from 'components/withApollo'
import Link from 'next/Link'
import { Weather } from 'components/Weather'

const PostsPage = () => (
  <>
    <Weather city="Tokyo" />
    <Link href="/second">second</Link>
  </>
)

export default withApollo({ ssr: false })(PostsPage)

export const getStaticProps = getStaticApolloProps(PostsPage, {
  revalidate: 10
})
