
import Link from 'next/link';
import React, { useMemo, useEffect, useState  } from 'react';
import { useTable,useGlobalFilter, usePagination , useSortBy} from 'react-table';
import { Image } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const ClientList = (props) =>{
  const data = useMemo(
    () => [props.RawData],
    [props]
  );

  const handleRowDoubleClick = (rowId,valuesId) => {
    // Handle the double-click event for the row
    console.log('Row double-clicked:', rowId,"---:",valuesId);
  };

  const columns = useMemo(
    () => [
      { 
        Header: 'ID', 
        accessor: 'id', 
        Cell: ({ cell }) => (
          <div className="form-check">
          <input className='form-check-input fs-15'
            type="checkbox"
            onChange={() => handleCheckboxChange(cell.value)}
          />
          </div>
        ),
      },
      { 
        Header: 'Name', 
        accessor: 'name',
        // Cell:({ cell }) => {
        //   if(cell.value.imgProfile != ''){
        //     return (
        //       <>
        //        <Image src="images/clients/img-2.png" alt="avatar" width={30} height={30} fluid />
        //         <Link href={'/clients/details/'+cell.row.values.id}>{cell.value}</Link>
        //       </>
        //     )
        //   }else{
        //     return (
        //       <>
        //         <Image src="images/Client${cell.value.imgProfile}" alt="avatar" fluid />
        //         <Link href={'/clients/details/'+cell.row.values.id}>{cell.value}</Link>
        //       </>
        //     )
        //   }

          
        // }
      },
      { Header: 'Email', accessor: 'email' },
      { Header: 'Company', accessor: 'company', sortable: true },
      { Header: 'Group', accessor: 'group' },
      { Header: 'Exp Date', accessor: 'exp_date' },
      { 
        Header: 'Status', 
        accessor: 'status',
        Cell: ({ cell }) => {
          if (cell.value === true) {
            return (
              <span className="badge badge-soft-success">{cell.value}</span>
            );
          } else if (cell.value === 'Expired') {
            return (
              <span className="badge badge-soft-danger">{cell.value}</span>
            );
          } else if (cell.value === false) {
            return <span className='badge badge-soft-warning'>{cell.value}</span>;
          }
        },
    
      },
      {
        Header:'Quota',
        accessor:'quota',
        Cell:({ cell }) => {
          return (
            <div className="mb-4">
                <h5 className="fs-13">50 to 100mb</h5>
                <div className="progress progress-sm">
                <div className="progress-bar bg-secondary" role="progressbar" style={{width: cell.value+'%'}} aria-valuenow={cell.value} aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
          )
        }
      },
      { 
        Header: 'Action', 
        accessor: 'action',
        Cell:({ cell }) =>{
          
          return(
            <div className="dropdown d-inline-block">
              <button className="btn btn-soft-secondary btn-sm dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="ri-more-fill align-middle"></i>
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
              {cell.row.values.status == true ? (
                <li><a href="#!" className="dropdown-item"><i className="ri-eye-fill align-bottom me-2 text-muted"></i> Deactivated</a></li>
              ) : (
                <li><a href="#!" className="dropdown-item"><i className="ri-eye-fill align-bottom me-2 text-muted"></i> Activate</a></li>
              )}  
                  <li><a className="dropdown-item edit-item-btn"><i className="ri-pencil-fill align-bottom me-2 text-muted"></i> Edit</a></li>
                  <li>
                      <a className="dropdown-item remove-item-btn">
                          <i className="ri-delete-bin-fill align-bottom me-2 text-muted"></i> Delete
                      </a>
                  </li>
              </ul>
          </div>
          )
          
        }
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

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

}

export default ClientList;