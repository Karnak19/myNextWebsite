const Intro = () => {
  return (
    <div className="resume-intro py-3">
      <div className="media flex-column flex-md-row align-items-center">
        <img
          className="resume-profile-image mb-3 mb-md-0 mr-md-5 ml-md-0 rounded-circle mx-auto"
          src="/static/portrait.webp"
        />
        <div className="media-body text-left">
          <p className="mb-0">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. A molestias vel unde
            asperiores tenetur, voluptas itaque! Deserunt distinctio, earum sunt doloribus itaque
            sint blanditiis excepturi fugit, porro asperiores molestiae sapiente labore assumenda
            molestias nam facere ratione exercitationem dignissimos! Sint, eius.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
