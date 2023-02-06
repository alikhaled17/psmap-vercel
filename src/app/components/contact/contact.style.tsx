import styled from "styled-components";
import webBg from "@/app/assets/images/form/form-bg.svg";

const Container = styled.section`
  .gettoutch {
    min-height: 500px;
    background-position: center;
    background-size: 100%;
    background-repeat: no-repeat;
    background-image: url(${webBg.src});
    font-family: Cairo;
    p {
      font-size: 1.4rem;
    }

    &__form {
      margin: 0 auto;
      width: 25%;
      @media (max-width: 992px) {
        width: 90%;
      }
      .input__group {
        margin-top: 20px;
        min-height: 50px;
        display: flex;
        align-items: center;
        overflow: hidden;
        //   padding: 0 10px;
        background-color: #fff;
        border: 1px solid #00000035;
        border-radius: 6px;
        img {
          height: 25px;
        }
        input {
          flex-grow: 1;
          height: 100%;
          padding: 10px;
          border: none;
          outline: none;
        }

        textarea {
          width: 100%;
          border: none;
          outline: none;
          padding: 6px 12px;
        }
      }
    }
  }
`;

export default Container;
