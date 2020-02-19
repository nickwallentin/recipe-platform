import React, { useState } from "react"
import styled from "styled-components"

import Ingredient from "./ingredient"

import { Card, Button } from "../styled"
import AddIcon from "../../assets/icons/add-outline.svg"

const Ingredients = ({ ingredients, setIngredients }) => {
  const [isAdding, setIsAdding] = useState(false)
  const [isEditing, setIsEditing] = useState(false)

  const [menuOpen, setMenuOpen] = useState({ open: false, index: null })

  const onStartAddIngredient = () => {
    setMenuOpen({ open: false, index: null })
    setIsAdding(!isAdding)
    setIsEditing(false)
  }

  return (
    <Card cSpace="0px" fSpace="5px" flexHeader>
      <div className="card-header">
        <h4>Ingredients</h4>
        <small>
          {ingredients.length}{" "}
          {ingredients.length > 1 || ingredients.length === 0
            ? "ingredients"
            : "ingredient"}
        </small>
      </div>
      <div className="card-content">
        <IngredientList>
          {ingredients.map((ingredient, index) => (
            <Ingredient
              ingredient={ingredient}
              index={index}
              ingredients={ingredients}
              setIngredients={setIngredients}
              setIsAdding={setIsAdding}
              isEditing={isEditing}
              setIsEditing={setIsEditing}
              menuOpen={menuOpen}
              setMenuOpen={setMenuOpen}
              key={JSON.stringify(ingredient)}
            />
          ))}
          {isAdding && (
            <Ingredient
              ingredient={{ ingredient: "", amount: "", amountType: "" }}
              index={-1}
              ingredients={ingredients}
              setIngredients={setIngredients}
              isAdding={isAdding}
              isEditing={isEditing}
              setIsEditing={setIsEditing}
              menuOpen={menuOpen}
              setMenuOpen={setMenuOpen}
              setIsAdding={setIsAdding}
            />
          )}
        </IngredientList>
      </div>
      <div className="card-footer">
        <Button onClick={() => onStartAddIngredient()} full invisible>
          <AddIcon /> Add ingredient
        </Button>
      </div>
    </Card>
  )
}

const IngredientList = styled.div``

export default Ingredients
