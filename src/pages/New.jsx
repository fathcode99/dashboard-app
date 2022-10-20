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
    const refName = useRef()
    const refCity = useRef()
    const refAddress = useRef()
    const refStatus = useRef()
    const refEmail = useRef()
    const refNote = useRef()
    const refImg = useRef()

    const handleSend = () => {
        const v_username = refUsername.current.value
        const v_name = refName.current.value
        const v_city = refCity.current.value
        const v_address = refAddress.current.value
        const v_status = refStatus.current.value
        const v_email = refEmail.current.value
        const v_note = refNote.current.value
        const v_urlimg = refImg.current.value

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
                <div className="newContainer flex-[6_6_0%] bg-primary">
                    <div className="rounded-l-3xl bg-fourth p-6 w-full h-full">
                        <Navbar />
                        <div className="top">
                            <div className='title-dashboard'>{title}</div>
                        </div>

                        <div className="bottom flex">
                            <div className="left flex-1 w-full">
                                <div className="upImg w-full h-full flex justify-center items-center border">
                                    {
                                        file ?
                                            <img src={URL.createObjectURL(file)} alt="avatar" />
                                            :
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                            </svg>
                                    }
                                </div>
                            </div>

                            <div className="right flex-[2_2_0%] ml-5">
                                <form action="submit" className='form'>
                                    <div className="right flex-[2_2_0%] ml-5">
                                        <div className="formInput">
                                            <label htmlFor='fileImg' className='flex items-center gap-3 form-label'>
                                                <p>Image :</p>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 cursor-pointer">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12l-3-3m0 0l-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                                    </svg>
                                                </div>
                                            </label>
                                            <input type="file" id='fileImg' ref={refImg} onChange={(e) => setFile(e.target.files[0])} className='hidden' />
                                        </div>
                                        <form action="submit" className='form'>
                                            <div className="formInput">
                                                <label className='form-label'> Username </label>
                                                <input className='input' type="text" placeholder='' ref={refUsername} />
                                            </div>
                                            <div className="formInput">
                                                <label className='form-label'> Name </label>
                                                <input className='input' type="text" placeholder='' ref={refName} />
                                            </div>
                                            <div className="formInput">
                                                <label className='form-label'> City </label>
                                                <input className='input' type="text" placeholder='' ref={refCity} />
                                            </div>
                                            <div className="formInput">
                                                <label className='form-label'> Address </label>
                                                <input className='input' type="text" placeholder='' ref={refAddress} />
                                            </div>
                                            <div className="formInput">
                                                <label className='form-label'> Status </label>
                                                <input className='input' type="text" placeholder='' ref={refStatus} />
                                            </div>
                                            <div className="formInput">
                                                <label className='form-label'> Email </label>
                                                <input className='input' type="text" placeholder='' ref={refEmail} />
                                            </div>
                                            <div className="formInput">
                                                <label className='form-label'> Note </label>
                                                <input className='input' type="text" placeholder='' ref={refNote} />
                                            </div>
                                            <div className='formInput flex justify-start items-end'>
                                                <div
                                                    className='w-16 h-8 bg-secondary rounded text-fourth font-medium text-base cursor-pointer flex justify-center items-center'
                                                    onClick={handleSend}
                                                >Send</div>
                                            </div>
                                        </form>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default New