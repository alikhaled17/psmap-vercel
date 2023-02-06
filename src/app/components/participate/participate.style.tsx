import styled from "styled-components";
import webBg from "@/app/assets/images/participate/participate-bg.svg";

const Container = styled.section`
  .participate {
    margin-top: 100px;
    padding: 0 0 100px;
    background-position: center;
    background-size: 100%;
    background-repeat: no-repeat;
    background-image: url(${webBg.src});
    font-family: Cairo;

    @media (max-width: 992px) {
      padding: 0 0 50px;
    }

    @media (max-width: 992px) {
      background-size: contain;
      background-position: center;
    }
    p {
      font-size: 1.1rem;
      @media (max-width: 992px) {
        font-size: 0.9rem;
      }
    }
    .carousel-indicators {
      margin-bottom: -2%;
      z-index: 1;
    }
    .carousel-inner {
      position: relative;
      width: 100%;
      overflow: hidden;
      color: #000;
      border-radius: 10px;
    }

    .carousel-item {
      padding: 2% 15%;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      @media (max-width: 992px) {
        padding: 0;
      }
      img {
        margin: 20px auto;
        border-radius: 20px;
        border: 0;
        @media (max-width: 992px) {
          border-radius: 5px;
        }
      }
    }
    .name {
      font-size: 16px;
    }

    .carousel-control-next span:first-child,
    .carousel-control-prev span:first-child {
      background-color: transparent;
      width: 5px !important;
    }

    @media (max-width: 992px) {
      .arrows {
        width: 20px;
      }
    }

    .btn-danger {
      background-color: #ff2800 !important;
    }
  }

  .slider-container {
    padding: 0 200px;
    @media (max-width: 992px) {
      padding: 0 10px;
      width: 80%;
      margin: 0 auto;
    }

    .slick-prev:before,
    .slick-next:before {
      font-family: "slick";
      font-size: 40px;
      line-height: 1;
      opacity: 0.75;
      color: red;

      @media (max-width: 992px) {
        font-size: 25px;
      }
    }

    .slick-dots {
      li {
        width: 50px;
        height: 4px;
        @media (max-width: 992px) {
          width: 15px;
        }
        background-color: #000;
        opacity: 0.5;
        button:before {
          content: "";
        }
        &.slick-active {
          opacity: 1;
        }
      }
    }
  }
`;

export default Container;
