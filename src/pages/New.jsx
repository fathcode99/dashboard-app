import React, { useRef, useState } from 'react'
import Navbar from '../component/Navbar'
import Sidebar from '../component/Sidebar'
import axios from 'axios'

// modal
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

// modal style
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const url = "http://localhost:2000/ortu-db"

const New = ({ inputs, title }) => {
    const [file, setFile] = useState("")

    // modal
    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);

    const refUsername = useRef()
    const refNickname = useRef()
    const refFullname = useRef()
    const refAddress = useRef()
    const refTelp = useRef()
    const refEmail = useRef()
    const refNote = useRef()
    const refImg = useRef()

    const handleSend = () => {
        const v_username = refUsername.current.value
        const v_nickname = refNickname.current.value
        const v_fullname = refFullname.current.value
        const v_address = refAddress.current.value
        const v_telp = refTelp.current.value
        const v_email = refEmail.current.value
        const v_note = refNote.current.value
        const v_urlimg = refImg.current.value

        console.log(v_address, v_email, v_fullname, v_nickname, v_note, v_telp, v_username, v_urlimg)

        const datas = {
            nama_ortu: v_nickname,
            alamat: v_address,
            bulan_masuk: "",
            kota: v_address,
            provinsi: "",
            email: v_email,
            catatan: v_note,
            regional: "",
            status: "active",
            img: v_urlimg
        }

        axios.post(`${url}`, datas)
            .then(res =>
                setOpen(true)
            )
        
    }

    return (
        <>
            <div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Success
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Data sudah di tambahkan ke database.
                        </Typography>
                    </Box>
                </Modal>
            </div>
            
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
                                    <input type="file" id='fileImg' ref={refImg} onChange={(e) => setFile(e.target.files[0])} className='hidden' />
                                </div>

                                <div className="formInput">
                                    <label> Username </label>
                                    <input className='input' type="text" placeholder="Username" ref={refUsername} />
                                </div>
                                <div className="formInput">
                                    <label> Nick Name </label>
                                    <input className='input' type="text" placeholder="Nick name" ref={refNickname} />
                                </div>
                                <div className="formInput">
                                    <label> Full Name </label>
                                    <input className='input' type="text" placeholder="Full name" ref={refFullname} />
                                </div>
                                <div className="formInput">
                                    <label> Address </label>
                                    <input className='input' type="text" placeholder="Address" ref={refAddress} />
                                </div>
                                <div className="formInput">
                                    <label> Telp </label>
                                    <input className='input' type="text" placeholder="Number Telp or WA" ref={refTelp} />
                                </div>
                                <div className="formInput">
                                    <label> Email </label>
                                    <input className='input' type="text" placeholder="Number Telp or WA" ref={refEmail} />
                                </div>
                                <div className="formInput">
                                    <label> Note </label>
                                    <input className='input' type="text" placeholder="Number Telp or WA" ref={refNote} />
                                </div>

                                <div className='formInput flex justify-start items-end'>
                                    <div
                                        className='w-16 h-8 bg-sky-500 rounded text-blue-900 font-medium text-base cursor-pointer flex justify-center items-center'
                                        onClick={handleSend}
                                    >Send</div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default New