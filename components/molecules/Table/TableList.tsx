"use client"

import React, { useMemo,useState  } from 'react';
import { useTable,useGlobalFilter, usePagination , useSortBy} from 'react-table';
import { v4 as uuidv4 } from 'uuid';


interface TableListProps {
  RawData: any;
  Columns: any;
}

const TableList = (props: Partial<TableListProps>) => {
  const {RawData, Columns} = props;
  
  const data = useMemo(
    () => [RawData],
    [RawData]
  );
  

  const columns = useMemo(
    () => [Columns],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  const handleRowDoubleClick = (rowId,valuesId) => {
    // Handle the double-click event for the row
    console.log('Row double-clicked:', rowId,"---:",valuesId);
  };



  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    state: { pageIndex, globalFilter },
    setGlobalFilter,
    gotoPage,
    pageCount
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize:15 },
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );


  const [selectedIds, setSelectedIds] = useState([]);
  const handleCheckboxChange = (id) => {
    const isChecked = selectedIds.includes(id);

    if (isChecked) {
      setSelectedIds(selectedIds.filter((selectedId) => selectedId !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };


  const handleSearchChange = (e) => {
    const value = e.target.value || '';
    setGlobalFilter(value.toLowerCase());
  };
  
  return(
    <>

    <link rel="stylesheet" href="https://cdn.datatables.net/1.11.5/css/dataTables.bootstrap5.min.css" />
    <link rel="stylesheet" href="https://cdn.datatables.net/buttons/2.2.2/css/buttons.dataTables.min.css" />
    <div className='dataTables_wrapper dt-bootstrap5 no-footer'>
    <div className='row'>
    <div className='col-sm-12 col-md-6'>&nbsp;</div>
    <div className='col-sm-12 col-md-6'>
      <div key='tbl-scroll-vertical' id='scroll-vertical_filter' className='dataTables_filter'>
        <label key='label-search'>
        Search:{' '}
        <input
          type="search" className='form-control form-control-sm' placeholder="" aria-controls="scroll-vertical"
          value={globalFilter || ''}
          onChange={handleSearchChange}
        />
        </label>
      </div>
      </div>
    </div>  
    
      <table {...getTableProps({ className: 'table table-bordered dt-responsive nowrap table-striped align-middle dataTable no-footer dtr-inline' })}>
      <thead>
         {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()} key={uuidv4()}>
             {headerGroup.headers.map(column => (
               <th {...column.getHeaderProps(column.getSortByToggleProps())}
                   className={column.isSorted ? (column.isSortedDesc ? 'sorted-desc' : 'sorted-asc') : ''} key={uuidv4()}>
                   {column.render('Header')}
                 <span>
                   {column.isSorted ? (column.isSortedDesc ? ' ↓' : ' ↑') : ''}
                 </span>
               </th>
             ))}
           </tr>

         ))}
       </thead>
        <tbody key='tbody-101' {...getTableBodyProps()}>
          {page.map((row,index) => { 
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={row.id} onDoubleClick={() => handleRowDoubleClick(row.id,row.values.id)}>
               {row.cells.map(cell => 
               (
                 <td {...cell.getCellProps()} key={uuidv4()}>
                   {cell.render('Cell')}
                 </td>
               ))}
             </tr>
            );
          })}
        </tbody>
      </table>
      <div className='row'>
      <div className='col-sm-12 col-md-5'>
      <div className='dataTables_info'>
          Showing {' '}
          <strong>
            {pageIndex + 1} of {pageCount}
          </strong>{' '}
        </div> 
      </div>
        <div className='col-sm-12 col-md-7'>
        <div className='d-flex'>
         
        <ul className="list-group list-group-horizontal">
          <li key={uuidv4()} className='list-group-item' onClick={() => {
            if (pageIndex > 0) {
              gotoPage(pageIndex - 1);
            }
          }}
          disabled={pageIndex === 0}>Previous</li>
        
          {[...Array(pageCount)].map((x, i) =>
            (
              <li key={uuidv4()} className={pageIndex === i ? 'list-group-item active':'list-group-item '}    onClick={() => gotoPage(i)} disabled={pageIndex === i}>{i+1}</li>
            )
            // )
          )}
       
        <li key={uuidv4()} className='list-group-item'
          onClick={() => {
            if (pageIndex < pageCount - 1) {
              gotoPage(pageIndex + 1);
            }
          }}
          disabled={pageIndex === pageCount - 1}>
          Next
        </li> 
        </ul>  
      </div>
        </div>
      </div>    
    </div>
    </>
  )
};

export default TableList;
