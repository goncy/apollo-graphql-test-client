import {ApolloClient, createNetworkInterface} from 'react-apollo'

const networkInterface = createNetworkInterface({uri: '//localhost:4000/graphql'})
export default new ApolloClient({networkInterface})
