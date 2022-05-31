import { useState } from "react"
import PanelOne from "./tabPanel/PanelOne"
import PanelTwo from "./tabPanel/PanelTwo"
import PanelThree from "./tabPanel/PanelThree"
function TabSection() {
    const [tabOne, setTabOne] = useState(true)
    const [tabTwo, setTabTwo] = useState(false)
    const [tabThree, setTabThree] = useState(false)
  return (
    <section id="tabs">
        <div className="container relative mx-auto my-16 mb-32 mt-12 px-6">
            
            
            <div className="flex flex-col justify-center max-w-xl mx-auto mb-6 md:space-x-10 md:flex-row">            
                <div
                    onClick={() => {setTabOne(true);setTabTwo(false); setTabThree(false)}}
                    className="flex justify-center text-center cursor-pointer text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 tab"
                    >
                    <div className={`py-5 ${tabOne && "border-b-4 border-softRed"}`}>
                        Simple Bookmarking
                    </div>
                </div>            
                <div
                    onClick={() => {setTabOne(false);setTabTwo(true); setTabThree(false)}}
                    className="flex justify-center text-center cursor-pointer text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 tab"
                    >
                    <div className={`py-5 ${tabTwo && "border-b-4 border-softRed"}`} >Speedy Searching</div>
                </div>            
                <div
                    onClick={() => {setTabOne(false);setTabTwo(false); setTabThree(true)}}
                    className="flex justify-center text-center cursor-pointer text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 tab"
                    >
                    <div className={`py-5 ${tabThree && "border-b-4 border-softRed"}`} >Easy Sharing</div>
                </div>
            </div>
            <div id="panels" className="container mx-auto mt-20">
                {tabOne && <PanelOne />}
                {tabTwo && <PanelTwo />}
                {tabThree && <PanelThree />}
            </div>
        </div>

    </section>
  )
}

export default TabSection