import React from 'react'
import App from '../App'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/images.png'


function header() {
    const linkOfButton = useNavigate();

    const handleClick = () => {
      window.open('https://www.google.com','_blank')
    }
  return (
  <>
    <div className='container'>
    <nav className='w-full flex bg-customColorofHeader' id='nav'>
        <ul className='flex m-3'>
            <li className='ml-3'>
                <button onClick={handleClick}>Home</button>
            </li>
            <li className='ml-3'><button>Contacts</button></li>
            <li className='ml-3'><button>Blog</button></li>
            <li className='ml-3'><button>Services</button></li>
        </ul>
    </nav>
  </div>
</>
  )
}

export default header;
