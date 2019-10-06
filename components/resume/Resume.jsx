import ResumeHeader from "./Header";
import ResumeIntro from "./Intro";
import ResumeBody from "./Body";
import ResumeMain from "./Main";
import ResumeAside from "./Aside";

const Resume = () => {
  return (
    <article className="resume-wrapper mx-auto theme-bg-light p-5 mb-5 my-5 shadow-lg">
      <ResumeHeader />
      <hr />
      <ResumeIntro />
      <hr />
      <ResumeBody>
        <ResumeMain />
        <ResumeAside />
      </ResumeBody>
      <hr />
    </article>
  );
};

export default Resume;
