import React from 'react'
import { connect } from 'react-redux'
import { SelectChar, Name } from './CharSelector'

const Opponent = ({ role, match, characters }) => {
  const character = characters.find(character => {
    return character.id === match[role].id
  })

  return (
    <SelectChar winner={match.winner} role={role}>
    <h3 className="seed">
      {'#' + match[role].seed}
    </h3>
    {
    character ?
    <>
      <img 
        src={`${character.thumbnail.path}/standard_small.${character.thumbnail.extension}`} 
        alt={character.name}
        />
      <Name 
        loser={match.winner === role}>
        {character.name.split(' (')[0]}
      </Name>
    </> :
    <Name loser={match.winner === role}>
      bye
    </Name>
    }
  </SelectChar>
  )
}

export default connect(state => ({
  characters: state.characters
}), {})(Opponent)
