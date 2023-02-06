import styled from "styled-components";
import webBg from "@/app/assets/images/goals/bg_web.svg";
import webBgAr from "@/app/assets/images/goals/bg_webAr.png";
import mobBg from "@/app/assets/images/goals/bg_mobile.svg";

const Container = styled.section`
  .footer {
    min-height: 44vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    background: $color-white;
    justify-content: center;
    border-top: 1px solid #00000040;
    padding-top: 2%;
    @media (max-width: 992px) {
      padding-top: 12%;
    }

    .nav-item {
      a {
        text-decoration: none;
        color: #2f354d;
      }
    }
  }

  .footer_logo {
    max-width: 155px;
    width: 100%;
    padding-top: 0.5rem;
  }

  .logo_txt {
    font-family: "Cairo";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #666270;
  }

  .img_width {
    width: 40px;
    margin-left: 0.7rem;
  }

  .footer_links {
    position: relative;
    @media (max-width: 1024px) {
      font-size: 0.8rem !important;
    }
  }

  /* .footer_links.active::after {
    content: "";
    border-radius: 4px;
    min-width: 30px;
    border-bottom: 3px solid #ff2800;
    border-radius: 4px;
    position: absolute;
    bottom: -3px;
    left: 1%;
    @media (max-width: 767px) and (orientation: portrait) {
      left: 44.5%;
    }
  } */

  .cust_nav {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    color: #2f354d;
    font-family: "Cairo";
    font-weight: 600;

    a {
      text-decoration: none;
      color: #2f354d;
    }
    @media (max-width: 1024px) {
      font-size: 0.8rem;
    }
    @media (max-width: 992px) {
      img {
        width: 9%;
      }
    }
  }

  .contact {
    color: $color-offred;
  }

  .footer_border {
    width: 83%;
    margin: 0 auto;
    height: 10vh;
    border-bottom: 2px solid #cdc9bb;
  }

  .copy_right p {
    font-family: "Cairo";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    margin-top: 1rem;
    text-align: center;
    color: #666270;
  }
  @media (max-width: 767px) and (orientation: portrait) {
    .content_flex {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
  }
`;

export default Container;
