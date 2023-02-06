import styled from "styled-components";
import webBg from "@/app/assets/images/header/web_bg.png";
import webFlippedBg from "@/app/assets/images/header/web_flipped_bg.png";
import mobBg from "@/app/assets/images/header/mobile_bg.png";

const Container = styled.section`
  .started {
    font-family: "Cairo";
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-image: url(${webBg.src});
    background-position: center;
    background-size: cover;

    &.rtl {
      background-image: url(${webFlippedBg.src});
    }

    justify-content: center;
    align-items: flex-start;
    padding: 0 100px;

    .content {
      margin-top: 100px;
      justify-content: center;
      align-items: flex-start;
      gap: 24px;
      &_title {
        font-size: 1.8rem;
      }
      &_desc {
        font-size: 1.1rem;
      }
      .get__start {
        padding: 12px 24px;
        text-align: center;
        width: 172px;
        background: #ff2800;
        border-radius: 7px;
        color: #fff;
        text-decoration: none;
        cursor: pointer;
        margin: 20px 0;
        display: block;
      }
    }

    @media (max-width: 992px) {
      background-image: url(${mobBg.src});
      text-align: center;
      padding: 0 20px;
      &.rtl {
        padding: 0 50px;
        background-image: url(${mobBg.src});
      }
      .content {
        align-items: center;
        justify-content: center;
        .get__start {
          // display: flex;
          margin: 20px auto;
        }
      }
    }
  }
`;

export default Container;
