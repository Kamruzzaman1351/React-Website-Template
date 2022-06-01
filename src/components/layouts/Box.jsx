import boxImage from "../assets/images/logo-chrome.svg"
import { Link } from "react-router-dom"
import background from "../assets/images/bg-dots.svg"
function Box() {
  return (
    <div className="flex flex-col w-full py-6 space-y-4 text-center rounded-lg shadow-lg md:w-1/3">
          <div className="flex justify-center">
            <img src={boxImage} alt="" />
          </div>
          <h5 className="pt-6 text-xl font-bold">Add to Chrome</h5>
          <p className="text-gray-400">Minimum Version 62</p>
          <div 
            style={{ backgroundImage: `url(${background})` }}
            className="bg-repeat-x px-6 pt-6 capitalize">
            <Link to="/"
                className="block w-full py-3 text-white duration-200 border-2 rounded-lg bg-softBlue hover:text-softBlue hover:bg-white border-softBlue">
                Add Install Extension</Link>
          </div>
        </div>
  )
}

export default Box