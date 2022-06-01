import HeadingSection from "../components/pageSections/HeadingSection"
import HeroSection from "../components/pageSections/HeroSection"
import TabSection from "../components/pageSections/TabSection"
import BoxContent from "../components/pageSections/BoxContent";

function HomePage() {
  const title = "Features";
  const title2 = "Download the extension";
  const text2 = "We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize."
  const text = "Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.";
  return (
    <>
      <HeroSection />
      <HeadingSection title={title} text={text}/>
      <TabSection />
      <HeadingSection title={title2} text={text2}/>
      <BoxContent />
    </>
  )
}

export default HomePage