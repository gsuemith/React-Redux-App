import React from 'react'
import { useHistory } from 'react-router'
import { connect } from 'react-redux'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import styled from 'styled-components'

import Competitor, { Card } from './Competitor'
import { startTournament } from '../actions'

const Container = styled.div`
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  flex-grow: 2;
  width: 70vw;
  margin: 1em;
  height: 700px;
`


const Ranking = ({ tournament, characters, startTournament }) => {
  const { push } = useHistory();

  const start = e => {
    push('/tournament')
    startTournament(tournament);
  }

  const handleOnDragEnd = e => {
    if (!e.destination) return;
    console.log(e)
  }

  return (
    <Container>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="characters">
        {(provided) => (
          <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}
            style={{display:"flex", flexDirection:"row", listStyle:"None", flexWrap:"wrap"}}
          >
          {
            tournament.map((id, index) => (
              <Draggable key={id} draggableId={id+""} index={index}>
                {
                  (provided) => (
                    <li
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}>
                    <Competitor 
                      
                      seed={index + 1} 
                      character={characters
                      .find(character => character.id === id)}
                    />
                    </li>
                  )
                }
              </Draggable>
            ))
          }
          {provided.placeholder}
          </ul>)
        }
        </Droppable>
      </DragDropContext>
      <Card onClick={start}>
        <h2 >Start Tournament!</h2>
      </Card>
    </Container>
  )
}

const mapStateToProps = state => ({
  tournament: state.tournament,
  characters: state.characters
})

export default connect(
  mapStateToProps, { startTournament })(Ranking)
