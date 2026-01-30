import React from 'react'
import './need.css'
import need from '../../assets/need.png'

const Need = () => {
  return (
    <div className='hh'>

        <h1 className='text-center mt-5'>What you <span className='need'>Need</span> is</h1>

        <div className='d-flex main-card  justify-content-center align-items-center gap-5 mt-5 flex-wrap'>
            <div className='need-card border-1 p-4 m-2'>

                <img src={need} className='icon' alt="icon" />
                <h5 className='text-center'>At least</h5>
                <h4 >3500+ sq.ft</h4>
                <h6 className='text-center'>of Space</h6>
            </div>

            <div className='need-card border-1 bg-maroon  p-4 m-2'>

                <img src={need} className='icon' alt="icon" />
                <h5 className='text-center'>At least</h5>
                <h4 >3500+ sq.ft</h4>
                <h6 className='text-center'>of Space</h6>
            </div>

            <div className='need-card border-1 p-4 m-2'>

                <img src={need} className='icon' alt="icon" />
                <h5 className='text-center'>At least</h5>
                <h4 >3500+ sq.ft</h4>
                <h6 className='text-center'>of Space</h6>
            </div>

            <div className='need-card border-1 p-4 m-2'>

                <img src={need} className='icon' alt="icon" />
                <h5 className='text-center'>At least</h5>
                <h4 >3500+ sq.ft</h4>
                <h6 className='text-center'>of Space</h6>
            </div>
           
            
        </div>


        




    </div>
  )
}

export default Need