import { gql, useQuery } from '@apollo/client'

const QUERY = gql`
  query Weather($city: String!) {
    getCityByName(name: $city) {
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

export const Weather = ({ city }: { city: string }) => {
  const { data } = useQuery(QUERY, {
    variables: { city }
  })

  const result = data?.getCityByName
  if (!result) {
    return <div>Loading...</div>
  }
  return <pre>{JSON.stringify(data, null, 2)}</pre>
}
