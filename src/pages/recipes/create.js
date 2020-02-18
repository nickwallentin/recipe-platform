import React, { useState } from "react"

import Layout from "../../components/layout"

import UploadImage from "../../components/createRecipe/uploadImage"

const CreateRecipe = () => {
  const [image, setImage] = useState(null)

  return (
    <Layout>
      <UploadImage image={image} setImage={setImage} />
    </Layout>
  )
}

export default CreateRecipe
