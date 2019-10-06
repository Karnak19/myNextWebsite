import ResumeHeader from "./Header";
import ResumeIntro from "./Intro";

const Resume = () => {
  return (
    <article className="resume-wrapper mx-auto theme-bg-light p-5 mb-5 my-5 shadow-lg">
      <ResumeHeader />
      <hr />
      <ResumeIntro />
      <hr />
    </article>
  );
};

export default Resume;
