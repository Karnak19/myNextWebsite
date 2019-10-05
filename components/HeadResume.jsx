import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

const HeadResume = () => {
  return (
    <>
      <h2 className="heading mb-3">Online Resume</h2>
      <a href="/static/resume.pdf" className="btn btn-primary" target="_blank">
        <FontAwesomeIcon icon={faFilePdf} /> Download PDF
      </a>
    </>
  );
};

export default HeadResume;
