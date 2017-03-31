import {gql, graphql} from 'react-apollo'

const channelListQuery = gql`
  query ChannelsListQuery {
    channels {
      id
      name
    }
  }
`

export default graphql(channelListQuery)
