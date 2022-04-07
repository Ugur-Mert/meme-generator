import React from "react";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "",
  });

  function changeHandle(event) {
    const { name, value } = event.target;

    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));

    console.log(meme);
  }

  const [allMemeImages, setAllMemeImages] = React.useState([]);

  React.useEffect(function () {
    console.log("Effect ran");
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((dataImg) => setAllMemeImages(dataImg.data.memes));
  }, []);

  function getMemeImage() {
    const randomMeme = Math.floor(Math.random() * allMemeImages.length);
    const url = allMemeImages[randomMeme].url;

    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  return (
    <main>
      <div className="form">
        <input
          className="input1"
          type="text"
          placeholder="Top Text"
          onChange={changeHandle}
          name="topText"
          value={meme.topText}
        />
        <input
          className="input2"
          type="text"
          placeholder="Bottom Text"
          onChange={changeHandle}
          name="bottomText"
          value={meme.bottomText}
        />
        <button className="button-input" onClick={getMemeImage}>
          Get a new meme image
        </button>
      </div>
      <div className="meme">
        <img className="meme-image" src={meme.randomImage} />
        <h2 className="meme-text top">{meme.topText}</h2>
        <h2 className="meme-text bottom"> {meme.bottomText} </h2>
      </div>
    </main>
  );
}
