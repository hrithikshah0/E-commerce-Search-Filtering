import React from 'react'

export default function ProductItems({ productData }) {
    let product = productData.map((value, index) => {
        return (
            <div key={index} className='shadow-lg text-center pb-4'>
                <img src={value.thumbnail
                } alt="" className='mb-4' />
                <h4 className='text-[18px] font-bold'>{value.title}</h4>
                <p className=' m-4'>{value.description}</p>
                <b>${value.price}</b>
            </div>
        )
    })
    return (
        <>
        {
            (productData.length)>=1
            ?
            product
            :
            "Product Not Found" 
        } 
        </>
    )
}
