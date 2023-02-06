import Image from "next/image";
import React from "react";
import Container from "./goals.style";
import useTranslation from "@/app/hooks/useTranslation";

const GoalsComponent = () => {
  const { t, locale, setLocale } = useTranslation();

  return (
    <Container>
      <div>
        <section
          id="goals"
          className={`goals ${locale === "ar" ? "rtl" : "ltr"}`}
        >
          <div className="goals__content">
            <p className={`goals_title ${locale === "ar" ? "rtl" : "ltr"}`}>
              {t("goals_title")}{" "}
            </p>
            <p className="goals_desc ">{t("goals_desc")}</p>
            <div className="goals__icons">
              <Image
                src="https://alikhaled-meem.github.io/psmap_page/assets/images/goals/Simplicity.svg"
                alt="Picture of the author"
                width={100}
                height={100}
                className="img-fluid"
              />
              <Image
                src="https://alikhaled-meem.github.io/psmap_page/assets/images/goals/Documentation.svg"
                alt="Picture of the author"
                width={100}
                height={100}
                className="img-fluid"
              />
            </div>
          </div>
        </section>
      </div>
    </Container>
  );
};

export default GoalsComponent;
