/*
  Typography specifications
 */

import { colors } from "./colors";

export const typography = {
  fontFamily: "Roboto",

  h1: {
    fontSize: "2rem",
    fontWeight: "bold",
    lineHeight: 2.5,
    paddingTop: "8px",
    paddingBottom: "8px",
    letterSpacing: "normal",
    color: colors.common.black,
  },
  h2: {
    fontSize: "1.75rem",
    fontWeight: "bold",
    lineHeight: 1.5,
    paddingTop: "2px",
    paddingBottom: "0px",
    letterSpacing: "normal",
    color: colors.common.white,
  },
  h4: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    lineHeight: 1.5,
    paddingTop: "5px",
    paddingBottom: "4px",
    letterSpacing: "normal",
    color: colors.common.black,
  },
  h5: {
    fontSize: "1rem",
    fontWeight: "600",
    lineHeight: 1.5,
    paddingTop: "5px",
    paddingBottom: "4px",
    letterSpacing: "normal",
    color: colors.common.black,
  },
  subtitle1: {
    fontSize: "1rem",
    fontWeight: 500,
    lineHeight: "normal",
    letterSpacing: "normal",
    color: colors.grey[400],
    paddingBottom:"2px"
  },
  subtitle2: {
    fontSize: "0.875rem",
    fontWeight: 500,
    lineHeight: "normal",
    letterSpacing: "normal",
    color: colors.grey[500],
  },
  body1: {
    fontSize: "1rem",
    fontWeight: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    color: colors.common.black,
  },
  body2: {
    fontSize: "0.875rem",
    fontWeight: "normal",
    lineHeight: 1.29,
    letterSpacing: "normal",
    color: colors.common.black,
  },
};
