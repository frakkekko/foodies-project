"use client";

import { ChangeEvent, FunctionComponent, useRef, useState } from "react";
import Image from "next/image";

import classes from "./image-picker.module.css";

type Props = { label: string; name: string };

const ImagePicker: FunctionComponent<Props> = ({ label, name }) => {
  const [pickedImage, setPickedImage] = useState<string | null>();
  const imageInput = useRef<HTMLInputElement>(null);

  function handlePickClick() {
    imageInput.current?.click();
  }

  function handleImageChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target?.files![0];

    if (!file) {
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      const base64Image = fileReader.result as string;
      setPickedImage(base64Image);
    };

    fileReader.readAsDataURL(file);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image picked yet.</p>}
          {pickedImage && (
            <Image
              src={pickedImage}
              alt="The image selected by the user."
              fill
            />
          )}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInput}
          onChange={handleImageChange}
        />
        <button
          className={classes.button}
          type="button"
          onClick={handlePickClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
