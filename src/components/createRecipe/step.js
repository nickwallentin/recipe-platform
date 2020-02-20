import React, { useState, Fragment } from "react"
import styled from "styled-components"

import MoreIcon from "../../assets/icons/more.svg"
import Ingredients from "./ingredients"
import IngredientMenu from "./ingredientMenu"

import { Textarea } from "../styled"

const Step = ({
  step,
  steps,
  setSteps,
  index,
  isAdding,
  isEditing,
  setIsAdding,
  setIsEditing,
  menuOpen,
  setMenuOpen,
}) => {
  const [input, setInput] = useState("")

  const reset = () => {
    setIsAdding(false)
    setIsEditing(false)
    setInput("")
    setMenuOpen({ open: false, index: null })
  }

  const onInput = e => {
    setInput(e.target.value)
  }
  const onAdd = index => {
    if (isEditing) {
      let array = steps
      array[index] = input
      setSteps([...array])
    } else {
      let array = steps
      array.push(input)
      setSteps([...array])
    }

    reset()
  }
  const onCancel = () => {
    reset()
  }
  const onEdit = () => {
    reset()
    setInput(step)
    setIsEditing(true)
    setIsAdding(false)
  }
  const onRemove = index => {
    let array = steps
    array.splice(index, 1)
    setSteps([...array])
    reset()
  }

  return (
    <StepContainer>
      {isAdding || (isEditing && menuOpen.index === index) ? (
        <Fragment>
          <div className="step-header">
            Step {steps.length + 1}{" "}
            {!isAdding && (
              <MoreIcon
                onClick={() => {
                  setMenuOpen({
                    open: true,
                    index: index,
                  })
                  setIsAdding(false)
                }}
              />
            )}
          </div>
          <div className="step-content">
            <Textarea
              onChange={e => onInput(e)}
              rows="3"
              autoFocus
              className="invisible"
              value={input}
            ></Textarea>
            {menuOpen.index === index && (
              <IngredientMenu
                index={index}
                onAdd={onAdd}
                onEdit={onEdit}
                isAdding={isAdding}
                isEditing={isEditing}
                onCancel={onCancel}
                onRemove={onRemove}
              />
            )}
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <div className="step-header">
            Step {index + 1}{" "}
            <MoreIcon
              onClick={() => {
                setMenuOpen({
                  open: true,
                  index: index,
                })
                setIsAdding(false)
              }}
            />
          </div>
          <div className="step-content">
            {step}
            {menuOpen.open && menuOpen.index === index ? (
              <IngredientMenu
                index={index}
                onAdd={onAdd}
                onEdit={onEdit}
                isAdding={isAdding}
                isEditing={isEditing}
                onCancel={onCancel}
                onRemove={onRemove}
              />
            ) : null}
          </div>
        </Fragment>
      )}
    </StepContainer>
  )
}

const StepContainer = styled.div`
  margin: 20px 20px;
  padding: 15px;
  background: var(--c-bg-s);
  border-radius: 5px;
  .step-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--c-pri);
    font-weight: 500;
    margin-bottom: 5px;
    svg {
      path {
        fill: var(--c-icon-l);
      }
    }
  }
`

export default Step
