import useTranslation from "./hooks/useTranslation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { t, locale, setLocale } = useTranslation();

  return (
    <html lang="en" dir={locale === "ar" ? "rtl" : "ltr"}>
      <body className={locale === "ar" ? "rtl" : "ltr"}>{children}</body>
    </html>
  );
}
