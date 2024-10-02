import React from 'react'
import backgroundImg from '../assets/z13.jpg'
function section() {
  return (
        <>
            <div className='container'>
            <div className='w-screen relative right-10 p-6 m-2 mr-2 sm:w-screen sm:right-10 sm:border-white sm:border-2 md:right-14 md:border-yellow-400' style={{backgroundImage: `url(${backgroundImg})` , backgroundRepeat: 'no-repeat' , backgroundPosition: 'center' , backgroundSize: 'cover', userSelect: 'none'}}>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil veniam cumque, tempore aspernatur alias voluptatem, molestias, perferendis consequatur ipsum mollitia ducimus. Eum sint ut voluptate maxime reiciendis quidem adipisci pariatur a et animi illum modi similique porro odio enim aut, laborum natus. Ipsam, earum expedita!</p>
                <a className=''>
                    <button className='text-white my-6'>Explore more</button>
                </a>
            </div>            
            </div>
        </>
  )
}

export default section
