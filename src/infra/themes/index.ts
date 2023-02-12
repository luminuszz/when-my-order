import { extendTheme } from "native-base";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
  },

  fontConfig: {
    RobotoSlab: {
      400: {
        normal: "RobotoSlab_400Regular",
        italic: "RobotoSlab_400Regular",
      },
      500: {
        normal: "RobotoSlab_500Medium",
        italic: "RobotoSlab_500Medium",
      },
      600: {
        normal: "RobotoSlab_600SemiBold",
        italic: "RobotoSlab_600SemiBold",
      },
    },
  },

  colors: {
    black: "#050506",
    gray: {
      "700": "#434547",
      "400": "#E7ECF7",
    },

    indigo: {
      "400": "#99A8FE",
    },

    red: {
      "100": "#FFEEEE",
    },
  },

  fonts: {
    body: "RobotoSlab",
  },
});

export default theme;
