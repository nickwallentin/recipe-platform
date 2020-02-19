import React from "react"

import { Card, Button } from "../styled"
import AddIcon from "../../assets/icons/add-outline.svg"

const Steps = ({ steps, setSteps }) => {
  return (
    <Card flexHeader fSpace="5px">
      <div className="card-header">
        <h4>Steps</h4>
        <small>
          {steps.length}{" "}
          {steps.length > 1 || steps.length === 0 ? "steps" : "step"}
        </small>
      </div>
      <div className="card-content"></div>
      <div className="card-footer">
        <Button full invisible>
          <AddIcon />
          Add step
        </Button>
      </div>
    </Card>
  )
}

export default Steps
