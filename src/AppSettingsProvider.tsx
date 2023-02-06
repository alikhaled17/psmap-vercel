import React from "react";
import styled from "styled-components";

import useTranslation from "./app/hooks/useTranslation";

type Props = {
  children: React.ReactNode;
  locale: string;
};

function AppSettingsProvider({ children, locale }: Props): JSX.Element {
  const Container = styled.main`
    direction: ${() => (locale ? "rtl" : "ltr")};
    text-align: ${() => (locale ? "right" : "left")};
  `;

  return <Container>{children}</Container>;
}

export default AppSettingsProvider;
