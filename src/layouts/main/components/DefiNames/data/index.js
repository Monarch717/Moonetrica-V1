/*!

Moonetrica Dashboard - v1.0.0

*/

/* eslint-disable react/prop-types */
// @mui material components
import Icon from "@mui/material/Icon";

// Moonetrica Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiProgress from "components/VuiProgress";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// Images
import AdobeXD from "examples/Icons/AdobeXD";
import Atlassian from "examples/Icons/Atlassian";
import Slack from "examples/Icons/Slack";
import Spotify from "examples/Icons/Spotify";
import Jira from "examples/Icons/Jira";
import Invision from "examples/Icons/Invision";
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import logoInvesion from "assets/images/small-logos/logo-invision.svg";
import logoJira from "assets/images/small-logos/logo-jira.svg";
import logoSlack from "assets/images/small-logos/logo-slack.svg";
import logoWebDev from "assets/images/small-logos/logo-webdev.svg";
import logoXD from "assets/images/small-logos/logo-xd.svg";
import coinLogo from "assets/images/logos/moonetrica_coin_logo.png";

function Completion({ value, color }) {
  return (
    <VuiBox display="flex" flexDirection="column" alignItems="flex-start">
      <VuiTypography variant="button" color="white" fontWeight="medium" mb="4px">
        {value}%&nbsp;
      </VuiTypography>
      <VuiBox width="8rem">
        <VuiProgress value={value} color={color} sx={{ background: "#2D2E5F" }} label={false} />
      </VuiBox>
    </VuiBox>
  );
}

const upIcon = (
  <ArrowDropDownIcon color="white" fontWeight="bold" fontSize="30px"/>
);
const downIcon = (<ArrowDropUpIcon color="white" fontWeight="bold" fontSize="30px"/>);


export default {
  columns: [
    { name: "Asset", align: "left" },
    { name: "Price", align: "left" },
    { name: "Balance", align: "left" },
    { name: "24h changes", align: "left" },
    { name: "Value", align: "left" },
    { name: "", align: "right" },
  ],

  rows: [
    {
      Asset: (
        <VuiBox display="flex" alignItems="center">
          <img src={coinLogo} />
          <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
            WMATIC + OMEN
          </VuiTypography>
        </VuiBox>
      ),
      Price: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          2109.5
        </VuiTypography>
      ),
      Balance: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          7.735 OMEN
        </VuiTypography>
      ),
      "24h changes": (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          788.14%
        </VuiTypography>
      ),
      Value: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          $4,550.983
        </VuiTypography>
      ),
      "":upIcon,
    },
    {
      Asset: (
        <VuiBox display="flex" alignItems="center">
          <img src={coinLogo} />
          <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
            Chakra Moonetrica Version
          </VuiTypography>
        </VuiBox>
      ),
      Price: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          $14,000
        </VuiTypography>
      ),
      Balance: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          Working
        </VuiTypography>
      ),
      "24h changes": (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          Working
        </VuiTypography>
      ),
      Value: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          Working
        </VuiTypography>
      ),
      "":downIcon,
    },
  ],
};
