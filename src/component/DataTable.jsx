import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { userColumns } from './Column';
import { Link } from 'react-router-dom'
import axios from 'axios';
import * as XLSX from 'xlsx'

// import ReactExport from 'react-data-export'
// const ExcelFile = ReactExport.ExcelFile
// const ExcelSheet = ReactExport.ExcelFile.ExcelSheet

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

    // const DataSet = [
    //     {
    //         columns: [
    //             { title: 'Id', style: { font: { bold: true } }, width: { wpx: 125 } },
    //             { title: 'Nama Orang Tua', style: { font: { bold: true } }, width: { wpx: 125 } },
    //             { title: 'Kota', style: { font: { bold: true } }, width: { wpx: 125 } },
    //             { title: 'Email', style: { font: { bold: true } }, width: { wpx: 125 } },
    //             { title: 'Status', style: { font: { bold: true } }, width: { wpx: 125 } }
    //         ],
    //         data: data.map((data) => [
    //             { value: data.id, style: { font: { bold: true } } },
    //             { value: data.firstName, style: { font: { bold: true } } },
    //             { value: data.city, style: { font: { bold: true } } },
    //             { value: data.email, style: { font: { bold: true } } },
    //             { value: data.status, style: { font: { bold: true } } },
    //         ])
    //     }
    // ]

    const downloadExcel = () => {
        console.log(data)
        // const newData = data.map(row => {
        //     delete row.img
        //     return row
        // })
        // const newData = (data.filter((item) => item.img = String))

        const workSheet = XLSX.utils.json_to_sheet(data)
        const workBook = XLSX.utils.book_new()
        XLSX.utils.book_append_sheet(workBook, workSheet, "Data Members")
        //Buffer
        XLSX.write(workBook, { bookType: "xlsx", type: "buffer" })
        //Binary string
        XLSX.write(workBook, { bookType: "xlsx", type: "binary" })
        //Download
        XLSX.writeFile(workBook, "Data Members.xlsx")
    }

    return (
        <>
            <div className='flex justify-between items-center'>
                <div className='title-dashboard'> Data Orang Tua</div>
                <div className='flex gap-3'>
                    <Link to="/users/new">
                        <button className='h-8 px-3 bg-secondary text-fourth font-bold items-center rounded-md'>Add New Member</button>
                    </Link>
                    <button onClick={downloadExcel} className='h-8 px-3 bg-secondary text-fourth font-bold items-center rounded-md'>Export Excel</button>
                    {/* <ExcelFile
                        filename="Data Members"
                        element={<button className='h-8 px-3 bg-secondary text-fourth font-bold items-center rounded-md'>Export Excel</button>}>
                            <ExcelSheet dataSet={DataSet} name="Data Members" />

                    </ExcelFile> */}

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