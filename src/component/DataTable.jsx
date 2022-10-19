import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { userColumns } from './Column';
import { userRows } from './Row';
import { Link } from 'react-router-dom'

const DataTable = () => {
    const [data, setData] = useState(userRows)

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id))
    }
    const actionColumn = [{
        field: 'action', headerName: "Action", width: 150,
        renderCell: (params) => {
            return (
                <div className="cellAction flex items-center">
                    <Link to="/users/test">
                        <div className='viewButton py-1 px-2 bg-sky-300 text-sky-600 mr-2 rounded font-medium'>View</div>
                    </Link>
                    <div
                        className='deleteButton py-1 px-2 bg-red-300 text-red-600 rounded font-medium cursor-pointer'
                        onClick={() => handleDelete(params.row.id)}
                    >Delete</div>
                </div>
            )
        }
    }]

    return (
        <>
            <div className='flex justify-between items-center px-7'>
                <div className='title-table text-xl font-bold py-4'> Data Orang Tua</div>
                <Link to="/users/new">
                    <button className='h-8 px-3 bg-sky-400 text-sky-700 font-bold items-center rounded-md'>Add New User</button>
                </Link>
            </div>
            <div className='datatable w-full h-3/4 px-7'>
                <DataGrid
                    rows={data}
                    columns={userColumns.concat(actionColumn)}
                    pageSize={7}
                    rowsPerPageOptions={[7]}
                    checkboxSelection
                />
            </div>
        </>
    )
}

export default DataTable