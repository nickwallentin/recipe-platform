import React from "react"
import styled from "styled-components"

import { Input, Textarea } from "../styled"

const RecipeInfo = ({ name, setName, description, setDescription }) => {
  const onNameChange = e => {
    setName(e.target.value)
  }
  const onDescriptionChange = e => {
    setDescription(e.target.value)
  }
  return (
    <RecipeInfoContainer>
      <Input
        className="invisible h3"
        value={name}
        autoFocus
        onChange={e => onNameChange(e)}
        placeholder="Enter recipe name"
        style={{ marginBottom: "5px" }}
      />
      <Textarea
        className="invisible p"
        placeholder="Enter recipe description"
        value={description}
        onChange={e => onDescriptionChange(e)}
      />
    </RecipeInfoContainer>
  )
}

const RecipeInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export default RecipeInfo
