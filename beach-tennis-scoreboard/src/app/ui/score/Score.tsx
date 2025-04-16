import React, { useState, useEffect } from "react";
import { ScoreStyle } from "./Score.style";

export default function Score() {
  const [greenPoints, setGreenPoints] = useState([0, 15, 30, 40]);
  const [orangePoints, setOrangePoints] = useState([0, 15, 30, 40]);
  const [currentGreen, setCurrentGreen] = useState(0);
  const [currentOrange, setCurrentOrange] = useState(0);
  const [greenParcial, setGreenParcial] = useState(0);
  const [orangeParcial, setOrangeParcial] = useState(0);
  const [isOpenReset, setIsOpenReset] = useState(false);
  const [isOpenConfig, setIsOpenConfig] = useState(true);
  const [parcial, setParcial] = useState(6);
  const [isTie, setIsTie] = useState(1);
  const [tempParcial, setTempParcial] = useState(6);
  const [tempIsTie, setTempIsTie] = useState(1);

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

  const resetClick = () => {
    setCurrentGreen(0);
    setCurrentOrange(0);
    setGreenParcial(0);
    setOrangeParcial(0);
    setIsOpenReset(false);
    setGreenPoints([0, 15, 30, 40]);
    setOrangePoints([0, 15, 30, 40]);
  };

  const decreaseGreen = () => {
    if (currentGreen > 0) {
      setCurrentGreen(currentGreen - 1);
    }
  };

  const decreaseOrange = () => {
    if (currentOrange > 0) {
      setCurrentOrange(currentOrange - 1);
    }
  };

  const handlePartial = (event: any) => {
    setTempParcial(event.target.value);
  };

  const handleTie = (event: any) => {
    setTempIsTie(event.target.value);
  };

  const handleSubmit = () => {
    setParcial(tempParcial);
    setIsTie(tempIsTie);
    setIsOpenConfig(false);
    resetClick();
  };

  useEffect(() => {
    if (isTie && greenParcial == parcial - 1 && orangeParcial == parcial - 1) {
      setGreenPoints([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
      setOrangePoints([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
    }
  }, [isTie, greenParcial, orangeParcial, parcial]);

  useEffect(() => {
    const handleKeyDown = (event: { key: string; }) => {
      if (event.key === 'ArrowUp') {
        handleOrangeClick();
      } else if (event.key === 'ArrowLeft') {
        handleGreenClick();
      } else if (event.key === 'ArrowDown') {
        decreaseOrange(); 
      } else if (event.key === 'ArrowRight') {
        decreaseGreen();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentGreen, currentOrange, greenParcial, orangeParcial]); 

  return (
    <ScoreStyle>
      <div className="reset" onClick={() => setIsOpenReset(true)}>
        REINICIAR
      </div>
      <div className="config" onClick={() => setIsOpenConfig(true)}>
        <svg
          fill="#ffffff"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="20px"
          height="20px"
          viewBox="0 0 340.274 340.274"
          xmlSpace="preserve"
        >
          <g>
            <g>
              <g>
                <path
                  d="M293.629,127.806l-5.795-13.739c19.846-44.856,18.53-46.189,14.676-50.08l-25.353-24.77l-2.516-2.12h-2.937
				c-1.549,0-6.173,0-44.712,17.48l-14.184-5.719c-18.332-45.444-20.212-45.444-25.58-45.444h-35.765
				c-5.362,0-7.446-0.006-24.448,45.606l-14.123,5.734C86.848,43.757,71.574,38.19,67.452,38.19l-3.381,0.105L36.801,65.032
				c-4.138,3.891-5.582,5.263,15.402,49.425l-5.774,13.691C0,146.097,0,147.838,0,153.33v35.068c0,5.501,0,7.44,46.585,24.127
				l5.773,13.667c-19.843,44.832-18.51,46.178-14.655,50.032l25.353,24.8l2.522,2.168h2.951c1.525,0,6.092,0,44.685-17.516
				l14.159,5.758c18.335,45.438,20.218,45.427,25.598,45.427h35.771c5.47,0,7.41,0,24.463-45.589l14.195-5.74
				c26.014,11,41.253,16.585,45.349,16.585l3.404-0.096l27.479-26.901c3.909-3.945,5.278-5.309-15.589-49.288l5.734-13.702
				c46.496-17.967,46.496-19.853,46.496-25.221v-35.029C340.268,146.361,340.268,144.434,293.629,127.806z M170.128,228.474
				c-32.798,0-59.504-26.187-59.504-58.364c0-32.153,26.707-58.315,59.504-58.315c32.78,0,59.43,26.168,59.43,58.315
				C229.552,202.287,202.902,228.474,170.128,228.474z"
                />
              </g>
            </g>
          </g>
        </svg>
      </div>
      {isOpenConfig && (
        <>
          <div
            className="config__antimodal"
            onClick={() => setIsOpenConfig(false)}
          ></div>
          <div className="config__modal">
            <h2>Configurações da Partida</h2>
            <label>
              Sets do jogo:&nbsp;
              <select
                name="partialgame"
                defaultValue={tempParcial}
                onChange={handlePartial}
              >
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
                <option value={12}>12</option>
              </select>
            </label>
            <label>
              Se empate: {tempParcial - 1}X{tempParcial - 1}, terá Tie?&nbsp;
              <select name="tie" defaultValue={1} onChange={handleTie}>
                <option value={1}>Sim</option>
                <option value={0}>Não</option>
              </select>
            </label>
            <p>OBS: Ao clicar em alterar o resultado será reiniciado.</p>
            <div className="config__buttons">
              <button className="config__submit" onClick={handleSubmit}>
                Alterar
              </button>
              <button
                className="config__cancel"
                onClick={() => setIsOpenConfig(false)}
              >
                Cancelar
              </button>
            </div>
            <div
              className="config__close"
              onClick={() => setIsOpenConfig(false)}
            >
              X
            </div>
          </div>
        </>
      )}
      {isOpenReset && (
        <>
          <div
            className="reset__antimodal"
            onClick={() => setIsOpenReset(false)}
          ></div>
          <div className="reset__modal">
            <h2>Reiniciar placar?</h2>
            <p>O placar atual será perdido.</p>
            <div className="reset__buttons">
              <button className="yes" onClick={resetClick}>
                SIM
              </button>
              <button className="no" onClick={() => setIsOpenReset(false)}>
                NÃO
              </button>
            </div>
            <div className="reset__close" onClick={() => setIsOpenReset(false)}>
              X
            </div>
          </div>
        </>
      )}
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
      <div className="decrease orange" onClick={decreaseOrange}>
        <div className="minus" />
      </div>
      <div className="decrease green" onClick={decreaseGreen}>
        <div className="minus" />
      </div>
      <div className="whiteline">
      <textarea  className="team__orange" name="teamOrange" />
      <textarea className="team__green" name="teamGreen" />
        <p className="tie">
          {isTie &&
            greenParcial == parcial - 1 &&
            orangeParcial == parcial - 1 &&
            "TIE"}
        </p>
        <div className="gameconfig">
          <p>Sets: {parcial}</p>
          <p>Tie: {isTie ? "Sim" : "Não"}</p>
        </div>
      </div>
    </ScoreStyle>
  );
}
