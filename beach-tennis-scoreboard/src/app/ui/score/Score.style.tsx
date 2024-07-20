import styled from "styled-components";

export const ScoreStyle = styled.section`
  display: grid;

  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;

  height: 100svh;

  @media (max-width: 460px) {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr;
  }

  .orange {
    background-color: #f1520d;
    grid-row-start: 1;
    grid-column-start: 1;

    grid-row-end: 2;
    grid-column-end: 2;

    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 460px) {
      grid-row-start: 1;
      grid-column-start: 1;

      grid-row-end: 2;
      grid-column-end: 2;
    }
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

    @media (max-width: 460px) {
      grid-row-start: 2;
      grid-column-start: 1;

      grid-row-end: 3;
      grid-column-end: 2;
    }
  }

  .numbers {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    font-size: 320px;
    color: #ffffff;

    @media (min-width: 768px) and (max-width: 1024px) {
      font-size: 240px;
    }
    @media (min-width: 460px) and (max-width: 768px) {
      font-size: 160px;
    }

    @media (max-width: 460px) {
      font-size: 200px;
    }
  }

  .parcial {
    display: flex;
    top: 5vh;
    position: absolute;
    justify-self: center;
    font-size: 160px;
    color: #ffffff;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    @media (min-width: 768px) and (max-width: 1024px) {
      font-size: 100px;
    }

    @media (min-width: 460px) and (max-width: 768px) {
      font-size: 80px;
    }

    @media (max-width: 460px) {
      font-size: 40px;
      background-color: #ffffff;
      color: #000000;
      top: calc(50% - 20px);
      width: 100%;
    }

    .greenset {
      width: 200px;
      text-align: end;
      @media (min-width: 768px) and (max-width: 1024px) {
        width: 100px;
      }
      @media (min-width: 460px) and (max-width: 768px) {
        width: 100px;
      }
      @media (max-width: 460px) {
        width: 50px;
      }
    }
    .xset {
    }
    .orangeset {
      width: 200px;
      @media (min-width: 768px) and (max-width: 1024px) {
        width: 100px;
      }
      @media (min-width: 460px) and (max-width: 768px) {
        width: 100px;
      }
      @media (max-width: 460px) {
        width: 50px;
      }
    }
  }

  .reset {
    background-color: #000000;
    color: #ffffff;
    width: max-content;
    padding: 10px;
    border-radius: 20px;
    position: absolute;
    top: 10px;
    left: 10px;
  }

  .decrease {
    color: #ffffff;
    width: max-content;
    padding: 27px 20px;
    font-weight: bold;
    border-radius: 50%;
    position: absolute;
    right: 10px;
    font-size: 50px;
    line-height: normal;

    .minus {
      width: 20px;
      height: 6px;
      background-color: #ffffff;
    }

    &.orange {
      background-color: #f1520d;
      bottom: 10px;
    }

    &.green {
      background-color: #a3c510;
      bottom: 10px;
      right: calc(50% + 10px);
      @media (max-width: 460px) {
        right: 10px;
        bottom: unset;
        top: calc(50% - 100px);
      }
    }
  }
`;
