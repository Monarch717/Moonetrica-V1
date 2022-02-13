import AppBar from "@mui/material/AppBar";
// @mui material components
import Grid from "@mui/material/Grid";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { Card, LinearProgress, Stack } from "@mui/material";

// Moonetrica Dashboard React base styles
import breakpoints from "assets/theme/base/breakpoints";

// Moonetrica Dashboard React components
import VuiBox from "components/VuiBox";

// Moonetrica Dashboard icons
import allCoin from "assets/images/small-logos/all-coin.png";
import EthLogo from "assets/images/small-logos/icons8-ethereum.png";
import PolygonLogo from "assets/images/small-logos/icon-polygon.png";

// Moonetrica Dashboard React example components
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { useEffect, useState } from "react";
import PriceCardList from "../PriceCardList";
import PortfolioExposure from "../PortfolioExposure";
import AssetAllocation from "../AssetAllocation";
import Wallet from "../wallet";
import DefiNames from "../DefiNames";
import { useSelector } from "react-redux";
import NoDataAssets from "../NoDataAssets";


function ProtocolTab() {
  const [tabsOrientation, setTabsOrientation] = useState("horizontal");
  const [tabValue, setTabValue] = useState(0);
  const { address, Id } = useSelector(state => state.app.wallet);
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
            <Tab label="All" icon={<img src={allCoin} />} value={0} />
            <Tab label="Ethereum" icon={<img src={EthLogo} />} value={1} />
            <Tab label="BSC" icon={<img src={EthLogo} />} value={2} />
            <Tab label="Polygon" icon={<img src={PolygonLogo} />} value={3} />
          </Tabs>
        </AppBar>
      </Grid>
      {tabValue === 0 &&
      (address !== null ?
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
            <Wallet />
          </VuiBox>
          <VuiBox mb={3}>
            <DefiNames />
          </VuiBox>
        </Grid> :
        <Grid>
          <NoDataAssets />
        </Grid>)
      }
      {tabValue === 1 && (address !== null ?<PriceCardList />:<NoDataAssets />)}
      {tabValue === 2 && (address !== null ?<PriceCardList />:<NoDataAssets />)}
      {tabValue === 3 && (address !== null ?<PriceCardList />:<NoDataAssets />)}
    </VuiBox>
  );
}

export default ProtocolTab;
