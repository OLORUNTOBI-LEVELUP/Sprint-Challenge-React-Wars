import React from "react"
import "./StarWars.css"
import CharacterCard from "./CharacterCard"

const CharacterList = ({ characters }) => {
    return (
      <div >
        {characters.map(character => (
          <CharacterCard character={character} key={character.name}/>
        ))}
      </div>
    )
  }
  export default CharacterList