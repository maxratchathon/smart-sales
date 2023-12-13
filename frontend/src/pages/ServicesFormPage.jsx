import React from 'react'
import { useState, setState } from 'react'





const ServicesFormPage = () => {
  const [place, setPlace] = useState('')
  const [people, setPeople] = useState('')
  const [eventTime, setEventTime] = useState('')
  const [eatTime, setEatTime] = useState('')
  const [elevator, setElevator] = useState('')


  function onClickHandler() {
    return 0
  }
  function handleChange(e) {
    switch (e.target.id) {
      case "place": { setPlace(e.target.value) }
        break
      case "people": { setPeople(e.target.value) }
        break
      case "eventTime": { setEventTime(e.target.value) }
        break
      case "eatTime": { setEatTime(e.target.value) }
        break
      case "elevator": { setElevator(e.target.value) }
        break
    }
  }

  return (
    <>
      <div className='bg-custom-yellow rounded-[15px] min-w-[80%] flex justify-center m-5 p-10'>
        <form className='flex flex-col w-full'>
          <label className='' htmlFor='place'>สถานที่จัดงาน *</label><br />
          <input className='rounded-[15px] h-8 ' type='text' id='place' name='place' onChange={handleChange} /><br />
          <label className='' htmlFor='people'>จำนวนแขก *</label><br />
          <input className='rounded-[15px] h-8' type='number' id='people' name='people' onChange={handleChange} /><br />
          <label className='' htmlFor='eventTime'>เวลาจัดงาน</label><br />
          <input className='rounded-[15px] h-8' type='text' id='eventTime' name='eventTime' onChange={handleChange} /><br />
          <label className='' htmlFor='eatTime'>เวลาพร้อมทาน</label><br />
          <input className='rounded-[15px] h-8' type='text' id='eatTime' name='eatTime' onChange={handleChange} /><br />
          <label className='' htmlFor='elevator'>ลิฟท์ขนของ</label><br />

          <div className='flex justify-end'>
            <button className='bg-custom-brown px-5 text-white rounded-[15px]' onClick={onClickHandler}>ถัดไป</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default ServicesFormPage