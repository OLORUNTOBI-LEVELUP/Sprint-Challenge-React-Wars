    
import React from "react"
import "./StarWars.css"

const CharacterCard = ({ character }) => {
    return (
      <div >
        <h1>{character.name}</h1>
        <p>Birth Year: {character.birth_year}</p>
        <p>Gender: {character.gender}</p>
        <p>Height: {character.height}cm</p>
        <p>Weight: {character.mass}kg</p>
        <p>Eye Color: {character.eye_color}</p>
        <p>Hair Color: {character.hair_color}</p>
        <p>Skin Color: {character.skin_color}</p>
      </div>
    )
  }
  
  export default CharacterCard