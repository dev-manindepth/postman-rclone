import { Box, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'
import AddRow from './AddRow';

const tableCell = {
  border: "1px solid rgba(224,224,224,1",
  borderCollapse:'collapse',
  padding:'7px 5px '
};
const CreateTable = ({text}) => {
  return (
    <Box>
      <Typography>{text}</Typography>
      <Table sx={{ minWidth: '100%' ,border:'1px solid rgba(224,224,224,1' }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={tableCell}></TableCell>
            <TableCell style={tableCell}>KEY</TableCell>
            <TableCell style={tableCell}>VALUE</TableCell>
          
          </TableRow>
        </TableHead>
        <TableBody>
         
            <AddRow/>
         
        </TableBody>
      </Table>
    </Box>
  );
}

export default CreateTable