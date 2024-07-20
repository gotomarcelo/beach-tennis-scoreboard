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
    background: radial-gradient(
          circle at 0% 50%,
          rgba(96, 16, 48, 0) 9px,
          #f87f26 10px,
          rgba(96, 16, 48, 0) 11px
        )
        5px 10px,
      radial-gradient(
        at 100% 100%,
        rgba(96, 16, 48, 0) 12px,
        #f87f26 12px,
        rgba(96, 16, 48, 0) 100px
      ),
      #f1520d;
    background-size: 12px 9px;
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
    background: radial-gradient(
          circle at 0% 50%,
          rgba(96, 16, 48, 0) 9px,
          #8aaf04 10px,
          rgba(96, 16, 48, 0) 11px
        )
        5px 10px,
      radial-gradient(
        at 100% 100%,
        rgba(96, 16, 48, 0) 12px,
        #8aaf04 12px,
        rgba(96, 16, 48, 0) 100px
      ),
      #a3c510;
    background-size: 12px 9px;
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
    right: calc(50% - 251px);
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
      right: calc(50% - 132px);
    }

    @media (min-width: 460px) and (max-width: 768px) {
      font-size: 80px;
      right: calc(50% - 125px);
    }

    @media (max-width: 460px) {
      font-size: 40px;
      place-content: center;
      right: 0px;
      top: 20px;
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
    border-radius: 0 20px 20px 20px;
    position: absolute;
    top: 20px;
    left: 20px;
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
      background: #f1520d;
      bottom: 20px;
    }

    &.green {
      background: #a3c510;
      bottom: 20px;
      right: calc(50% + 10px);
      @media (max-width: 460px) {
        right: 10px;
        bottom: unset;
        top: calc(50% - 100px);
      }
    }
  }

  .whiteline {
    @media (max-width: 460px) {
      position: absolute;
      top: calc(50% - 20px);
      width: 100%;
      height: 40px;
      background-color: #ffffff;
    }
  }

  .antimodal {
    position: absolute;
    z-index: 2;
    height: 100svh;
    width: 100svw;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .modal {
    position: absolute;
    z-index: 3;
    background-color: #ffffff;
    width: auto;
    height: auto;
    border-radius: 0 50px 50px 50px;
    top: 20px;
    left: 20px;
    padding: 30px;
    border: solid 2px #000000;
    margin-right: 30px;

    h2 {
      font-size: 30px;
      margin-bottom: 5px;
    }
    p {
      font-size: 16px;
      margin-bottom: 15px;
    }

    .close {
      position: absolute;
      border: solid 2px #000000;
      border-radius: 50px;
      padding: 5px 7px;
      background-color: #ffffff;
      top: 0;
      right: 0;
      font-weight: bold;
    }

    .buttons {
      display: flex;
      justify-content: space-around;
      .yes {
        background-color: #000000;
        color: #ffffff;
        width: max-content;
        padding: 10px;
        border-radius: 20px;
        border: solid 2px #000000;
      }
      .no {
        background-color: #ffffff;
        color: #000000;
        width: max-content;
        padding: 10px;
        border-radius: 20px;
        border: solid 2px #000000;
      }
    }
  }
`;
