import React from "react"
import "./style.css"

export const userColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
        field: 'firstName', headerName: "NAMA ORANG TUA", width: 220,
        renderCell: (params) => {
            return (
                <div className="cellWithImg flex items-center">
                    <img className="cellImg w-8 h-8 rounded-full object-cover mr-5" src={params.row.img} alt="avatar" />
                    {params.row.firstName}
                </div>
            )
        }
    },
    { field: 'city', headerName: "KOTA", width: 150 },
    { field: "email", headerName: "EMAIL", width: 250 },
    {
        field: 'status', headerName: "STATUS", width: 150,
        renderCell: (params) => {
            return (
                <div className={`${params.row.status}`} >
                    {params.row.status}
                </div>
            )
        }
    },
]