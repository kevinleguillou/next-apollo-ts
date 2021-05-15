import { useState } from 'react'
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

  const [initialData] = useState({ data })

  const result = data?.getCityByName
  if (!result) {
    return <div>Loading...</div>
  }
  return <pre>{JSON.stringify(initialData, null, 2)}</pre>
}
