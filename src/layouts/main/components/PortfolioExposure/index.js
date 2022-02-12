import React from "react";
import VuiBox from "../../../../components/VuiBox";
import colors from "assets/theme/base/colors";
import { Card, Stack, Grid } from "@mui/material";
import VuiTypography from "components/VuiTypography";
import linearGradient from "../../../../assets/theme/functions/linearGradient";
import { FaEllipsisH } from "react-icons/fa";

// Data
import LineChart from "examples/Charts/LineCharts/LineChart";
import BarChart from "examples/Charts/BarCharts/BarChart";
import { lineChartDataDashboard } from "layouts/dashboard/data/lineChartData";
import { lineChartOptionsDashboard } from "layouts/dashboard/data/lineChartOptions";
import { barChartDataDashboard } from "layouts/dashboard/data/barChartData";
import { barChartOptionsDashboard } from "layouts/dashboard/data/barChartOptions";

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
          <Grid container spacing="18px">
            <Grid item xs={12} lg={6} xl={6}>
              <BarChart
                barChartData={barChartDataDashboard}
                barChartOptions={barChartOptionsDashboard}
              />
            </Grid>
            <Grid item xs={12} lg={6} xl={6}>

            </Grid>
          </Grid>
        </VuiBox>


      </VuiBox>
    </Card>
  );
}

export default PortfolioExposure;