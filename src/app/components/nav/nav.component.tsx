import Container from "./nav.style";
import React, { useState } from "react";

import useTranslation from "@/app/hooks/useTranslation";
import Image from "next/image";
import { useRouter } from "next/router";

const NavComponent = () => {
  const { t, locale, setLocale } = useTranslation();
  const [SectionName, setSectionName] = useState("home");
  const [ActiveSide, setActiveSide] = useState("");
  const [ActiveDropDownMenue, setActiveDropDownMenue] = useState("");
  const [BenifitsDropDownMenue, setBenifitsDropDownMenue] = useState("");
  const router = useRouter();

  const clickNavItem = (secname: string) => {
    setSectionName(secname);
    setBenifitsDropDownMenue("");
    setActiveSide("");
  };

  const checkSecName = (secname: string) => {
    if (SectionName === secname) return "active";
    return "";
  };

  const checkLang = (lang: string) => {
    if (locale === lang) return "active";
    return "";
  };

  const closeSidebar = (e: any) => {
    e.target.classList.contains("nav__section_sidebar") && setActiveSide("");
  };
  const clickDropdownItem = (lang: string) => {
    setLocale(lang);
    setActiveDropDownMenue("");
    setActiveSide("");
  };

  const openSidebar = () => {
    setActiveSide("active");
  };

  return (
    <Container>
      <div className={`nav__section active ${locale === "ar" ? "rtl" : "ltr"}`}>
        <div className="nav__section--logo">
          <Image
            src="https://alikhaled-meem.github.io/psmap_page/assets/images/Logo.svg"
            alt="Picture of the author"
            width={100}
            height={100}
            className="img-fluid"
          />
        </div>
        <div className="nav__section--list">
          <span
            className={`nav__section--item ${locale === "ar" ? "rtl" : "ltr"}`}
          >
            <a
              onClick={() => clickNavItem("home")}
              className={`nav-link links ${checkSecName("home")}`}
              href="#home"
            >
              {t("nav_items_home")}
            </a>
          </span>
          <span
            className={`nav__section--item ${locale === "ar" ? "rtl" : "ltr"}`}
          >
            <a
              onClick={() => clickNavItem("find")}
              className={`nav-link links ${checkSecName("find")}`}
              href="#find"
            >
              {t("nav_items_about")}
            </a>
          </span>

          <span
            className={`nav__section--item ${locale === "ar" ? "rtl" : "ltr"}`}
          >
            <a
              className={` nav-link ms-0 dropdown-toggle ${checkSecName(
                "report"
              )} ${checkSecName("goals")} ${checkSecName("mindmap")}`}
              id="navbarDropdownMenuBenifits"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              onClick={(e) => {
                e.preventDefault();
                BenifitsDropDownMenue
                  ? setBenifitsDropDownMenue("")
                  : setBenifitsDropDownMenue("show");
              }}
            >
              <span className={`m-2 ${locale === "ar" ? "me-0" : "ms-0"} `}>
                {t("nav_items_report")}
              </span>
            </a>
            <ul
              className={`dropdown-menu ${BenifitsDropDownMenue}`}
              aria-labelledby="navbarDropdownMenuBenifits"
            >
              <span>
                <a
                  className={`dropdown-item ${
                    SectionName === "mindmap" && "selected"
                  }`}
                  onClick={() => clickNavItem("mindmap")}
                  href="#mindmap"
                >
                  <span>{t("nav_items_benifits")[0]}</span>
                </a>
              </span>
              <span>
                <a
                  className={`dropdown-item ${
                    SectionName === "goals" && "selected"
                  }`}
                  onClick={() => clickNavItem("goals")}
                  href="#goals"
                >
                  <span>{t("nav_items_benifits")[1]}</span>
                </a>
              </span>
              <span>
                <a
                  className={`dropdown-item ${
                    SectionName === "report" && "selected"
                  }`}
                  onClick={() => clickNavItem("report")}
                  href="#report"
                >
                  <span>{t("nav_items_benifits")[2]}</span>
                </a>
              </span>
            </ul>
          </span>
          <span
            className={`nav__section--item ${locale === "ar" ? "rtl" : "ltr"}`}
          >
            <a
              onClick={() => clickNavItem("plans")}
              className={`nav-link links ${checkSecName("plans")}`}
              href="#plans"
            >
              {t("nav_items_prices")}
            </a>
          </span>
          <span
            className={`nav__section--item ${locale === "ar" ? "rtl" : "ltr"}`}
          >
            <a
              onClick={() => clickNavItem("about")}
              className={`nav-link links ${checkSecName("about")}`}
              href="#about"
            >
              {t("nav_items_community")}
            </a>
          </span>
          <span
            className={`nav__section--item dropdown ${
              locale === "ar" ? "rtl" : "ltr"
            }`}
          >
            <a className="get__start">{t("global_btn")}</a>
          </span>
          <span
            className={`nav__section--item dropdown  ${
              locale === "ar" ? "rtl" : "ltr"
            }`}
          >
            <a
              className="nav__language nav-link dropdown-toggle"
              href=""
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              onClick={(e) => {
                e.preventDefault();
                ActiveDropDownMenue
                  ? setActiveDropDownMenue("")
                  : setActiveDropDownMenue("show");
              }}
            >
              <span className="m-2">
                {locale.toLowerCase() === "en"
                  ? t(`nav_lang_ar`)
                  : t(`nav_lang_en`)}
              </span>
            </a>
            <ul
              className={`dropdown-menu ${ActiveDropDownMenue}`}
              aria-labelledby="navbarDropdownMenuLink"
            >
              <span>
                <a
                  className={`dropdown-item ${locale === "en" && "selected"}`}
                  onClick={() => clickDropdownItem("en")}
                  href="#"
                >
                  <span>{t("nav_lang_en")}</span>
                </a>
              </span>
              <span>
                <a
                  className={`dropdown-item ${locale === "ar" && "selected"}`}
                  onClick={() => clickDropdownItem("ar")}
                  href="#"
                >
                  <span>{t("nav_lang_ar")}</span>
                </a>
              </span>
            </ul>
          </span>
        </div>
        <div className="menu__icon" onClick={openSidebar}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div
          className={`nav__section_sidebar ${ActiveSide}`}
          onClick={closeSidebar}
        >
          <div className="modal ">
            <span className="logo">
              {/* <img src="https://alikhaled-meem.github.io/psmap_page/assets/images/Logo.svg" alt="" className="img-fluid"> */}
            </span>
            <span className="modal--item active">
              <a
                onClick={() => clickNavItem("home")}
                className={`nav-link links ${checkSecName("home")}`}
                href="#home"
              >
                {t("nav_items_home")}
              </a>
            </span>
            <span className="modal--item">
              <a
                onClick={() => clickNavItem("find")}
                className={`nav-link links ${checkSecName("find")}`}
                href="#find"
              >
                {t("nav_items_about")}
              </a>
            </span>

            <span className={`modal--item`}>
              <a
                className={` nav-link ms-0 dropdown-toggle ${checkSecName(
                  "report"
                )} ${checkSecName("goals")} ${checkSecName("mindmap")}`}
                id="navbarDropdownMenuBenifits"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onClick={(e) => {
                  e.preventDefault();
                  BenifitsDropDownMenue
                    ? setBenifitsDropDownMenue("")
                    : setBenifitsDropDownMenue("show");
                }}
              >
                <span className={`m-2 ${locale === "ar" ? "me-0" : "ms-0"} `}>
                  {t("nav_items_report")}
                </span>
              </a>
              {BenifitsDropDownMenue && (
                <ul className="m-0">
                  <span>
                    <a
                      className="dropdown-item m-2 "
                      onClick={() => clickNavItem("mindmap")}
                      href="#mindmap"
                    >
                      <span>{t("nav_items_benifits")[0]}</span>
                    </a>
                  </span>
                  <span>
                    <a
                      className="dropdown-item m-2"
                      onClick={() => clickNavItem("goals")}
                      href="#goals"
                    >
                      <span>{t("nav_items_benifits")[1]}</span>
                    </a>
                  </span>
                  <span>
                    <a
                      className="dropdown-item m-2"
                      onClick={() => clickNavItem("report")}
                      href="#report"
                    >
                      <span>{t("nav_items_benifits")[2]}</span>
                    </a>
                  </span>
                </ul>
              )}
            </span>

            <span className="modal--item">
              <a
                onClick={() => clickNavItem("plans")}
                className={`nav-link links ${checkSecName("plans")}`}
                href="#plans"
              >
                {t("nav_items_prices")}
              </a>
            </span>
            <span className="modal--item">
              <a
                onClick={() => clickNavItem("about")}
                className={`nav-link links ${checkSecName("about")}`}
                href="#about"
              >
                {t("nav_items_community")}
              </a>
            </span>
            <span className="languges">
              <a
                className={`lang__btn ${checkLang("en")}`}
                onClick={(e) => {
                  e.preventDefault();
                  clickDropdownItem("en");
                }}
              >
                {t(`nav_lang_en`)}
              </a>
              <a
                className={`lang__btn ${checkLang("ar")}`}
                onClick={(e) => {
                  e.preventDefault();
                  clickDropdownItem("ar");
                }}
              >
                {t(`nav_lang_ar`)}
              </a>
            </span>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default NavComponent;
