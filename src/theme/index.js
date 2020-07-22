import { createMuiTheme } from "@material-ui/core/styles";
import { colors } from "./colors";
import { typography } from "./typography";

// const defaultTheme = createMuiTheme();

const muiTheme = createMuiTheme({
  palette: {
    ...colors,
  },
  typography: {
    ...typography,
  },

  // Component style overrides
  overrides: {
    MuiAppBar: {
      root: {
        minHeight: "50px",
      },
    },
    MuiButton: {
      containedSecondary: {
        color: colors.common.white,
        textTransform: "none",
      },
    },
    MuiToolbar: {
      regular: {
        "@media (min-width: 600px)": {
          minHeight: "50px",
          paddingTop: "2px",
          paddingBottom: "2px",
        },
      },
    },
  },
});

export default muiTheme;
