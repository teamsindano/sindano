import React from "react";
import { ThemeProvider } from "styled-components";

/**
 * The CSS Themes
 * @author [Sam](https://github.com/Samm96)
 *
 * To use the 'ThemeProvider', you need to install the following:
 *
 * `npm install styled-components`
 */

export const theme = {
  colors: {
    primary_background: "#f5f5f5",
    footer_background: "#2D2D2D",
    default_text_color: "#000000",
    alt_text_white: "#ffff",
    default_button_aqua: "#1EA6AE",
    default_component_blue: "#283592",
  },

  fonts: {
    header: {
      font_family: ["League Spartan", "sans-serif"],
      sizes: {
        header_s_default: "52px",
        header_m: "56px",
        header_l: "68px",
      },
      weight: "700",
    },

    text: {
      font_family: ["Open Sauce Sans", "sans-serif"],
      sizes: {
        text_xs: "12px",
        text_s: "14px",
        text_m: "16px",
        text_l_default: "20px",
      },
      weights: {
        black: "800",
        bold: "700",
        semi_bold: "600",
        normal: "400",
      },
      styles: "italic",
    },
  },
};

const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
