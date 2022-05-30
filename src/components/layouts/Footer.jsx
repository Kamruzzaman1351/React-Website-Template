import {Link} from 'react-router-dom'
import {FaGithub, FaTwitter} from "react-icons/fa"
import footerLogo from "../assets/images/logo-bookmark-footer.svg"
function Footer() {
  return (
    <footer className='py-10 bg-veryDarkBlue'>
        <div className='container flex flex-col items-center justify-between mx-auto space-y-16 px-6 md:flex-row md:space-y-0'>
            <div className='flex flex-col items-center justify-between space-y-8 text-lg font-light md:flex-row md:space-y-0 md:space-x-14 text-grayishBlue'>
                <img src={footerLogo} alt="" className="mb-1" />
                <Link to="/about" className="uppercase hover:text-softRed">About</Link>
                <Link to="/faq" className="uppercase hover:text-softRed">FAQs</Link>
                <Link to="/contact" className="uppercase hover:text-softRed">Contact</Link>
            </div>
            <div className='flex space-x-10'>
                <a href="https://github.com/Kamruzzaman1351/" target="_blank" rel='noreferrer'>
                    <FaGithub className='inline pr-2 text-3xl text-grayishBlue hover:text-white' />
                </a>
                <a href="https://github.com/Kamruzzaman1351/" target="_blank" rel='noreferrer'>
                    <FaTwitter className='inline pr-2 text-3xl text-grayishBlue hover:text-white'/>
                </a>
            </div>
        </div>
    </footer>
  )
}

export default Footer