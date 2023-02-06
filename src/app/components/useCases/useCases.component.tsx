import Image from "next/image";
import React from "react";
import Container from "./useCases.style";
import useTranslation from "@/app/hooks/useTranslation";

const UseCasesComponent = () => {
  const { t, locale, setLocale } = useTranslation();

  return (
    <Container>
      <div>
        <div className={`useCases__section ${locale === "ar" ? "rtl" : "ltr"}`}>
          <div className="usecases__img">
            <Image
              src="https://alikhaled-meem.github.io/psmap_page/assets/images/useCases/icon.svg"
              alt="Picture of the author"
              width={300}
              height={300}
              className="img-fluid "
            />
          </div>
          <div className="useCases__content">
            <p className={`useCases__title ${locale === "ar" ? "rtl" : "ltr"}`}>
              {t("usecases_title")}
            </p>
            <p className="landing__desc">{t("usecases_desc")}</p>
            <div>
              <p className="provide_text">{t("usecases_question")}</p>
              <ul className="plans__card--list">
                <li className="plans__card--list_item icon_color">
                  <Image
                    src="https://alikhaled-meem.github.io/psmap_page/assets/images/useCases/check__mark.svg"
                    alt="Picture of the author"
                    width={10}
                    height={10}
                    className="img-fluid m-2"
                  />
                  <small> {t("usecases_items")[0]}</small>
                </li>
                <li className="plans__card--list_item icon_color">
                  <Image
                    src="https://alikhaled-meem.github.io/psmap_page/assets/images/useCases/check__mark.svg"
                    alt="Picture of the author"
                    width={10}
                    height={10}
                    className="img-fluid m-2"
                  />
                  <small>{t("usecases_items")[1]}</small>
                </li>
                <li className="plans__card--list_item icon_color">
                  <Image
                    src="https://alikhaled-meem.github.io/psmap_page/assets/images/useCases/check__mark.svg"
                    alt="Picture of the author"
                    width={10}
                    height={10}
                    className="img-fluid m-2"
                  />
                  <small>{t("usecases_items")[2]}</small>
                </li>
                <li className="plans__card--list_item icon_color">
                  <Image
                    src="https://alikhaled-meem.github.io/psmap_page/assets/images/useCases/check__mark.svg"
                    alt="Picture of the author"
                    width={10}
                    height={10}
                    className="img-fluid m-2"
                  />
                  <small>{t("usecases_items")[3]}</small>
                </li>
                <li className="plans__card--list_item icon_color">
                  <Image
                    src="https://alikhaled-meem.github.io/psmap_page/assets/images/useCases/check__mark.svg"
                    alt="Picture of the author"
                    width={10}
                    height={10}
                    className="img-fluid m-2"
                  />
                  <small>{t("usecases_items")[4]}</small>
                </li>
              </ul>
              <a className="useCases__get__start">{t("global_btn")}</a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default UseCasesComponent;
