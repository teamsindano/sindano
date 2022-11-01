import React from "react";
import { ThemeProvider } from "styled-components";

/**
 * The CSS Themes
 * @author [Sam](https://github.com/Samm96)
 */

const theme = {
    colors: {
        primary_background: "#f5f5f5",
        secondary_background: "#bcaec6",
        default_text_color: "#000000",
        alt_text_white: "#ffff",
        default_button_pink: "#ec1e7b",
        default_component_blue: "#283592",
        pink_opacity: "rgba(236, 30, 123, 10%)",
    },

    fonts: {
        header: {
            font_family: ["League Spartan", "sans-serif"],
            sizes: {
                header_small_default: "52px",
                header_medium: "56px",
                header_large: "68px",
            },
            weights: "700",
        },

        text: {
            font_family: ["Open Source Sans", "sans-serif"],
            sizes: {
                text_xsmall: "12px",
                text_small: "14px",
                text_medium: "16px",
                text_large_default: "20px",
            },
            weights: {
                black: "800",
                bold: "700",
                semi_bold: "600",
                normal: "400",
            },
            styles: "italic"
        },
    }
}