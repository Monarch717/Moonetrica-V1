import PriceCard from "../PriceCard";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Moonetrica Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import colors from "assets/theme/base/colors";

function PriceCardList(){
  return (
    <VuiBox py={1}>
      <VuiBox mb={3}>
        <Grid container spacing={3}>
          <Grid item xs={6} md={2} xl={1}>
            <PriceCard
              title={{ text: "Net worth", fontWeight: "bold" }}
              count="$0"
              percentage={{ color: "success", text: "+$0" }}
            />
          </Grid>
          <Grid item xs={6} md={2} xl={1.2}>
            <PriceCard
              title={{ text: "To be claimed", fontWeight: "bold" }}
              count="$0"
              percentage={{ color: "success", text: "" }}
            />
          </Grid>
          <Grid item xs={6} md={2} xl={1}>
            <PriceCard
              title={{ text: "Total assets", fontWeight: "bold" }}
              count="$0"
              percentage={{ color: "success", text: "" }}
            />
          </Grid>
          <Grid item xs={6} md={2} xl={1}>
            <PriceCard
              title={{ text: "Total debts", fontWeight: "bold" }}
              count="$0"
              percentage={{ color: "success", text: "" }}
            />
          </Grid>
          <Grid item xs={6} md={4} xl={1.5}>
            <PriceCard
              title={{ text: "APR daily/yearly", fontWeight: "bold" }}
              count="7.15/788.14%"
              percentage={{ color: "success", text: "" }}
            />
          </Grid>
          <Grid item xs={6} md={6} xl={2}>
            <PriceCard
              title={{ text: "Prediction Profit daily/yearly", fontWeight: "bold" }}
              count="1.911/11.931"
              percentage={{ color: "success", text: "" }}
            />
          </Grid>
        </Grid>
      </VuiBox>
    </VuiBox>
  );
}

export default PriceCardList;