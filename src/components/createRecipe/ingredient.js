import React, { Fragment, useState } from "react"
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
  isEditing,
  setIsEditing,
  menuOpen,
  setMenuOpen,
}) => {
  const [input, setInput] = useState(ingredient.ingredient)
  const [amount, setAmount] = useState(ingredient.amount)
  const [amountType, setAmountType] = useState(ingredient.amountType)

  const reset = () => {
    setInput("")
    setAmount("")
    setAmountType("")
    setIsAdding(false)
    setIsEditing(false)
    setMenuOpen({ open: false, index: null })
  }

  const onAdd = index => {
    if (input) {
      if (isEditing) {
        let newArray = ingredients
        newArray[index] = {
          ingredient: input,
          amount: amount,
          amountType: amountType,
        }
        setIngredients([...newArray])
      } else {
        let newArray = ingredients
        let newIngredient = {
          ingredient: input,
          amount: amount,
          amountType: amountType,
        }
        newArray.push(newIngredient)
        setIngredients([...newArray])
      }

      reset()
    }
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
    setInput(ingredient.ingredient)
    setAmount(ingredient.amount)
    setAmountType(ingredient.amountType)
    setIsEditing(true)
    setIsAdding(false)
  }

  const onRemove = index => {
    let newArray = ingredients
    newArray.splice(index, 1)
    setIngredients([...newArray])
    reset()
  }

  return (
    <IngredientContainer>
      {isAdding || (isEditing && menuOpen.index === index) ? (
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
            {!isAdding && (
              <div onClick={() => onEdit()} className="actions">
                <MoreIcon />
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="ingredient-item">
          <div className="amount">
            {ingredient.amount}
            <div className="amount-type">{ingredient.amountType}</div>
          </div>

          <div className="ingredient">{ingredient.ingredient}</div>

          <div
            onClick={() => {
              setMenuOpen({ open: !menuOpen.open, index: index })
              setIsAdding(false)
            }}
            className="actions"
          >
            <MoreIcon />
          </div>
        </div>
      )}
      {menuOpen.open && menuOpen.index === index ? (
        <IngredientMenu
          onAdd={onAdd}
          isAdding={isAdding}
          onCancel={onCancel}
          isEditing={isEditing}
          onEdit={onEdit}
          index={index}
          onRemove={onRemove}
        />
      ) : isAdding && menuOpen.index === null ? (
        <IngredientMenu
          onAdd={onAdd}
          isAdding={isAdding}
          onCancel={onCancel}
          isEditing={isEditing}
        />
      ) : null}
    </IngredientContainer>
  )
}

const IngredientContainer = styled.div`
  padding: 10px 20px;
  &:first-of-type {
    padding-top: 20px;
  }
  &:last-of-type {
    padding-bottom: 20px;
  }

  .ingredient-input {
    display: grid;
    grid-template-columns: 35px 30px 1fr 24px;
  }
  .ingredient-item {
    display: grid;
    grid-template-columns: 65px 1fr 24px;
    & > div {
      display: flex;
      align-items: center;
    }
    .amount,
    .amount-type {
      color: var(--c-pri);
    }
    .amount-type {
      margin-left: 5px;
    }
  }
  .actions {
    svg {
      path {
        fill: var(--c-icon-l);
      }
    }
  }
`

export default Ingredient
