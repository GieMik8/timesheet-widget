import React from 'react'

import useStyles from './style'

type Props = {
  rows: Array<any[]>
  header: Array<string | number>
}

const EventsListBody: React.FC<Props> = ({ rows, header }) => {
  const classes = useStyles()
  return (
    <div className={classes.wrapper}>
      <table className={classes.table}>
        <thead>
          <tr>
            {header.map((col, index) => (
              <th key={`${col}_${index}`}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={`${row}_${rowIndex}`}>
              {row.map((item, colIndex) => (
                <td key={`${item}_${colIndex}`}>{item}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default EventsListBody
