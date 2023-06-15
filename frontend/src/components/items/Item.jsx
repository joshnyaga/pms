import React from 'react'

const Item = ({medicine, quantity, instructions, expiry, hospital}) => {
  return (
    <div className='my-10'>
        <div className='flex item-center gap-2 py-2'>
            <p className='px-2 font-bold'>Medicine:</p>
            <span className='text-slate-500'>{medicine}</span>
        </div>
       
        <div className='flex item-center gap-2 py-2'>
            <p className='px-2 font-bold'>Quantity:</p>
            <span className='text-slate-500'>{quantity}</span>
        </div>
        <div className='flex item-center gap-2 py-2'>
            <p className='px-2 font-bold'>Instructions:</p>
            <span className='text-slate-500'>{instructions}</span>
        </div>
        <div className='flex item-center gap-2 py-2'>
            <p className='px-2 font-bold'>Expiry:</p>
            <span className='text-slate-500'>{new Date(expiry).toISOString().split('T')[0]}</span>
        </div>
        <div className='flex item-center gap-2 py-2'>
            <p className='px-2 font-bold'>Hospital name:</p>
            <span className='text-slate-500'>{hospital}</span>
        </div>
       
    </div>
  )
}

export default Item