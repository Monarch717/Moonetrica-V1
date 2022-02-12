import React from "react";
import VuiBox from "../../../../components/VuiBox";
import colors from "assets/theme/base/colors";
import { Card, Stack, Grid } from "@mui/material";
import VuiTypography from "components/VuiTypography";
import linearGradient from "../../../../assets/theme/functions/linearGradient";
import { FaEllipsisH } from "react-icons/fa";
import VuiProgress from "components/VuiProgress";
import CoinIcon from "assets/images/logos/moonetrica_coin_logo.png";
// Data
import LineChart from "examples/Charts/LineCharts/LineChart";
import BarChart from "examples/Charts/BarCharts/BarChart";
import AdobeXD from "../../../../examples/Icons/AdobeXD";

function AssetAllocation() {

  const { info, gradients } = colors;
  const { cardContent } = gradients;
  return (
    <Card
      sx={{
        height: "100%",
        background: linearGradient(
          gradients.cardDark.main,
          gradients.cardDark.state,
          gradients.cardDark.deg,
        ),
      }}
    >
      <VuiBox sx={{ width: "100%" }}>
        <VuiBox
          display="flex"
          alignItems="center"
          justifyContent="space-beetween"
          sx={{ width: "100%" }}
          mb="40px"
        >
          <VuiTypography variant="lg" color="white" mr="auto" fontWeight="bold">
            Asset Allocation
          </VuiTypography>

        </VuiBox>
        <VuiBox
          display="flex"
          sx={({ breakpoints }) => ({
            [breakpoints.up("xs")]: {
              flexDirection: "column",
              gap: "16px",
              justifyContent: "center",
              alignItems: "center",
            },
            [breakpoints.up("md")]: {
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
            },
          })}
        >
          <Grid item xs={12} lg={12} xl={12}>
            <VuiBox mb={5}>
              <Grid container spacing={3} alignItems={"center"}>
                <Grid item xs={3} md={3} lg={3} xl={3}>
                  <VuiBox display="flex" alignItems="center">
                    <img src={CoinIcon} />
                    <VuiTypography pl="16px" color="white" variant="button" fontWeight="bold">
                      OMEN
                    </VuiTypography>
                  </VuiBox>
                </Grid>
                <Grid item xs={9} md={9} lg={9} xl={9}>
                  <VuiProgress value="76" color={'warning'} />
                </Grid>
              </Grid>
            </VuiBox>
            <VuiBox mb={5}>
              <Grid container spacing={3} alignItems={"center"}>
                <Grid item xs={3} md={3} lg={3} xl={3}>
                  <VuiBox display="flex" alignItems="center">
                    <img src={CoinIcon} />
                    <VuiTypography pl="16px" color="white" variant="button" fontWeight="bold">
                      WMATIC
                    </VuiTypography>
                  </VuiBox>
                </Grid>
                <Grid item xs={9} md={9} lg={9} xl={9}>
                  <VuiProgress value="55" color={'warning'} />
                </Grid>
              </Grid>
            </VuiBox>
            <VuiBox mb={5}>
              <Grid container spacing={3} alignItems={"center"}>
                <Grid item xs={3} md={3} lg={3} xl={3}>
                  <VuiBox display="flex" alignItems="center">
                    <img src={CoinIcon} />
                    <VuiTypography pl="16px" color="white" variant="button" fontWeight="bold">
                      MATIC
                    </VuiTypography>
                  </VuiBox>
                </Grid>
                <Grid item xs={9} md={9} lg={9} xl={9}>
                  <VuiProgress value="35" color={'warning'} />
                </Grid>
              </Grid>
            </VuiBox>
            <VuiBox mb={5}>
              <Grid container spacing={3} alignItems={"center"}>
                <Grid item xs={3} md={3} lg={3} xl={3}>
                  <VuiBox display="flex" alignItems="center">
                    <img src={CoinIcon} />
                    <VuiTypography pl="16px" color="white" variant="button" fontWeight="bold">
                      QUICK
                    </VuiTypography>
                  </VuiBox>
                </Grid>
                <Grid item xs={9} md={9} lg={9} xl={9}>
                  <VuiProgress value="25" color={'warning'} />
                </Grid>
              </Grid>
            </VuiBox>
            <VuiBox mb={5}>
              <Grid container spacing={3} alignItems={"center"}>
                <Grid item xs={3} md={3} lg={3} xl={3}>
                  <VuiBox display="flex" alignItems="center">
                    <img src={CoinIcon} />
                    <VuiTypography pl="16px" color="white" variant="button" fontWeight="bold">
                      TITAN
                    </VuiTypography>
                  </VuiBox>
                </Grid>
                <Grid item xs={9} md={9} lg={9} xl={9}>
                  <VuiProgress value="12" color={'warning'} />
                </Grid>
              </Grid>
            </VuiBox>
            <VuiBox mb={5}>
              <Grid container spacing={3} alignItems={"center"}>
                <Grid item xs={3} md={3} lg={3} xl={3}>
                  <VuiBox display="flex" alignItems="center">
                    <img src={CoinIcon} />
                    <VuiTypography pl="16px" color="white" variant="button" fontWeight="bold">
                      Others
                    </VuiTypography>
                  </VuiBox>
                </Grid>
                <Grid item xs={9} md={9} lg={9} xl={9}>
                  <VuiProgress value="2" color={'warning'} />
                </Grid>
              </Grid>
            </VuiBox>
          </Grid>
        </VuiBox>


      </VuiBox>
    </Card>
  );
}

export default AssetAllocation;