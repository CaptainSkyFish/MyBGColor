import { useState } from "react";
import { RecoilRoot, useRecoilValue } from "recoil";
import { buttonColorAtoms } from "./atoms";
import { beautifulColor } from "./color";
import "./App.css";

function App() {
  const [bgColor, setBgColor] = useState("black");

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        backgroundColor: bgColor,
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        opacity: "0.89",
      }}
    >
      <ColoredButtons setBgColor={setBgColor}></ColoredButtons>
      <ColoredButtons setBgColor={setBgColor}></ColoredButtons>
      <ColoredButtons setBgColor={setBgColor}></ColoredButtons>
      <ColoredButtons setBgColor={setBgColor}></ColoredButtons>
      <ColoredButtons setBgColor={setBgColor}></ColoredButtons>
      <ColoredButtons setBgColor={setBgColor}></ColoredButtons>
      <ColoredButtons setBgColor={setBgColor}></ColoredButtons>
    </div>
  );
}

function ColoredButtons({ setBgColor }) {
  const buttonColor = beautifulColor();

  return (
    <div>
      <button
        style={{
          backgroundColor: buttonColor,
        }}
        onClick={() => setBgColor(buttonColor)}
      >
        Apply
      </button>
    </div>
  );
}

export default App;
