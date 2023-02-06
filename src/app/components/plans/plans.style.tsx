import styled from "styled-components";
import webBg from "@/app/assets/images/plan/plans-shape.svg";

const Container = styled.section`
  .plan {
    font-family: "Cairo";
    background-position: 100% -10%;
    background-size: 20%;
    background-repeat: no-repeat;
    padding: 60px 0;
    background-image: url(${webBg.src});
    @media (max-width: 992px) {
      padding: 0 0;
    }

    &.rtl {
      .plans {
        &__card {
          text-align: right;
        }
        .plans__card--list {
          &_item {
            align-items: right;
          }
        }
      }
    }
  }
  .plans__title {
    font-family: "Cairo";
    font-style: normal;
    font-weight: 700;
    font-size: 1.8rem;
    text-align: center;
    color: #2f354d;
    text-transform: none;
    position: relative;
    margin: 40px auto;

    &:after {
      content: "";
      border-radius: 4px;
      position: absolute;
      width: 30px;
      border: 2px solid #ff2800;
      height: 0;
      bottom: -10px;
      left: 49%;
      @media (max-width: 992px) {
        left: 45%;
      }
    }
    @media (max-width: 992px) {
      font-size: 1.8rem;
      text-align: center;
    }
  }
  .plans {
    display: flex;
    justify-content: center;
    gap: 20px;
    direction: ltr;
    margin: 0;
    flex-wrap: wrap;

    @media (max-width: 992px) {
      flex-direction: column;
      align-items: center;
      margin: 0;
    }

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }

    * {
      margin: 0;
      padding: 0;
    }

    &__card {
      text-align: left;
      min-height: 100%;
      width: 25%;
      min-width: 25%;
      min-height: 70vh;
      background: #fff;
      color: #2f354d !important;
      border-radius: 16px;
      border: 2px solid #ff280030;
      padding: 32px;
      display: flex;
      flex-direction: column;

      @media (max-width: 992px) {
        width: 70%;
        min-width: 70%;
      }

      @media (max-width: 992px) {
        width: 90%;
        min-width: 90%;
      }

      &--primary-title {
        font-size: 1.7rem;
        text-transform: none;
        font-weight: 600;
      }

      &--second-title {
        font-size: 2.1rem;
        text-transform: none;
        font-weight: 500;
        margin-top: 24px;
        > small {
          font-size: 1rem;
        }

        &.two {
          font-size: 1.3rem;
        }
      }

      &--desc {
        font-size: 1rem;
        text-transform: none;
        margin-top: 14px;
        padding: 0;
      }

      &--btn {
        border: 1px solid #7a7d8d;
        color: #7a7d8d;
        background-color: #fff;
        outline: none;
        padding: 8px;
        border-radius: 8px;
        width: 100%;
        margin-top: 32px;
        font-weight: 500;
      }

      &--list {
        margin-top: 16px;
        list-style: none;
        flex-grow: 1;
        &_item {
          padding: 4px 0;
          display: flex;
          align-items: flex-start;
          .icon {
            margin: 8px;
          }
          small {
            font-size: 1rem;
          }
        }
      }

      &--footer {
        margin-top: 16px;
        list-style: none;
        padding-top: 16px;
        margin-top: 32px;
        border-top: 1px solid #2f354d;
      }

      &.active {
        background: #ff2800;
        color: #fff !important;
        .plans__card--btn {
          border-color: #fff;
          color: #ff2800;
        }

        .plans__card--footer {
          border-top: 1px solid #fff;
        }
      }
    }
  }
  .carousel-dark .carousel-indicators [aria-current] {
    background-color: #ff2800 !important;
    z-index: 1;
  }
`;

export default Container;
