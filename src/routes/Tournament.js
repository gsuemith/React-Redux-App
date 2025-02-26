import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import Round from '../components/Round'
import Winner from '../components/Winner'
import { startTournament } from '../actions'

const Tournament = ({ rounds, startTournament, tournament, winner }) => {
  console.log(rounds)
  return (
    <div>
      <p onClick={e => startTournament(tournament)}
        style={{padding: '0 2em'}}
      >
        This tournament is simulated with a simple random number generator to determine the winner of each matchup. The probabilities are based on the ranking you've provided where the top seed is a 13-1 favorite against the lowest seed and adjacent seeds have near even probability.  
      </p>
      <Rounds>
      {
        rounds.map((round, index) => (
          <Round 
            key={index} 
            matches={round.matches}
            round={round}
          />
        ))
      }
      {
        winner && <Winner winner={winner}/>
      }
      </Rounds>
    </div>
  )
}

const Rounds = styled.div`
  display: flex;
  justify-content: space-around;
`

const mapStateToProps = state => ({
  rounds: state.rounds,
  tournament: state.tournament,
  winner: state.tournamentWinner
})

export default connect(mapStateToProps, { startTournament })(Tournament)
