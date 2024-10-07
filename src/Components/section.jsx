import React from 'react'
import backgroundImg from '../assets/z13.jpg'
function section() {
  return (
        <>

            <div
             className='container lg:flex lg:justify-center lg:items-center lg:m-16 lg:relative lg:top-6'
            >
            <div className='m-mymargin top-12 left-3 relative p-6 mt-20 mr-2 sm:-right-6 sm:top-14 sm:mr-3 sm:ml-2 sm:border-white sm:border-2 md:right-16 md:ml-0 md:m-8 md:border-yellow-400 lg:h-96 lg:p-10 lg:relative lg:-left-16 lg:top-10 lg:w-contentWidth'
            style={{backgroundImage: `url(${backgroundImg})` , backgroundRepeat: 'no-repeat' , backgroundPosition: 'center' , backgroundSize: 'cover', userSelect: 'none',width: '95vw' ,margin: '0 calc(-50vw + 50%)'}}>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil veniam cumque, tempore aspernatur alias voluptatem, molestias, perferendis consequatur ipsum mollitia ducimus. Eum sint ut voluptate maxime reiciendis quidem adipisci pariatur a et animi illum modi similique porro odio enim aut, laborum natus. Ipsam, earum expedita!</p>
                <a className=''>
                    <button className='text-white my-6 lg:flex lg:justify-end lg:absolute bottom-0 right-5'>Explore more</button>
                </a>
            </div>            
            </div>
        </>

  )
}

export default section

