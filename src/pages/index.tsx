import Main from "components/Main";
import SectionAboutMe from "components/SectionAboutMe";
import SectionEducation from "components/SectionEducation";
import SectionExperience from "components/SectionExperience";
import SectionTech from "components/SectionTech";

export default function Home() {
  return (
    <>
      <Main />
      <SectionExperience />
      <SectionEducation />
      <SectionAboutMe />
      <SectionTech />
    </>
  )
}
