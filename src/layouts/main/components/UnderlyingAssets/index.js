import React from "react";
import Card from "@mui/material/Card";
import VuiBox from "../../../../components/VuiBox";
import VuiTypography from "../../../../components/VuiTypography";
import Table from "../../../../examples/Tables/Table";
import authorsTableData from "../DefiNames/data";
import projectsTableData from "../DefiNames/data";

function UnderlyingAssets() {
  const { columns, rows } = authorsTableData;
  const { columns: prCols, rows: prRows } = projectsTableData;
  return (
    <Card>
      <VuiBox display="flex" justifyContent="space-between" alignItems="center">
        <VuiTypography variant="lg" color="white" fontWeight={"bold"}>
          Underlying Assets
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
    </Card>
  );

}

export default UnderlyingAssets;