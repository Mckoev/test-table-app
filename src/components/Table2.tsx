import { VariableSizeGrid as Grid } from 'react-window'

const columnWidths = new Array(1000).fill(true).map(() => 75 + Math.round(Math.random() * 50))
const rowHeights = new Array(1000).fill(true).map(() => 25 + Math.round(Math.random() * 50))

const Cell = ({ columnIndex, rowIndex, style }: any) => (
  <div style={style}>
    Item {rowIndex},{columnIndex}
  </div>
)

export const Example = () => (
  <Grid columnCount={1000} columnWidth={(index: number) => columnWidths[index]} height={750} rowCount={1000} rowHeight={(index: any) => rowHeights[index]} width={900}>
    {Cell}
  </Grid>
)
