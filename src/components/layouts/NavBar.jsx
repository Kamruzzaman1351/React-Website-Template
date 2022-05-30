import {Link} from 'react-router-dom'
import logo from "../assets/images/logo-bookmark.svg"

function NavBar() {
  return (
    <nav className="container relative mx-auto p-6">
      {/* Flex Container For Nav Items */}
      <div className="flex items-center justify-between space-x-20 my-6">
        {/* Logo */}
        <Link to="/" className="z-30">
          <img src={logo} alt="" id="logo" />
        </Link>

        {/* Menu Items */}
        <div className="hidden items-center space-x-10 uppercase text-grayishBlue md:flex">
          <Link to="/" className='tracking-widest hover:text-softRed'>Home</Link>
          <Link to="/about" className='tracking-widest hover:text-softRed'>About</Link>
          <Link to="/faq" className='tracking-widest hover:text-softRed'>FAQ</Link>
          <Link to="/contact" className='tracking-widest hover:text-softRed' >Contact</Link>
          <Link to="/login" 
            className='px-8 py-2 text-white bg-softRed border-2 border-softRed rounded-lg shadow-md hover:text-softRed hover:bg-white'>
              Login
          </Link>
        </div>
        {/* @Todo Hamburger Button  */}       
        
      </div>
      {/* @Todo Mobile Menu */}
    </nav>
  )
}

export default NavBar