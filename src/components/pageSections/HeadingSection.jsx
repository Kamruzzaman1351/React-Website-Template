import PropsType from "prop-types"
function HeadingSection({title, text}) {
  return (
    <div className="container mx-auto mt-16 px-6 pb-6 mb-8">
        <h2 className="mb-6 text-4xl font-semibold text-center">{title}</h2>
        <p className="max-w-md mx-auto text-center text-grayishBlue">
            {text}
        </p>
    </div>
  )
}
HeadingSection.defaultProps = {
    title: "Title Goes Here",
    text: "Paragraph text goes here"
}
HeadingSection.propsTypes = {
    title: PropsType.string,
    text: PropsType.string,
}

export default HeadingSection