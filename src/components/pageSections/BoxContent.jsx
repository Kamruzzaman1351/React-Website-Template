import Box from "../layouts/Box"

function BoxContent() {
    let output = [];
    for(let i = 0; i<3; i++) {
        output.push(<Box key={i}/>)
    }
        
  return (
    <section id="download-boxes" className="py-20">
        <div className='relative flex flex-col items-center max-w-5xl mx-auto space-y-10 px-10 md:px-6 md:space-y-0 md:space-x-7 md:flex-row'>
            {output}
        </div>
    </section>
  )
}

export default BoxContent