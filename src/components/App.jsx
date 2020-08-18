import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

const year = new Date().getFullYear();

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map((emojiTerm) => {
          return (
            <Entry
              key={emojiTerm.id}
              name={emojiTerm.name}
              emoji={emojiTerm.emoji}
              meaning={emojiTerm.meaning}
            />
          );
        })}
      </dl>

      <footer className="footer"> Nora Attobra {year} </footer>
    </div>
  );
}

export default App;
