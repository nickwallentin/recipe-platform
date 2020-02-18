import React, { useState } from "react"

import UploadImage from "../../components/createRecipe/uploadImage"

const CreateRecipe = () => {
  const [image, setImage] = useState(null)

  return (
    <div>
      <UploadImage setImage={setImage} />
    </div>
  )
}

export default CreateRecipe
