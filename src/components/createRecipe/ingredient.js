import React, { useState } from "react"
import styled from "styled-components"
import convert from "convert-units"

import IngredientMenu from "./ingredientMenu"
import MoreIcon from "../../assets/icons/more.svg"

import { Input } from "../styled"

const Ingredient = ({
  ingredient,
  index,
  ingredients,
  setIngredients,
  isAdding,
  setIsAdding,
}) => {
  const [input, setInput] = useState(ingredient.ingredient)
  const [amount, setAmount] = useState(ingredient.amount)
  const [amountType, setAmountType] = useState(ingredient.amountType)
  const [isEditing, setIsEditing] = useState(false)

  const reset = () => {
    setInput("")
    setAmount("")
    setAmountType("")
    setIsAdding(false)
    setIsEditing(false)
  }

  const onAdd = () => {
    let newArrary = ingredients
    let newIngredient = {
      ingredient: input,
      amount: amount,
      amountType: amountType,
    }
    newArrary.push(newIngredient)
    setIngredients([...newArrary])
  }

  const onUpdate = index => {
    let newArray = ingredients
    newArray[index] = {
      ingredient: input,
      amount: amount,
      amountType: amountType,
    }
    setIngredients([...newArray])
    reset()
  }

  const onAmountChange = e => {
    setAmount(e.target.value)
  }
  const onAmountTypeChange = e => {
    setAmountType(e.target.value)
  }
  const onInputChange = e => {
    setInput(e.target.value)
  }
  const onCancel = () => {
    reset()
  }
  const onEdit = () => {
    setIsEditing(true)
  }

  return (
    <IngredientContainer>
      {isAdding || isEditing ? (
        <div className="ingredient-wrapper">
          <div className="ingredient-input">
            <Input
              className="invisible p"
              type="number"
              value={amount}
              autoFocus
              placeholder="200"
              onChange={e => onAmountChange(e)}
            />
            <Input
              className="invisible p"
              type="text"
              placeholder="g"
              value={amountType}
              onChange={e => onAmountTypeChange(e)}
            />
            <Input
              className="invisible p"
              type="text"
              placeholder="Egg Plant"
              value={input}
              onChange={e => onInputChange(e)}
            ></Input>
            <div onClick={() => onEdit()} className="actions">
              <MoreIcon />
            </div>
          </div>
          <IngredientMenu
            onAdd={onAdd}
            onUpdate={onUpdate}
            isAdding={isAdding}
            onCancel={onCancel}
            isEditing={isEditing}
          />
        </div>
      ) : (
        <div className="ingredient-item">
          <div className="amount">{ingredient.amount}</div>
          <div className="amount-type">{ingredient.amountType}</div>
          <div className="ingredient">{ingredient.ingredient}</div>
          <div onClick={() => onEdit()} className="actions">
            <MoreIcon />
          </div>
        </div>
      )}
    </IngredientContainer>
  )
}

const IngredientContainer = styled.div`
  padding: 15px 20px;

  .ingredient-input {
    display: grid;
    grid-template-columns: 40px 30px 1fr 24px;
  }
  .ingredient-item {
    display: grid;
    grid-template-columns: 40px 30px 1fr 24px;
    .amount,
    .amount-type {
      color: var(--c-pri);
    }
    .actions {
      svg {
        path {
          fill: var(--c-icon-l);
        }
      }
    }
  }
`

export default Ingredient
