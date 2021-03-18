import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { runMatch } from '../actions'

import Opponent from './Opponent'

const Match = ({ match, runMatch }) => {
  const fight = e => {
    e.preventDefault();
    runMatch(match)
  }

  return (
    <MatchCard>
      <Opponent 
        role="defender"
        match={match}
      />
      <Opponent 
        role="challenger"
        match={match}
      />
      <button onClick={fight} disabled={match.winner}>
        Fight!
      </button>
    </MatchCard>
  )
}

const MatchCard = styled.div`
  margin-top: 3em;
  width: 18em;
`

export default connect(null, { runMatch })(Match)
