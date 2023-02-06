import React, { createContext, useEffect, useState } from "react";

export const defaultLocale = "en";
export const locales = ["ar", "en"];
export const LanguageContext = createContext([]);

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [locale, setLocale] = useState<"en" | "ar">("en");

  useEffect(() => {
    console.log(locale);
  }, [locale]);

  return (
    <LanguageContext.Provider value={[locale as never, setLocale as never]}>
      <div style={{ direction: locale === "en" ? "ltr" : "rtl" }}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};
