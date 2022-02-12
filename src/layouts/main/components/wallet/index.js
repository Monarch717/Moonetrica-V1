import * as React from "react";

// @mui material components
import { Card, Stack, Grid } from "@mui/material";
import Icon from "@mui/material/Icon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { BsCheckCircleFill } from "react-icons/bs";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";


// Moonetrica Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

// Moonetrica Dashboard Materail-UI example components
import Table from "examples/Tables/Table";

// Data
import data from "./data";

function Wallet() {
  const { columns, rows } = data();
  const [menu, setMenu] = React.useState(null);

  const openMenu = ({ currentTarget }) => setMenu(currentTarget);
  const closeMenu = () => setMenu(null);

  //check box
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <Card
      sx={{
        height: "100% !important",
      }}
    >
      <VuiBox display="flex" justifyContent="space-between" alignItems="center" mb="32px">
        <VuiBox mb="auto" width={"70%"}>
          <Grid container alignItems={'baseline'} >
              <VuiTypography color="white" variant="lg" fontSize={'20'} mb="6px" fontWeight="bold" width={"5em"} gutterBottom>
                Wallet
              </VuiTypography>
              <FormGroup>
                <FormControlLabel color={"white"} control={<Checkbox checked={checked} onChange={handleChange} />}
                                  label="Hide small balances" />
              </FormGroup>
          </Grid>
        </VuiBox>
        <VuiBox color="white" px={2}>
          Assets <b style={{ color: "#FFC519", fontWeight: "bold" }}>  &nbsp;$5.066</b>
        </VuiBox>
      </VuiBox>
      <VuiBox
        sx={{
          "& th": {
            borderBottom: ({ borders: { borderWidth }, palette: { grey } }) =>
              `${borderWidth[1]} solid ${grey[700]}`,
          },
          "& .MuiTableRow-root:not(:last-child)": {
            "& td": {
              borderBottom: ({ borders: { borderWidth }, palette: { grey } }) =>
                `${borderWidth[1]} solid ${grey[700]}`,
            },
          },
        }}
      >
        <Table columns={columns} rows={rows} />
      </VuiBox>
    </Card>
  );
}

export default Wallet;
