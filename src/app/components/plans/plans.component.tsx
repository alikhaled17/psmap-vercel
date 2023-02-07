import React from "react";
import Container from "./plans.style";
import useTranslation from "@/app/hooks/useTranslation";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PlansComponent = () => {
  const { t, locale, setLocale } = useTranslation();

  return (
    <Container>
      <section id="plans" className={`plan ${locale === "ar" ? "rtl" : "ltr"}`}>
        <h3 className="plans__title">{t("plans_title")}</h3>
        <div className="plans">
          {t("plans_cards").map((c: any, i: number) => {
            return (
              <div className={`plans__card ${i % 2 && "active"}`}>
                <h4 className="plans__card--primary-title">{c.title}</h4>
                <p className="plans__card--desc">{c.desc}</p>
                <h4
                  className="plans__card--second-title"
                  dangerouslySetInnerHTML={{ __html: c.price }}
                ></h4>
                <button className="plans__card--btn">{t("global_btn")}</button>
                <h4 className="plans__card--second-title two">{c.note}</h4>
                <ul className="plans__card--list">
                  {c.features.map((f: string) => {
                    return (
                      <li
                        className="plans__card--list_item"
                        style={{ direction: locale === "ar" ? "rtl" : "ltr" }}
                      >
                        <FontAwesomeIcon className="m-2" icon={faCheck} />
                        <small>{f}</small>
                      </li>
                    );
                  })}
                </ul>
                {c.services.items.length ? (
                  <ul className="plans__card--footer">
                    <li className="plans__card--footer_item">
                      <small>{c.services.title}</small>
                    </li>
                    {c.services.items.map((f: string) => {
                      return (
                        <li className="plans__card--footer_item">
                          <small>{f}</small>
                        </li>
                      );
                    })}
                  </ul>
                ) : null}
              </div>
            );
          })}
        </div>
      </section>
    </Container>
  );
};

export default PlansComponent;
