import React, { useState } from "react"

import Layout from "../../components/layout"
import { Sec, Wrap, Grid } from "../../components/styled"

import UploadImage from "../../components/createRecipe/uploadImage"
import RecipeInfo from "../../components/createRecipe/recipeInfo"
import MetaInfo from "../../components/createRecipe/metaInfo"
import Ingredients from "../../components/createRecipe/ingredients"
import Steps from "../../components/createRecipe/steps"

const CreateRecipe = () => {
  const [image, setImage] = useState(null)
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [servings, setServings] = useState(2)
  const [cookingTime, setCookingTime] = useState(15)
  const [ingredients, setIngredients] = useState([])
  const [steps, setSteps] = useState([])

  return (
    <Layout page="Create recipe">
      <Sec>
        <Wrap style={{ maxWidth: "500px" }}>
          <Grid cols="200px 1fr" mCols="80px 1fr">
            <UploadImage image={image} setImage={setImage} />
            <RecipeInfo
              name={name}
              setName={setName}
              descripion={description}
              setDescription={setDescription}
            />
          </Grid>
        </Wrap>
      </Sec>
      <Sec>
        <Wrap>
          <MetaInfo
            servings={servings}
            setServings={setServings}
            cookingTime={cookingTime}
            setCookingTime={setCookingTime}
          />
        </Wrap>
      </Sec>
      <Sec>
        <Wrap full>
          <Grid cols="1fr 1fr">
            <Ingredients
              ingredients={ingredients}
              setIngredients={setIngredients}
            />
          </Grid>
        </Wrap>
      </Sec>
      <Sec>
        <Wrap full>
          <Grid cols="1fr 1fr">
            <Steps steps={steps} setSteps={setSteps} />
          </Grid>
        </Wrap>
      </Sec>
    </Layout>
  )
}

export default CreateRecipe
