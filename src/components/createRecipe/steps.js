import React, { useState } from "react"

import { Card, Button } from "../styled"
import AddIcon from "../../assets/icons/add-outline.svg"

import Step from "./step"

const Steps = ({ steps, setSteps }) => {
  const [isAdding, setIsAdding] = useState(false)
  const [isEditing, setIsEditing] = useState(false)

  const onStartAdding = () => {
    setIsAdding(!isAdding)
  }

  return (
    <Card flexHeader cSpace="0px" fSpace="5px">
      <div className="card-header">
        <h4>Steps</h4>
        <small>
          {steps.length}{" "}
          {steps.length > 1 || steps.length === 0 ? "steps" : "step"}
        </small>
      </div>
      <div className="card-content">
        {steps.map((step, index) => (
          <Step
            isAdding={isAdding}
            setIsAdding={setIsAdding}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            step={step}
            steps={steps}
            setSteps={setSteps}
            index={index}
          />
        ))}
        {isAdding && (
          <Step
            isAdding={isAdding}
            setIsAdding={setIsAdding}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            steps={steps}
            setSteps={setSteps}
            index={-1}
          />
        )}
      </div>
      <div className="card-footer">
        <Button onClick={() => onStartAdding()} full invisible>
          <AddIcon />
          Add step
        </Button>
      </div>
    </Card>
  )
}

export default Steps
