import React from "react";
import memeData from "../memeData";

export default function Meme() {
  const [memeImage, setMemeImage] = React.useState("");

  function getMemeImage() {
    const randomMeme = Math.floor(Math.random() * 100);
    const url = memeData.data.memes[randomMeme].url;
    console.log(url);
    setMemeImage((prevImage) => (prevImage = url));
  }

  return (
    <main>
      <div className="meme">
        <input className="input1" type="text" placeholder="Top Text" />
        <input className="input2" type="text" placeholder="Bottom Text" />
        <button className="button-input" onClick={getMemeImage}>
          Get a new meme image
        </button>
      </div>
      <img className="meme-image" src={memeImage} />
    </main>
  );
}
