import React from 'react'

import { SelectChar, Name } from './CharSelector'
import { Matches } from './Round'

const Winner = ({ winner }) => {
  return (
    <Matches style={{width: '18em'}}>
      <SelectChar 
        style={{border: '3px solid gold', height: '80px'}}>
        <img 
          src={`${winner.thumbnail.path}/landscape_small.${winner.thumbnail.extension}`} 
          alt={winner.name}
        />
        <Name>{winner.name}</Name>
      </SelectChar>
    </Matches>
  )
}

export default Winner
