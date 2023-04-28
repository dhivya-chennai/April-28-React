import React, { useMemo} from 'react'
import { useTable, useSortBy } from 'react-table'
import MOCK_DATA from '../constants/MOCK_DATA.json'
import {COLUMNS} from '../constants/columns'
import '../styles/table.css'
 
function BasicTable() {
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])
    
    const sortees = React.useMemo(
      () => [
        {
          id: "state",
          desc: false
        }
      ],
      []
    );
    const tableInstance = useTable({
        columns,
        data,
        initialState: {
          sortBy: sortees
        },
        defaultCanSort: true
    }  ,  
    useSortBy,
    );
 
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = tableInstance
  return (
    <table {...getTableProps()}>
        <thead>
            {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                        <th {...column.getHeaderProps(column.getSortByToggleProps())}>                   
                          {column.render('Header')}
                          {column.isSorted
                              ? column.isSortedDesc
                                ? <span>▼</span>
                                : <span>▲</span>
                              : ""
                          }
                       </th>
                    ))}
                </tr>
            ))}
        </thead>
        <tbody {...getTableBodyProps()}>
            {rows.map(row => {
                 prepareRow(row)
                  return (
                    <tr {...row.getRowProps()}>
                       {row.cells.map((cell) => {
                         return <td {...cell.getCellProps()}>
                          {cell.render('Cell')}</td>
                            })}
                    </tr>
                    )
                })
            }
        </tbody>
    </table>
  )
}
 
export default BasicTable