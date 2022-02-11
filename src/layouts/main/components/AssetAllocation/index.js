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
          <VuiBox
            display="flex"
            justifyContent="center"
            alignItems="center"
            bgColor="#22234B"
            sx={{ width: "37px", height: "37px", cursor: "pointer", borderRadius: "12px" }}
          >
            <FaEllipsisH color={info.main} size="18px" />
          </VuiBox>
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
          <Grid item xs={4} lg={3} xl={3}>
            <BarChart
              barChartData={barChartDataDashboard}
              barChartOptions={barChartOptionsDashboard}
            />
          </Grid>
          <Grid item xs={8} lg={9} xl={9}>
            
          </Grid>
        </VuiBox>


      </VuiBox>
    </Card>
  );
}

export default AssetAllocation;