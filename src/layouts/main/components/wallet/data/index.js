// @mui material components
import Tooltip from "@mui/material/Tooltip";

// Moonetrica Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiAvatar from "components/VuiAvatar";

//Image
import coinLogo from "../../../../../assets/images/logos/moonetrica_coin_logo.png";

export default function data() {
  const avatars = (members) =>
    members.map(([image, name]) => (
      <Tooltip key={name} title={name} placeholder="bottom">
        <VuiAvatar
          src={image}
          alt="name"
          size="xs"
          sx={{
            border: ({ borders: { borderWidth }, palette: { dark } }) =>
              `${borderWidth[2]} solid ${dark.focus}`,
            cursor: "pointer",
            position: "relative",

            "&:not(:first-of-type)": {
              ml: -1.25,
            },

            "&:hover, &:focus": {
              zIndex: "10",
            },
          }}
        />
      </Tooltip>
    ));

  return {
    columns: [
      { name: "Assets", align: "left" },
      { name: "Balances", align: "left" },
      { name: "Price", align: "center" },
      { name: "Value", align: "center" },
    ],

    rows: [
      {
        Assets: (
          <VuiBox display="flex" alignItems="center">
            <img src={coinLogo} />
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              WMATIC
            </VuiTypography>
          </VuiBox>
        ),
        Balances: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
            $14,000
          </VuiTypography>
        ),
        Price: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
            $14,000
          </VuiTypography>
        ),
        Value: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
            $14,000
          </VuiTypography>
        ),
      },
      {
        Assets: (
          <VuiBox display="flex" alignItems="center">
            <img src={coinLogo} />
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              MATIC
            </VuiTypography>
          </VuiBox>
        ),
        Balances: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
            $14,000
          </VuiTypography>
        ),
        Price: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
            $3,000
          </VuiTypography>
        ),
        Value: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
            $14,000
          </VuiTypography>
        ),
      },
    ],
  };
}
