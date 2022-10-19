import React, { useRef, useState } from 'react'
import Navbar from '../component/Navbar'
import Sidebar from '../component/Sidebar'

const New = ({ inputs, title }) => {
    const [file, setFile] = useState("")

    const refUsername = useRef()
    const refNickname = useRef()
    const refFullname = useRef()
    const refAddress = useRef()


    console.log(file)
    return (
        <div className='new flex w-full'>
            <Sidebar />
            <div className="newContainer flex-[6_6_0%]">
                <Navbar />
                <div className="top px-4 py-4">
                    <h1 className='title-new px-6 text-2xl font-bold text-purple-700'>{title}</h1>
                </div>
                <div className="bottom px-4 m-5 flex">
                    <div className="left flex-1 w-full">
                        <div className="upImg w-full h-full flex justify-center items-center border">
                            <img src={file ? URL.createObjectURL(file) : "https://th.bing.com/th/id/OIP.MkL5wbXZbiY6vpYb_tZSfgHaE8?pid=ImgDet&rs=1"} alt="avatar" />
                        </div>
                    </div>

                    <div className="right flex-[2_2_0%] ml-5">
                        <form action="submit" className='form'>
                            <div className="formInput">
                                <label htmlFor='fileImg' className='flex items-center gap-3'>
                                    <p>Image :</p>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 cursor-pointer">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12l-3-3m0 0l-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                        </svg>
                                    </div>
                                </label>
                                <input type="file" id='fileImg' onChange={(e) => setFile(e.target.files[0])} className='hidden' />
                            </div>



                            <div className="formInput">
                                <label> Username </label>
                                <input className='input' type="text" placeholder="Username" ref={refUsername}/>
                            </div>
                            <div className="formInput">
                                <label> Nick Name </label>
                                <input className='input' type="text" placeholder="Nick name" ref={refNickname}/>
                            </div>
                            <div className="formInput">
                                <label> Full Name </label>
                                <input className='input' type="text" placeholder="Nick name" ref={refFullname}/>
                            </div>
                            <div className="formInput">
                                <label> Address </label>
                                <input className='input' type="text" placeholder="Nick name" ref={refAddress}/>
                            </div>

                            <div className='formInput flex justify-start items-end'>
                                <button className='w-16 h-8 bg-sky-500 rounded text-blue-900 font-medium text-base'>Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default New