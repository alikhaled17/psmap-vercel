import Image from "next/image";
import React from "react";
import Container from "./goals.style";
import useTranslation from "@/app/hooks/useTranslation";

import Simplicity from "@/app/assets/images/goals/Simplicity.svg";
import Documantations from "@/app/assets/images/goals/Documentation.svg";

import SimplicityAr from "@/app/assets/images/goals/Simplicity (1).svg";
import DocumantationsAr from "@/app/assets/images/goals/Documentation (1).svg";

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
                src={locale === "ar" ? SimplicityAr : Simplicity}
                alt="Picture of the author"
                height={26}
              />
              <Image
                src={locale === "ar" ? DocumantationsAr : Documantations}
                alt="Picture of the author"
                height={26}
              />
            </div>
          </div>
        </section>
      </div>
    </Container>
  );
};

export default GoalsComponent;
