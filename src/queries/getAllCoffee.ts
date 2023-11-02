export const GET_ALL_COFFEES = `
  {
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
      price
    }
  }
`
