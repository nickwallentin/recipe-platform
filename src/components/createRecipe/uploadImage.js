import React, { Fragment, useState, useCallback } from "react"
import Cropper from "react-easy-crop"
import Slider from "@material-ui/core/slider"
import axios from "axios"
import styled from "styled-components"

import UploadIcon from "../../assets/icons/upload-image.svg"

import { Button } from "../styled"

const UploadImage = ({ image, setImage }) => {
  const [imageSrc, setImageSrc] = useState()
  const [file, setFile] = useState(null)
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels)

    console.log(croppedAreaPixels)
  }, [])

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
      setFile(e.target.files[0])
      const file = e.target.files[0]
      const imageDataUrl = await readFile(file)
      console.log(imageDataUrl)

      setImageSrc(imageDataUrl)
      setCrop({ x: 0, y: 0 })
      setZoom(1)
    }
  }

  const showCroppedImage = e => {
    setIsLoading(true)
    const fd = new FormData()
    fd.append("upload_preset", "recipe")
    fd.append("file", file)
    fd.append(
      "custom_coordinates",
      croppedAreaPixels.x +
        "," +
        croppedAreaPixels.y +
        "," +
        croppedAreaPixels.width +
        "," +
        croppedAreaPixels.height
    )

    axios
      .post("https://api.cloudinary.com/v1_1/df6zdagxi/image/upload", fd)
      .then(res => {
        setImage(res.data.secure_url)
        console.log(res)
      })
      .then(() => {
        setImageSrc(null)
        setFile(null)
        setIsLoading(false)
      })
      .catch(err => console.log("error", err))
  }

  return (
    <Fragment>
      <UploadContainer>
        {image ? (
          <ImagePreview
            onClick={e => chooseImage(e)}
            src={image}
            alt="Recipe image preview"
          />
        ) : (
          <UploadImageContainer onClick={e => chooseImage(e)}>
            <UploadIcon />
          </UploadImageContainer>
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
          <div className="controls">
            <Slider
              className="zoom"
              min={10}
              max={100}
              onChange={(e, v) => setZoom(v / 10)}
            />
            <Button full invisible onClick={showCroppedImage}>
              Crop
            </Button>
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
  border-radius: 5px;
  border: 2px solid var(--c-icon-l);
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    path {
      fill: var(--c-icon-l);
    }
  }

  @media screen and (min-width: 800px) {
    width: 200px;
    height: 200px;
  }
`

const ImageManipulator = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0px;
  left: 0px;
  background: var(--c-bg-d);
  z-index: 97;

  .preview {
    height: 60vh;
    z-index: 98;
    position: relative;
  }
  .controls {
    background: var(--c-bg-d);
    height: 40vh;
    color: white;
    z-index: 99;
    position: relative;
    padding: 20px;
  }
`

const ImagePreview = styled.img`
  border-radius: 5px;
`
