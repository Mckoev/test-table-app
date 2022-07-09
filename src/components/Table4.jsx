import React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Table5 from './Table5'
import { useState } from 'react'

const initialState = [
  {
    id: 1,
    name: 'Egor',
    surname: 'Ivanov',
    phone: '89901234565',
    address: 'Moscow, Lenina street, 1',
    IBAN: '142345345',
    company: 'google',
  },
  {
    id: 2,
    name: 'Alex',
    surname: 'Petrov',
    phone: '8990565345656',
    address: 'Moscow, Lenina street, 3',
    IBAN: '1423345345',
    company: 'google',
  },
  {
    id: 3,
    name: 'Oleg',
    surname: 'Sidorov',
    phone: '899013434346',
    address: 'Moscow, Lenina street, 5',
    IBAN: '14235345345',
    company: 'google',
  },
]

function Table4() {
  const [arr, setArr] = useState(initialState)
  return (
    <table border="1" width="100%" cellpadding="5">
      <tr>
        <th>ID</th>
        <th>First name</th>
        <th>Last Name</th>
        <th>Telephone</th>
        <th>Address</th>
        <th>IBAN</th>
        <th>Company</th>
      </tr>
      <tr>
        <td style={{ height: '100%' }}>
          {' '}
          <Table5 Users={arr} setUsers={setArr}></Table5>
        </td>
      </tr>
    </table>
  )
}

export default Table4
