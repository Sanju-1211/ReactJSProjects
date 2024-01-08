import React from "react";
import EmojiCard from "./EmojiCard";
import emojipedia from "../emojipedia";

function createCard(emoj){
    return(
        <EmojiCard 
            id = {emoj.id}
            key = {emoj.id}
            emoji = {emoj.emoji}
            name ={emoj.name}
            meaning = {emoj.meaning}
            />
    )
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
      {emojipedia.map(createCard)}
      </dl>
    </div>
  );
}

export default App;
