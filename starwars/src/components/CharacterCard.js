    
import React from "react"
import "./StarWars.css"

const CharacterCard = ({ character }) => {
    return (
      <div >
        <h1>{character.name}</h1>
        
      </div>
    )
  }
  
  export default CharacterCard