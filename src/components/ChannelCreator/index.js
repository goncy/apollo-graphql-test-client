import React from 'react'

import {channelListQuery} from '../ChannelList/enhacer'

import enhacer from './enhacer'

const ChannelCreator = ({addChannel}) => {
  const handleKeyUp = (evt) => {
    if (evt.keyCode === 13) {
      evt.persist()
      addChannel({
        variables: {
          name: evt.target.value
        },
        refetchQueries: [{
          query: channelListQuery
        }]
      })
      .then(() => {
        evt.target.value = ''
      })
    }
  }

  return (
    <input
      type="text"
      placeholder="Channel name"
      onKeyUp={handleKeyUp}
    />
  )
}

export default enhacer(ChannelCreator)
