import React, { Fragment, useState, useCallback } from "react"
import Cropper from "react-easy-crop"

import { getOrientation } from "get-orientation/browser"
import getCroppedImg from "./cropImage"
import { getRotatedImage } from "./rotateImage"
import styled from "styled-components"

const UploadImage = ({ setImage }) => {
  const [croppedImage, setCroppedImage] = useState(null)
  const [imageSrc, setImageSrc] = useState(imageSrc)
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)
  const [isCropping, setIsCropping] = useState(false)
  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels)
  }, [])

  const ORIENTATION_TO_ANGLE = {
    "3": 180,
    "6": 90,
    "8": -90,
  }

  const chooseImage = event => {
    event.preventDefault()
    const upload = document.getElementById("image-upload")
    upload.click()
  }

  function readFile(file) {
    return new Promise(resolve => {
      const reader = new FileReader()
      reader.addEventListener("load", () => resolve(reader.result), false)
      reader.readAsDataURL(file)
    })
  }

  const onFileChange = async e => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0]
      let imageDataUrl = await readFile(file)

      // apply rotation if needed
      const orientation = await getOrientation(file)
      const rotation = ORIENTATION_TO_ANGLE[orientation]
      if (rotation) {
        imageDataUrl = await getRotatedImage(imageDataUrl, rotation)
      }

      setImageSrc(imageDataUrl)
      setCrop({ x: 0, y: 0 })
      setZoom(1)
    }
  }

  const showCroppedImage = async () => {
    try {
      setIsCropping(true)
      const croppedImage = await getCroppedImg(imageSrc, croppedAreaPixels)
      console.log("done", { croppedImage })
      setIsCropping(false)
      setCroppedImage(croppedImage)
      setImageSrc(null)
    } catch (e) {
      console.error(e)
      setIsCropping(false)
    }
  }

  return (
    <Fragment>
      <UploadContainer>
        {croppedImage ? (
          <ImagePreview
            onClick={e => chooseImage(e)}
            src={croppedImage}
            alt="Recipe image preview"
          />
        ) : (
          <UploadImageContainer onClick={e => chooseImage(e)} />
        )}
        <input
          id="image-upload"
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={e => onFileChange(e)}
        />
      </UploadContainer>
      {imageSrc && (
        <ImageManipulator>
          <div className="preview">
            <Cropper
              image={imageSrc}
              crop={crop}
              zoom={zoom}
              aspect={1 / 1}
              onCropChange={setCrop}
              onCropComplete={onCropComplete}
              onZoomChange={setZoom}
            />
          </div>
          <div onClick={showCroppedImage} className="controls">
            crop
          </div>
        </ImageManipulator>
      )}
    </Fragment>
  )
}

export default UploadImage

const UploadContainer = styled.div``

const UploadImageContainer = styled.div`
  width: 80px;
  height: 80px;
  background: var(--c-bg);
`

const ImageManipulator = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0px;
  left: 0px;
  background: var(--c-bg-d);

  .preview {
    height: 60vh;
    z-index: 98;
    position: relative;
  }
  .controls {
    background: var(--c-bg);
    height: 40vh;
    color: white;
    z-index: 99;
    position: relative;
  }
`

const ImagePreview = styled.img``
