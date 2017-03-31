import {gql, graphql} from 'react-apollo'

export const channelCreatorMutation = gql`
  mutation addChannelMutation($name: String!) {
    addChannel(name: $name) {
      id
      name
    }
  }
`

export default graphql(channelCreatorMutation, {name: 'addChannel'})
