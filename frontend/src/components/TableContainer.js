import React from 'react'
import { useTable } from 'react-table'
import { Table } from 'reactstrap'
import Checkbox from './Checkbox'

const TableContainer = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  })

  function handleCheckboxChange () {
    console.log('checkbox checked')
  }

  return (
    <Table bordered hover {...getTableProps()}>
      <thead>
      {headerGroups.map((headerGroup) => (
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map((column) => (
            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
          ))}
        </tr>
      ))}
      </thead>

      <tbody {...getTableBodyProps()}>
      {rows.map((row) => {
        prepareRow(row)
        return (
          <tr {...row.getRowProps()}>

            {row.cells.map((cell, idx) => {
              if (idx == 0) {
                return <Checkbox label={''} handleCheckboxChange={handleCheckboxChange}/>
              }
              return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
            })}
          </tr>
        )
      })}
      </tbody>
    </Table>
  )
}

export default TableContainer