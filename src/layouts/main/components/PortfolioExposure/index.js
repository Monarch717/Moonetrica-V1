import React from "react";
import VuiBox from "../../../../components/VuiBox";
import colors from "assets/theme/base/colors";
import { Card, Stack, Grid } from "@mui/material";
import VuiTypography from "components/VuiTypography";
import linearGradient from "../../../../assets/theme/functions/linearGradient";
import { FaEllipsisH } from "react-icons/fa";
import { PieChart } from "react-minimal-pie-chart";

// Data
import LineChart from "examples/Charts/LineCharts/LineChart";
import BarChart from "examples/Charts/BarCharts/BarChart";
import CoinIcon from "../../../../assets/images/logos/moonetrica_coin_logo.png";
import VuiProgress from "../../../../components/VuiProgress";

function PortfolioExposure() {

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
            Portfolio Exposure
          </VuiTypography>

        </VuiBox>
        <VuiBox
          mb={3}
        >
          <Grid container spacing="18px" sx={{ paddingX: "2em" , display:'flex', justifyContent:'space-between'}}>
            <Grid item xs={12} lg={6} xl={6}>
              <PieChart
                center={[50, 50]}
                radius={50}
                lineWidth={50}
                paddingAngle={3}
                startAngle={120}
                data={[
                  { title: "One", value: 10, color: "#2697FF" },
                  { title: "Two", value: 15, color: "#FF7ECB" },
                  { title: "Three", value: 20, color: "#FF951A" },
                  { title: "Four", value: 25, color: "#F5CC3C" },
                  { title: "Five", value: 30, color: "#BC38F7" },
                  { title: "Six", value: 35, color: "#3CF5BC" },
                ]}
              />
            </Grid>
            <Grid item xs={12} lg={5} xl={5}>
              <VuiBox mb={3}>
                <Grid container spacing={3} alignItems={"center"}>
                  <Grid item xs={5} md={5} lg={5} xl={5}>
                    <VuiBox display="flex" alignItems="center">
                      <img src={CoinIcon} />
                      <VuiTypography pl="16px" color="white" variant="button" fontWeight="bold">
                        OMEN
                      </VuiTypography>
                    </VuiBox>
                  </Grid>
                  <Grid item xs={7} md={7} lg={7} xl={7}>
                    <VuiTypography pl="16px" color="white" variant="button" fontWeight="bold">
                      80%
                    </VuiTypography>
                  </Grid>
                </Grid>
              </VuiBox>
              <VuiBox mb={3}>
                <Grid container spacing={3} alignItems={"center"}>
                  <Grid item xs={5} md={5} lg={5} xl={5}>
                    <VuiBox display="flex" alignItems="center">
                      <img src={CoinIcon} />
                      <VuiTypography pl="16px" color="white" variant="button" fontWeight="bold">
                        WMATIC
                      </VuiTypography>
                    </VuiBox>
                  </Grid>
                  <Grid item xs={7} md={7} lg={7} xl={7}>
                    <VuiTypography pl="16px" color="white" variant="button" fontWeight="bold">
                      75%
                    </VuiTypography>
                  </Grid>
                </Grid>
              </VuiBox>
              <VuiBox mb={3}>
                <Grid container spacing={3} alignItems={"center"}>
                  <Grid item xs={5} md={5} lg={5} xl={5}>
                    <VuiBox display="flex" alignItems="center">
                      <img src={CoinIcon} />
                      <VuiTypography pl="16px" color="white" variant="button" fontWeight="bold">
                        MATIC
                      </VuiTypography>
                    </VuiBox>
                  </Grid>
                  <Grid item xs={7} md={7} lg={7} xl={7}>
                    <VuiTypography pl="16px" color="white" variant="button" fontWeight="bold">
                      55%
                    </VuiTypography>
                  </Grid>
                </Grid>
              </VuiBox>
              <VuiBox mb={3}>
                <Grid container spacing={3} alignItems={"center"}>
                  <Grid item xs={5} md={5} lg={5} xl={5}>
                    <VuiBox display="flex" alignItems="center">
                      <img src={CoinIcon} />
                      <VuiTypography pl="16px" color="white" variant="button" fontWeight="bold">
                        QUICK
                      </VuiTypography>
                    </VuiBox>
                  </Grid>
                  <Grid item xs={7} md={7} lg={7} xl={7}>
                    <VuiTypography pl="16px" color="white" variant="button" fontWeight="bold">
                      25%
                    </VuiTypography>
                  </Grid>
                </Grid>
              </VuiBox>
              <VuiBox mb={3}>
                <Grid container spacing={3} alignItems={"center"}>
                  <Grid item xs={5} md={5} lg={5} xl={5}>
                    <VuiBox display="flex" alignItems="center">
                      <img src={CoinIcon} />
                      <VuiTypography pl="16px" color="white" variant="button" fontWeight="bold">
                        TITAN
                      </VuiTypography>
                    </VuiBox>
                  </Grid>
                  <Grid item xs={7} md={7} lg={7} xl={7}>
                    <VuiTypography pl="16px" color="white" variant="button" fontWeight="bold">
                      12%
                    </VuiTypography>
                  </Grid>
                </Grid>
              </VuiBox>
              <VuiBox mb={3}>
                <Grid container spacing={3} alignItems={"center"}>
                  <Grid item xs={5} md={5} lg={5} xl={5}>
                    <VuiBox display="flex" alignItems="center">
                      <img src={CoinIcon} />
                      <VuiTypography pl="16px" color="white" variant="button" fontWeight="bold">
                        Others
                      </VuiTypography>
                    </VuiBox>
                  </Grid>
                  <Grid item xs={7} md={7} lg={7} xl={7}>
                    <VuiTypography pl="16px" color="white" variant="button" fontWeight="bold">
                      2%
                    </VuiTypography>
                  </Grid>
                </Grid>
              </VuiBox>
            </Grid>
          </Grid>
        </VuiBox>


      </VuiBox>
    </Card>
  );
}

export default PortfolioExposure;