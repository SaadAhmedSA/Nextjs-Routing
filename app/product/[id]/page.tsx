import Image from 'next/image'
import React from 'react'

const page = async ({params}:{params:{id :any}}) => {
  const dat = await fetch(`https://dummyjson.com/product/${params.id}`)
    const response = await dat.json()
    const item = response
    // console.log(item);
    
  return (
    <div className='flex justify-center items-center '>
      <div className="card bg-base-100  w-96 shadow-xl">
        <figure>
          <Image
          width={300}
            src={item.images}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{item.title}</h2>
          <p >{item.description}</p>
          <p className='font-bold'>Category: {item.category}</p>
          <p className='font-bold'>Rating :{item.rating}</p>
          <p className='font-bold'>Brand:{item.brand}</p>
          
        </div>
      </div>
    </div>
  )
}

export default page