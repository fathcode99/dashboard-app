import React from 'react'
import DataTable from '../component/DataTable'
import Navbar from '../component/Navbar'
import Sidebar from '../component/Sidebar'

const List = () => {
  return (
    <div className='list flex'>
      <Sidebar />
      <div className="listContainer flex-[6_6_0%] bg-primary">
        <div className="rounded-l-3xl bg-white w-full h-full p-6">
          <Navbar />
          <DataTable />
        </div>
      </div>
    </div>
  )
}

export default List