import React from "react";

import { useState } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { BsCheckCircleFill } from "react-icons/bs";

// Moonetrica Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

// Moonetrica Dashboard Materail-UI example components
import Table from "examples/Tables/Table";


// Data

import UnderlyingAssets from "../UnderlyingAssets";
import authorsTableData from "./data";
import projectsTableData from "./data";


function DefiNames() {
  const { columns, rows } = authorsTableData;
  const { columns: prCols, rows: prRows } = projectsTableData;

  return (
    <Card>
      <VuiBox display="flex" justifyContent="space-between" alignItems="center">
        <VuiTypography variant="lg" color="white" fontWeight={"bold"}>
          DEFI platform name
        </VuiTypography>
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
        <Table columns={prCols} rows={prRows} />
      </VuiBox>
      <UnderlyingAssets />
    </Card>
  );
}

export default DefiNames;
