import React from 'react'
import backgroundImg from '../assets/z13.jpg'
function section() {
  return (
        <>
            <div className='container'>
            <div className='lg:w-width lg:h-height md:intial md:left-1 md:border-white md:border-2 md:h-52 md:bottom-8 md:flex md:p-8 sm:p-6 sm:relative sm:border-white border sm:left-1 lg:absolute lg:top-28 lg:right-80 lg:bottom-14 lg:border-2 lg:border-blue-500 rounded-2xl p-6 ml-4' style={{backgroundImage: `url(${backgroundImg})` , backgroundRepeat: 'no-repeat' , backgroundPosition: 'center' , backgroundSize: 'cover', userSelect: 'none'}}>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil veniam cumque, tempore aspernatur alias voluptatem, molestias, perferendis consequatur ipsum mollitia ducimus. Eum sint ut voluptate maxime reiciendis quidem adipisci pariatur a et animi illum modi similique porro odio enim aut, laborum natus. Ipsam, earum expedita!</p>
                <a className='list-none text-white hover:text-white'>
                    <button className='lg:absolute md:absolute md:bottom-3 md:right-6 sm:relative sm:mt-8 p-4 bottom-0 inline-flex justify-end relative -right-28 mt-4'>Explore more</button>
                </a>
            </div>            
        </div>
        </>
  )
}

export default section