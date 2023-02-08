import styled from "styled-components";
import webBg from "@/app/assets/images/dialogue/dialogue_img.svg";
import webBgAr from "@/app/assets/images/dialogue/dialogue_img.png";
import mobBg from "@/app/assets/images/dialogue/dialogue_img_mobile.svg";

const Container = styled.section`
  .dialogue {
    font-family: "Cairo";
    margin-top: 24px;
    width: 100%;
    min-height: 60vh;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 100px;
    background-image: url(${webBg.src});
    background-position: 0;
    background-repeat: no-repeat;
    background-size: 55%;
    &.rtl {
      background-image: url(${webBgAr.src});
      background-position: 100%;
      background-size: 90%;
    }
    @media (max-width: 992px) {
      background-image: url(${mobBg.src});
      background-size: 80%;
      min-height: 70vh;
      padding: 10px 20px 20px;
      background-position: bottom;
      align-items: flex-start;
      &.rtl {
        background-image: url(${mobBg.src});
        background-position: bottom;
        background-size: 80%;
      }
    }

    .dialogue__content {
      width: 45%;
      @media (max-width: 992px) {
        width: 100%;
      }
    }
  }
  .dialogue_icons {
    display: flex;
    justify-content: flex-start;
    gap: 30px;
    img {
      min-height: 40px;
    }

    @media (max-width: 992px) {
      margin-top: 24px;
      gap: 5px;
      justify-content: center;
    }
  }

  .dialogue_title {
    font-family: "Cairo";
    font-style: normal;
    font-weight: 700;
    font-size: 2rem;
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
      font-size: 1.4rem;
      text-align: center;
    }
  }

  .dialogue_desc {
    width: 100%;

    @media (max-width: 992px) {
      width: 100%;
      text-align: center;
    }
  }
`;

export default Container;
