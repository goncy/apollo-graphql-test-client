import React from 'react'

import enhacer from './enhacer'

const ChannelList = ({data: {loading, channels, error}}) => {
  if (error) return <p>{error.message}</p>
  if (loading) return <p>Loading...</p>
  return (
    <ul>
      {channels.map(ch =>
        <li key={ch.id}>
          {ch.name}
        </li>
      )}
    </ul>
  )
}

export default enhacer(ChannelList)
