import React from "react";

export default function Form() {
  return (
    <main>
      <form>
        <input className="input1" type="text" placeholder="Top Text" />
        <input className="input2" type="text" placeholder="Bottom Text" />
        <button className="button-input">Get a new meme image</button>
      </form>
    </main>
  );
}
