import React from 'react'

export default function Category({finalCategory, setCategoryName}) {

    let category = finalCategory.map((value, index) => {
        return (
            <li onClick={()=>setCategoryName(value.name)} key={index} className='bg-[#ccc] p-[10px] text-[20px] font-[500] mb-2 cursor-pointer'>
                {value.name}
            </li>
        )
    })
    return (
        <>
            <div className='font-serif'>
                <h3 className='text-[25px] p-[10px]'>Product Category</h3>
                <ul>
                    {category}
                </ul>
            </div>
        </>
    )
}
