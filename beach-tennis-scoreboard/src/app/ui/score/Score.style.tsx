import styled from "styled-components";

export const ScoreStyle = styled.section`
  display: grid;

  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;

  height: 100vh;

  .orange {
    background-color: #f1520d;
    grid-row-start: 1;
    grid-column-start: 1;

    grid-row-end: 2;
    grid-column-end: 2;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .green {
    background-color: #a3c510;
    grid-row-start: 1;
    grid-column-start: 2;

    grid-row-end: 2;
    grid-column-end: 3;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .numbers {
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none;
    font-size: 320px;
    color: #ffffff;

    @media screen and (min-width: 768px) and (max-width: 1024px) {
      font-size: 240px;
    }
    @media screen and (min-width: 460px) and (max-width: 768px) {
      font-size: 160px;
    }

    @media screen and (max-width: 460px) {
      font-size: 80px;
    }
  }

  .parcial {
    display: flex;
    top: 5vh;
    position: absolute;
    justify-self: center;
    font-size: 160px;
    color: #ffffff;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none;

    @media screen and (min-width: 768px) and (max-width: 1024px) {
      font-size: 100px;
    }

    @media screen and (min-width: 460px) and (max-width: 768px) {
      font-size: 80px;
    }

    @media screen and (max-width: 460px) {
      font-size: 40px;
    }

    .greenset {
      width: 200px;
      text-align: end;
      @media screen and (min-width: 768px) and (max-width: 1024px) {
        width: 100px;
      }
      @media screen and (min-width: 460px) and (max-width: 768px) {
        width: 100px;
      }
      @media screen and (max-width: 460px) {
        width: 50px;
      }
    }
    .xset {
    }
    .orangeset {
      width: 200px;
      @media screen and (min-width: 768px) and (max-width: 1024px) {
        width: 100px;
      }
      @media screen and (min-width: 460px) and (max-width: 768px) {
        width: 100px;
      }
      @media screen and (max-width: 460px) {
        width: 50px;
      }
    }
  }
`;
