import tabImageTwo from "../../assets/images/illustration-features-tab-2.svg"
import { Link } from "react-router-dom"

function PanelTwo() {
  return (
    <div className="flex flex-col py-5 md:flex-row md:space-x-7 panel panel-1">
        <div className="bg-tabs"></div>
        <div className="flex justify-center md:w-1/2">
            <img
                src={tabImageTwo}
                alt=""
                className="relative z-10"
            />
        </div>
    
        <div className="flex flex-col space-y-8 md:w-1/2">
            <h3 className="mt-32 text-3xl font-semibold text-center md:mt-0 md:text-left">
                Intelligent search
            </h3>
            <p className="max-w-md text-center text-grayishBlue md:text-left">
                Our powerful search feature will help you find saved sites in no
                time at all. No need to trawl through all of your bookmarks.
            </p>
            <div className="mx-auto md:mx-0">
            <Link
                to="/"
                className="px-6 py-3 mt-4 font-semibold text-white border-2 border-white rounded-lg md:inline-flex bg-softBlue hover:bg-white hover:text-softBlue hover:border-softBlue hover:border-2"
                >More Info</Link>
            </div>
        </div>
    </div>
  )
}

export default PanelTwo