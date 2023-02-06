import React from "react";
import Container from "./report.style";
import useTranslation from "@/app/hooks/useTranslation";

const ReportComponent = () => {
  const { t, locale, setLocale } = useTranslation();

  return (
    <Container>
      <div>
        <section
          id="report"
          className={`report ${locale === "ar" ? "rtl" : "ltr"}`}
        >
          <div className="report__content">
            <p className={`report_title ${locale === "ar" ? "rtl" : "ltr"}`}>
              {t("report_title")}
            </p>
            <p className="report_desc ">{t("report_desc")}</p>
          </div>
        </section>
      </div>
    </Container>
  );
};

export default ReportComponent;
