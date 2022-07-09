import React, { useState } from 'react'
import { MouseEvent } from 'react'
import { faker } from '@faker-js/faker'
import './App.css'
import Table5 from './components/Table5'
import Table4 from './components/Table4'

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

  // const getValue = (e: MouseEvent) => {
  //   e.preventDefault()

  //   fetch('http://localhost:3001/users')
  //     .then((response) => response.json())
  //     .then((result) => {
  //       let copy = Object.assign([], arr)
  //       for (let index = 0; index < 10; index++) {
  //         let obj: User = {
  //           id: copy.length + 1,
  //           name: faker.name.firstName(),
  //           surname: faker.name.lastName(),
  //           phone: faker.phone.number(),
  //           address: faker.address.cityName(),
  //           IBAN: faker.finance.iban(),
  //           company: faker.company.companyName(),
  //         }
  //         copy.push(obj)
  //       }
  //       setArr(copy)
  //     })
  // }
  return (
    <div className="App">
      <Table4 />
    </div>
  )
}

export default App
