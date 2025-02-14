import { useEffect, useState } from "react";
import "./App.css";
import boom from "./assets/sounds/boom.wav";
import clap from "./assets/sounds/clap.wav";
import hihat from "./assets/sounds/hihat.wav";
import kick from "./assets/sounds/kick.wav";
import openhat from "./assets/sounds/openhat.wav";
import ride from "./assets/sounds/ride.wav";
import snare from "./assets/sounds/snare.wav";
import tink from "./assets/sounds/tink.wav";
import tom from "./assets/sounds/tom.wav";

const soundMap = {
  65: boom,
  83: clap,
  68: hihat,
  70: kick,
  71: openhat,
  72: ride,
  74: snare,
  75: tink,
  76: tom,
} as any;

const nameMap = {
  65: "boom",
  83: "clap",
  68: "hihat",
  70: "kick",
  71: "openhat",
  72: "ride",
  74: "snare",
  75: "tink",
  76: "tom",
} as any;

function App() {
  const [active, setActive] = useState(null);
  const play = (e: any) => {
    setActive(e.keyCode);
    var t = new Audio(soundMap[e.keyCode]);
    if (!t) return;
    t.currentTime = 0;
    t.play();
    // console.log(t.ended);
    const id = setTimeout(() => {
      if (id) clearTimeout(id);
      setActive(null);
    }, 150);
  };
  useEffect(() => {
    document.addEventListener("keydown", play);
    return () => {
      document.removeEventListener("keydown", play);
    };
  }, []);

  return (
    <div className="container">
      {Object.entries(soundMap).map((entry) => {
        return (
          <div
            data-testid={entry[0]}
            key={entry[0]}
            onClick={() => play({ keyCode: entry[0] })}
            className={`key ${entry[0] == active ? "active" : ""}`}
          >
            <span className="char">{String.fromCharCode(entry[0] as any)}</span>
            <span>{nameMap[entry[0]].toLocaleUpperCase()}</span>
          </div>
        );
      })}
    </div>
  );
}

export default App;
