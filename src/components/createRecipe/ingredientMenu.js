import React, { Fragment } from "react"
import styled from "styled-components"

import { Button } from "../styled"

import CheckIcon from "../../assets/icons/check.svg"
import ClearIcon from "../../assets/icons/clear.svg"
import EditIcon from "../../assets/icons/edit.svg"
import DeleteIcon from "../../assets/icons/delete.svg"

const IngredientMenu = ({ isAdding, onCancel, isEditing, onAdd }) => {
  return (
    <IngredientMenuContainer>
      {isAdding ? (
        <Fragment>
          <Button onClick={() => onCancel()} full invisible>
            <ClearIcon /> Cancel
          </Button>
          <Button onClick={() => onAdd()} full invisible>
            <CheckIcon /> Add
          </Button>
        </Fragment>
      ) : isEditing ? (
        <Fragment>
          <Button full invisible>
            <DeleteIcon /> Remove
          </Button>
          <Button full invisible>
            <EditIcon /> Edit
          </Button>
        </Fragment>
      ) : null}
    </IngredientMenuContainer>
  )
}

const IngredientMenuContainer = styled.div`
  color: var(--c-txt-inv);
  background: var(--c-bg-d);
  padding: 0px;
  border-radius: 5px;
  margin-top: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export default IngredientMenu
