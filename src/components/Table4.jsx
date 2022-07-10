import React from 'react'
import Table from '@mui/material/Table'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

function Table4() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell component="th" scope="row">
              ID
            </TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Surname</TableCell>
            <TableCell align="right">Telephone</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">IBAN</TableCell>
            <TableCell align="right">Company</TableCell>
          </TableRow>
        </TableHead>
      </Table>
    </TableContainer>
  )
}

export default Table4
