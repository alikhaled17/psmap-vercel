import Image from "next/image";
import React from "react";
import Container from "./find.style";
import useTranslation from "@/app/hooks/useTranslation";

const FindComponent = () => {
  const { t, locale, setLocale } = useTranslation();

  return (
    <Container>
      <section className="find" id="find">
        <div className="row">
          <div className="col-md-8 col-sm-12 mx-auto d-flex flex-column align-items-center text-center">
            <h2 className="landing__title">{t("find_title")}</h2>
            <p className="knowledge">{t("find_desc")}</p>
          </div>
        </div>
        <div className="find__content">
          <div className="find__card ">
            <div className="col_parent">
              <div className="icon">
                <Image
                  src="https://alikhaled-meem.github.io/psmap_page/assets/images/find/icon.svg"
                  alt="Picture of the author"
                  width={100}
                  height={100}
                  className="img-fluid"
                />
              </div>
              <div className="col_txt">
                <p className="txt_head">{t("find_card_title_3")}</p>
                <p className="txt_subHead">{t("find_card_desc_3")}</p>
                <a className="get__start">{t("global_btn")}</a>
              </div>
            </div>
          </div>
          <div className="find__card ">
            <div className="col_parent">
              <div className="icon">
                <Image
                  src="https://alikhaled-meem.github.io/psmap_page/assets/images/find/icon (1).svg"
                  alt="Picture of the author"
                  width={150}
                  height={100}
                  className="img-fluid"
                />
              </div>
              <div className="col_txt">
                <p className="txt_head">{t("find_card_title_2")}</p>
                <p className="txt_subHead">{t("find_card_desc_2")}</p>
                <a className="get__start">{t("global_btn")}</a>
              </div>
            </div>
          </div>
          <div className="find__card ">
            <div className="col_parent">
              <div className="icon">
                <Image
                  src="https://alikhaled-meem.github.io/psmap_page/assets/images/find/icon (2).svg"
                  alt="Picture of the author"
                  width={150}
                  height={100}
                  className="img-fluid"
                />
              </div>
              <div className="col_txt">
                <p className="txt_head">{t("find_card_title_1")}</p>
                <p className="txt_subHead">{t("find_card_desc_1")}</p>
                <a className="get__start">{t("global_btn")}</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default FindComponent;
