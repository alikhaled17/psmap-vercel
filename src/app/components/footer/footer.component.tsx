import React from "react";
import Container from "./footer.style";
import Image from "next/image";
import Logo from "@/app/assets/images/Logo.svg";
import mightyIcon from "@/app/assets/images/footer/mighty.svg";
import linkedinIcon from "@/app/assets/images/footer/linkedin.svg";
import twitterIcon from "@/app/assets/images/footer/twitter.svg";
import youtubeIcon from "@/app/assets/images/footer/youtube.svg";
import callIcon from "@/app/assets/images/footer/call.svg";
import smsIcon from "@/app/assets/images/footer/sms.svg";
import whatsappIcon from "@/app/assets/images/footer/whatsapp.svg";
import useTranslation from "@/app/hooks/useTranslation";

const FooterComponent = () => {
  const { t, locale, setLocale } = useTranslation();

  return (
    <Container>
      <footer id="footer" className="footer">
        <div className="row justify-content-around">
          <div className="col-sm-4 col-md-4 col-12 content_flex ">
            <div className="footer_logo mb-3">
              <Image
                width={150}
                height={150}
                src={Logo}
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="logo_txt mb-3">
              <p
                className="mb-0 landing_desc"
                dangerouslySetInnerHTML={{
                  __html:
                    locale === "en"
                      ? "Building a next-generation collaborative<br /> platform to connect Departments and Members."
                      : "بناء منصة تعاونية من الجيل التالي لربط الإدارات والأعضاء.",
                }}
              ></p>
            </div>
            <div className="d-flex">
              <div className="img_width ">
                <div className="migrty">
                  <Image
                    width={40}
                    height={40}
                    src={mightyIcon}
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="img_width">
                <div className="linkedin">
                  <Image
                    width={40}
                    height={40}
                    src={linkedinIcon}
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="img_width">
                <div className="linkedin">
                  <Image
                    width={40}
                    height={40}
                    src={twitterIcon}
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="img_width">
                <div className="youtube">
                  <Image
                    width={40}
                    height={40}
                    src={youtubeIcon}
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4 col-md-4 col-12 content_flex">
            <div className="row">
              <div className="col-sm-6 col-12">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a
                      className="nav-link footer_links active"
                      aria-current="page"
                      href="#started"
                    >
                      {t("nav_items_home")}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link footer_links" href="#find">
                      {t("nav_items_about")}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link footer_links" href="#report">
                      {t("nav_items_report")}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link footer_links" href="#plans">
                      {t("nav_items_prices")}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link footer_links" href="#about">
                      {t("nav_items_community")}
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6 col-12">
                <ul className="navbar-nav">
                  <li className="nav-item cust_nav contact">
                    {locale === "en"
                      ? "Contact Information"
                      : "معلومات التواصل"}
                  </li>
                  <li className="nav-item cust_nav">
                    <Image
                      width={30}
                      height={30}
                      src={callIcon}
                      alt=""
                      className="img-fluid me-2"
                    />
                    +966500928211
                  </li>
                  <li className="nav-item cust_nav">
                    <Image
                      width={30}
                      height={30}
                      src={smsIcon}
                      alt=""
                      className="img-fluid me-2"
                    />
                    <a href="mailto:Psmap@info.io">Psmap@info.io</a>
                  </li>
                  <li className="nav-item cust_nav">
                    <Image
                      width={30}
                      height={30}
                      src={whatsappIcon}
                      alt=""
                      className="img-fluid me-2"
                    />
                    +966500928211
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="footer_border"></div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <div className="copy_right">
              <p>
                {locale === "en"
                  ? "Copyright @Psmap2023"
                  : " حقوق الملكية محفوظة @Psmap2023"}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </Container>
  );
};

export default FooterComponent;
