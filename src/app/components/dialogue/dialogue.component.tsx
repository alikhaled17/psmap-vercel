import Image from "next/image";
import React from "react";
import Container from "./dialogue.style";
import useTranslation from "@/app/hooks/useTranslation";

import safety from "@/app/assets/images/dialogue/safety.svg";
import Reliability from "@/app/assets/images/dialogue/Reliability.svg";
import Quality from "@/app/assets/images/dialogue/Quality.svg";

import safetyAr from "@/app/assets/images/dialogue/safety (1).svg";
import ReliabilityAr from "@/app/assets/images/dialogue/Reliability (1).svg";
import QualityAr from "@/app/assets/images/dialogue/Quality (1).svg";

const DialogueComponent = () => {
  const { t, locale, setLocale } = useTranslation();

  return (
    <Container>
      <section
        id="mindmap"
        className={`dialogue ${locale === "ar" ? "rtl" : "ltr"}`}
      >
        <div className="dialogue__content">
          <p
            className={`dialogue_title ${locale === "ar" ? "rtl" : "ltr"}`}
            dangerouslySetInnerHTML={{ __html: t("dialogue_title") }}
          ></p>
          <p className="dialogue_desc ">{t("dialogue_desc")}</p>
          <div className="dialogue_icons">
            <Image
              src={locale === "ar" ? safetyAr : safety}
              alt="Picture of the author"
              height={26}
            />
            <Image
              src={locale === "ar" ? QualityAr : Quality}
              alt="Picture of the author"
              height={26}
            />
            <Image
              src={locale === "ar" ? ReliabilityAr : Reliability}
              alt="Picture of the author"
              height={26}
            />
          </div>
        </div>
      </section>
    </Container>
  );
};

export default DialogueComponent;
