import {addDecorator} from "@storybook/react";
import {RouterDecorator} from "../src/shared/storybook/RouterDecorator";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

addDecorator(RouterDecorator)
