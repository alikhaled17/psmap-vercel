import styled from "styled-components";
import webBg from "@/app/assets/images/about/about-bg.svg";

const Container = styled.section`
  .about {
    /* min-height: 60vh; */
    background-position: center;
    background-size: 100%;
    background-repeat: no-repeat;
    background-image: url(${webBg.src});
    padding: 100px 0;
    @media (max-width: 992px) {
      padding: 0 20px;
    }
    p {
      width: 70%;
      margin: 0 auto 20px;
      font-size: 1.1rem;
      text-align: center;
      @media (max-width: 992px) {
        width: 90%;
        font-size: 0.9rem;
      }
    }
    .carousel-indicators {
      margin-bottom: -2%;
      z-index: 1;
    }
    .carousel-inner {
      width: 100%;
      color: #000;
    }

    .carousel-item {
      padding: 2% 15%;
      text-align: center;
      img {
        border-radius: 20px;
        border: 0;
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

    .video {
      border-radius: 20px;
      width: 90%;
      height: 450px;
      @media (max-width: 992px) {
        border-radius: 5px;
        width: 100%;
        height: 200px;
      }
    }
  }
  .about_title {
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

  .slider-container {
    padding: 0 200px;
    @media (max-width: 992px) {
      padding: 0 10px;
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
