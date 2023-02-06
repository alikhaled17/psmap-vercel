import useTranslation from "@/app/hooks/useTranslation";
import React from "react";
import Container from "./hero.style";
const HeroComponent = () => {
  const { t, locale, setLocale } = useTranslation();

  return (
    <Container>
      <section
        id="home"
        className={`started ${locale === "ar" ? "rtl" : "ltr"}`}
      >
        <div className="content">
          <h5 className="content_title">
            {t("hero_title")}
            <span className="d-block fw-bold">PSMAP</span>
          </h5>
          <p
            className="content_desc mb-0"
            dangerouslySetInnerHTML={{ __html: t("hero_desc") }}
          ></p>
          <a className="get__start">{t("global_btn")}</a>
        </div>
      </section>
    </Container>
  );
};

export default HeroComponent;
