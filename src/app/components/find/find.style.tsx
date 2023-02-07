import styled from "styled-components";
import webBg from "@/app/assets/images/find/find_img.svg";

const Container = styled.section`
  .find {
    width: 100%;
    min-height: 60vh;
    display: flex;
    flex-direction: column;
    background-image: url(${webBg.src});
    background-repeat: no-repeat;
    background-size: cover;
    margin-top: 1rem;
    padding: 50px 100px;
    font-family: "Cairo";

    @media (max-width: 992px) {
      padding: 0 20px;
      background: $color-white;
    }
  }

  .find__content {
    display: flex;
    justify-content: center;
    gap: 20px;
    .find__card {
      min-width: 30%;
    }

    @media (max-width: 992px) {
      gap: 0;
      flex-direction: column;
    }
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
    margin: auto;
    @media (max-width: 992px) {
      width: 100%;
    }
  }

  .knowledge {
    width: 60%;
    font-size: 14px;
    @media (max-width: 992px) {
      width: 90%;
    }
  }

  // .find_card {
  //   min-height: 60vh;
  // }

  .col_parent {
    background-color: #fff;
    border-radius: 10px;
    border: 1px solid #f3f4fe;
    background-color: #fff;
    padding: 40px;
    margin-bottom: 1rem;
    min-height: 40vh;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: flex-start;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    @media (max-width: 992px) {
      padding: 20px;
      min-height: 48vh;
      align-items: center;
      text-align: center;
    }
  }
  .txt_head {
    font-family: "Cairo";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 130%;
    margin-top: 1rem;
  }

  .txt_subHead {
    font-family: "Cairo";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 140.2%;
    letter-spacing: 0.3px;
  }

  @media (max-width: 992px) {
    .landing__title {
      width: 100%;
      font-size: 2rem !important;
    }
    .landing__title:after {
      left: 46% !important;
    }
  }
`;

export default Container;
