import { Carousel } from "..";
import { render } from "app/utils/test-utils";
import * as React from "react";

jest.mock("react-i18next", () => ({
  useTranslation: () => {
    return {
      t: (str) => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
}));

describe("<Carousel  />", () => {
  it("should match snapshot", () => {
    const loadingIndicator = render(<Carousel />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
