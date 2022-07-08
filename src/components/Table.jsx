import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import InfiniteLoader from 'react-window-infinite-loader'
import { FixedSizeList } from 'react-window'

export default function BasicTable({ Users, height, width }) {
  const itemsCount = 500
  const loadMoreItems = () => console.log('load more items poshel')
  let items = {}
  const isItemLoaded = (index) => !!items[index]
  const Row = ({ index, style }) => {
    return Users.map((user) => (
      <TableRow key={user.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
        <TableCell component="th" scope="row">
          {user.id}
        </TableCell>
        <TableCell align="right">{user.name}</TableCell>
        <TableCell align="right">{user.surname}</TableCell>
        <TableCell align="right">{user.phone}</TableCell>
        <TableCell align="right">{user.address}</TableCell>
        <TableCell align="right">{user.IBAN}</TableCell>
        <TableCell align="right">{user.company}</TableCell>
      </TableRow>
    ))
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Telephone</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">IBAN</TableCell>
            <TableCell align="right">Company</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <InfiniteLoader isItemLoaded={isItemLoaded} itemCount={itemsCount} loadMoreItems={loadMoreItems}>
            {({ onItemsRendered, ref }) => (
              <FixedSizeList itemCount={itemsCount} onItemsRendered={onItemsRendered} ref={ref} height={height} width={width} itemSize={35}>
                {Row}
              </FixedSizeList>
            )}
          </InfiniteLoader>
        </TableBody>
      </Table>
    </TableContainer>
  )
}
