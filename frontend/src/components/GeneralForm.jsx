import React from 'react'
import { useState, setState } from 'react'
import style from './GeneralForm.module.css'
import { Navigate, useNavigate } from "react-router-dom";

const GeneralForm = () => {

const [formData, setFormData] = useState({
    generalForm: {
        fullName: '',
        number: '',
        lineId: ''
    },
    eventForm: {
        place: '',
        people: '',
        eventTime: '',
        eatTime: '',
        elevator: ''

    }
});

const handleChange = (e) => {
    setFormData({
        ...formData,
        generalForm: {
            ...formData.generalForm,
            [e.target.name]: e.target.value
        }
    })
}

const navigate = useNavigate();

const onClickHandler = () => {
    navigate('ServicesFormPage')
}



return (
    <>
        <div className='bg-custom-yellow rounded-[15px] min-w-[80%] flex justify-center m-5 p-10 shadow-2xl'>
            <form className='flex flex-col w-full'>
                <label className='' htmlFor='name'>ชื่อ-นามสกุล *</label><br />
                <input className='rounded-[15px] h-8 shadow-2xl' type='text' id='name' name='name' onChange={handleChange} /><br />
                <label className='' htmlFor='name'>เบอร์โทรศัพท์ *</label><br />
                <input className='rounded-[15px] h-8 shadow-2xl' type='number' id='number' name='number' onChange={handleChange} /><br />
                <label className='' htmlFor='name'>LINE ID (ไม่จำเป็นต้องกรอก)</label><br />
                <input className='rounded-[15px] h-8 shadow-2xl' type='text' id='lineId' name='lineId' onChange={handleChange} /><br />

                <div className='flex justify-end'>
                    <button className='bg-custom-brown px-5 text-white rounded-[15px] shadow-2xl' onClick={onClickHandler}>ถัดไป</button>
                </div>
            </form>
        </div>
    </>

)
}


export default GeneralForm