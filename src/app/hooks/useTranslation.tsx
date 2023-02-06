import { useContext } from "react";

import { LanguageContext, defaultLocale } from "@/app/core/LanguageProvider";
import { LangStrings } from "@/app/core/static_data/Strings";

export default function useTranslation(): any {
  const [locale, setLocale] = useContext(LanguageContext);

  function t(key: string) {
    if (!LangStrings[locale][key]) {
      console.warn(`No string '${key}' for locale '${locale}'`);
    }

    return LangStrings[locale][key] || LangStrings[defaultLocale][key] || "";
  }

  return { t, locale, setLocale };
}
