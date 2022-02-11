/*!

Moonetrica Dashboard - v1.0.0

*/

// Moonetrica Dashboard React Base Styles
import borders from "assets/theme/base/borders";

// Moonetrica Dashboard React Helper Functions
import pxToRem from "assets/theme/functions/pxToRem";

const { borderRadius } = borders;

export default {
  styleOverrides: {
    root: {
      borderRadius: borderRadius.xl,
      margin: `${pxToRem(16)} ${pxToRem(16)} 0`,
    },

    media: {
      width: "auto",
    },
  },
};
