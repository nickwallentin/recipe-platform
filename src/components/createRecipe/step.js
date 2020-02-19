import React, { Fragment } from "react"
import styled from "styled-components"

import MoreIcon from "../../assets/icons/more.svg"
import Ingredients from "./ingredients"
import IngredientMenu from "./ingredientMenu"

import { Textarea } from "../styled"

const Step = ({ step, steps, setSteps, index, isAdding }) => {
  return (
    <StepContainer>
      {!isAdding ? (
        <div className="step-header">
          Step {index + 1} <MoreIcon />
        </div>
      ) : (
        <Fragment>
          <div className="step-header">
            Step {Ingredients.length} <MoreIcon />
          </div>
          <div className="step-content">
            <Textarea rows="3" autoFocus className="invisible"></Textarea>
            <IngredientMenu />
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
