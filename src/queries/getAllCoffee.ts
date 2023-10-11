import { gql } from '@apollo/client'

export const GET_ALL_COFFEES = gql`
  query {
    allCoffees {
      id
      title
      description
      tag {
        id
        tag
      }
      image {
        url
        width
        height
      }
      value
    }
  }
`
