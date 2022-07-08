import React from 'react'
import InfiniteLoader from 'react-window-infinite-loader'
import { FixedSizeList } from 'react-window'
import Table from './Table'

function Table3({ height, width, Users }) {
  const itemsCount = 500
  const loadMoreItems = () => console.log('load more items poshel')
  let items = {}
  const isItemLoaded = (index) => !!items[index]
  const Row = ({ index, style }) => <Table Users={Users} />

  return (
    <InfiniteLoader isItemLoaded={isItemLoaded} itemCount={itemsCount} loadMoreItems={loadMoreItems}>
      {({ onItemsRendered, ref }) => (
        <FixedSizeList itemCount={itemsCount} onItemsRendered={onItemsRendered} ref={ref} height={height} width={width} itemSize={35}>
          {Row}
        </FixedSizeList>
      )}
    </InfiniteLoader>
  )
}

export default Table3
