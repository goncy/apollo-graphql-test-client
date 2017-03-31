import {gql, graphql} from 'react-apollo'

export const channelListQuery = gql`
  query channelsListQuery {
    channels {
      id
      name
    }
  }
`

export default graphql(channelListQuery)
