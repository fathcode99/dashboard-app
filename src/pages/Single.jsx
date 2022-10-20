import React, { useEffect, useState } from 'react'
import Navbar from '../component/Navbar'
import Sidebar from '../component/Sidebar'
import { useParams } from 'react-router-dom'
import axios from 'axios'


const url = "http://localhost:2000/ortu-db"

const Single = ({ title }) => {
  const [data, setData] = useState([])
  const [isEdit, setIsEdit] = useState(false)

  // modal
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);

  let { id } = useParams();
  useEffect(() => {
    axios.get(`${url}/${id}`)
      .then(res => {
        setData(res.data)
      })
  }, [id])

  const handleEdit = () => {
    setIsEdit(!isEdit)
  }

  const [file, setFile] = useState("")

  const handleSend = () => {
    setIsEdit(!isEdit)
    const v_username = document.getElementById("username").value
    const v_name = document.getElementById("name").value
    const v_city = document.getElementById("city").value
    const v_address = document.getElementById("address").value
    const v_status = document.getElementById("status").value
    const v_email = document.getElementById("email").value
    const v_note = document.getElementById("note").value
    const v_urlimg = document.getElementById("fileImg").value


    console.log(v_address, v_email, v_name, v_city, v_note, v_status, v_username, v_urlimg)

    const datas = {
      firstName: v_name,
      address: v_address,
      register_time: "baru",
      city: v_city,
      provinsi: "",
      email: v_email,
      note: v_note,
      regional: "Surabaya",
      status: v_status,
      img: v_urlimg
    }


    axios.patch(`${url}/${id}`, datas)
      .then(res =>
        axios.get(`${url}/${id}`)
          .then(res => {
            setData(res.data)
          })
      )

  }

  return (
    <div className='single flex'>
      <Sidebar />
      <div className="singleContainer flex-[6_6_0%] bg-primary">
        <div className="rounded-l-3xl bg-white w-full h-full p-6">
          <Navbar />
          <div className="top flex justify-between w-full items-center">
            <div className='title-dashboard'>{title}</div>
            <div className='flex gap-3'>
              {isEdit ?
                <>
                  <div
                    className='px-4 w-auto h-8 bg-secondary rounded text-fourth font-medium text-base cursor-pointer flex justify-center items-center'
                    onClick={handleSend}
                  >Update Data</div>
                  <div
                    className='px-4 w-auto h-8 bg-secondary rounded text-fourth font-medium text-base cursor-pointer flex justify-center items-center'
                    onClick={handleEdit}
                  >Cancel</div>
                </>
                :
                <div
                  className='px-4 w-auto h-8 bg-secondary rounded text-fourth font-medium text-base cursor-pointer flex justify-center items-center'
                  onClick={handleEdit}
                >Edit Data</div>
              }
            </div>
          </div>

          <div className="bottom flex">
            {isEdit ?
              <>
                <div className="left flex-1 w-full">
                  <div className="upImg w-full h-full flex justify-center items-center border">
                    {
                      file ?
                        <img src={URL.createObjectURL(file)} alt="avatar" />
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>
                    }
                  </div>
                </div>

                <div className="right flex-[2_2_0%] ml-5">
                  <form action="submit" className='form'>
                    <div className="formInput">
                      <label htmlFor='fileImg' className='flex items-center gap-3 form-label'>
                        <p>Image :</p>
                        <div>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 cursor-pointer">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12l-3-3m0 0l-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                          </svg>
                        </div>
                      </label>
                      <input type="file" id='fileImg' onChange={(e) => setFile(e.target.files[0])} className="hidden" />
                    </div>

                    <div className="formInput">
                      <label className='form-label'> Username </label>
                      <input className='input' type="text" defaultValue={data.username} id='username' />
                    </div>
                    <div className="formInput">
                      <label className='form-label'> Name </label>
                      <input className='input' type="text" defaultValue={data.firstName} id='name' />
                    </div>
                    <div className="formInput">
                      <label className='form-label'> City </label>
                      <input className='input' type="text" defaultValue={data.city} id='city' />
                    </div>
                    <div className="formInput">
                      <label className='form-label'> Address </label>
                      <input className='input' type="text" defaultValue={data.address} id='address' />
                    </div>
                    <div className="formInput">
                      <label className='form-label'> Status </label>
                      <input className='input' type="text" defaultValue={data.status} id='status' />
                    </div>
                    <div className="formInput">
                      <label className='form-label'> Email </label>
                      <input className='input' type="text" defaultValue={data.email} id='email' />
                    </div>
                    <div className="formInput">
                      <label className='form-label'> Note </label>
                      <input className='input' type="text" defaultValue={data.note} id='note' />
                    </div>
                  </form>
                </div>
              </>
              :
              <>
                <div className="left flex-1 w-full">
                  <div className="upImg w-full h-full flex justify-center items-center border">
                    <img src={data.img} alt="avatar" />
                  </div>
                </div>
                <div className="right flex-[2_2_0%] ml-5">
                  <form action="submit" className='form'>


                    <div className="formInput">
                      <label className='form-label'> Username </label>
                      <p className='input'>{data.username}</p>
                    </div>
                    <div className="formInput">
                      <label className='form-label'> Name </label>
                      <p className='input'>{data.firstName}</p>
                    </div>
                    <div className="formInput">
                      <label className='form-label'> City </label>
                      <p className='input'>{data.city}</p>
                    </div>
                    <div className="formInput">
                      <label className='form-label'> Address </label>
                      <p className='input'>{data.address}</p>
                    </div>
                    <div className="formInput">
                      <label className='form-label'> Status </label>
                      <p className='input'>{data.status}</p>
                    </div>
                    <div className="formInput">
                      <label className='form-label'> Email </label>
                      <p className='input'>{data.email}</p>
                    </div>
                    <div className="formInput">
                      <label className='form-label'> Note </label>
                      <p className='input'>{data.note}</p>
                    </div>
                  </form>
                </div>
              </>
            }
          </div>
        </div>
      </div>
    </div >
  )
}

export default Single