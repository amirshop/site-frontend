import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  // plugins: [require("flowbite/plugin")],
  theme: {
    extend: {
      colors: {
        green: {
          "50": "#fef6ee",
          "100": "#fee9d6",
          "200": "#fbd0ad",
          "300": "#f9af78",
          "400": "#f58342",
          "500": "#f26522",
          "600": "#e34813",
          "700": "#bc3412",
          "800": "#962b16",
          "900": "#792615",
          "950": "#411009",
        },
      },
    },
  },
};
