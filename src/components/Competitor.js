import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { moveUp, moveDown } from '../actions'

const Card = styled.div`
  display: inline-block;
  width: 160px;
  height: 300px;
  box-shadow: 2px 2px 2px gray;
  margin: .5em;
  padding-left: 1em;
  :hover {
    box-shadow: 4px 4px 4px gray;
  }
`

const Competitor = (props) => {
  const { character, seed, moveUp, moveDown } = props;

  return (
    <Card>
      <h2>
        {`#${seed}`}
        <span onClick={e => moveUp(character.id)}>{"<"}</span>
        <span onClick={e => moveDown(character.id)}>{">"}</span>
      </h2>
      <h3>{character.name.split(' (')[0]}</h3>
      <img 
        src={`${character.thumbnail.path}/portrait_medium.${character.thumbnail.extension}`}
        alt={character.name}
      />
    </Card>
  )
}

export default connect(null, { moveUp, moveDown })(Competitor)
