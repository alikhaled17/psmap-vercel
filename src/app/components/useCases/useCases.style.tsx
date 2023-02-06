import styled from "styled-components";
import webBg from "@/app/assets/images/useCases/useCases.png";

const Container = styled.section`
  .useCases__section {
    width: 100%;
    min-height: 54vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 40px 100px;
    margin-top: 1rem;
    background-image: url(${webBg.src});
    background-size: cover;
    font-family: "Cairo";

    .provide_text {
      color: #ff2800;
      font-weight: 600;
    }
    .useCases__title {
      font-family: "Cairo";
      font-style: normal;
      font-weight: 700;
      font-size: 1.8rem;
      text-align: center;
      color: #2f354d;
      text-transform: none;
      position: relative;
      margin: 40px 0;
      @media (max-width: 992px) {
        font-size: 1.8rem;
      }
      &.ltr {
        &:after {
          content: "";
          border-radius: 4px;
          position: absolute;
          width: 30px;
          border: 2px solid #ff2800;
          height: 0;
          bottom: -10px;
          left: 50%;
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
          right: 50%;
        }
      }
    }

    .usecases__img {
      min-width: 50%;
      padding: 0 20px;
    }

    .useCases__content {
      text-align: left;
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      align-items: flex-start;
    }

    .plans__card--list {
      padding: 0;
      margin: 0;
      display: flex;
      flex-wrap: wrap;
      list-style: none;
      &_item {
        min-width: 50%;
      }
    }

    &.rtl {
      .plans__card--list {
        justify-content: flex-start;
        text-align: right;
      }
      .provide_text {
        text-align: right;
      }
    }

    .useCases__get__start {
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

    .plans__card--list_item {
      align-items: center;
    }

    @media (max-width: 992px) {
      flex-direction: column;
      padding: 20px;
      align-items: center;
      background-image: none;

      .usecases__img {
        max-width: 70%;
        padding: 20px;
      }

      .provide_text {
        color: #ff2800;
        font-weight: 600;
        text-align: center;
      }
      .useCases__title {
        text-align: center;
        margin: 40px auto;
        width: 100%;
      }
      .useCases__content {
        flex-direction: column;
        padding: 0 10px;
        justify-content: center;
        align-items: center;
      }
      .plans__card--list {
        justify-content: flex-start;
        align-items: center;
      }

      .plans__card--list_item {
        min-width: 40%;
      }

      .useCases__get__start {
        margin: 20px auto;
      }
    }
  }
`;

export default Container;
