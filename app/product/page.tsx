// "use client"
import Link from 'next/link'
import React from 'react'

const Product = async () => {
    const dat = await fetch('https://dummyjson.com/products')
    const response = await dat.json()
    const data = response.products
    // interface User(
    //     title:string,
    //     descrition
    // )
  return (
    <>
    
    <div className='flex justify-around flex-wrap'>
      {data.map((item :any)=>{
        return <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
          width={200}
            src={item.images}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{item.title}</h2>
          <p>{item.description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary"><Link href={`product/${item.id}`}>Buy now</Link></button>
          </div>
        </div>
      </div>
      })}
    </div>
   
    </>
  )
}

export default Product