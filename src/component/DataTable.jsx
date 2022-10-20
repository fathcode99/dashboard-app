import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { userColumns } from './Column';
import { Link } from 'react-router-dom'
import axios from 'axios';

const url = "http://localhost:2000"

const DataTable = () => {
    const [data, setData] = useState([])

    const handleDelete = async (id) => {
        setData(data.filter((item) => item.id !== id))
        axios.delete(`${url}/ortu-db/${id}`)
    }

    useEffect(() => {
        axios.get(`${url}/ortu-db`)
            .then(res => {
                setData(res.data)
            })
    }, [])

    const actionColumn = [
        {
            field: 'action', headerName: "Action", width: 150,
            renderCell: (params) => {
                return (
                    <div className="cellAction flex items-center">
                        <Link to={`/users/${params.row.id}`}>
                            <div className='viewButton py-1 px-2 bg-secondary text-fourth mr-2 rounded font-medium'>View</div>
                        </Link>
                        <div
                            className='deleteButton py-1 px-2 bg-red-700 text-fourth rounded font-medium cursor-pointer'
                            onClick={() => handleDelete(params.row.id)}
                        >Delete</div>
                    </div>
                )
            }
        }
    ]

   
    return (
        <>
            <div className='flex justify-between items-center'>
                <div className='title-dashboard'> Data Orang Tua</div>
                <div className='flex gap-3'>
                    <Link to="/users/new">
                        <button className='h-8 px-3 bg-secondary text-fourth font-bold items-center rounded-md'>Add New Member</button>
                    </Link>
                </div>

            </div>
            <div className='datatable w-full h-[85%]'>
                <DataGrid
                    rows={data}
                    columns={userColumns.concat(actionColumn)}
                    pageSize={8}
                    rowsPerPageOptions={[8]}
                    checkboxSelection
                />
            </div>
        </>
    )
}

export default DataTable