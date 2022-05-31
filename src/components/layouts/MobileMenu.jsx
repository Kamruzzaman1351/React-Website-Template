import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';

function MobileMenu({showMenu}) {
  return (
    <div onClick={showMenu}
        id="menu"
        className="fixed inset-0 z-20 flex-col items-center self-end w-full h-full m-h-screen px-6 py-1 pt-24 pb-4 tracking-widest text-white uppercase divide-y divide-gray-500 opacity-90 bg-veryDarkBlue"
      >
        <div onClick={showMenu} className="w-full py-3 text-center">
            <Link to="/" className='block hover:text-softRed'>Home</Link>
        </div>
        <div onClick={showMenu} className="w-full py-3 text-center">
            <Link to="/faq" className='block hover:text-softRed'>FAQ</Link>
        </div>
        <div onClick={showMenu} className="w-full py-3 text-center">
            <Link to="/contact" className='block hover:text-softRed' >Contact</Link>
        </div>
        <div onClick={showMenu} className="w-full py-3 text-center">
            <Link to="/login" className='block hover:text-softRed'>
                Login
            </Link>          
        </div>
      </div>
  )
}

MobileMenu.propTypes = {
    showMenu: PropTypes.func.isRequired
}

export default MobileMenu
