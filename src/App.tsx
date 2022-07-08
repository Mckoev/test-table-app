import React, { useState } from 'react'
import { MouseEvent } from 'react'
import { faker } from '@faker-js/faker'
import Button from '@mui/material/Button'
import Table from './components/Table'
import { Example } from './components/Table2'
import './App.css'
import Table3 from './components/Table3'

function App() {
  interface User {
    id: number
    name: string
    surname: string
    phone: string
    address: string
    IBAN: string
    company: string
  }

  interface arrayUserProps {
    Users: User[]
  }

  const height: number = 600
  const width: number = 1200

  const initialState: User[] = [
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

  const [arr, setArr] = useState(initialState)

  const result = arr.map((element, index) => {
    return (
      <p key={index}>
        {element.id} {element.name} {element.surname} {element.phone} {element.address} {element.IBAN} {element.company}
      </p>
    )
  })

  const getValue = (e: MouseEvent) => {
    e.preventDefault()

    fetch('http://localhost:3001/users')
      .then((response) => response.json())
      .then((result) => {
        let copy = Object.assign([], arr)
        for (let index = 0; index < 10; index++) {
          let obj: User = {
            id: copy.length + 1,
            name: faker.name.firstName(),
            surname: faker.name.lastName(),
            phone: faker.phone.number(),
            address: faker.address.cityName(),
            IBAN: faker.finance.iban(),
            company: faker.company.companyName(),
          }
          copy.push(obj)
        }
        setArr(copy)
      })
  }
  return (
    <div className="App">
      <Table Users={arr} height={height} width={width} />
      <Button variant="contained" onClick={(e) => getValue(e)}>
        КНОПКА
      </Button>
      {/* <Table3 height={height} width={width} Users={arr} /> */}
    </div>
  )
}

export default App
