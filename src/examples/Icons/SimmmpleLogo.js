/*!

Moonetrica Dashboard - v1.0.0

*/

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

import logo from "assets/images/logos/moonetrica_logo.png"
function SimmmpleLogo({ size }) {
  return (
    <img src={logo}/>
  );
}
// Setting default values for the props of SimmmpleLogo
SimmmpleLogo.defaultProps = {
  color: "dark",
  size: "16px",
};

// Typechecking props for the SimmmpleLogo
SimmmpleLogo.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
    "light",
    "white",
  ]),
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default SimmmpleLogo;
