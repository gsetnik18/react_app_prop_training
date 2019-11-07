import React, { useState } from 'react';

const favoriteSongs = [
  { band: "Rush", song: "Subdivisions" },
  { band: "Between The Buried And Me", song: "Silent Flight Parliament" },
  { band: "Haken", song: "Pareidolia" },
  { band: "Leprous", song: "The Flood" },
  { band: "Dream Theater", song: "Panic Attack" }
];

function App() {
  const [songChoice, setSong] = useState("Click for a song recommendation!");
  function SongPicker() {
    var m = favoriteSongs.length, t, i;

    // While there remain elements to shuffle…
    while (m) {
  
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
  
      // And swap it with the current element.
      t = favoriteSongs[m];
      favoriteSongs[m] = favoriteSongs[i];
      favoriteSongs[i] = t;
    }
  
    return favoriteSongs;
  }

  return (
    <div>
      <button onClick={() => {
        SongPicker();
        setSong(`You should listen to ${favoriteSongs[0].song} by ${favoriteSongs[0].band}!`)
      }}>
        Click Me!
          </button>
      <div>
        <p>{songChoice}</p>
      </div>
    </div>
  )
}
export default App;
