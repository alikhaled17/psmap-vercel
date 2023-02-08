import styled from "styled-components";
import webBg from "@/app/assets/images/goals/bg_web.svg";
import webBgAr from "@/app/assets/images/goals/bg_webAr.png";
import mobBg from "@/app/assets/images/goals/bg_mobile.svg";

const Container = styled.section`
  .goals {
    font-family: "Cairo";
    width: 100%;
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 100px;
    background-image: url(${webBg.src});
    background-position: 100%;
    background-repeat: no-repeat;
    background-size: contain;
    &.rtl {
      background-image: url(${webBgAr.src});
    }
    @media (max-width: 992px) {
      min-height: 80vh;
      padding: 10px 20px 0;
      background-size: 100%;
      background-position: bottom;
      background-image: url(${mobBg.src});
      justify-content: flex-start;
      &.rtl {
        background-image: url(${mobBg.src});
      }
    }
  }

  .goals__icons {
    display: flex;
    justify-content: flex-start;
    gap: 20px;

    img {
      min-height: 40px;
    }
    @media (max-width: 992px) {
      margin-top: 24px;
      gap: 5px;
      justify-content: center;
      margin-bottom: 10px;
    }
  }

  .goals_title {
    font-family: "Cairo";
    font-style: normal;
    font-weight: 700;
    font-size: 1.8rem;
    color: #2f354d;
    margin-bottom: 2rem;
    text-transform: none;
    position: relative;

    &.ltr {
      :after {
        content: "";
        border-radius: 4px;
        position: absolute;
        width: 30px;
        border: 2px solid #ff2800;
        height: 0;
        bottom: -10px;
        left: 0%;
        @media (max-width: 992px) {
          left: 45%;
        }
      }
    }
    &.rtl {
      &:after {
        content: "";
        border-radius: 4px;
        position: absolute;
        width: 30px;
        border: 2px solid #ff2800;
        height: 0;
        bottom: -10px;
        right: 0;
        @media (max-width: 992px) {
          right: 45%;
        }
      }
    }
    @media (max-width: 992px) {
      font-size: 1.8rem;
      text-align: center;
    }
  }

  .goals_desc {
    width: 40%;

    @media (max-width: 992px) {
      width: 100%;
      text-align: center;
    }
  }
`;

export default Container;
