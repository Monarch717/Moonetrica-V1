import PriceCard from "../PriceCard";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

import noDataLogo from "assets/images/logos/moonetrica_no_data_logo.png";
// Moonetrica Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "../../../../components/VuiTypography";


function NoDataAssets(){
  return (
    <VuiBox py={1}>
      <VuiBox mt={10}>
        <Grid container textAlign={'center'} display={'flex'} flexDirection={'column'}>
          <img src={noDataLogo} className={'noDataLogo'}/>
          <h5 className={'noDataTitle'}>
            No data. Please connect your wallet
          </h5>
        </Grid>
      </VuiBox>
    </VuiBox>
  );
}

export default NoDataAssets;