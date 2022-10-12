import { Checkbox, TableCell, TableRow, TextField } from '@mui/material';
import React from 'react'

const tableCell = {
  border: "1px solid rgba(224,224,224,1",
  borderCollapse:'collapse',
  padding:'7px 5px '
};
const AddRow = () => {
  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell style={tableCell} component="th" scope="row">
        <Checkbox size="large" style={{ padding: "2px 5px" }} />
      </TableCell>
      <TableCell style={tableCell}>
        <TextField
          style={{ width: "100%" }}
          inputProps={{ style: {  fontSize:'1.3rem', padding: "10px 5px" } }}
        />
      </TableCell>
      <TableCell style={tableCell}>
        <TextField
          style={{ width: "100%" }}
          inputProps={{ style: { padding: "10px 5px" ,fontSize:'1.3rem'} }}
        />
      </TableCell>
    </TableRow>
  );
}

export default AddRow