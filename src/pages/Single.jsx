import React from 'react'
import Navbar from '../component/Navbar'
import Sidebar from '../component/Sidebar'

const Single = () => {
  return (
    <div className='single flex'>
      <Sidebar />
      <div className="singleContainer flex-[6_6_0%]">
        <Navbar />
        <div className="detail-info">
          <h1 className="title-single px-6 text-2xl font-bold text-purple-700">Information</h1>
          <div className="item flex px-6 py-4">
            <img className='itemImg w-28 h-28 rounded object-cover ' src="https://www.stepstherapy.com.au/wp-content/uploads/2020/05/Natalie-square-profile-picture-1024x1024.jpg" alt="avatar" />
            <div className="singleName w-96 ml-10 relative">
              <div className="single-name  text-3xl font-bold ">Nama Orang tua</div>
              <p className="single-profession text-sm font-normal"> Active </p>
              <p className="single-profession text-sm font-normal"> ID: 12123 </p>
              <div className="editData absolute top-0 right-0 rounded bg-orange-300 text-orange-600 px-3 py-1">Edit Data</div>
            </div>
          </div>
          <div className="detail"> Email </div>
          <div className="detail"> Alamat </div>
          <div className="detail"> Bulan Masuk </div>
          <div className="detail"> Kota </div>
          <div className="detail"> Regional </div>
          <div className="detail"> Catatan </div>

        </div>
      </div>
    </div>
  )
}

export default Single