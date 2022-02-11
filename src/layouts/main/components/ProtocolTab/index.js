/*!

  Moonetrica Dashboard - v1.0.0

*/
import AppBar from "@mui/material/AppBar";
// @mui material components
import Grid from "@mui/material/Grid";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { Card, LinearProgress, Stack } from "@mui/material";
// Images
import burceMars from "assets/images/avatar-simmmple.png";
// Moonetrica Dashboard React base styles
import breakpoints from "assets/theme/base/breakpoints";
import VuiAvatar from "components/VuiAvatar";
// Moonetrica Dashboard React components
import VuiBox from "components/VuiBox";
import PriceCard from "../PriceCard";
// Moonetrica Dashboard React icons
import { IoCube } from "react-icons/io5";
import { IoDocument } from "react-icons/io5";
import { IoBuild } from "react-icons/io5";

// Moonetrica Dashboard React example components
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { useEffect, useState } from "react";
import PriceCardList from "../PriceCardList";
import PortfolioExposure from "../PortfolioExposure";
import AssetAllocation from "../AssetAllocation";

function ProtocolTab() {
  const [tabsOrientation, setTabsOrientation] = useState("horizontal");
  const [tabValue, setTabValue] = useState(0);

  useEffect(() => {
    // A function that sets the orientation state of the tabs.
    function handleTabsOrientation() {
      return window.innerWidth < breakpoints.values.lg
        ? setTabsOrientation("vertical")
        : setTabsOrientation("horizontal");
    }

    /**
     The event listener that's calling the handleTabsOrientation function when resizing the window.
     */
    window.addEventListener("resize", handleTabsOrientation);

    // Call the handleTabsOrientation function to set the state with the initial value.
    handleTabsOrientation();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleTabsOrientation);
  }, [tabsOrientation]);

  const handleSetTabValue = (event, newValue) => setTabValue(newValue);

  return (
    <VuiBox position="relative">
      <Grid item xs={12} md={12} lg={12} xl={12} xxl={12}>
        <AppBar position="static" sx={{ borderBottom: 2, borderColor: "rgba(255, 255, 255, 0.3)" }}>
          <Tabs
            orientation={tabsOrientation}
            value={tabValue}
            onChange={handleSetTabValue}
            sx={{ background: "transparent", display: "flex", justifyContent: "flex-start", paddingBottom: 0 }}
          >
            <Tab label="OVERVIEW" icon={<IoCube color="white" size="16px" />} value={0} />
            <Tab label="TEAMS" icon={<IoDocument color="white" size="16px" />} value={1} />
            <Tab label="PROJECTS" icon={<IoBuild color="white" size="16px" />} value={2} />
          </Tabs>
        </AppBar>
      </Grid>
      {tabValue === 0 &&
      <Grid>
        <PriceCardList />
        <VuiBox
          mb={3}
        >
          <Grid container spacing="18px">
            <Grid item xs={12} md={12} lg={6} xl={6} xxl={6}>
              <PortfolioExposure />
            </Grid>
            <Grid item xs={12} md={12} lg={6} xl={6} xxl={6}>
              <AssetAllocation />
            </Grid>
          </Grid>
        </VuiBox>
        <VuiBox mb={3}>

        </VuiBox>
      </Grid>
      }
      {tabValue === 1 && <PriceCardList />}
      {tabValue === 2 && <PriceCardList />}
    </VuiBox>
  );
}

export default ProtocolTab;
