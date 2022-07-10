import React from 'react'
import AutoSizer from 'react-virtualized-auto-sizer'
import { FixedSizeList as List } from 'react-window'
import InfiniteLoader from 'react-window-infinite-loader'
import { faker } from '@faker-js/faker'
import throttle from 'lodash/throttle'

export default function Table5({ Users, setUsers }) {
  const itemsCount = Users.length
  const loadMoreItems = () => {
    console.log('load more items  ' + itemsCount)
    let copy = Object.assign([], Users)

    let obj = {
      id: copy.length + 1,
      name: faker.name.firstName(),
      surname: faker.name.lastName(),
      phone: faker.phone.number(),
      address: faker.address.cityName(),
      IBAN: faker.finance.iban(),
      company: faker.company.companyName(),
    }
    copy.push(obj)

    setUsers(copy)
  }

  const loadMoreItemsThrottled = throttle(loadMoreItems, 300)

  const isItemLoaded = ({ index }) => !!Users[index]

  const Row = ({ index, style }) => {
    const item = Users[index]

    return (
      <div className={index % 2 ? 'ListItemOdd' : 'ListItemEven'} style={style}>
        {item ? `${item.id} ${item.name}: ${item.surname}: ${item.phone} ${item.address} ${item.IBAN} ${item.company}` : 'Loading...'}
      </div>
    )
  }

  return (
    <AutoSizer>
      {({ height, width }) => (
        <InfiniteLoader isItemLoaded={isItemLoaded} loadMoreItems={loadMoreItemsThrottled} itemCount={itemsCount}>
          {({ onItemsRendered, ref }) => (
            <List className="List" height={height} itemCount={itemsCount} itemSize={105} width={width} ref={ref} onItemsRendered={onItemsRendered}>
              {Row}
            </List>
          )}
        </InfiniteLoader>
      )}
    </AutoSizer>
  )
}
