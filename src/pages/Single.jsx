import React, { useEffect, useState } from 'react'
import Navbar from '../component/Navbar'
import Sidebar from '../component/Sidebar'
import { useParams } from 'react-router-dom'
import axios from 'axios'


const url = "http://localhost:2000"

const Single = () => {
  const [data, setData] = useState([])
  const [isEdit, setIsEdit] = useState(false)

  let { id } = useParams();
  useEffect(() => {
    axios.get(`${url}/ortu-db/${id}`)
      .then(res => {
        setData(res.data)
      })
  }, [id])

  const handleEdit = () => {
    setIsEdit(!isEdit)
  }

  return (
    <div className='single flex'>
      <Sidebar />
      <div className="singleContainer flex-[6_6_0%]">
        <Navbar />
        <div className="detail-info">
          <h1 className="title-single px-6 text-2xl font-bold text-purple-700">Information</h1>
          <div className="item flex px-6 py-4">
            <img className='itemImg w-28 h-28 rounded object-cover ' src={data.img} alt="avatar" />
            <div className="singleName w-96 ml-10 relative">
              <div className="single-name  text-3xl font-bold ">Nama Orang tua</div>
              <p className="single-profession text-sm font-normal"> Active </p>
              <p className="single-profession text-sm font-normal"> ID: 12123 </p>

              <div
                className="editData absolute top-0 right-0 rounded bg-orange-300 text-orange-600 px-3 py-1 cursor-pointer"
                onClick={handleEdit}
              >{isEdit ? 'Update Data' : 'Edit Data'}</div>

            </div>
          </div>
          <div>
            <label>Email</label>
            {isEdit ?
              <input type="text" placeholder={data.email} />
              :
              <p>{data.email}</p>
            }
          </div>

          <div>
            <label>Alamat</label>
            {isEdit ?
              <input type="text" placeholder={data.alamat} />
              :
              <p>{data.alamat}</p>
            }
          </div>
          <div>
            <label>Status</label>
            {isEdit ?
              <input type="text" placeholder={data.status} />
              :
              <p>{data.status}</p>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Single