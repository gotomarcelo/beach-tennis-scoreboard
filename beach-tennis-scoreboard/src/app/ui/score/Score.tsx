import React, { useState } from "react";
import { ScoreStyle } from "./Score.style";

export default function Score() {
  const greenPoints = [0, 15, 30, 40];
  const orangePoints = [0, 15, 30, 40];
  const [currentGreen, setCurrentGreen] = useState(0);
  const [currentOrange, setCurrentOrange] = useState(0);
  const [greenParcial, setGreenParcial] = useState(0);
  const [orangeParcial, setOrangeParcial] = useState(0);

  const handleGreenClick = () => {
    if (currentGreen < greenPoints.length - 1) {
      setCurrentGreen(currentGreen + 1);
    } else {
      setGreenParcial(greenParcial + 1);
      setCurrentGreen(0);
      setCurrentOrange(0);
    }
  };

  const handleOrangeClick = () => {
    if (currentOrange < orangePoints.length - 1) {
      setCurrentOrange(currentOrange + 1);
    } else {
      setOrangeParcial(orangeParcial + 1);
      setCurrentOrange(0);
      setCurrentGreen(0);
    }
  };

  return (
    <ScoreStyle>
      <div className="orange" onClick={handleGreenClick}>
        <div className="numbers">
          <p>{greenPoints[currentGreen]}</p>
        </div>
      </div>
      <div className="green" onClick={handleOrangeClick}>
        <div className="numbers">
          <p>{greenPoints[currentOrange]}</p>
        </div>
      </div>
      <div className="parcial">
        <p className="greenset">{greenParcial}</p>
        <div className="xset">X</div>
        <div className="orangeset">{orangeParcial}</div>
      </div>
    </ScoreStyle>
  );
}
