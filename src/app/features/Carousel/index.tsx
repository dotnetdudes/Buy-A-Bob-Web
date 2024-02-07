/**
 *
 * Carousel
 *
 */
// import { messages } from './messages';
import { useTranslation } from "react-i18next";
import * as React from "react";

interface Props {}

export function Carousel(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <div>
      {t("hey")}
      {/*  {t(...messages.someThing())}  */}
    </div>
  );
}
