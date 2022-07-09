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
import AutoSizer from 'react-virtualized-auto-sizer'

export default function BasicTable({ Users }) {
  const itemsCount = 500
  const loadMoreItems = () => console.log('load more items poshel')
  let items = {}
  const isItemLoaded = (index) => !!items[index]
  const Row = ({ index, style }) => {
    console.log('ROW')
    console.log(index)
    console.log(style)
    return Users.map((user) => (
      <TableRow key={user.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} style={style}>
        <TableCell component="th" scope="row" style={style}>
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
    <AutoSizer>
      {({ height, width }) => (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableBody>
              <InfiniteLoader isItemLoaded={isItemLoaded} itemCount={itemsCount} loadMoreItems={loadMoreItems}>
                {({ onItemsRendered, ref }) => (
                  <FixedSizeList itemCount={itemsCount} onItemsRendered={onItemsRendered} ref={ref} height={height} width={width} itemSize={95}>
                    {Row}
                  </FixedSizeList>
                )}
              </InfiniteLoader>
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </AutoSizer>
  )
}
