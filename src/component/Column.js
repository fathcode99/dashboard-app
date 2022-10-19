import React from "react"

export const userColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
        field: 'nama_ortu', headerName: "NAMA ORANG TUA", width: 220,
        renderCell: (params) => {
            return (
                <div className="cellWithImg flex items-center">
                    <img className="cellImg w-8 h-8 rounded-full object-cover mr-5" src={params.row.img} alt="avatar" />
                    {params.row.nama_ortu}
                </div>
            )
        }
    },
    { field:'kota', headerName:"KOTA", width: 150},
    { field: "email", headerName: "EMAIL", width: 250 },
    {
        field: "status", headerName: "STATUS", width: 150,
        renderCell: (params)=> {
            return (
                <div className={`cellWithStatus py-1 px-2 rounded-sm font-medium ${params.row.status}`}>
                    {params.row.status}
                </div>
            )
        }
    },
]