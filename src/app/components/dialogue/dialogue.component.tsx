import Image from "next/image";
import React from "react";
import Container from "./dialogue.style";
import useTranslation from "@/app/hooks/useTranslation";

const DialogueComponent = () => {
  const { t, locale, setLocale } = useTranslation();

  return (
    <Container>
      <section
        id="dialogue"
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
              src="https://alikhaled-meem.github.io/psmap_page/assets/images/dialogue/safety.svg"
              alt="Picture of the author"
              width={100}
              height={100}
              className="img-fluid"
            />
            <Image
              src="https://alikhaled-meem.github.io/psmap_page/assets/images/dialogue/Quality.svg"
              alt="Picture of the author"
              width={100}
              height={100}
              className="img-fluid"
            />
            <Image
              src="https://alikhaled-meem.github.io/psmap_page/assets/images/dialogue/Reliability.svg"
              alt="Picture of the author"
              width={100}
              height={100}
              className="img-fluid"
            />
          </div>
        </div>
      </section>
    </Container>
  );
};

export default DialogueComponent;
